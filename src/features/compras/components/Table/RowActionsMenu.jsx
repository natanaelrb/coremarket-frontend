import { useRef, useState } from "react";
import {
  MoreVertical,
  Eye,
  Pencil,
  Printer,
  XCircle,
} from "lucide-react";

import { useOnClickOutside } from "../../../../shared/hooks/useOnClickOutside";

const ACTIONS = [
  { id: "ver", label: "Ver detalhes", icon: Eye },
  { id: "editar", label: "Editar", icon: Pencil },
  { id: "imprimir", label: "Imprimir", icon: Printer },
  {
    id: "cancelar",
    label: "Cancelar compra",
    icon: XCircle,
    danger: true,
  },
];

export function RowActionsMenu({ onAction }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div className="relative flex justify-center" ref={ref}>
      <button
        type="button"
        aria-label="Abrir ações da compra"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((visible) => !visible)}
        className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/50 motion-reduce:transition-none ${
          open
            ? "border-green-200 bg-green-50 text-green-700 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400"
            : "border-transparent text-slate-400 hover:border-slate-200 hover:bg-slate-100 hover:text-slate-700 dark:hover:border-white/10 dark:hover:bg-white/[0.06] dark:hover:text-slate-200"
        }`}
      >
        <MoreVertical className="h-4 w-4" aria-hidden="true" />
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-30 mt-2 w-48 origin-top-right rounded-xl border border-slate-200/80 bg-white p-1.5 shadow-xl shadow-slate-900/10 animate-fade-in-scale dark:border-white/10 dark:bg-[#151b28] dark:shadow-black/25"
        >
          <p className="px-2.5 pb-1.5 pt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Ações da compra
          </p>

          {ACTIONS.map((action) => {
            const Icon = action.icon;

            return (
              <button
                key={action.id}
                type="button"
                role="menuitem"
                onClick={() => {
                  setOpen(false);
                  onAction(action.id);
                }}
                className={`flex min-h-9 w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-xs font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/40 motion-reduce:transition-none ${
                  action.danger
                    ? "text-red-600 hover:bg-red-50 focus-visible:bg-red-50 dark:text-red-400 dark:hover:bg-red-500/10 dark:focus-visible:bg-red-500/10"
                    : "text-slate-600 hover:bg-green-50 hover:text-green-800 dark:text-slate-300 dark:hover:bg-green-500/10 dark:hover:text-green-300"
                }`}
              >
                <Icon
                  className={`h-4 w-4 shrink-0 ${
                    action.danger
                      ? "text-red-500 dark:text-red-400"
                      : "text-slate-400 group-hover:text-green-600"
                  }`}
                  aria-hidden="true"
                />

                <span>{action.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
