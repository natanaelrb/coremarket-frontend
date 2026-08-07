// Barra utilitária acima da tabela: ações em massa (quando há seleção) + colunas/ordenar/filtros.
import { SlidersHorizontal } from 'lucide-react';
import { BulkActionsBar } from '../Toolbar/BulkActionsBar';
import { ColumnsMenu } from './ColumnsMenu';
import { SortMenu } from './SortMenu';

export function TableToolbar({
  selectedCount,
  onRunBulkAction,
  isVisible,
  toggleColumn,
  requestSort,
  onToggleMoreFilters,
}) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 px-4 py-3 dark:border-gray-800">
      <div>
        {selectedCount > 0 ? (
          <BulkActionsBar selectedCount={selectedCount} onRunAction={onRunBulkAction} />
        ) : (
          <span className="text-sm text-gray-400 dark:text-gray-500">Nenhum item selecionado</span>
        )}
      </div>

      <div className="flex items-center gap-2">
        <ColumnsMenu isVisible={isVisible} toggleColumn={toggleColumn} />
        <SortMenu requestSort={requestSort} />
        <button
          onClick={onToggleMoreFilters}
          className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5"
        >
          <SlidersHorizontal size={14} />
          Mais filtros
        </button>
      </div>
    </div>
  );
}
