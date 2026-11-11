import { Exposure } from "../constants/statusConta";
import { round2 } from "../../../shared/utils/round2";
import { buildBuckets } from "./buildBuckets";

/** Séries acumuladas por balde de tempo (vencimento; recebido pela data do pagamento). */
export function computeEvolucao(contas, range, granularidade) {
  if (!contas.length) return [];
  let minD = contas[0].vencimento;
  let maxD = contas[0].vencimento;
  for (const c of contas) {
    if (c.vencimento < minD) minD = c.vencimento;
    if (c.vencimento > maxD) maxD = c.vencimento;
  }
  const start = range.start > minD ? range.start : minD;
  const end = range.end < maxD ? range.end : maxD;
  if (start > end) return [];

  return buildBuckets({ start, end }, granularidade).map((b) => {
    let aVencer = 0;
    let vencido = 0;
    let negociado = 0;
    let cancelado = 0;
    let recebido = 0;
    for (const c of contas) {
      if (c.vencimento <= b.end) {
        if (c.exposure === Exposure.A_VENCER) aVencer += c.saldo;
        else if (c.exposure === Exposure.VENCIDO) vencido += c.saldo;
        else if (c.exposure === Exposure.NEGOCIADA) negociado += c.saldo;
        else if (c.exposure === Exposure.CANCELADA)
          cancelado += c.valorOriginal;
      }
      for (const p of c.pagamentos) if (p.data <= b.end) recebido += p.valor;
    }
    return {
      label: b.label,
      aVencer: round2(aVencer),
      vencido: round2(vencido),
      negociado: round2(negociado),
      cancelado: round2(cancelado),
      recebido: round2(recebido),
    };
  });
}
