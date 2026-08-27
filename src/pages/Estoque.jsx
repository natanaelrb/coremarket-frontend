import EstoqueHeader from "../features/estoque/components/Header/EstoqueHeader.jsx";
import StatsCardsGrid from "../features/estoque/components/StatsCards/StatsCardsGrid.jsx";
import FiltersBar from "../features/estoque/components/Filters/FiltersBar.jsx";
import ProductTable from "../features/estoque/components/ProductTable/ProductTable.jsx";
import ProductDetailPanel from "../features/estoque/components/ProductDetailPanel/ProductDetailPanel.jsx";
import AnalyticsSection from "../features/estoque/components/Analytics/AnalyticsSection.jsx";

import { useEstoqueStats } from "../features/estoque/hooks/useEstoqueStats.js";
import { useProdutosEstoque } from "../features/estoque/hooks/useProdutosEstoque.js";
import { useEstoqueFilters } from "../features/estoque/hooks/useEstoqueFilters.js";
import { usePagination } from "../features/estoque/hooks/usePagination.js";
import { useProductSelection } from "../features/estoque/hooks/useProductSelection.js";
import { useProductDetail } from "../features/estoque/hooks/useProductDetail.js";
import { useEstoqueAnalytics } from "../features/estoque/hooks/useEstoqueAnalytics.js";
import { useEstoqueActions } from "../features/estoque/hooks/useEstoqueActions.js";

import { MOCK_MOVIMENTACOES_RECENTES } from "../features/estoque/mocks/mockMovimentacoes.js";

/**
 * Estoque page: pure composition/rendering only. Every piece of behavior
 * (data loading, filtering, pagination, selection, detail panel, analytics,
 * header actions) is owned by a dedicated hook — this file just wires
 * hooks -> components and never contains business logic itself.
 */
export default function Estoque() {
  const { stats } = useEstoqueStats()
  const { produtos } = useProdutosEstoque()
  const { filters, setFilter, clearFilters, filteredProdutos, hasActiveFilters } = useEstoqueFilters(produtos)
  const pagination = usePagination(filteredProdutos, 10)
  const selection = useProductSelection(pagination.items)
  const { activeProduct, openProductDetail, closeProductDetail } = useProductDetail(produtos)
  const { data: analytics } = useEstoqueAnalytics()
  const { runAction } = useEstoqueActions()

  const handleRowAction = (actionKey, produto) => {
    if (actionKey === 'ver') {
      openProductDetail(produto)
      return
    }
    console.info(`[Estoque] Ação "${actionKey}" para produto`, produto.id)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0A0C1F] p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px] space-y-6">
        <EstoqueHeader onAction={runAction} />

        <StatsCardsGrid stats={stats} />

        <FiltersBar
          filters={filters}
          setFilter={setFilter}
          clearFilters={clearFilters}
          hasActiveFilters={hasActiveFilters}
        />

        <div className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
          <ProductTable
            totalCount={filteredProdutos.length}
            pageItems={pagination.items}
            selection={selection}
            pagination={pagination}
            activeProductId={activeProduct?.id}
            onOpenDetail={openProductDetail}
            onActionSelect={handleRowAction}
          />

          <ProductDetailPanel
            produto={activeProduct}
            movimentacoes={MOCK_MOVIMENTACOES_RECENTES}
            onClose={closeProductDetail}
            onViewAllMovimentacoes={() => console.info('[Estoque] Ver todas as movimentações de', activeProduct?.id)}
          />
        </div>

        <AnalyticsSection
          analytics={analytics}
          valorTotalEstoque={stats.valorTotalEstoque.value}
          totalProdutos={stats.totalProdutos.value}
        />
      </div>
    </div>
  )
}
