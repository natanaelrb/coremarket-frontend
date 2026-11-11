import { escapeHtml as h } from "../../../shared/utils/escapeHtml";
import { formatCurrency as money } from "../../../shared/utils/formatCurrency";
import {
  formatDateBR,
  formatDateTimeBR,
} from "../../../shared/utils/formatDate";
import { STATUS_META } from "../constants/statusConta";
import { FORMA_LABEL } from "../constants/formaPagamento";
import { PRINT_STYLES } from "./printStyles";

/** Comprovante / ficha de uma conta a receber. */
export function buildContaPrintHtml(conta, venda) {
  const pagamentos = [...conta.pagamentos].sort((a, b) =>
    b.data.localeCompare(a.data),
  );
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>${h(conta.id)}</title><style>${PRINT_STYLES}</style></head><body>
  <div class="head"><div><h1>Conta ${h(conta.id)}</h1><div class="muted">CoreMarket · Contas a Receber</div></div>
  <span class="tag">${h(STATUS_META[conta.status].longLabel)}</span></div>
  <h2>Cliente</h2><div class="kv"><b>Nome</b><span>${h(conta.clienteNome)}</span><b>CPF</b><span>${h(conta.cpf)}</span><b>Telefone</b><span>${h(conta.telefone)}</span></div>
  <h2>Informações financeiras</h2><div class="kv">
    <b>Valor original</b><span>${money(conta.valorOriginal)}</span><b>Valor pago</b><span>${money(conta.valorPago)}</span>
    <b>Saldo restante</b><span class="total">${money(conta.saldo)}</span><b>Emissão</b><span>${formatDateBR(conta.emissao)}</span>
    <b>Vencimento</b><span>${formatDateBR(conta.vencimento)}</span><b>Dias em atraso</b><span>${conta.diasAtraso}</span>
    <b>Forma de pagamento</b><span>${h(FORMA_LABEL[conta.formaPagamento])}</span><b>Responsável</b><span>${h(conta.responsavel)}</span></div>
  <h2>Venda relacionada ${h(venda.id)}</h2>
  <table><thead><tr><th>Item</th><th class="r">Qtd</th><th class="r">Preço</th><th class="r">Subtotal</th></tr></thead><tbody>
  ${venda.itens.map((i) => `<tr><td>${h(i.nome)}</td><td class="r">${i.quantidade}</td><td class="r">${money(i.preco)}</td><td class="r">${money(i.subtotal)}</td></tr>`).join("")}
  <tr><td colspan="3" class="r"><b>Total da venda</b></td><td class="r"><b>${money(venda.total)}</b></td></tr></tbody></table>
  <h2>Histórico de pagamentos</h2>
  ${
    pagamentos.length
      ? `<table><thead><tr><th>Data</th><th>Forma</th><th>Responsável</th><th class="r">Valor</th></tr></thead><tbody>
  ${pagamentos.map((p) => `<tr><td>${formatDateTimeBR(p.data, p.hora)}</td><td>${h(FORMA_LABEL[p.forma])}</td><td>${h(p.responsavel)}</td><td class="r">${money(p.valor)}</td></tr>`).join("")}</tbody></table>`
      : '<p class="muted">Nenhum pagamento registrado.</p>'
  }
  </body></html>`;
}
