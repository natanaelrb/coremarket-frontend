
/**
 * Cabeçalho da tabela:
 * checkbox "selecionar tudo" + colunas ordenáveis.
 */

import {
  ArrowUp,
  ArrowDown,
  ChevronsUpDown,
} from "lucide-react";

import { Checkbox } from "../../../../shared/components/ui/Checkbox";
import { PRODUCT_TABLE_COLUMNS } from "../../constants/tableColumns";

function SortIcon({ column, sortConfig }) {
  const isActive = sortConfig?.key === column.key;

  if (!isActive) {
    return (
      <ChevronsUpDown
        size={13}
        strokeWidth={2}
        className="
          text-slate-300
          transition-colors duration-200
          group-hover/sort:text-slate-500
          dark:text-slate-600
          dark:group-hover/sort:text-slate-300
        "
        aria-hidden="true"
      />
    );
  }

  const isAscending = sortConfig.direction === "asc";

  return isAscending ? (
    <ArrowUp
      size={13}
      strokeWidth={2.5}
      className="text-green-600 dark:text-green-400"
      aria-hidden="true"
    />
  ) : (
    <ArrowDown
      size={13}
      strokeWidth={2.5}
      className="text-green-600 dark:text-green-400"
      aria-hidden="true"
    />
  );
}

function getAriaSort(column, sortConfig) {
  if (!column.sortable || sortConfig?.key !== column.key) {
    return undefined;
  }

  return sortConfig.direction === "asc"
    ? "ascending"
    : "descending";
}

export function ProductsTableHeader({
  isVisible,
  sortConfig = {},
  requestSort,
  allSelected = false,
  someSelected = false,
  onToggleAll,
}) {
  const visibleColumns = PRODUCT_TABLE_COLUMNS.filter(
    (column) =>
      column.key !== "acoes" &&
      isVisible(column.key),
  );

  return (
    <thead
      className="
        sticky top-0 z-10
        border-b border-slate-200/80
        bg-slate-50/95
        backdrop-blur-sm
        dark:border-white/[0.08]
        dark:bg-[#151c2b]/95
      "
    >
      <tr>
        {/* Seleção */}
        <th
          scope="col"
          className="
            w-12 px-4 py-3.5
            text-left align-middle
          "
        >
          <Checkbox
            checked={allSelected}
            indeterminate={someSelected}
            onChange={onToggleAll}
            ariaLabel="Selecionar todos os produtos"
          />
        </th>

        {/* Colunas */}
        {visibleColumns.map((column) => (
          <th
            key={column.key}
            scope="col"
            aria-sort={getAriaSort(column, sortConfig)}
            className={`
              whitespace-nowrap
              px-3 py-3.5
              text-left align-middle
              text-[10px]
              font-bold
              uppercase
              tracking-[0.06em]
              text-slate-500
              dark:text-slate-400
              ${column.width ?? ""}
            `}
          >
            {column.sortable ? (
              <button
                type="button"
                onClick={() => requestSort?.(column.key)}
                aria-label={`Ordenar por ${column.label}`}
                className="
                  group/sort
                  inline-flex
                  items-center
                  gap-1.5
                  rounded-md
                  py-1
                  text-left
                  outline-none
                  transition-colors duration-200
                  hover:text-slate-800
                  focus-visible:ring-2
                  focus-visible:ring-emerald-500/40
                  dark:hover:text-white
                "
              >
                <span>{column.label}</span>

                <SortIcon
                  column={column}
                  sortConfig={sortConfig}
                />
              </button>
            ) : (
              column.label
            )}
          </th>
        ))}

        {/* Ações */}
        <th
          scope="col"
          aria-label="Ações"
          className="
            w-16 px-3 py-3.5
            text-right align-middle
          "
        />
      </tr>
    </thead>
  );
}

