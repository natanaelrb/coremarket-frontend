// Barra de ações em massa exibida acima da tabela quando há linhas selecionadas.

import { CheckCheck, ChevronDown } from "lucide-react";

import Dropdown, {
  DropdownItem,
} from "../../../../shared/components/ui/Dropdown";

import { BULK_ACTIONS } from "../../constants/filterOptions";

export function BulkActionsBar({
  selectedCount = 0,
  onRunAction,
}) {
  const count = Math.max(0, Number(selectedCount) || 0);

  if (count === 0) {
    return null;
  }

  return (
    <div
      className="
        flex flex-wrap items-center gap-2
        animate-in fade-in slide-in-from-left-2
        duration-300
        motion-reduce:animate-none
      "
      aria-label="Ações em massa para produtos selecionados"
    >
      {/* Indicador de produtos selecionados */}
      <div
        className="
          group inline-flex h-9 items-center gap-2
          rounded-xl
          border border-emerald-200/80
          bg-emerald-50
          px-3
          text-xs font-semibold text-emerald-700
          shadow-[0_1px_3px_rgba(16,185,129,0.05)]
          transition-all duration-200
          hover:border-emerald-300
          hover:bg-emerald-100/70
          dark:border-emerald-400/20
          dark:bg-emerald-500/[0.10]
          dark:text-emerald-300
          dark:hover:border-emerald-400/30
          dark:hover:bg-emerald-500/[0.15]
        "
      >
        <span
          className="
            flex h-5 w-5 items-center justify-center
            rounded-md
            bg-emerald-500/10
            text-emerald-600
            transition-transform duration-200
            group-hover:scale-110
            dark:bg-emerald-400/10
            dark:text-emerald-300
          "
        >
          <CheckCheck
            size={13}
            strokeWidth={2.2}
            aria-hidden="true"
          />
        </span>

        <span>
          {count} selecionado{count !== 1 ? "s" : ""}
        </span>
      </div>

      {/* Ações disponíveis */}
      <Dropdown
        align="left"
        trigger={
          <button
            type="button"
            className="
              group inline-flex h-9 items-center gap-2
              rounded-xl
              border border-slate-200/90
              bg-white
              px-3
              text-xs font-semibold text-slate-600
              shadow-[0_1px_3px_rgba(15,23,42,0.04)]
              outline-none
              transition-all duration-200
              hover:-translate-y-px
              hover:border-emerald-300
              hover:bg-emerald-50/60
              hover:text-emerald-700
              hover:shadow-[0_4px_12px_rgba(16,185,129,0.08)]
              focus-visible:border-emerald-500
              focus-visible:ring-4
              focus-visible:ring-emerald-500/10
              active:translate-y-0
              dark:border-white/[0.09]
              dark:bg-white/[0.035]
              dark:text-slate-300
              dark:hover:border-emerald-400/30
              dark:hover:bg-emerald-500/[0.08]
              dark:hover:text-emerald-300
              dark:hover:shadow-none
              dark:focus-visible:border-emerald-400
            "
            aria-label="Abrir ações em massa"
          >
            <span>Ações em massa</span>

            <ChevronDown
              size={14}
              strokeWidth={2}
              aria-hidden="true"
              className="
                transition-transform duration-200
                group-data-[state=open]:rotate-180
              "
            />
          </button>
        }
      >
        {BULK_ACTIONS.map((action) => (
          <DropdownItem
            key={action.value}
            danger={action.danger}
            onClick={() => onRunAction?.(action.value)}
          >
            {action.label}
          </DropdownItem>
        ))}
      </Dropdown>
    </div>
  );
}

