import { KPI_CARDS_CONFIG } from './kpiCardsConfig.js';
import { KpiCard } from './KpiCard.jsx';

export function KpiCards({ kpis, isLoading }) {
  return (
    <div className="mx-[-24px] grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {KPI_CARDS_CONFIG.map((config, index) => (
        <KpiCard
          key={config.id}
          config={config}
          kpis={kpis}
          isLoading={isLoading}
          delayMs={index * 40}
        />
      ))}
    </div>
  );
}