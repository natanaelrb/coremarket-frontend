import { EvolucaoCard } from './Charts/EvolucaoCard';
import { VencimentosProximosCard } from './Buckets/VencimentosProximosCard';
import { AgingCard } from './Buckets/AgingCard';

/** Linha com o gráfico e as duas tabelas de faixas. */
export const ChartsRow = () => (
  <div className="grid gap-3 xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,1fr)]">
    <EvolucaoCard /><VencimentosProximosCard /><AgingCard />
  </div>
);
