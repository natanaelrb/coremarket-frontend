import { ContasReceberProvider } from '../features/contas-receber/context/ContasReceberContext';

import { PageHeader } from '../features/contas-receber/components/PageHeader/PageHeader';
import { KpiGrid } from '../features/contas-receber/components/Kpis/KpiGrid';
import { ChartsRow } from '../features/contas-receber/components/ChartsRow';
import { ContentGrid } from '../features/contas-receber/components/ContentGrid';
import { ContasListCard } from '../features/contas-receber/components/List/ContasListCard';
import { InsightsGrid } from '../features/contas-receber/components/Insights/InsightsGrid';
import { DetailPanel } from '../features/contas-receber/components/Detail/DetailPanel';
import { ModalsHost } from '../features/contas-receber/components/Modals/ModalsHost';

/** Página: apenas composição de componentes. Toda a lógica vive em hooks/, utils/ e context/. */
export default function ContasReceber() {
  return (
    <ContasReceberProvider>
      <div className="mx-auto max-w-[1800px] space-y-4">
        <PageHeader />
        <KpiGrid />
        <ContentGrid
          main={<><ChartsRow /><ContasListCard /><InsightsGrid /></>}
          aside={<DetailPanel />}
        />
      </div>
      <ModalsHost />
    </ContasReceberProvider>
  );
}
