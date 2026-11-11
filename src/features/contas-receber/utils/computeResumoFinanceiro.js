import { Exposure } from "../constants/statusConta";
import { round2 } from "../../../shared/utils/round2";

export function computeResumoFinanceiro(contas, kpis) {
  const emitido = contas
    .filter((c) => !c.cancelada)
    .reduce((s, c) => s + c.valorLiquido, 0);
  const atrasadas = contas.filter((c) => c.exposure === Exposure.VENCIDO);
  const mediaAtraso = atrasadas.length
    ? atrasadas.reduce((s, c) => s + c.diasAtraso, 0) / atrasadas.length
    : 0;
  return {
    emitido: round2(emitido),
    recebido: kpis.recebido,
    pendente: kpis.total,
    vencido: kpis.vencido,
    mediaAtraso: Math.round(mediaAtraso),
    taxaRecebimento: kpis.taxaRecebimento,
  };
}
