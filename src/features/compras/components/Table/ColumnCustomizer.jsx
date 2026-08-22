import { useRef } from "react";
import { RotateCcw } from "lucide-react";
import { useOnClickOutside } from "../../../../shared/hooks/useOnClickOutside";

export function ColumnCustomizer({ columns, toggleColumn, onClose }) {
  const ref = useRef(null);
  useOnClickOutside(ref, onClose);

  return (
    <div
      ref={ref}
      className="absolute right-0 top-full mt-2 z-20 w-56 bg-white dark:bg-[#1B2044] border border-slate-200 dark:border-white/10 rounded-xl shadow-lg p-3 animate-fade-in-scale origin-top-right"
    >
      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 px-1 mb-2">Colunas visíveis</p>
      <div className="space-y-1 max-h-64 overflow-y-auto">
        {columns.map((col) => (
          <label
            key={col.id}
            className={`flex items-center gap-2 px-1 py-1.5 rounded-lg text-xs text-slate-600 dark:text-slate-300 ${
              col.locked ? "opacity-50" : "hover:bg-slate-50 dark:hover:bg-white/5 cursor-pointer"
            }`}
          >
            <input
              type="checkbox"
              checked={col.visible}
              disabled={col.locked}
              onChange={() => toggleColumn(col.id)}
              className="w-3.5 h-3.5 rounded border-slate-300 dark:border-white/20 text-violet-600 focus:ring-violet-500/40"
            />
            {col.label}
          </label>
        ))}
      </div>
    </div>
  );
}
