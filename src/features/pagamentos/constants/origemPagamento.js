/**
 * Mirrors the backend `OrigemLancamento` enum — which module generated
 * the financial entry.
 * @readonly
 * @enum {string}
 */
export const OrigemPagamento = Object.freeze({
  VENDA: 'VENDA',
  COMPRA: 'COMPRA',
  DIVIDA: 'DIVIDA',
  DESPESA: 'DESPESA',
  AVULSO: 'AVULSO',
});

export const ORIGEM_PAGAMENTO_META = Object.freeze({
  [OrigemPagamento.VENDA]: { label: 'Venda', prefix: 'Venda' },
  [OrigemPagamento.COMPRA]: { label: 'Compra', prefix: 'Compra' },
  [OrigemPagamento.DIVIDA]: { label: 'Dívida', prefix: 'Dívida' },
  [OrigemPagamento.DESPESA]: { label: 'Despesa', prefix: 'Despesa' },
  [OrigemPagamento.AVULSO]: { label: 'Avulso', prefix: 'Lançamento' },
});
