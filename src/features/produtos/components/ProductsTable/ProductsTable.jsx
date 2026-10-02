// Composer da tabela de produtos: junta toolbar, header, linhas,
// paginação, skeleton e empty state.
// Não contém lógica de negócio — tudo chega pronto via props.

import { ProductsTableHeader } from "./ProductsTableHeader";
import { ProductRow } from "./ProductRow";
import { TableToolbar } from "./TableToolbar";
import { Pagination } from "./Pagination";
import { TableSkeleton } from "./TableSkeleton";
import { EmptyState } from "./EmptyState";

export function ProductsTable({
  isLoading,
  paginatedProdutos,
  totalFiltered,
  selection,
  columnVisibility,
  sorting,
  pagination,
  onOpenDetail,
  onRunBulkAction,
  rowActions,
  onClearFilters,
}) {
  const hasProducts = totalFiltered > 0;

  return (
    <section
      aria-label="Lista de produtos"
      className="
        overflow-hidden
        rounded-2xl
        border border-slate-200/80
        bg-white
        shadow-[0_2px_8px_rgba(15,23,42,0.03)]
        dark:border-white/[0.07]
        dark:bg-[#151c2b]
        dark:shadow-none
      "
    >
      {/* Barra de ferramentas */}
      <TableToolbar
        selectedCount={selection.selectedCount}
        onRunBulkAction={onRunBulkAction}
        isVisible={columnVisibility.isVisible}
        toggleColumn={columnVisibility.toggleColumn}
        requestSort={sorting.requestSort}
      />

      {/* Conteúdo */}
      {isLoading ? (
        <div className="overflow-x-auto">
          <TableSkeleton />
        </div>
      ) : !hasProducts ? (
        <EmptyState onClearFilters={onClearFilters} />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1100px] border-collapse">
            <caption className="sr-only">
              Lista de produtos cadastrados
            </caption>

            <ProductsTableHeader
              isVisible={columnVisibility.isVisible}
              sortConfig={sorting.sortConfig}
              requestSort={sorting.requestSort}
              allSelected={selection.allSelected}
              someSelected={selection.someSelected}
              onToggleAll={selection.toggleAll}
            />

            <tbody>
              {paginatedProdutos.map((produto) => (
                <ProductRow
                  key={produto.id}
                  produto={produto}
                  isSelected={selection.selectedIds.has(produto.id)}
                  isVisible={columnVisibility.isVisible}
                  onToggleSelect={selection.toggleOne}
                  onOpenDetail={onOpenDetail}
                  rowActions={rowActions}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Paginação */}
      {!isLoading && hasProducts && (
        <Pagination {...pagination} />
      )}
    </section>
  );
}

