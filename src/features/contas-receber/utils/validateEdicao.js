import { parseMoney } from '../../../shared/utils/masks';

export function validateEdicao(f, conta) {
  const e = {};
  if (!f.vencimento) e.vencimento = 'Informe o vencimento';
  if (!conta.pagamentos.length && parseMoney(f.valor) <= 0) e.valor = 'Informe um valor maior que zero';
  return e;
}

