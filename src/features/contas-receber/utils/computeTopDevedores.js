import { round2 } from "../../../shared/utils/round2";

/** Clientes com maior dívida em aberto. TODO(api): GET /api/contas-receber/maiores-devedores?limite=5 */
export function computeTopDevedores(contas, limite = 5) {
  const mapa = new Map();
  for (const c of contas) {
    if (!c.aberto) continue;
    const atual = mapa.get(c.clienteId) ?? {
      clienteId: c.clienteId,
      nome: c.clienteNome,
      divida: 0,
      maiorAtraso: 0,
    };
    atual.divida += c.saldo;
    atual.maiorAtraso = Math.max(atual.maiorAtraso, c.diasAtraso);
    mapa.set(c.clienteId, atual);
  }
  return [...mapa.values()]
    .map((d) => ({ ...d, divida: round2(d.divida) }))
    .sort((a, b) => b.divida - a.divida)
    .slice(0, limite);
}
