/**
 * Calcula o subtotal bruto de um item (sem descontos).
 * @param {import('../types/venda.types.js').ItemVenda} item
 */
export function calcularSubtotalItem(item) {
  return item.quantidade * item.precoUnitario;
}

/**
 * Calcula o subtotal líquido de um item (com desconto do próprio item).
 * @param {import('../types/venda.types.js').ItemVenda} item
 */
export function calcularSubtotalLiquidoItem(item) {
  return calcularSubtotalItem(item) - (item.descontoItem ?? 0);
}

/**
 * Soma a quantidade total de itens no carrinho.
 * @param {import('../types/venda.types.js').ItemVenda[]} itens
 */
export function calcularQuantidadeTotal(itens) {
  return itens.reduce((acc, item) => acc + item.quantidade, 0);
}

/**
 * Soma o subtotal bruto de todos os itens (antes de qualquer desconto).
 * @param {import('../types/venda.types.js').ItemVenda[]} itens
 */
export function calcularSubtotalVenda(itens) {
  return itens.reduce((acc, item) => acc + calcularSubtotalItem(item), 0);
}

/**
 * Soma o total de descontos aplicados individualmente aos itens.
 * @param {import('../types/venda.types.js').ItemVenda[]} itens
 */
export function calcularDescontosItens(itens) {
  return itens.reduce((acc, item) => acc + (item.descontoItem ?? 0), 0);
}

/**
 * Calcula o total final da venda considerando subtotal, descontos e acréscimos.
 * @param {{
 *  itens: import('../types/venda.types.js').ItemVenda[],
 *  descontoVenda?: number,
 *  acrescimo?: number,
 * }} params
 */
export function calcularResumoVenda({ itens, descontoVenda = 0, acrescimo = 0 }) {
  const subtotal = calcularSubtotalVenda(itens);
  const descontosItens = calcularDescontosItens(itens);
  const total = Math.max(0, subtotal - descontosItens - descontoVenda + acrescimo);

  return {
    quantidadeItens: itens.length,
    quantidadeUnidades: calcularQuantidadeTotal(itens),
    subtotal,
    descontosItens,
    descontoVenda,
    acrescimo,
    total,
  };
}

/**
 * Verifica se todos os itens do carrinho possuem estoque suficiente.
 * @param {import('../types/venda.types.js').ItemVenda[]} itens
 * @param {import('../types/venda.types.js').Produto[]} produtos
 */
export function verificarDisponibilidadeEstoque(itens, produtos) {
  return itens.every((item) => {
    const produto = produtos.find((p) => p.id === item.produtoId);
    return produto ? produto.estoque >= item.quantidade : true;
  });
}

