import { escapeHtml as h } from "../../../shared/utils/escapeHtml";
import { formatCurrency as money } from "../../../shared/utils/formatCurrency";
import { formatDateBR } from "../../../shared/utils/formatDate";
import { STATUS_META } from "../constants/statusConta";
import { PRINT_STYLES } from "./printStyles";

/** Relatório imprimível da lista filtrada. */
export function buildListaPrintHtml(contas, range) {
  const saldo = contas.reduce((s, c) => s + c.saldo, 0);
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>Contas a Receber</title><style>${PRINT_STYLES}</style></head><body>
  <div class="head"><div><h1>Contas a Receber</h1><div class="muted">Período: ${formatDateBR(range.start)} a ${formatDateBR(range.end)} · ${contas.length} contas</div></div>
  <div class="total">Saldo: ${money(saldo)}</div></div>
  <table><thead><tr><th>Conta</th><th>Cliente</th><th>Vencimento</th><th class="r">Original</th><th class="r">Pago</th><th class="r">Saldo</th><th>Status</th></tr></thead><tbody>
  ${contas.map((c) => `<tr><td>${h(c.id)}</td><td>${h(c.clienteNome)}</td><td>${formatDateBR(c.vencimento)}</td><td class="r">${money(c.valorOriginal)}</td><td class="r">${money(c.valorPago)}</td><td class="r">${money(c.saldo)}</td><td>${h(STATUS_META[c.status].label)}</td></tr>`).join("")}
  </tbody></table></body></html>`;
}
