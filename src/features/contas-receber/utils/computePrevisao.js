import { PREVISAO_JANELAS } from "../constants/vencimentoBuckets";
import { round2 } from "../../../shared/utils/round2";

/** Previsão de recebimentos por janela de dias a partir de hoje (contas abertas e em dia). */
export function computePrevisao(contas) {
  const rows = PREVISAO_JANELAS.map((j) => ({
    id: j.id,
    label: j.label,
    valor: round2(
      contas
        .filter(
          (c) =>
            c.aberto &&
            c.diasAtraso === 0 &&
            c.diasParaVencer >= j.min &&
            c.diasParaVencer <= j.max,
        )
        .reduce((s, c) => s + c.saldo, 0),
    ),
  }));
  return { rows, max: Math.max(1, ...rows.map((r) => r.valor)) };
}
