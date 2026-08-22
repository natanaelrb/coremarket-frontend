import ChartCard from './ChartCard.jsx'
import DonutWithLegend from './DonutWithLegend.jsx'
import { useChartTheme } from '../../../../shared/hooks/useChartTheme.js'
import { formatCurrency } from '../../../../shared/utils/formatCurrency.js'

/**
 * Donut breakdown of total stock value by product category.
 */
export default function EstoquePorCategoriaChart({ data, valorTotal }) {
  const theme = useChartTheme()
  return (
    <ChartCard title="Estoque por Categoria">
      <DonutWithLegend
        data={data}
        nameKey="categoria"
        valueKey="percentual"
        colors={theme.palette}
        centerLabel="Total"
        centerValue={formatCurrency(valorTotal)}
      />
    </ChartCard>
  )
}
