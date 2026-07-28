import React from "react";

export default function AdvancedFiltersPanel({
  open,
  advanced,
  onChange,
  onClear,
}) {
  return (
    <div
      className="cm-panel"
      style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 mt-4 border-t border-slate-100 dark:border-white/5">
          <div>
            <p className="text-[12px] text-slate-500 dark:text-slate-400 mb-1.5">
              Valor gasto (mín.)
            </p>
            <input
              type="number"
              placeholder="R$ 0"
              value={advanced.valorMin}
              onChange={(e) => onChange("valorMin", e.target.value)}
              className="w-full rounded-lg border border-slate-200 dark:border-slate-200 dark:border-white/10 bg-white dark:bg-[#0E1226] px-3 py-2 text-[13px] text-slate-700 dark:text-slate-200 outline-none focus:border-violet-400 transition-colors"
            />
          </div>
          <div>
            <p className="text-[12px] text-slate-500 dark:text-slate-400 mb-1.5">
              Valor gasto (máx.)
            </p>
            <input
              type="number"
              placeholder="R$ 999.999"
              value={advanced.valorMax}
              onChange={(e) => onChange("valorMax", e.target.value)}
              className="w-full rounded-lg border border-slate-200 dark:border-slate-200 dark:border-white/10 bg-white dark:bg-[#0E1226] px-3 py-2 text-[13px] text-slate-700 dark:text-slate-200 outline-none focus:border-violet-400 transition-colors"
            />
          </div>
          <div className="col-span-2 flex items-end">
            <button
              type="button"
              onClick={onClear}
              className="text-[13px] text-violet-600 dark:text-violet-400 font-medium hover:underline"
            >
              Limpar filtros avançados
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
