import Card from "../../../../shared/components/layout/Card.jsx";
import ProductTableHeader from "./ProductTableHeader.jsx";
import ProductTableRow from "./ProductTableRow.jsx";
import ProductTableEmptyState from "./ProductTableEmptyState.jsx";
import ItemsPerPageSelect from "./ItemsPerPageSelect.jsx";
import Pagination from "./Pagination.jsx";

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
    <Card
      className="min-w-0 overflow-hidden animate-slide-up"
      style={{ animationDelay: "80ms" }}
    >
      {/* Cabeçalho */}
      <div className="flex flex-col gap-3 border-b border-gray-100 px-5 py-4 dark:border-white/5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5">
            <h2 className="text-base font-semibold text-gray-900 dark:text-white">
              Produtos em estoque
            </h2>

            <span className="inline-flex min-w-7 items-center justify-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:ring-emerald-500/20">
              {totalCount.toLocaleString("pt-BR")}
            </span>
          </div>

          <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
            Consulte quantidade, validade, situação e valor dos produtos.
          </p>
        </div>

        {selection.selectedCount > 0 && (
          <div className="flex items-center gap-2 rounded-lg bg-violet-50 px-3 py-2 text-xs font-medium text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
            <span>
              {selection.selectedCount}{" "}
              {selection.selectedCount === 1
                ? "produto selecionado"
                : "produtos selecionados"}
            </span>
          </div>
        )}
      </div>

      {/* Tabela */}
      <div className="w-full min-w-0 overflow-x-auto overscroll-x-contain">
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

      {/* Rodapé */}
      {pageItems.length > 0 && (
        <div className="flex flex-col gap-3 border-t border-gray-100 px-5 py-3.5 dark:border-white/5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <ItemsPerPageSelect
              value={pagination.itemsPerPage}
              onChange={pagination.setItemsPerPage}
            />

            <span className="text-xs text-gray-400 dark:text-gray-500">
              Exibindo{" "}
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {pagination.start + 1}-{pagination.end}
              </span>{" "}
              de{" "}
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {pagination.totalItems.toLocaleString("pt-BR")}
              </span>
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