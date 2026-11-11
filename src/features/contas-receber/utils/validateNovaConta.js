import { parseMoney } from '../../../shared/utils/masks';

export function validateNovaConta(f) {
  const e = {};
  if (!f.clienteId) e.clienteId = 'Selecione o cliente';
  if (parseMoney(f.valor) <= 0) e.valor = 'Informe um valor maior que zero';
  if (!f.emissao) e.emissao = 'Informe a emissÃ£o';
  if (!f.vencimento) e.vencimento = 'Informe o vencimento';
  else if (f.emissao && f.vencimento < f.emissao) e.vencimento = 'NÃ£o pode ser anterior Ã  emissÃ£o';
  return e;
}

