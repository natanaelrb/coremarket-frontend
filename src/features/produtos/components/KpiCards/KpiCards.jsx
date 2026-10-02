// Grade de cards de KPI do topo da página.
import { KpiCard } from './KpiCard';
import { buildKpiItems } from './kpiCards.config';

export function KpiCards({ kpis }) {
  const items = buildKpiItems(kpis);

  return (
    <div
      className="
        grid grid-cols-1 gap-4
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {items.map((item, index) => {
        const { key, ...cardProps } = item;

        return (
          <div
            key={key}
            className="
              animate-in fade-in slide-in-from-bottom-2
              duration-500
              motion-reduce:animate-none
            "
            style={{
              animationDelay: `${index * 60}ms`,
              animationFillMode: 'backwards',
            }}
          >
            <KpiCard {...cardProps} />
          </div>
        );
      })}
    </div>
  );
}