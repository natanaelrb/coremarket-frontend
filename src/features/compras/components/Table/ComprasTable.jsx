import { useState } from "react";
import { Settings2, PackageSearch, ShoppingCart } from "lucide-react";

import { ComprasTableHeader } from "./ComprasTableHeader";
import { ComprasTableRow } from "./ComprasTableRow";
import { TablePagination } from "./TablePagination";
import { ColumnCustomizer } from "./ColumnCustomizer";
import { EmptyState } from "../../../../shared/components/ui/EmptyState";

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

  const visibleColumns = columns.filter((column) => column.visible);

  return (
    <section className="overflow-visible rounded-2xl border border-slate-200/80 bg-white shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-[#151b28]">
      {/* Cabeçalho da tabela */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-5 py-4 dark:border-white/[0.06] sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-green-200 bg-green-50 text-green-700 dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400">
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800 dark:text-white">
              Compras
            </h3>

            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              {totalCount} {totalCount === 1 ? "registro encontrado" : "registros encontrados"}
            </p>
          </div>
        </div>

        {/* Personalização das colunas */}
        <div className="relative shrink-0">
          <button
            type="button"
            onClick={() => setShowColumnCustomizer((visible) => !visible)}
            aria-expanded={showColumnCustomizer}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-green-300 hover:bg-green-50 hover:text-green-800 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300 dark:hover:border-green-500/30 dark:hover:bg-green-500/10 dark:hover:text-green-300 dark:focus-visible:ring-offset-[#151b28]"
          >
            <Settings2 className="h-4 w-4" aria-hidden="true" />
            <span>Personalizar colunas</span>
          </button>

          {showColumnCustomizer && (
            <ColumnCustomizer
              columns={columns}
              toggleColumn={toggleColumn}
              onClose={() => setShowColumnCustomizer(false)}
            />
          )}
        </div>
      </div>

      {/* Conteúdo */}
      {compras.length === 0 ? (
        <div className="px-4 py-8 sm:px-6">
          <EmptyState
            icon={PackageSearch}
            title="Nenhuma compra encontrada"
            description="Ajuste os filtros aplicados ou registre uma nova compra para começar."
          />
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] border-collapse text-left text-sm">
            <ComprasTableHeader
              columns={visibleColumns}
              sortConfig={sortConfig}
              toggleSort={toggleSort}
              allSelected={selection.allOnPageSelected}
              onToggleAll={selection.toggleAllOnPage}
            />

            <tbody className="divide-y divide-slate-100 dark:divide-white/[0.06]">
              {compras.map((compra, index) => (
                <ComprasTableRow
                  key={compra.id}
                  compra={compra}
                  columns={visibleColumns}
                  isSelected={selection.selectedIds.has(compra.id)}
                  onToggleSelect={() => selection.toggleOne(compra.id)}
                  onClick={() => onRowClick(compra.id)}
                  onAction={(action) => onRowAction(action, compra)}
                  delay={index * 25}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Paginação */}
      <div className="border-t border-slate-100 dark:border-white/[0.06]">
        <TablePagination
          pagination={pagination}
          totalCount={totalCount}
        />
      </div>
    </section>
  );
}
