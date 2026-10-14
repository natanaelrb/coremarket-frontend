import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";

export function ComprasTableHeader({
  columns,
  sortConfig,
  toggleSort,
  allSelected,
  onToggleAll,
}) {
  return (
    <thead className="bg-slate-50/80 dark:bg-white/[0.03]">
      <tr className="border-b border-slate-200/80 dark:border-white/10">
        {/* Selecionar todas */}
        <th className="w-12 px-5 py-4">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={onToggleAll}
            aria-label="Selecionar todas as compras desta página"
            className="h-4 w-4 cursor-pointer rounded border-slate-300 text-green-600 accent-green-600 transition-colors focus:ring-2 focus:ring-green-500/30 focus:ring-offset-1 dark:border-white/20 dark:bg-white/5"
          />
        </th>

        {/* Colunas */}
        {columns.map((col) => {
          const isSorted = sortConfig.key === col.id;

          return (
            <th
              key={col.id}
              scope="col"
              className="whitespace-nowrap px-4 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400"
              aria-sort={
                isSorted
                  ? sortConfig.direction === "asc"
                    ? "ascending"
                    : "descending"
                  : col.sortable
                    ? "none"
                    : undefined
              }
            >
              {col.sortable ? (
                <button
                  type="button"
                  onClick={() => toggleSort(col.id)}
                  className={`group inline-flex items-center gap-2 rounded-md text-left outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-green-500/50 ${
                    isSorted
                      ? "text-green-700 dark:text-green-400"
                      : "hover:text-green-700 dark:hover:text-green-400"
                  }`}
                >
                  <span>{col.label}</span>

                  {isSorted ? (
                    sortConfig.direction === "asc" ? (
                      <ArrowUp
                        className="h-3.5 w-3.5 shrink-0 text-green-600 dark:text-green-400"
                        aria-label="Ordem crescente"
                      />
                    ) : (
                      <ArrowDown
                        className="h-3.5 w-3.5 shrink-0 text-green-600 dark:text-green-400"
                        aria-label="Ordem decrescente"
                      />
                    )
                  ) : (
                    <ArrowUpDown className="h-3.5 w-3.5 shrink-0 opacity-35 transition-opacity group-hover:opacity-100" />
                  )}
                </button>
              ) : (
                col.label
              )}
            </th>
          );
        })}

        {/* Ações */}
        <th scope="col" className="w-12 px-4 py-4">
          <span className="sr-only">Ações</span>
        </th>
      </tr>
    </thead>
  );
}
