import { formatCurrency } from "../../../shared/utils/formatCurrency";
import { formatDateBR } from "../../../shared/utils/formatDate";

export function buildCobrancaMessage(conta) {
  const primeiro = conta.clienteNome.split(" ")[0];
  const situacao =
    conta.diasAtraso > 0
      ? `venceu em ${formatDateBR(conta.vencimento)} (${conta.diasAtraso} dia${conta.diasAtraso > 1 ? "s" : ""} de atraso)`
      : `vence em ${formatDateBR(conta.vencimento)}`;
  return `OlÃ¡, ${primeiro}! Tudo bem? Passando para lembrar que a conta ${conta.id} (venda ${conta.vendaId}) no valor de ${formatCurrency(conta.saldo)} ${situacao}. Podemos ajudar com a forma de pagamento? Obrigado! â€” CoreMarket`;
}

