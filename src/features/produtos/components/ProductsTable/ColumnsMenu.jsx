// Menu "Colunas": permite ligar/desligar a visibilidade de colunas opcionais da tabela.
import { Columns3, ChevronDown, Check } from 'lucide-react';
import Dropdown from "../../../../shared/components/Dropdown";
import { PRODUCT_TABLE_COLUMNS } from '../../constants/tableColumns';

export function ColumnsMenu({ isVisible, toggleColumn }) {
  const toggleable = PRODUCT_TABLE_COLUMNS.filter((c) => c.toggleable);

  return (
    <Dropdown
      trigger={
        <button className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5">
          <Columns3 size={14} />
          Colunas
          <ChevronDown size={13} />
        </button>
      }
    >
      {toggleable.map((col) => (
        <button
          key={col.key}
          onClick={() => toggleColumn(col.key)}
          className="flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-left text-sm text-gray-700 transition-colors hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-white/5"
        >
          {col.label}
          {isVisible(col.key) && <Check size={14} className="text-violet-600 dark:text-violet-400" />}
        </button>
      ))}
    </Dropdown>
  );
}
