import { StatusPagamento } from '../constants/statusPagamento.js';
import { TipoPagamento } from '../constants/tipoPagamento.js';

function isToday(isoDate) {
  if (!isoDate) return false;
  const today = new Date();
  const date = new Date(isoDate);
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
}

/**
 * Derives the top KPI-strip figures from the raw pagamentos list. Kept
 * pure so it can be unit tested without touching the API layer.
 * @param {import('../types/pagamento.types.js').Pagamento[]} pagamentos
 * @returns {{
 *  aReceberHoje: {valor:number,quantidade:number},
 *  recebidoHoje: {valor:number,percentualPrevisto:number},
 *  aPagarHoje: {valor:number,quantidade:number},
 *  emAtraso: {valor:number,quantidade:number},
 * }}
 */
export function calculateKpis(pagamentos) {
  const aReceberHoje = pagamentos.filter(
    (p) => p.tipo === TipoPagamento.RECEBIMENTO && p.status === StatusPagamento.PENDENTE && isToday(p.dataVencimento)
  );
  const recebidoHoje = pagamentos.filter(
    (p) => p.tipo === TipoPagamento.RECEBIMENTO && p.status === StatusPagamento.RECEBIDO && isToday(p.dataPagamento)
  );
  const aPagarHoje = pagamentos.filter(
    (p) => p.tipo === TipoPagamento.PAGAMENTO && p.status === StatusPagamento.PENDENTE && isToday(p.dataVencimento)
  );
  const emAtraso = pagamentos.filter((p) => p.status === StatusPagamento.VENCIDO);

  const sum = (list) => list.reduce((acc, p) => acc + p.valor, 0);
  const previstoHojeTotal = sum(aReceberHoje) + sum(recebidoHoje);
  const recebidoValor = sum(recebidoHoje);

  return {
    aReceberHoje: { valor: sum(aReceberHoje), quantidade: aReceberHoje.length },
    recebidoHoje: {
      valor: recebidoValor,
      percentualPrevisto: previstoHojeTotal > 0 ? (recebidoValor / previstoHojeTotal) * 100 : 0,
    },
    aPagarHoje: { valor: sum(aPagarHoje), quantidade: aPagarHoje.length },
    emAtraso: { valor: sum(emAtraso), quantidade: emAtraso.length },
  };
}
