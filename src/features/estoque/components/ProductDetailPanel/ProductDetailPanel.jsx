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

/**
 * Right-hand product detail sidebar. Composes header, quick-stat grids,
 * tab nav + tab content, and the recent-movements feed. Owns only its
 * local "which tab is active" state; the active product itself comes
 * from useProductDetail at the page level.
 */
export default function ProductDetailPanel({
  produto,
  movimentacoes,
  onClose,
  onViewAllMovimentacoes,
}) {
  const [activeTab, setActiveTab] = useState("geral");

  if (!produto) return null;

  return (
    <Card className="animate-slide-in-right overflow-hidden">
      <ProductDetailHeader produto={produto} onClose={onClose} />
      <ProductInfoList produto={produto} />
      <QuantityStats produto={produto} />
      <EstoqueMinMaxStats produto={produto} />
      <PriceStats produto={produto} />
      <DetailTabs activeTab={activeTab} onChange={setActiveTab} />
      {activeTab === "geral" && <GeralTabContent produto={produto} />}
      {activeTab !== "geral" && (
        <p className="p-5 text-sm text-gray-400 dark:text-gray-500 animate-fade-in">
          Conteúdo de "{activeTab}" será exibido aqui assim que a API
          correspondente estiver conectada.
        </p>
      )}
      <MovimentacoesRecentes
        movimentacoes={movimentacoes}
        onViewAll={onViewAllMovimentacoes}
      />
    </Card>
  );
}
