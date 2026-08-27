/**
 * Mirrors the backend `FormaPagamento` enum.
 * @readonly
 * @enum {string}
 */
export const FormaPagamento = Object.freeze({
  PIX: 'PIX',
  DINHEIRO: 'DINHEIRO',
  CARTAO_CREDITO: 'CARTAO_CREDITO',
  CARTAO_DEBITO: 'CARTAO_DEBITO',
  BOLETO: 'BOLETO',
  TRANSFERENCIA: 'TRANSFERENCIA',
  DEBITO_AUTOMATICO: 'DEBITO_AUTOMATICO',
});

export const FORMA_PAGAMENTO_META = Object.freeze({
  [FormaPagamento.PIX]: { label: 'Pix', color: '#7C3AED' },
  [FormaPagamento.DINHEIRO]: { label: 'Dinheiro', color: '#F59E0B' },
  [FormaPagamento.CARTAO_CREDITO]: { label: 'Cartão de crédito', color: '#2563EB' },
  [FormaPagamento.CARTAO_DEBITO]: { label: 'Cartão de débito', color: '#0891B2' },
  [FormaPagamento.BOLETO]: { label: 'Boleto', color: '#16A34A' },
  [FormaPagamento.TRANSFERENCIA]: { label: 'Transferência', color: '#EC4899' },
  [FormaPagamento.DEBITO_AUTOMATICO]: { label: 'Débito automático', color: '#64748B' },
});
