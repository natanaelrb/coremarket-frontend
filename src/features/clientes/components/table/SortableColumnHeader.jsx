import { ArrowUp, ArrowDown, ArrowUpDown } from "lucide-react";

export default function SortableColumnHeader({ column, sort, onToggleSort }) {
  if (!column.sortable) {
    return (
      <span className="font-bold text-slate-700 dark:text-[var(--sidebar-text)]">
        {column.label}
      </span>
    );
  }

  const isActive = sort.key === column.key;

  return (
    <button
      type="button"
      onClick={() => onToggleSort(column.key)}
      className="
        flex
        items-center
        gap-2
        font-bold
        text-slate-700
        dark:text-[var(--sidebar-text)]
        hover:text-violet-600
        dark:hover:text-violet-400
        transition-all
        duration-200
      "
    >
      <span>{column.label}</span>

      {isActive ? (
        sort.dir === "asc" ? (
          <ArrowUp size={14} strokeWidth={2.5} />
        ) : (
          <ArrowDown size={14} strokeWidth={2.5} />
        )
      ) : (
        <ArrowUpDown size={14} strokeWidth={2} className="opacity-40" />
      )}
    </button>
  );
}
