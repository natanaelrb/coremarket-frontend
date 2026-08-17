// Barra de ações em massa exibida acima da tabela quando há linhas selecionadas.
import { ChevronDown } from 'lucide-react';
import Dropdown, { DropdownItem } from "../../../../shared/components/Dropdown";
import { BULK_ACTIONS } from '../../constants/filterOptions';

export function BulkActionsBar({ selectedCount, onRunAction }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600 dark:text-gray-300">
        {selectedCount} selecionado{selectedCount !== 1 ? 's' : ''}
      </span>

      <Dropdown
        trigger={
          <button
            type="button"
            className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-white/5"
          >
            Ações em massa
            <ChevronDown size={13} />
          </button>
        }
      >
        {BULK_ACTIONS.map((action) => (
          <DropdownItem key={action.value} danger={action.danger} onClick={() => onRunAction(action.value)}>
            {action.label}
          </DropdownItem>
        ))}
      </Dropdown>
    </div>
  );
}
