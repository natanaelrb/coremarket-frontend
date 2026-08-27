import { useCallback, useMemo } from 'react';
import toast from 'react-hot-toast';
import { usePeriodo } from './usePeriodo.js';
import { usePagamentos } from './usePagamentos.js';
import { usePagamentosTabs } from './usePagamentosTabs.js';
import { usePagamentosFilters } from './usePagamentosFilters.js';
import { usePagination } from './usePagination.js';
import { useKpis } from './useKpis.js';
import { useChartsData } from './useChartsData.js';
import { useAlertas } from './useAlertas.js';
import { useProximosVencimentos } from './useProximosVencimentos.js';
import { usePrevisaoFinanceira } from './usePrevisaoFinanceira.js';
import { usePaymentDetail } from './usePaymentDetail.js';
import { useRegistrarRecebimento } from './useRegistrarRecebimento.js';
import { useRegistrarPagamento } from './useRegistrarPagamento.js';
import { useResumoRapido } from './useResumoRapido.js';
import { applyTabFilter, applyFiltrosBar, sortPagamentos } from '../utils/index.js';
import { pagamentoService } from '../services/pagamentoService.js';

/**
 * Top-level orchestrator hook for the Pagamentos page. Composes every
 * feature hook and returns a single flat object so `Pagamentos.jsx` stays
 * a pure composition layer with zero business logic.
 */
export function usePagamentosPage() {
  const periodo = usePeriodo('this-month');
  const { pagamentos, isLoading, error } = usePagamentos(periodo.range);
  const { tabs, activeTab, activeTabKey, setActiveTabKey } = usePagamentosTabs(pagamentos);
  const filters = usePagamentosFilters();
  const { previsao } = usePrevisaoFinanceira();
  const kpis = useKpis(pagamentos, previsao);
  const { serieDiaria, distribuicaoForma } = useChartsData(periodo.range, pagamentos);
  const { alertas } = useAlertas(periodo.range);
  const { itens: proximosVencimentos } = useProximosVencimentos();
  const detail = usePaymentDetail();
  const { resumo: resumoRapido } = useResumoRapido();

  const visiblePagamentos = useMemo(() => {
    const byTab = applyTabFilter(pagamentos, activeTab.filterKey);
    const byFilters = applyFiltrosBar(byTab, filters.applied);
    return sortPagamentos(byFilters, 'dataCriacao', 'desc');
  }, [pagamentos, activeTab.filterKey, filters.applied]);

  const pagination = usePagination(visiblePagamentos, 10);

  const handleRefresh = useCallback(() => {
    // TODO(api): revalidar a query de listagem (ex: react-query invalidateQueries).
  }, []);

  const recebimentoModal = useRegistrarRecebimento(handleRefresh);
  const pagamentoModal = useRegistrarPagamento(handleRefresh);

  const handleEstornar = useCallback(
    async (id) => {
      try {
        await pagamentoService.estornar(id);
        toast.success('Pagamento estornado.');
        detail.closeDetail();
      } catch {
        toast.error('Não foi possível estornar o pagamento.');
      }
    },
    [detail]
  );

  const handleBaixarComprovante = useCallback(async (id) => {
    try {
      await pagamentoService.baixarComprovante(id);
      toast.success('Comprovante gerado.');
    } catch {
      toast.error('Não foi possível gerar o comprovante.');
    }
  }, []);

  const handleAlertaAction = useCallback(
    (tabKey) => {
      setActiveTabKey(tabKey);
    },
    [setActiveTabKey]
  );

  return {
    periodo,
    isLoading,
    error,
    tabs,
    activeTabKey,
    setActiveTabKey,
    filters,
    kpis,
    serieDiaria,
    distribuicaoForma,
    alertas,
    proximosVencimentos,
    previsao,
    pagination,
    detail,
    resumoRapido,
    recebimentoModal,
    pagamentoModal,
    onSelectPagamento: detail.openDetail,
    onEstornar: handleEstornar,
    onBaixarComprovante: handleBaixarComprovante,
    onAlertaAction: handleAlertaAction,
    totalPagamentosNoPeriodo: pagamentos.length,
  };
}
