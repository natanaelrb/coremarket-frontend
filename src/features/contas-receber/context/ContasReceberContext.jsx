import { createContext, useMemo } from "react";
import useToast from "../../../shared/hooks/useToast";
import {
  useAging,
  useContaActions,
  useContaSelection,
  useContasDerivadas,
  useContasFilters,
  useContasReceber,
  useContasTabela,
  useDateRange,
  useDetailPanel,
  useEvolucaoChart,
  useExportacao,
  useInsights,
  useKpis,
  useModals,
  useStatusSummary,
  useVencimentosProximos,
} from "../hooks";

export const ContasReceberContext = createContext(null);

/** Monta todos os hooks do módulo e expõe um único objeto para os componentes. */
export function ContasReceberProvider({ children }) {
  const toast = useToast();
  const data = useContasReceber();
  const dateRange = useDateRange();
  const filters = useContasFilters();
  const derived = useContasDerivadas({
    contasRaw: data.contasRaw,
    hoje: data.hoje,
    range: dateRange.range,
    filters: filters.applied,
  });

  const resetKey = useMemo(
    () => JSON.stringify([filters.applied, dateRange.range]),
    [filters.applied, dateRange.range],
  );
  const tabela = useContasTabela({ rows: derived.filtered, resetKey });
  const selection = useContaSelection(derived.contas);
  const detail = useDetailPanel(derived.contas);
  const modals = useModals();

  const { kpis, cards: kpiCards } = useKpis(derived.periodContas, data.hoje);
  const evolucao = useEvolucaoChart(derived.periodContas, dateRange.range);
  const proximos = useVencimentosProximos(derived.contas);
  const aging = useAging(derived.contas);
  const statusSummary = useStatusSummary(derived.baseFiltered);
  const insights = useInsights({
    periodContas: derived.periodContas,
    contas: derived.contas,
    kpis,
  });

  const exportacao = useExportacao({
    sorted: tabela.sorted,
    selection,
    range: dateRange.range,
    hoje: data.hoje,
    toast,
  });
  const actions = useContaActions({
    data,
    modals,
    detail,
    tabela,
    toast,
    exportacao,
  });

  const value = {
    ...derived,
    hoje: data.hoje,
    loading: data.loading,
    error: data.error,
    recarregar: data.carregar,
    dateRange,
    filters,
    tabela,
    selection,
    detail,
    modals,
    kpis,
    kpiCards,
    evolucao,
    proximos,
    aging,
    statusSummary,
    ...insights,
    exportacao,
    actions,
  };
  return (
    <ContasReceberContext.Provider value={value}>
      {children}
    </ContasReceberContext.Provider>
  );
}
