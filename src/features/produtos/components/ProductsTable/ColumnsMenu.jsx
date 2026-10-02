
/**
 * Menu "Colunas":
 * permite ligar/desligar a visibilidade de colunas opcionais da tabela.
 */

import {
  Columns3,
  ChevronDown,
  Check,
} from "lucide-react";

import Dropdown from "../../../../shared/components/ui/Dropdown";
import { PRODUCT_TABLE_COLUMNS } from "../../constants/tableColumns";

export function ColumnsMenu({
  isVisible,
  toggleColumn,
}) {
  const toggleableColumns = PRODUCT_TABLE_COLUMNS.filter(
    (column) => column.toggleable,
  );

  return (
    <Dropdown
      align="right"
      trigger={
        <button
          type="button"
          className="
            inline-flex h-9 items-center gap-1.5
            rounded-lg
            border border-slate-200
            bg-white px-3
            text-xs font-semibold
            text-slate-600
            outline-none
            transition-all duration-200
            hover:border-slate-300
            hover:bg-slate-50
            hover:text-slate-800
            focus-visible:border-emerald-400
            focus-visible:ring-4
            focus-visible:ring-emerald-500/10
            dark:border-white/[0.10]
            dark:bg-[#151c2b]
            dark:text-slate-300
            dark:hover:border-white/[0.18]
            dark:hover:bg-white/[0.06]
            dark:hover:text-white
          "
        >
          <Columns3
            size={14}
            strokeWidth={2}
            aria-hidden="true"
          />

          <span>Colunas</span>

          <ChevronDown
            size={13}
            strokeWidth={2}
            className="text-slate-400"
            aria-hidden="true"
          />
        </button>
      }
    >
      <div className="space-y-0.5">
        {toggleableColumns.map((column) => {
          const visible = isVisible(column.key);

          return (
            <button
              key={column.key}
              type="button"
              role="menuitemcheckbox"
              aria-checked={visible}
              aria-label={`${visible ? "Ocultar" : "Mostrar"} coluna ${column.label}`}
              onClick={() => toggleColumn(column.key)}
              className={`
                flex w-full items-center justify-between
                gap-3 rounded-lg px-3 py-2.5
                text-left text-sm
                outline-none
                transition-colors duration-150
                focus-visible:ring-2
                focus-visible:ring-emerald-500/40
                ${
                  visible
                    ? "bg-emerald-50/70 text-emerald-700 dark:bg-emerald-500/[0.08] dark:text-emerald-300"
                    : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-white/[0.06]"
                }
              `}
            >
              <span className="truncate">
                {column.label}
              </span>

              <span
                className={`
                  flex h-5 w-5 shrink-0 items-center justify-center
                  rounded-md border
                  transition-colors duration-150
                  ${
                    visible
                      ? "border-emerald-200 bg-emerald-100 text-emerald-600 dark:border-emerald-400/20 dark:bg-emerald-500/15 dark:text-emerald-300"
                      : "border-slate-200 text-transparent dark:border-white/[0.12]"
                  }
                `}
                aria-hidden="true"
              >
                <Check
                  size={13}
                  strokeWidth={2.5}
                />
              </span>
            </button>
          );
        })}
      </div>
    </Dropdown>
  );
}

