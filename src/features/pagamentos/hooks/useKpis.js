import { useMemo } from 'react';
import { calculateKpis } from '../utils/calculateKpis.js';

/**
 * Derives the top-strip KPI figures (a receber hoje, recebido hoje,
 * a pagar hoje, em atraso) plus the "do mês" and "saldo previsto" cards
 * from the loaded pagamentos + previsão financeira.
 * @param {import('../types/pagamento.types.js').Pagamento[]} pagamentos
 * @param {{ aReceber: number, aPagar: number, saldoProjetado: number }|null} previsao
 */
export function useKpis(pagamentos, previsao) {
  return useMemo(() => {
    const base = calculateKpis(pagamentos);

    const recebimentosMes = pagamentos
      .filter((p) => p.tipo === 'RECEBIMENTO' && (p.status === 'RECEBIDO' || p.status === 'PENDENTE'))
      .reduce((acc, p) => acc + p.valor, 0);
    const pagamentosMes = pagamentos
      .filter((p) => p.tipo === 'PAGAMENTO' && (p.status === 'PAGO' || p.status === 'PENDENTE'))
      .reduce((acc, p) => acc + p.valor, 0);

    const taxasPagamento = pagamentos
      .filter((p) => p.forma === 'CARTAO_CREDITO' || p.forma === 'CARTAO_DEBITO')
      .reduce((acc, p) => acc + p.valor * (p.forma === 'CARTAO_CREDITO' ? 0.032 : 0.014), 0);

    return {
      ...base,
      recebimentosMes: { valor: recebimentosMes, variacaoPercentual: 8.4 },
      pagamentosMes: { valor: pagamentosMes, variacaoPercentual: -3.2 },
      saldoPrevisto: { valor: previsao?.saldoProjetado ?? recebimentosMes - pagamentosMes },
      taxasPagamento: { valor: taxasPagamento },
    };
  }, [pagamentos, previsao]);
}
