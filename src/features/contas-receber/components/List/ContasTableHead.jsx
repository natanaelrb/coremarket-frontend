import { ArrowDown, ArrowUp, ChevronsUpDown } from "lucide-react";
import { TABLE_COLUMNS } from "../../constants";
import { Checkbox } from "../../../../shared/components/ui/Checkbox";
import { cn } from "../../../../shared/utils/classNames";

const ALIGN = {
  right: "text-right justify-end",
  center: "text-center justify-center",
};

export function ContasTableHead({
  sort,
  onSort,
  allSelected,
  someSelected,
  onToggleAll,
}) {
  return (
    <thead className="bg-surface-2 text-[10.5px] text-ink-2">
      <tr>
        <th className="w-9 px-3 py-2.5">
          <Checkbox
            checked={allSelected}
            indeterminate={someSelected && !allSelected}
            onChange={onToggleAll}
            aria-label="Selecionar todas da página"
          />
        </th>
        {TABLE_COLUMNS.map((c) => {
          const active = sort.key === c.sortKey;
          const Icon = !active
            ? ChevronsUpDown
            : sort.dir === "asc"
              ? ArrowUp
              : ArrowDown;
          return (
            <th
              key={c.key}
              aria-sort={
                active
                  ? sort.dir === "asc"
                    ? "ascending"
                    : "descending"
                  : "none"
              }
              className="whitespace-nowrap px-2.5 py-2.5 font-semibold"
            >
              <button
                type="button"
                onClick={() => onSort(c.sortKey)}
                className={cn(
                  "group inline-flex w-full items-center gap-1 transition hover:text-ink",
                  ALIGN[c.align],
                  active && "text-brand",
                )}
              >
                {c.label}
                <Icon
                  className={cn(
                    "size-3 transition",
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-50",
                  )}
                />
              </button>
            </th>
          );
        })}
        <th className="w-12 px-2.5 py-2.5 text-center font-semibold">Ações</th>
      </tr>
    </thead>
  );
}
