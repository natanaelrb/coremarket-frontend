import ChartCard from "./ChartCard.jsx";
import DonutWithLegend from "./DonutWithLegend.jsx";

const TONE_COLORS = {
  success: "#22C55E",
  warning: "#F59E0B",
  danger: "#EF4444",
};

const STATUS_COLORS = {
  "Baixo Estoque": "#F59E0B",
  "Próx. Validade": "#F97316",
  "Sem estoque": "#EF4444",
  Vencidos: "#DC2626",
};

export default function SituacaoEstoqueChart({
  data = [],
  totalProdutos = 0,
}) {
  const colors = data.map((entry) => {
    const specificColor = STATUS_COLORS[entry.situacao];

    if (specificColor) {
      return specificColor;
    }

    return TONE_COLORS[entry.tone] ?? "#94A3B8";
  });

  return (
    <ChartCard
      title="Situação do Estoque"
      description="Distribuição dos produtos conforme a situação atual."
    >
      <DonutWithLegend
        data={data}
        nameKey="situacao"
        valueKey="percentual"
        colors={colors}
        centerLabel="Produtos"
        centerValue={totalProdutos.toLocaleString("pt-BR")}
        donutSize={180}
        innerRadius={54}
        outerRadius={78}
        centerValueClassName="text-[20px]"
        legendSpacing="space-y-4"
      />
    </ChartCard>
  );
}