// Menu "Ordenar": atalho para ordenar rapidamente por colunas comuns.
import { ArrowUpDown, ChevronDown } from "lucide-react";
import Dropdown, {
  DropdownItem,
} from "../../../../shared/components/ui/Dropdown";

const SORT_SHORTCUTS = [
  { key: "nome", label: "Nome (A-Z)" },
  { key: "precoVenda", label: "Preço (menor-maior)" },
  { key: "estoque", label: "Estoque (menor-maior)" },
  { key: "validade", label: "Validade (mais próxima)" },
];

export function SortMenu({ requestSort }) {
  return (
    <Dropdown
      trigger={
        <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5">
          <ArrowUpDown size={14} />
          Ordenar
          <ChevronDown size={13} />
        </button>
      }
    >
      {SORT_SHORTCUTS.map((s) => (
        <DropdownItem key={s.key} onClick={() => requestSort(s.key)}>
          {s.label}
        </DropdownItem>
      ))}
    </Dropdown>
  );
}
