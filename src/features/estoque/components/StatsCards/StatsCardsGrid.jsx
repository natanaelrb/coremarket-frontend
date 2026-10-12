import StatCard from './StatCard.jsx'
import { STAT_CARDS_CONFIG } from './statCardsConfig.js'

export default function StatsCardsGrid({ stats }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {STAT_CARDS_CONFIG.map(({ key, ...config }, index) => {
        const stat = stats[key]

        if (!stat) return null

        return (
          <StatCard
            key={key}
            {...config}
            value={stat.value}
            suffix={config.suffix}
            suffixTone={config.suffixTone}
            style={{
              animationDelay: `${index * 40}ms`,
            }}
          />
        )
      })}
    </div>
  )
}