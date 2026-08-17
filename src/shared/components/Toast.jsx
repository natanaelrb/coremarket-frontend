import { Check } from "lucide-react";

/**
 * Renderiza o toast ativo (ou nada, se `toast` for null).
 * O estado/ciclo de vida do toast é controlado pelo hook `useToast`.
 */
export default function Toast({ toast }) {
  if (!toast) return null;

  const isError = toast.type === "error";

  return (
    <div className="fixed bottom-6 right-6 z-50 cm-toast" key={toast.key}>
      <div
        className={`flex items-center gap-2.5 rounded-xl px-4 py-3 shadow-2xl border text-[13px] font-medium ${
          isError
            ? "bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/30 text-red-600 dark:text-red-400"
            : "bg-white dark:bg-[#161B36] border-slate-200 dark:border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200"
        }`}
      >
        <div
          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
            isError ? "bg-red-500" : "bg-emerald-500"
          }`}
        >
          <Check
            size={12}
            className="text-[var(--sidebar-text)]"
            strokeWidth={3}
          />
        </div>
        {toast.message}
      </div>
    </div>
  );
}
