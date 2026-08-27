import { KPI_CARDS_CONFIG } from './kpiCardsConfig.js';
import { KpiCard } from './KpiCard.jsx';

/**
 * Horizontally scrollable strip of KPI cards shown below the page header.
 * @param {{ kpis: object, isLoading: boolean }} props
 */
export function KpiCards({ kpis, isLoading }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
      {KPI_CARDS_CONFIG.map((config, index) => (
        <KpiCard key={config.id} config={config} kpis={kpis} isLoading={isLoading} delayMs={index * 40} />
      ))}
    </div>
  );
}
