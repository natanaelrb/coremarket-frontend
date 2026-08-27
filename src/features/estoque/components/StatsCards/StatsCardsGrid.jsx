import StatCard from './StatCard.jsx'
import { STAT_CARDS_CONFIG } from './statCardsConfig.js'

/**
 * Renders the full responsive grid of KPI cards from the stats object
 * returned by useEstoqueStats, mapped through STAT_CARDS_CONFIG.
 */
export default function StatsCardsGrid({ stats }) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {STAT_CARDS_CONFIG.map(({ key, ...config }, index) => {
        const stat = stats[key]
        if (!stat) return null
        return (
          <StatCard
            key={key}
            {...config}
            value={stat.value}
            suffix={stat.suffix}
            style={{ animationDelay: `${index * 30}ms` }}
          />
        )
      })}
    </div>
  )
}
