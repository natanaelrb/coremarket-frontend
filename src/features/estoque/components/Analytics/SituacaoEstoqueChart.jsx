import ChartCard from './ChartCard.jsx'
import DonutWithLegend from './DonutWithLegend.jsx'

const TONE_COLORS = {
  success: '#22C55E',
  warning: '#F59E0B',
  danger: '#EF4444',
}

/**
 * Donut breakdown of stock health (normal / low / out / near-expiry / expired).
 */
export default function SituacaoEstoqueChart({ data, totalProdutos }) {
  const colors = data.map((entry) => TONE_COLORS[entry.tone] ?? '#94A3B8')
  return (
    <ChartCard title="Situação do Estoque">
      <DonutWithLegend
        data={data}
        nameKey="situacao"
        valueKey="percentual"
        colors={colors}
        centerLabel="Produtos"
        centerValue={totalProdutos.toLocaleString('pt-BR')}
      />
    </ChartCard>
  )
}
