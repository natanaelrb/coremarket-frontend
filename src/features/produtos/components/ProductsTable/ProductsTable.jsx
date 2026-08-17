// Composer da tabela de produtos: junta toolbar, header, linhas, paginação, skeleton e empty state.
// Não contém lógica de negócio — tudo chega pronto via props (hooks vivem em ProdutosPage).
import { ProductsTableHeader } from './ProductsTableHeader';
import { ProductRow } from './ProductRow';
import { TableToolbar } from './TableToolbar';
import { Pagination } from './Pagination';
import { TableSkeleton } from './TableSkeleton';
import { EmptyState } from './EmptyState';

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
  onToggleMoreFilters,
  rowActions,
  onClearFilters,
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white dark:border-gray-800 dark:bg-[#151936]">
      <TableToolbar
        selectedCount={selection.selectedCount}
        onRunBulkAction={onRunBulkAction}
        isVisible={columnVisibility.isVisible}
        toggleColumn={columnVisibility.toggleColumn}
        requestSort={sorting.requestSort}
        onToggleMoreFilters={onToggleMoreFilters}
      />

      {isLoading ? (
        <TableSkeleton />
      ) : totalFiltered === 0 ? (
        <EmptyState onClearFilters={onClearFilters} />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
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

      {!isLoading && totalFiltered > 0 && <Pagination {...pagination} />}
    </div>
  );
}
