// Cabeçalho da tabela: checkbox "selecionar tudo" + colunas ordenáveis.
import { ArrowUp, ArrowDown, ChevronsUpDown } from 'lucide-react';
import { Checkbox } from "../../../../shared/components/Checkbox";
import { PRODUCT_TABLE_COLUMNS } from '../../constants/tableColumns';

function SortIcon({ column, sortConfig }) {
  if (sortConfig.key !== column.key) return <ChevronsUpDown size={12} className="text-gray-300 dark:text-gray-600" />;
  return sortConfig.direction === 'asc' ? <ArrowUp size={12} /> : <ArrowDown size={12} />;
}

export function ProductsTableHeader({ isVisible, sortConfig, requestSort, allSelected, someSelected, onToggleAll }) {
  return (
    <thead>
      <tr className="border-b border-gray-100 dark:border-gray-800">
        <th className="w-10 px-4 py-3">
          <Checkbox checked={allSelected} indeterminate={someSelected} onChange={onToggleAll} ariaLabel="Selecionar todos" />
        </th>
        {PRODUCT_TABLE_COLUMNS.filter((c) => c.key !== 'acoes' && isVisible(c.key)).map((col) => (
          <th key={col.key} className={`px-2 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-400 dark:text-gray-500 ${col.width ?? ''}`}>
            {col.sortable ? (
              <button
                onClick={() => requestSort(col.key)}
                className="flex items-center gap-1 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
              >
                {col.label}
                <SortIcon column={col} sortConfig={sortConfig} />
              </button>
            ) : (
              col.label
            )}
          </th>
        ))}
        <th className="w-16 px-2 py-3" />
      </tr>
    </thead>
  );
}
