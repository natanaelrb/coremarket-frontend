import { STATUS_VENDA } from "../constants/statusVenda.js";

/**
 * Monta o registro de uma venda finalizada.
 */
export function criarRegistroVenda({
  vendaAtual,
  operador,
  caixa,
}) {
  const { carrinho, clienteState, tipoVendaState, resumo } = vendaAtual;

  const agora = new Date();
  

  const itens = carrinho.itens.map((item) => ({
    produtoId: item.produtoId,
    nome: item.nome,
    categoria: item.categoria ?? "Sem categoria",
    codigoBarras: item.codigoBarras,
    quantidade: item.quantidade,
    precoUnitario: item.precoUnitario,
    descontoItem: item.descontoItem ?? 0,
    subtotal:
      item.quantidade * item.precoUnitario -
      (item.descontoItem ?? 0),
    imagemUrl: item.imagemUrl ?? null,
  }));
  

  const quantidadeItens = itens.reduce(
    (total, item) => total + item.quantidade,
    0,
  );

  return {
    id: crypto.randomUUID(),
    numero: `#${String(Date.now()).slice(-8)}`,
    dataHora: agora.toISOString(),

    clienteId: clienteState.cliente?.id ?? null,
    clienteNome: clienteState.cliente?.nome ?? "Consumidor",

    operadorNome: operador?.nome ?? "Operador",
    caixaNumero: caixa?.numero ?? null,

    tipoVenda: tipoVendaState.tipoVenda,

    formaPagamento:
      tipoVendaState.isDivida ? "DIVIDA" : null,

    itens,

    quantidadeItens,
    subtotal: resumo.subtotal,
    descontosItens: resumo.descontosItens,
    descontoVenda: resumo.descontoVenda,
    acrescimo: resumo.acrescimo,
    total: resumo.total,

    status: STATUS_VENDA.CONCLUIDA,
  };
}
