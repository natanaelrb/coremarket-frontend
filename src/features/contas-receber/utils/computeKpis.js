import { Exposure } from "../constants/statusConta";
import { round2 } from "../../../shared/utils/round2";

/** Indicadores do topo. TODO(api): GET /api/contas-receber/indicadores?inicio=&fim= */
export function computeKpis(contas, { hoje, meta }) {
  let aVencer = 0;
  let vencido = 0;
  let negociado = 0;
  let recebido = 0;
  let emAtraso = 0;
  let pagamentos = 0;
  let esperado = 0;
  let recebidoEsperado = 0;
  const inadimplentes = new Set();

  for (const c of contas) {
    if (c.exposure === Exposure.A_VENCER) aVencer += c.saldo;
    else if (c.exposure === Exposure.VENCIDO) {
      vencido += c.saldo;
      emAtraso += 1;
      inadimplentes.add(c.clienteId);
    } else if (c.exposure === Exposure.NEGOCIADA) negociado += c.saldo;
    recebido += c.valorPago;
    pagamentos += c.pagamentos.length;
    if (!c.cancelada && c.vencimento <= hoje) {
      esperado += c.valorLiquido;
      recebidoEsperado += Math.min(c.valorPago, c.valorLiquido);
    }
  }
  const total = aVencer + vencido + negociado;
  return {
    total: round2(total),
    aVencer: round2(aVencer),
    vencido: round2(vencido),
    negociado: round2(negociado),
    recebido: round2(recebido),
    emAtraso,
    inadimplentes: inadimplentes.size,
    taxaRecebimento: esperado > 0 ? (recebidoEsperado / esperado) * 100 : 0,
    ticketMedio: pagamentos > 0 ? recebido / pagamentos : 0,
    metaPct: meta > 0 ? (recebido / meta) * 100 : 0,
  };
}
