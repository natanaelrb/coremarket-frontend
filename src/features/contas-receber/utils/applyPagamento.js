import { parseMoney } from '../../../shared/utils/masks';
import { nowTime } from './nowTime';

/** POST /api/contas-receber/{id}/pagamentos */
export function applyPagamento(conta, form) {
  const pagamento = {
    id: `P-${conta.id.replace(/\D/g, '')}-${conta.pagamentos.length + 1}-${Date.now().toString(36)}`,
    data: form.data, hora: nowTime(), valor: parseMoney(form.valor), forma: form.forma,
    responsavel: form.responsavel, observacao: form.observacao ?? '',
  };
  return { ...conta, pagamentos: [...conta.pagamentos, pagamento] };
}

