import { TopDevedoresCard } from './TopDevedoresCard';
import { StatusLegendCard } from './StatusLegendCard';
import { ResumoFinanceiroCard } from './ResumoFinanceiroCard';
import { PrevisaoCard } from './PrevisaoCard';

export const InsightsGrid = () => (
  <div className="grid gap-3 md:grid-cols-2 2xl:grid-cols-4">
    <TopDevedoresCard /><StatusLegendCard /><ResumoFinanceiroCard /><PrevisaoCard />
  </div>
);
