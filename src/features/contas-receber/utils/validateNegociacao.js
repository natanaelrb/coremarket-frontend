import { parseMoney } from "../../../shared/utils/masks";
import { formatCurrency } from "../../../shared/utils/formatCurrency";

export function validateNegociacao(f, conta, hoje) {
  const e = {};
  if (!f.novoVencimento) e.novoVencimento = "Informe o novo vencimento";
  else if (f.novoVencimento <= hoje)
    e.novoVencimento = "Deve ser uma data futura";
  const d = parseMoney(f.desconto);
  if (d < 0) e.desconto = "Valor invÃ¡lido";
  else if (conta && d >= conta.saldo)
    e.desconto = `Deve ser menor que ${formatCurrency(conta.saldo)}`;
  return e;
}

