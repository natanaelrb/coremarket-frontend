import { parseMoney } from "../../../shared/utils/masks";
import { formatCurrency } from "../../../shared/utils/formatCurrency";

export function validateRecebimento(f, conta) {
  const e = {};
  const valor = parseMoney(f.valor);
  if (!conta) e.contaId = "Selecione uma conta em aberto";
  if (valor <= 0) e.valor = "Informe um valor maior que zero";
  else if (conta && valor > conta.saldo + 0.001)
    e.valor = `MÃ¡ximo: ${formatCurrency(conta.saldo)}`;
  if (!f.data) e.data = "Informe a data";
  return e;
}

