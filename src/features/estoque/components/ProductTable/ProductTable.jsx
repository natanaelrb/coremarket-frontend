import Card from "../../../../shared/components/layout/Card.jsx";
import ProductTableHeader from "./ProductTableHeader.jsx";
import ProductTableRow from "./ProductTableRow.jsx";
import ProductTableEmptyState from "./ProductTableEmptyState.jsx";
import ItemsPerPageSelect from "./ItemsPerPageSelect.jsx";
import Pagination from "./Pagination.jsx";

/**
 * Full products table card: header count, scrollable table body, and the
 * footer pagination row. Composes the smaller ProductTable* pieces and the
 * pagination/selection hooks passed down from the page.
 */
export default function ProductTable({
  totalCount,
  pageItems,
  selection,
  pagination,
  activeProductId,
  onOpenDetail,
  onActionSelect,
}) {
  return (
    <Card className="animate-slide-up" style={{ animationDelay: "80ms" }}>
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <h2 className="text-base font-semibold text-gray-900 dark:text-white">
          Produtos em Estoque ({totalCount.toLocaleString("pt-BR")})
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1100px] border-collapse">
          <ProductTableHeader
            allSelected={selection.allVisibleSelected}
            onToggleAll={selection.toggleAllVisible}
          />
          <tbody>
            {pageItems.map((produto) => (
              <ProductTableRow
                key={produto.id}
                produto={produto}
                isSelected={selection.isSelected(produto.id)}
                onToggleSelect={selection.toggleOne}
                onOpenDetail={onOpenDetail}
                onActionSelect={onActionSelect}
                isActive={produto.id === activeProductId}
              />
            ))}
          </tbody>
        </table>
        {pageItems.length === 0 && <ProductTableEmptyState />}
      </div>

      {pageItems.length > 0 && (
        <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
          <div className="flex items-center gap-4">
            <ItemsPerPageSelect
              value={pagination.itemsPerPage}
              onChange={pagination.setItemsPerPage}
            />
            <span className="text-sm text-gray-400 dark:text-gray-500">
              {pagination.start + 1} - {pagination.end} de{" "}
              {pagination.totalItems.toLocaleString("pt-BR")} itens
            </span>
          </div>
          <Pagination
            page={pagination.page}
            totalPages={pagination.totalPages}
            onPageChange={pagination.setPage}
            onPrev={pagination.goToPreviousPage}
            onNext={pagination.goToNextPage}
          />
        </div>
      )}
    </Card>
  );
}
