// Cálculos financeiros e de estoque derivados dos dados do produto.

export function calcMargemPercent(precoCompra, precoVenda) {
  if (!precoCompra || precoCompra <= 0) return 0;
  return ((precoVenda - precoCompra) / precoCompra) * 100;
}

export function calcLucroUnitario(precoCompra, precoVenda) {
  return precoVenda - precoCompra;
}

export function calcEstoqueDisponivel(estoqueAtual, reservado) {
  return Math.max(estoqueAtual - (reservado || 0), 0);
}

export function calcValorTotalEstoque(produtos) {
  return produtos.reduce((total, p) => total + p.precoCompra * p.estoque, 0);
}

export function calcPercentualDoTotal(parte, total) {
  if (!total) return 0;
  return (parte / total) * 100;
}
