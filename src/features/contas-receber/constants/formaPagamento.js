/** Espelha o enum FormaPagamento do backend. */
export const FormaPagamento = Object.freeze({
  DINHEIRO: 'DINHEIRO', PIX: 'PIX', CARTAO_CREDITO: 'CARTAO_CREDITO',
  CARTAO_DEBITO: 'CARTAO_DEBITO', BOLETO: 'BOLETO', TRANSFERENCIA: 'TRANSFERENCIA',
});

export const FORMA_LABEL = {
  DINHEIRO: 'Dinheiro', PIX: 'PIX', CARTAO_CREDITO: 'Cartão Crédito',
  CARTAO_DEBITO: 'Cartão Débito', BOLETO: 'Boleto', TRANSFERENCIA: 'Transferência',
};

export const FORMA_OPTIONS = Object.entries(FORMA_LABEL).map(([value, label]) => ({ value, label }));

/** Condição da venda de origem. */
export const CONDICAO_LABEL = { A_VISTA: 'À vista', A_PRAZO: 'A prazo' };
