/**
 * Mirrors the backend `TipoLancamento` enum — whether a row represents
 * money coming in or going out.
 * @readonly
 * @enum {string}
 */
export const TipoPagamento = Object.freeze({
  RECEBIMENTO: 'RECEBIMENTO',
  PAGAMENTO: 'PAGAMENTO',
});

export const TIPO_PAGAMENTO_META = Object.freeze({
  [TipoPagamento.RECEBIMENTO]: { label: 'Recebimento', tone: 'success', direction: 'in' },
  [TipoPagamento.PAGAMENTO]: { label: 'Pagamento', tone: 'danger', direction: 'out' },
});
