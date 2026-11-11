import { useEffect } from "react";
import {
  CheckCircle2,
  CircleAlert,
  Info,
  TriangleAlert,
  X,
} from "lucide-react";
import { cn } from "../../utils/cn";

const VARIANTS = {
  success: {
    icon: CheckCircle2,
    bar: "bg-emerald-500",
    text: "text-emerald-500",
  },
  error: { icon: CircleAlert, bar: "bg-red-500", text: "text-red-500" },
  info: { icon: Info, bar: "bg-brand", text: "text-brand" },
  warning: { icon: TriangleAlert, bar: "bg-amber-500", text: "text-amber-500" },
};

function Toast({ toast, onDismiss }) {
  const v = VARIANTS[toast.variant] ?? VARIANTS.info;
  const Icon = v.icon;
  useEffect(() => {
    const t = setTimeout(() => onDismiss(toast.id), toast.duration);
    return () => clearTimeout(t);
  }, [toast, onDismiss]);
  return (
    <div
      role="status"
      className="pointer-events-auto relative w-80 max-w-[calc(100vw-2rem)] overflow-hidden rounded-xl border border-line bg-surface p-3 pl-4 shadow-xl shadow-slate-900/15 animate-toast-in"
    >
      <span className={cn("absolute inset-y-0 left-0 w-1", v.bar)} />
      <div className="flex items-start gap-2.5">
        <Icon className={cn("mt-0.5 size-4 shrink-0", v.text)} />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-bold text-ink">{toast.title}</p>
          {toast.description && (
            <p className="mt-0.5 text-[11px] leading-snug text-ink-2">
              {toast.description}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={() => onDismiss(toast.id)}
          aria-label="Fechar"
          className="text-ink-3 transition hover:text-ink"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}

export function ToastViewport({ toasts, onDismiss }) {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[200] flex flex-col gap-2">
      {toasts.map((t) => (
        <Toast key={t.id} toast={t} onDismiss={onDismiss} />
      ))}
    </div>
  );
}
