import { StatusPagamento } from '../constants/statusPagamento.js';
import { TipoPagamento } from '../constants/tipoPagamento.js';

/**
 * Applies the active tab predicate on top of the base list.
 * @param {import('../types/pagamento.types.js').Pagamento[]} pagamentos
 * @param {string} tabFilterKey
 * @returns {import('../types/pagamento.types.js').Pagamento[]}
 */
export function applyTabFilter(pagamentos, tabFilterKey) {
  switch (tabFilterKey) {
    case 'a-receber':
      return pagamentos.filter(
        (p) => p.tipo === TipoPagamento.RECEBIMENTO && p.status === StatusPagamento.PENDENTE
      );
    case 'recebidos':
      return pagamentos.filter(
        (p) => p.tipo === TipoPagamento.RECEBIMENTO && p.status === StatusPagamento.RECEBIDO
      );
    case 'a-pagar':
      return pagamentos.filter(
        (p) => p.tipo === TipoPagamento.PAGAMENTO && p.status === StatusPagamento.PENDENTE
      );
    case 'pagos':
      return pagamentos.filter(
        (p) => p.tipo === TipoPagamento.PAGAMENTO && p.status === StatusPagamento.PAGO
      );
    case 'vencidos':
      return pagamentos.filter((p) => p.status === StatusPagamento.VENCIDO);
    case 'cancelados':
      return pagamentos.filter((p) => p.status === StatusPagamento.CANCELADO);
    case 'conciliacao':
      return pagamentos.filter((p) => p.pendenteConciliacao);
    case 'todos':
    default:
      return pagamentos;
  }
}

/**
 * Applies the filters-bar predicates (search, tipo, status, forma,
 * origem, date range and value range) on top of the given list.
 * @param {import('../types/pagamento.types.js').Pagamento[]} pagamentos
 * @param {import('../types/pagamento.types.js').FiltrosPagamentos} filtros
 * @returns {import('../types/pagamento.types.js').Pagamento[]}
 */
export function applyFiltrosBar(pagamentos, filtros) {
  const {
    busca = '',
    tipo = 'TODOS',
    status = 'TODOS',
    forma = 'TODOS',
    origem = 'TODOS',
    campoData = 'vencimento',
    dataInicio,
    dataFim,
    valorMinimo = 0,
    valorMaximo = 0,
  } = filtros;

  const buscaNormalizada = busca.trim().toLowerCase();
  const dateFieldMap = {
    vencimento: 'dataVencimento',
    criacao: 'dataCriacao',
    pagamento: 'dataPagamento',
  };
  const dateField = dateFieldMap[campoData] ?? 'dataVencimento';

  return pagamentos.filter((p) => {
    if (buscaNormalizada) {
      const haystack = `${p.pessoa} ${p.origemReferencia} ${p.codigo}`.toLowerCase();
      if (!haystack.includes(buscaNormalizada)) return false;
    }
    if (tipo !== 'TODOS' && p.tipo !== tipo) return false;
    if (status !== 'TODOS' && p.status !== status) return false;
    if (forma !== 'TODOS' && p.forma !== forma) return false;
    if (origem !== 'TODOS' && p.origem !== origem) return false;

    if (dataInicio || dataFim) {
      const rawValue = p[dateField];
      if (rawValue) {
        const value = rawValue.slice(0, 10);
        if (dataInicio && value < dataInicio) return false;
        if (dataFim && value > dataFim) return false;
      }
    }

    if (valorMinimo > 0 && p.valor < valorMinimo) return false;
    if (valorMaximo > 0 && p.valor > valorMaximo) return false;

    return true;
  });
}
