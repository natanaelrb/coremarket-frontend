import { SUMMARY_TABS, StatusConta } from "../constants/statusConta";
import { round2 } from "../../../shared/utils/round2";

const valorDoCartao = (c) => {
  if (c.status === StatusConta.PAGA) return c.valorPago;
  if (c.status === StatusConta.CANCELADA) return c.valorOriginal;
  return c.saldo;
};

/** Cartões "Todas / A vencer / Vencidas…" (contagem e valor, ignorando o filtro de status). */
export function computeStatusSummary(contas) {
  return SUMMARY_TABS.map((tab) => {
    const list =
      tab.id === "TODOS" ? contas : contas.filter((c) => c.status === tab.id);
    const valor =
      tab.id === "TODOS"
        ? list.reduce((s, c) => s + c.saldo, 0)
        : list.reduce((s, c) => s + valorDoCartao(c), 0);
    return { ...tab, quantidade: list.length, valor: round2(valor) };
  });
}
