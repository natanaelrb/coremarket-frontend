// Regras de cálculo relacionadas a compras: totais, variação percentual,
// ticket médio, e apuração de parcelas em aberto/vencidas.
import { COMPRA_STATUS } from "../constants/statusConfig";

export function calcularTotalCompra({ subtotal = 0, desconto = 0, frete = 0, outrasDespesas = 0, impostos = 0 }) {
  return subtotal - desconto + frete + outrasDespesas + impostos;
}

export function calcularVariacaoPercentual(atual, anterior) {
  if (!anterior) return 0;
  return ((atual - anterior) / anterior) * 100;
}

export function calcularTicketMedio(compras) {
  if (!compras.length) return 0;
  const totalGeral = compras.reduce((acc, c) => acc + c.total, 0);
  return totalGeral / compras.length;
}

export function isCompraVencida(compra, hoje = new Date()) {
  if (!compra.previsaoEntrega) return false;
  if ([COMPRA_STATUS.FINALIZADA, COMPRA_STATUS.RECEBIDA, COMPRA_STATUS.CANCELADA].includes(compra.status)) {
    return false;
  }
  return new Date(compra.previsaoEntrega) < hoje;
}

export function calcularTotalParcelasPendentes(parcelas = []) {
  return parcelas
    .filter((p) => p.status === "pendente" || p.status === "atrasada")
    .reduce((acc, p) => acc + p.valor, 0);
}

export function agruparComprasPorFornecedor(compras) {
  const grupos = new Map();
  compras.forEach((compra) => {
    const atual = grupos.get(compra.fornecedorNome) || 0;
    grupos.set(compra.fornecedorNome, atual + compra.total);
  });
  return Array.from(grupos.entries())
    .map(([fornecedor, total]) => ({ fornecedor, total }))
    .sort((a, b) => b.total - a.total);
}

export function agruparComprasPorStatus(compras) {
  const grupos = new Map();
  compras.forEach((compra) => {
    const atual = grupos.get(compra.status) || 0;
    grupos.set(compra.status, atual + 1);
  });
  return grupos;
}
