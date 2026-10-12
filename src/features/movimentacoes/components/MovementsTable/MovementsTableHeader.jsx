import { ChevronDown } from "lucide-react";
import { TABLE_COLUMNS } from "../../constants/tableColumns";

export default function MovementsTableHeader() {
  return (
    <thead
      className="
        bg-slate-50/80
        dark:bg-[#091B31]
      "
    >
      <tr
        className="
          border-b
          border-slate-200
          dark:border-[#173452]
        "
      >
        {TABLE_COLUMNS.map((column) => {
          const isSortable = column.sortable;

          return (
            <th
              key={column.key}
              scope="col"
              className={`
                h-11
                px-4
                text-left
                align-middle
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.06em]
                text-slate-500
                dark:text-slate-400
                ${column.width || ""}
              `}
            >
              {isSortable ? (
                <button
                  type="button"
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-md
                    py-1
                    pr-1
                    transition-colors
                    hover:text-slate-800
                    dark:hover:text-slate-200
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-emerald-500/30
                  "
                >
                  <span>{column.label}</span>

                  <ChevronDown
                    className="
                      h-3.5
                      w-3.5
                      text-slate-400
                      transition-colors
                      dark:text-slate-500
                    "
                    strokeWidth={2}
                  />
                </button>
              ) : (
                <span>{column.label}</span>
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
