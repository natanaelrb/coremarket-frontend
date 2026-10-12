import { useState } from "react";
import Card from "../../../../shared/components/layout/Card.jsx";
import ProductDetailHeader from "./ProductDetailHeader.jsx";
import ProductInfoList from "./ProductInfoList.jsx";
import QuantityStats from "./QuantityStats.jsx";
import EstoqueMinMaxStats from "./EstoqueMinMaxStats.jsx";
import PriceStats from "./PriceStats.jsx";
import DetailTabs from "./DetailTabs.jsx";
import GeralTabContent from "./GeralTabContent.jsx";
import MovimentacoesRecentes from "./MovimentacoesRecentes.jsx";

const TAB_LABELS = {
  geral: "Geral",
  movimentacoes: "Movimentações",
  historico: "Histórico",
};

export default function ProductDetailPanel({
  produto,
  movimentacoes = [],
  onClose,
  onViewAllMovimentacoes,
}) {
  const [activeTab, setActiveTab] = useState("geral");

  if (!produto) return null;

  return (
    <Card
      className="
        overflow-hidden
        animate-slide-in-right
        divide-y
        divide-gray-100
        dark:divide-white/10
      "
    >
      {/* Cabeçalho */}
      <ProductDetailHeader
        produto={produto}
        onClose={onClose}
      />

      {/* Informações do produto */}
      <div className="py-1">
        <ProductInfoList produto={produto} />
      </div>

      {/* Indicadores rápidos */}
      <div className="space-y-1 py-4">
        <div className="px-5 pb-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.07em] text-gray-400 dark:text-gray-500">
            Indicadores do estoque
          </p>
        </div>

        <QuantityStats produto={produto} />
        <EstoqueMinMaxStats produto={produto} />
        <PriceStats produto={produto} />
      </div>

      {/* Abas */}
      <DetailTabs
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* Conteúdo da aba */}
      <div className="min-h-[220px]">
        {activeTab === "geral" ? (
          <GeralTabContent produto={produto} />
        ) : (
          <div className="flex min-h-[220px] items-center justify-center px-5 py-10 animate-fade-in">
            <div className="max-w-sm text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-400 dark:bg-white/5 dark:text-gray-500">
                <span className="text-sm font-semibold">—</span>
              </div>

              <p className="mt-3 text-sm font-semibold text-gray-700 dark:text-gray-200">
                {TAB_LABELS[activeTab] ?? activeTab}
              </p>

              <p className="mt-1 text-xs leading-5 text-gray-400 dark:text-gray-500">
                Esta seção será disponibilizada quando os dados
                correspondentes estiverem integrados ao sistema.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Movimentações recentes */}
      <MovimentacoesRecentes
        movimentacoes={movimentacoes}
        onViewAll={onViewAllMovimentacoes}
      />
    </Card>
  );
}