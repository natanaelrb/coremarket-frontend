import { useState } from "react";
import { useNavigate } from "react-router-dom";

import EstoqueHeader from "../features/estoque/components/Header/EstoqueHeader.jsx";
import StatsCardsGrid from "../features/estoque/components/StatsCards/StatsCardsGrid.jsx";
import FiltersBar from "../features/estoque/components/Filters/FiltersBar.jsx";
import ProductTable from "../features/estoque/components/ProductTable/ProductTable.jsx";
import AnalyticsSection from "../features/estoque/components/Analytics/AnalyticsSection.jsx";
import EstoqueMovimentoModal from "../features/estoque/components/EstoqueDetalhe/EstoqueMovimentoModal.jsx";

import { useEstoqueStats } from "../features/estoque/hooks/useEstoqueStats.js";
import { useProdutosEstoque } from "../features/estoque/hooks/useProdutosEstoque.js";
import { useProductSelection } from "../features/estoque/hooks/useProductSelection.js";
import { useEstoqueFilters } from "../features/estoque/hooks/useEstoqueFilters.js";
import { usePagination } from "../features/estoque/hooks/usePagination.js";
import { useEstoqueAnalytics } from "../features/estoque/hooks/useEstoqueAnalytics.js";
import { useEstoqueActions } from "../features/estoque/hooks/useEstoqueActions.js";

export default function Estoque() {
  const navigate = useNavigate();

  const { stats } = useEstoqueStats();
  const { produtos } = useProdutosEstoque();

  const [movimentoModal, setMovimentoModal] = useState({
    open: false,
    tipo: null,
    produto: null,
  });

  
  const {
    filters,
    setFilter,
    clearFilters,
    filteredProdutos,
    hasActiveFilters,
  } = useEstoqueFilters(produtos);
  
  const pagination = usePagination(filteredProdutos, 10);
  
  const selection = useProductSelection(pagination.items);
  
  const { data: analytics } = useEstoqueAnalytics();
  const { runAction } = useEstoqueActions();
  
  const handleRowAction = (actionKey, produto) => {
    if (actionKey === "ver") {
      navigate(`/estoque/${produto.id}`);
      return;
    }
    
    console.info(
      `[Estoque] Ação "${actionKey}" para produto`,
      produto.id,
    );
  };
  
  const handleHeaderAction = (action) => {
    if (action === "entradaManual" || action === "saidaManual") {
      setMovimentoModal({
        open: true,
        tipo: action === "entradaManual" ? "entrada" : "saida",
        produto: null,
      });

      return;
    }

    runAction(action);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="mx-auto w-full min-w-0 max-w-[1600px] space-y-6">
        <EstoqueHeader onAction={handleHeaderAction} />

        <StatsCardsGrid stats={stats} />

        <FiltersBar
          filters={filters}
          setFilter={setFilter}
          clearFilters={clearFilters}
          hasActiveFilters={hasActiveFilters}
        />

        <ProductTable
          totalCount={filteredProdutos.length}
          pageItems={pagination.items}
          selection={selection}
          pagination={pagination}
          onOpenDetail={(produto) =>
            navigate(`/estoque/${produto.id}`)
          }
          onActionSelect={handleRowAction}
        />

        <AnalyticsSection
          analytics={analytics}
          valorTotalEstoque={stats.valorTotalEstoque.value}
          totalProdutos={stats.totalProdutos.value}
        />

        <EstoqueMovimentoModal
          open={movimentoModal.open}
          tipo={movimentoModal.tipo}
          produto={movimentoModal.produto}
          produtos={produtos}
          onClose={() =>
            setMovimentoModal({
              open: false,
              tipo: null,
              produto: null,
            })
          }
          onConfirm={(movimento) => {
            console.log("[Estoque] Movimento:", movimento);

            setMovimentoModal({
              open: false,
              tipo: null,
              produto: null,
            });
          }}
        />
      </div>
    </div>
  );
}