import { COLUMN_DEFS } from "../../constants/columns";
import SortableColumnHeader from "./SortableColumnHeader";

export default function TableHeaderRow({
  visibleCols,
  allSelected,
  onToggleSelectAll,
  sort,
  onToggleSort,
}) {
  return (
    <thead
      className="
        sticky
        top-0
        z-20
        backdrop-blur-xl
        bg-white/95
        dark:bg-white dark:bg-[#12162C]/95
      "
    >
      <tr
        className="
          border-b
          border-slate-200
          dark:border-slate-200 dark:border-white/10
          bg-gradient-to-r
          from-slate-50
          via-white
          to-slate-50
          dark:from-[#171B34]
          dark:via-[#15192E]
          dark:to-[#171B34]
        "
      >
        <th
          className="
            px-4
            py-4
            text-left
            text-[11px]
            font-bold
            uppercase
            tracking-wider
            text-slate-500
            dark:text-slate-400
            whitespace-nowrap
            "
        >
          <input
            type="checkbox"
            checked={allSelected}
            onChange={onToggleSelectAll}
            className=" 
              w-4
              h-4
              rounded
              accent-violet-600
              cursor-pointer
              "
          />
        </th>
        {COLUMN_DEFS.filter((c) => visibleCols[c.key]).map((c) => (
          <th
            key={c.key}
            className="px-5 py-4 text-left font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap"
          >
            <SortableColumnHeader
              column={c}
              sort={sort}
              onToggleSort={onToggleSort}
            />
          </th>
        ))}
        <th
          className="
            px-5
            py-4
            text-right
            text-xs
            uppercase
            tracking-wider
            font-bold
            text-slate-500
            dark:text-[var(--sidebar-text)]
            "
        >
          Ações
        </th>
      </tr>
    </thead>
  );
}
