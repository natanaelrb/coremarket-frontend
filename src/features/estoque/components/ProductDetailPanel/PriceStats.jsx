import StatsMiniGrid from "./StatsMiniGrid.jsx";
import { formatCurrency } from "../../../../shared/utils/formatCurrency.js";

/**
 * Custo Médio / Preço de Venda / Valor em Estoque mini-grid.
 */
export default function PriceStats({ produto }) {
  const items = [
    {
      label: "Custo Médio",
      value: formatCurrency(produto?.custoMedio ?? 0),
      tone: "info",
      helper: "Custo por unidade",
    },
    {
      label: "Preço de Venda",
      value: formatCurrency(produto?.precoVenda ?? 0),
      tone: "success",
      helper: "Valor comercial",
    },
    {
      label: "Valor em Estoque",
      value: formatCurrency(produto?.valorEmEstoque ?? 0),
      tone: "accent",
      helper: "Estoque atual",
    },
  ];

  return <StatsMiniGrid items={items} columns={3} />;
}