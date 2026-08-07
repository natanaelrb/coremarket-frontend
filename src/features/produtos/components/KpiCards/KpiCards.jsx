// Grade de cards de KPI do topo da página. Apenas compõe KpiCard a partir da config.
import { KpiCard } from './KpiCard';
import { buildKpiItems } from './kpiCards.config';

export function KpiCards({ kpis }) {
  const items = buildKpiItems(kpis);

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
      {items.map((item) => (
        <KpiCard key={item.key} {...item} />
      ))}
    </div>
  );
}
