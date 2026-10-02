import {
  ArrowUp,
  ArrowDown,
  ArrowUpDown,
} from "lucide-react";

import { TABLE_COLUMNS } from "../../constants/tableConfig.js";

function SortIcon({
  column,
  sortKey,
  sortDirection,
}) {
  if (!column.sortable) return null;

  if (sortKey !== column.key) {
    return (
      <ArrowUpDown
        size={12}
        strokeWidth={2}
        className="text-slate-300 dark:text-slate-600"
      />
    );
  }

  return sortDirection === "asc" ? (
    <ArrowUp
      size={12}
      strokeWidth={2.2}
      className="text-emerald-600 dark:text-emerald-400"
    />
  ) : (
    <ArrowDown
      size={12}
      strokeWidth={2.2}
      className="text-emerald-600 dark:text-emerald-400"
    />
  );
}

export default function TableHeader({
  allSelected,
  onToggleAll,
  sortKey,
  sortDirection,
  onToggleSort,
}) {
  return (
    <thead>
      <tr className="border-b border-slate-100 dark:border-[#252a4a]">
        {/* Selecionar todos */}
        <th className="w-10 py-3 pl-4">
          <input
            type="checkbox"
            checked={allSelected}
            onChange={onToggleAll}
            aria-label="Selecionar todos os fornecedores"
            className="
              h-4 w-4
              cursor-pointer
              rounded
              border-slate-300
              text-emerald-600
              accent-emerald-600
              focus:ring-emerald-500/30
              dark:border-[#3a4168]
              dark:bg-[#0f1230]
            "
          />
        </th>

        {/* Colunas */}
        {TABLE_COLUMNS.map((col) => (
          <th
            key={col.key}
            onClick={
              col.sortable
                ? () => onToggleSort(col.key)
                : undefined
            }
            className={`
              px-3 py-3
              text-left
              text-[11px]
              font-semibold
              uppercase
              tracking-wide
              text-slate-400
              dark:text-slate-500
              ${
                col.sortable
                  ? "cursor-pointer select-none hover:text-slate-700 dark:hover:text-slate-300"
                  : ""
              }
            `}
          >
            <span className="flex items-center gap-1.5">
              {col.label}

              <SortIcon
                column={col}
                sortKey={sortKey}
                sortDirection={sortDirection}
              />
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
}