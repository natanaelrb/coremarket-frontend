import { useContasReceberContext } from '../../hooks/useContasReceberContext';
import { KpiCard } from './KpiCard';
import { KpiSkeleton } from './KpiSkeleton';

export function KpiGrid() {
  const { kpiCards, loading } = useContasReceberContext();
  return (
    <section aria-label="Indicadores" className="grid grid-cols-2 gap-3 sm:grid-cols-4 min-[1500px]:grid-cols-8">
      {loading ? Array.from({ length: 8 }, (_, i) => <KpiSkeleton key={i} />) : kpiCards.map((c, i) => <KpiCard key={c.id} card={c} index={i} />)}
    </section>
  );
}
