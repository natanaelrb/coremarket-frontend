import { round2 } from "../../../shared/utils/round2";
import { matchBucket } from "./matchBucket";

/** Quantidade e saldo de cada faixa. */
export function computeBucketRows(contas, buckets) {
  return buckets.map((b) => {
    const list = contas.filter((c) => matchBucket(c, b));
    return {
      id: b.id,
      label: b.label,
      tone: b.tone,
      quantidade: list.length,
      valor: round2(list.reduce((s, c) => s + c.saldo, 0)),
    };
  });
}

export const sumRows = (rows) => ({
  quantidade: rows.reduce((s, r) => s + r.quantidade, 0),
  valor: round2(rows.reduce((s, r) => s + r.valor, 0)),
});
