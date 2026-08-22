import { useRef, useState } from "react";
import { MoreVertical, Eye, Pencil, Printer, XCircle } from "lucide-react";
import { useOnClickOutside } from "../../../../shared/hooks/useOnClickOutside";

const ACTIONS = [
  { id: "ver", label: "Ver detalhes", icon: Eye },
  { id: "editar", label: "Editar", icon: Pencil },
  { id: "imprimir", label: "Imprimir", icon: Printer },
  { id: "cancelar", label: "Cancelar compra", icon: XCircle, danger: true },
];

export function RowActionsMenu({ onAction }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpen(false));

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-7 h-7 flex items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
      >
        <MoreVertical className="w-4 h-4" />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-1 z-20 w-44 bg-white dark:bg-[#1B2044] border border-slate-200 dark:border-white/10 rounded-xl shadow-lg py-1 animate-fade-in-scale origin-top-right">
          {ACTIONS.map((action) => (
            <button
              key={action.id}
              onClick={() => {
                onAction(action.id);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-3 py-2 text-xs text-left transition-colors ${
                action.danger
                  ? "text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5"
              }`}
            >
              <action.icon className="w-3.5 h-3.5" />
              {action.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
