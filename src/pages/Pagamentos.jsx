import { Toaster } from 'react-hot-toast';

import { PageHeader } from '../features/pagamentos/components/PageHeader/PageHeader.jsx';
import { KpiCards } from '../features/pagamentos/components/KpiCards/KpiCards.jsx';
import { TabsBar } from '../features/pagamentos/components/TabsBar/TabsBar.jsx';
import { FiltersBar } from '../features/pagamentos/components/FiltersBar/FiltersBar.jsx';
import { PaymentsTable } from '../features/pagamentos/components/PaymentsTable/PaymentsTable.jsx';
import { ChartsSection } from '../features/pagamentos/components/ChartsSection/ChartsSection.jsx';
import { AlertsSection } from '../features/pagamentos/components/AlertsSection/AlertsSection.jsx';
import { QuickReports } from '../features/pagamentos/components/QuickReports/QuickReports.jsx';
import { PaymentDetailPanel } from '../features/pagamentos/components/PaymentDetailPanel/PaymentDetailPanel.jsx';
import { RegistrarRecebimentoModal } from '../features/pagamentos/components/RegistrarRecebimentoModal/RegistrarRecebimentoModal.jsx';
import { RegistrarPagamentoModal } from '../features/pagamentos/components/RegistrarPagamentoModal/RegistrarPagamentoModal.jsx';

import { usePagamentosPage } from '../features/pagamentos/hooks/usePagamentosPage.js';

/**
 * Pagamentos page. A pure composition layer: all state and side effects
 * live in `usePagamentosPage` (and the hooks it composes); this
 * component only wires data to presentational components.
 */
export default function Pagamentos() {
  const page = usePagamentosPage();

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-950">
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />

      
      <div className="flex min-w-0 flex-1">
        <main className="min-w-0 flex-1">
          <PageHeader
            periodo={page.periodo}
            onRegistrarRecebimento={page.recebimentoModal.open}
            onRegistrarPagamento={page.pagamentoModal.open}
          />

          <div className="space-y-5 p-6">
            <KpiCards kpis={page.kpis} isLoading={page.isLoading} />

            <div className="space-y-0">
              <TabsBar tabs={page.tabs} activeTabKey={page.activeTabKey} onChange={page.setActiveTabKey} />
              <div className="pt-4">
                <FiltersBar filters={page.filters} />
              </div>
            </div>

            <PaymentsTable
              pagination={page.pagination}
              isLoading={page.isLoading}
              onVerDetalhes={page.onSelectPagamento}
              onBaixarComprovante={page.onBaixarComprovante}
              onEstornar={page.onEstornar}
            />

            <ChartsSection
              serieDiaria={page.serieDiaria}
              isLoadingSerie={page.isLoading}
              distribuicaoForma={page.distribuicaoForma}
              isLoadingDistribuicao={page.isLoading}
              proximosVencimentos={page.proximosVencimentos}
              isLoadingProximos={page.isLoading}
              previsao={page.previsao}
              isLoadingPrevisao={page.isLoading}
              onVerTodosVencimentos={() => page.setActiveTabKey('a-pagar')}
              onVerFluxoCaixa={() => {}}
            />

            <AlertsSection alertas={page.alertas} isLoading={page.isLoading} onAction={page.onAlertaAction} />

            <QuickReports onSelect={() => {}} />
          </div>
        </main>

        <PaymentDetailPanel
          isOpen={page.detail.isOpen}
          detail={page.detail.detail}
          isLoading={page.detail.isLoading}
          onClose={page.detail.closeDetail}
          onBaixarComprovante={page.onBaixarComprovante}
          onEstornar={page.onEstornar}
        />
      </div>

      <RegistrarRecebimentoModal modal={page.recebimentoModal} />
      <RegistrarPagamentoModal modal={page.pagamentoModal} />
    </div>
  );
}
