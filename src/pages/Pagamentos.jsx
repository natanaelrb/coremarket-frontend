import { Toaster } from 'react-hot-toast';

import { PageHeader } from '../features/pagamentos/components/PageHeader/PageHeader.jsx';
import { KpiCards } from '../features/pagamentos/components/KpiCards/KpiCards.jsx';
import { TabsBar } from '../features/pagamentos/components/TabsBar/TabsBar.jsx';
import { FiltersBar } from '../features/pagamentos/components/FiltersBar/FiltersBar.jsx';
import { PaymentsTable } from '../features/pagamentos/components/PaymentsTable/PaymentsTable.jsx';
import { ChartsSection } from '../features/pagamentos/components/ChartsSection/ChartsSection.jsx';
import { AlertsSection } from '../features/pagamentos/components/AlertsSection/AlertsSection.jsx';
import { QuickReports } from '../features/pagamentos/components/QuickReports/QuickReports.jsx';
import { RegistrarRecebimentoModal } from '../features/pagamentos/components/RegistrarRecebimentoModal/RegistrarRecebimentoModal.jsx';
import { RegistrarPagamentoModal } from '../features/pagamentos/components/RegistrarPagamentoModal/RegistrarPagamentoModal.jsx';

import { usePagamentosPage } from '../features/pagamentos/hooks/usePagamentosPage.js';

/**
 * Página de pagamentos.
 * A lógica de estado e os efeitos permanecem nos hooks.
 */
export default function Pagamentos() {
  const page = usePagamentosPage();

  return (
    <div className="-mt-4 -ml-2 -mr-2 flex min-h-screen min-w-0 bg-slate-50 dark:bg-slate-950">
      <Toaster
        position="top-right"
        toastOptions={{ duration: 3000 }}
      />

      <div className="flex min-w-0 flex-1">
        <main className="min-w-0 flex-1">
          <PageHeader
            periodo={page.periodo}
            onRegistrarRecebimento={page.recebimentoModal.open}
            onRegistrarPagamento={page.pagamentoModal.open}
          />

          <div className="min-w-0 space-y-6 p-4 sm:p-6">
            <KpiCards
              kpis={page.kpis}
              isLoading={page.isLoading}
            />

            <FiltersBar filters={page.filters} />

            <section className="min-w-0 space-y-6">
              <TabsBar
                tabs={page.tabs}
                activeTabKey={page.activeTabKey}
                onChange={page.setActiveTabKey}
              />

              <PaymentsTable
                pagination={page.pagination}
                isLoading={page.isLoading}
                onVerDetalhes={page.onSelectPagamento}
                onBaixarComprovante={page.onBaixarComprovante}
                onEstornar={page.onEstornar}
              />
            </section>

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

            <AlertsSection
              alertas={page.alertas}
              isLoading={page.isLoading}
              onAction={page.onAlertaAction}
            />

            <QuickReports onSelect={() => {}} />
          </div>
        </main>
      </div>

      <RegistrarRecebimentoModal modal={page.recebimentoModal} />
      <RegistrarPagamentoModal modal={page.pagamentoModal} />
    </div>
  );
}