import ChartCard from "./ChartCard.jsx";
import DonutWithLegend from "./DonutWithLegend.jsx";
import { formatCurrency } from "../../../../shared/utils/formatCurrency.js";

const CATEGORY_COLORS = [
  "#22c55e",
  "#8b5cf6",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
  "#06b6d4",
];

export default function EstoquePorCategoriaChart({
  data = [],
  valorTotal = 0,
}) {
  return (
    <ChartCard
      title="Estoque por Categoria"
      description="Distribuição do estoque entre as categorias."
    >
      <DonutWithLegend
        data={data}
        nameKey="categoria"
        valueKey="percentual"
        colors={CATEGORY_COLORS}
        centerLabel="Valor total"
        centerValue={formatCurrency(valorTotal)}
        donutSize={180}
        innerRadius={54}
        outerRadius={78}
        centerValueClassName="text-[15px]"
        legendSpacing="space-y-1.5"
      />
    </ChartCard>
  );
}