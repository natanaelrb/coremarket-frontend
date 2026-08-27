import ChartCard from './ChartCard.jsx'
import { useChartTheme } from '../../../../shared/hooks/useChartTheme.js'

/**
 * Horizontal mini-bar ranking of the 5 fastest-turning products (lowest
 * average days-in-stock = best giro).
 */
export default function Top5ProdutosGiro({ data }) {
  const theme = useChartTheme()
  const maxDias = Math.max(...data.map((item) => item.dias))

  return (
    <ChartCard title="Top 5 Produtos (Giro)">
      <ul className="space-y-3">
        {data.map((item) => (
          <li key={item.produto} className="flex items-center gap-3 text-xs">
            <span className="w-28 shrink-0 truncate text-gray-600 dark:text-gray-300">{item.produto}</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100 dark:bg-[#1E2142]">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{ width: `${(item.dias / maxDias) * 100}%`, backgroundColor: theme.accent }}
              />
            </div>
            <span className="w-14 shrink-0 text-right font-medium text-gray-900 dark:text-white">{item.dias} dias</span>
          </li>
        ))}
      </ul>
    </ChartCard>
  )
}
