import { useEffect, useMemo, useState } from 'react';
import { pagamentoService } from '../services/pagamentoService.js';
import { groupByFormaPagamento } from '../utils/groupByFormaPagamento.js';

/**
 * Loads the daily recebimentos/pagamentos série for the line chart and
 * derives the forma-de-pagamento distribution donut from the already
 * loaded pagamentos list.
 * @param {{ start: string, end: string }} periodo
 * @param {import('../types/pagamento.types.js').Pagamento[]} pagamentos
 */
export function useChartsData(periodo, pagamentos) {
  const [serieDiaria, setSerieDiaria] = useState([]);
  const [isLoadingSerie, setIsLoadingSerie] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setIsLoadingSerie(true);
    pagamentoService
      .buscarSerieDiaria({ periodoInicio: periodo.start, periodoFim: periodo.end })
      .then((data) => {
        if (!cancelled) setSerieDiaria(data);
      })
      .finally(() => {
        if (!cancelled) setIsLoadingSerie(false);
      });
    return () => {
      cancelled = true;
    };
  }, [periodo.start, periodo.end]);

  const distribuicaoForma = useMemo(() => groupByFormaPagamento(pagamentos), [pagamentos]);

  return { serieDiaria, isLoadingSerie, distribuicaoForma };
}
