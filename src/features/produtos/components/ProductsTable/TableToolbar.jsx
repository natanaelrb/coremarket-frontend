/**
 * Barra utilitária acima da tabela:
 * ações em massa + colunas + ordenação.
 */

import { BulkActionsBar } from "../Toolbar/BulkActionsBar";
import { ColumnsMenu } from "./ColumnsMenu";
import { SortMenu } from "./SortMenu";

export function TableToolbar({
  selectedCount = 0,
  onRunBulkAction,
  isVisible,
  toggleColumn,
  requestSort,
}) {
  const hasSelection = selectedCount > 0;

  return (
    <div
      className="
        flex flex-col gap-3
        border-b border-slate-200/80
        bg-slate-50/70 px-4 py-3
        sm:flex-row sm:items-center sm:justify-between
        dark:border-white/[0.06]
        dark:bg-white/[0.015]
      "
      aria-label="Ferramentas da tabela de produtos"
    >
      {/* Ações em massa / estado da seleção */}
      <div className="flex min-h-8 min-w-0 items-center">
        {hasSelection ? (
          <BulkActionsBar
            selectedCount={selectedCount}
            onRunAction={onRunBulkAction}
          />
        ) : (
          <div className="flex items-center gap-2">
            <span
              className="
                h-1.5 w-1.5 shrink-0 rounded-full
                bg-slate-300
                dark:bg-slate-600
              "
              aria-hidden="true"
            />

            <span
              className="
                text-xs font-medium
                text-slate-500
                dark:text-slate-400
              "
            >
              Selecione produtos para ações em massa
            </span>
          </div>
        )}
      </div>

      {/* Ferramentas da tabela */}
      <div
        className="
          flex w-full flex-wrap items-center gap-2
          sm:w-auto sm:justify-end
        "
      >
        <ColumnsMenu
          isVisible={isVisible}
          toggleColumn={toggleColumn}
        />

        <SortMenu requestSort={requestSort} />
      </div>
    </div>
  );
}

