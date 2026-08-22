import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";

export function ComprasTableHeader({ columns, sortConfig, toggleSort, allSelected, onToggleAll }) {
  return (
    <thead>
      <tr className="border-b border-slate-100 dark:border-white/5 text-left">
        <th className="px-5 py-3 w-10">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={onToggleAll}
            className="w-4 h-4 rounded border-slate-300 dark:border-white/20 text-violet-600 focus:ring-violet-500/40 cursor-pointer"
          />
        </th>
        {columns.map((col) => (
          <th key={col.id} className="px-3 py-3 font-medium text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">
            {col.sortable ? (
              <button
                onClick={() => toggleSort(col.id)}
                className="inline-flex items-center gap-1 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
              >
                {col.label}
                {sortConfig.key === col.id ? (
                  sortConfig.direction === "asc" ? (
                    <ArrowUp className="w-3 h-3" />
                  ) : (
                    <ArrowDown className="w-3 h-3" />
                  )
                ) : (
                  <ArrowUpDown className="w-3 h-3 opacity-30" />
                )}
              </button>
            ) : (
              col.label
            )}
          </th>
        ))}
        <th className="px-3 py-3 w-10" />
      </tr>
    </thead>
  );
}
