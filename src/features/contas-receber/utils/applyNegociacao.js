import { parseMoney } from '../../../shared/utils/masks';

/** POST /api/contas-receber/{id}/negociacao */
export function applyNegociacao(conta, form, hoje) {
  return {
    ...conta,
    vencimento: form.novoVencimento,
    negociacao: {
      data: hoje, vencimentoOriginal: conta.negociacao?.vencimentoOriginal ?? conta.vencimento,
      novoVencimento: form.novoVencimento, desconto: parseMoney(form.desconto), observacao: form.observacao ?? '',
    },
  };
}

