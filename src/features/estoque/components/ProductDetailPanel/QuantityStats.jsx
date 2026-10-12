import StatsMiniGrid from "./StatsMiniGrid.jsx";

/**
 * Quantidade Total / Reservado / Disponível mini-grid.
 */
export default function QuantityStats({ produto }) {
  const items = [
    {
      label: "Quantidade Total",
      value: `${produto?.quantidade ?? 0} un.`,
      tone: "info",
      helper: "Estoque físico",
    },
    {
      label: "Reservado",
      value: `${produto?.reservado ?? 0} un.`,
      tone: "warning",
      helper: "Quantidade comprometida",
    },
    {
      label: "Disponível",
      value: `${produto?.disponivel ?? 0} un.`,
      tone: "success",
      helper: "Livre para venda",
    },
  ];

  return <StatsMiniGrid items={items} columns={3} />;
}