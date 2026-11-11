import { parseMoney } from '../../../shared/utils/masks';

/** PUT /api/contas-receber/{id} â€” valor original sÃ³ muda se ainda nÃ£o hÃ¡ pagamentos. */
export const applyEdicao = (conta, form) => ({
  ...conta,
  vencimento: form.vencimento, formaPagamento: form.forma, responsavel: form.responsavel, observacao: form.observacao ?? '',
  valorOriginal: conta.pagamentos.length ? conta.valorOriginal : parseMoney(form.valor),
});

