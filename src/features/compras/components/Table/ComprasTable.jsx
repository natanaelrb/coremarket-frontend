// Tabela principal. Puramente apresentacional: recebe dados já filtrados,
// ordenados e paginados, e delega interações via callbacks.
import { Settings2 } from "lucide-react";
import { ComprasTableHeader } from "./ComprasTableHeader";
import { ComprasTableRow } from "./ComprasTableRow";
import { TablePagination } from "./TablePagination";
import { ColumnCustomizer } from "./ColumnCustomizer";
import { EmptyState } from "../../../../shared/components/ui/EmptyState";
import { PackageSearch } from "lucide-react";
import { useState } from "react";

export function ComprasTable({
  compras,
  totalCount,
  columns,
  toggleColumn,
  sortConfig,
  toggleSort,
  selection,
  pagination,
  onRowClick,
  onRowAction,
}) {
  const [showColumnCustomizer, setShowColumnCustomizer] = useState(false);
  const visibleColumns = columns.filter((c) => c.visible);

  return (
    <div className="bg-white dark:bg-[#131736] border border-slate-200 dark:border-white/5 rounded-2xl overflow-visible">
      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-200">
          Compras <span className="text-slate-400 dark:text-slate-500 font-normal">({totalCount})</span>
        </h3>
        <div className="relative">
          <button
            onClick={() => setShowColumnCustomizer((v) => !v)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
          >
            <Settings2 className="w-3.5 h-3.5" />
            Personalizar colunas
          </button>
          {showColumnCustomizer && (
            <ColumnCustomizer columns={columns} toggleColumn={toggleColumn} onClose={() => setShowColumnCustomizer(false)} />
          )}
        </div>
      </div>

      {compras.length === 0 ? (
        <EmptyState
          icon={PackageSearch}
          title="Nenhuma compra encontrada"
          description="Ajuste os filtros aplicados ou registre uma nova compra para começar."
        />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <ComprasTableHeader
              columns={visibleColumns}
              sortConfig={sortConfig}
              toggleSort={toggleSort}
              allSelected={selection.allOnPageSelected}
              onToggleAll={selection.toggleAllOnPage}
            />
            <tbody>
              {compras.map((compra, i) => (
                <ComprasTableRow
                  key={compra.id}
                  compra={compra}
                  columns={visibleColumns}
                  isSelected={selection.selectedIds.has(compra.id)}
                  onToggleSelect={() => selection.toggleOne(compra.id)}
                  onClick={() => onRowClick(compra.id)}
                  onAction={(action) => onRowAction(action, compra)}
                  delay={i * 25}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      <TablePagination pagination={pagination} totalCount={totalCount} />
    </div>
  );
}
