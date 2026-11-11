import { diffInDays } from "../../../shared/utils/dateMath";
import { round2 } from "../../../shared/utils/round2";
import { normalizeText } from "../../../shared/utils/normalizeText";
import { onlyDigits } from "../../../shared/utils/masks";
import { Exposure, StatusConta, STATUS_ORDER } from "../constants/statusConta";

/**
 * Calcula os campos derivados (saldo, atraso, statusâ€¦) a partir da conta "crua".
 * Mesma regra que o backend deve aplicar em ContaReceberService.
 * @returns {import('../types/typedefs').ContaReceber}
 */
export function enrichConta(raw, hoje) {
  const cancelada = Boolean(raw.cancelada);
  const valorPago = round2(raw.pagamentos.reduce((s, p) => s + p.valor, 0));
  const desconto = raw.negociacao?.desconto ?? 0;
  const valorLiquido = round2(raw.valorOriginal - desconto);
  const saldo = cancelada ? 0 : Math.max(0, round2(valorLiquido - valorPago));
  const aberto = !cancelada && saldo > 0;
  const diasParaVencer = diffInDays(raw.vencimento, hoje);
  const diasAtraso = aberto && diasParaVencer < 0 ? -diasParaVencer : 0;
  const ultimoPagamento = raw.pagamentos.reduce(
    (m, p) => (!m || p.data > m ? p.data : m),
    null,
  );

  let exposure;
  let status;
  if (cancelada) {
    exposure = Exposure.CANCELADA;
    status = StatusConta.CANCELADA;
  } else if (!aberto) {
    exposure = Exposure.PAGA;
    status = StatusConta.PAGA;
  } else {
    exposure =
      diasAtraso > 0
        ? Exposure.VENCIDO
        : raw.negociacao
          ? Exposure.NEGOCIADA
          : Exposure.A_VENCER;
    if (raw.negociacao && diasAtraso === 0) status = StatusConta.NEGOCIADA;
    else if (valorPago > 0) status = StatusConta.PARCIAL;
    else if (diasAtraso > 0) status = StatusConta.VENCIDA;
    else status = StatusConta.A_VENCER;
  }

  return {
    ...raw,
    valorPago,
    desconto,
    valorLiquido,
    saldo,
    aberto,
    diasParaVencer,
    diasAtraso,
    ultimoPagamento,
    exposure,
    status,
    statusOrder: STATUS_ORDER.indexOf(status),
    busca: normalizeText(
      [
        raw.id,
        raw.clienteNome,
        raw.vendaId,
        raw.documento,
        raw.cpf,
        onlyDigits(raw.cpf),
      ].join(" "),
    ),
  };
}

