
/**
 * Menu "Ordenar":
 * atalhos para ordenar rapidamente por colunas comuns.
 */

import {
  ArrowDownAZ,
  ArrowUpDown,
  ChevronDown,
  Package,
  CalendarClock,
  CircleDollarSign,
} from "lucide-react";

import Dropdown, {
  DropdownItem,
} from "../../../../shared/components/ui/Dropdown";

const SORT_SHORTCUTS = [
  {
    key: "nome",
    label: "Nome (A-Z)",
    icon: ArrowDownAZ,
  },
  {
    key: "precoVenda",
    label: "Preço (menor-maior)",
    icon: CircleDollarSign,
  },
  {
    key: "estoque",
    label: "Estoque (menor-maior)",
    icon: Package,
  },
  {
    key: "validade",
    label: "Validade (mais próxima)",
    icon: CalendarClock,
  },
];

export function SortMenu({ requestSort }) {
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
          <ArrowUpDown
            size={14}
            strokeWidth={2}
            aria-hidden="true"
          />

          <span>Ordenar</span>

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
        {SORT_SHORTCUTS.map((shortcut) => {
          const Icon = shortcut.icon;

          return (
            <DropdownItem
              key={shortcut.key}
              icon={Icon}
              onClick={() => requestSort?.(shortcut.key)}
            >
              {shortcut.label}
            </DropdownItem>
          );
        })}
      </div>
    </Dropdown>
  );
}

