import { formatCurrency } from "../../../../utils/formatters";

export function gerarVendasMock(produto, agora) {
  const codigo = produto?.codigo || produto?.id || "PROD";

  const seed = String(codigo)
    .split("")
    .reduce(
      (acc, char) => acc + char.charCodeAt(0),
      0
    );

  const precoVenda = Number(
    produto?.precoVenda ?? 0
  );

  return Array.from({ length: 4 }).map((_, index) => {
    const diasAtras =
      (index + 1) * (3 + (seed % 4));

    const data = new Date(
      agora - diasAtras * 86400000
    )
      .toISOString()
      .slice(0, 10);

    const quantidade =
      5 + ((seed + index * 3) % 25);

    return {
      id: `${codigo}-V${index + 1}`,
      data,
      quantidade,
      valorUnitario: precoVenda,
      valorTotal: quantidade * precoVenda,
    };
  });
}

export function calcularTicketMedio(
  vendas,
  receitaMes
) {
  if (!vendas.length) return 0;

  const quantidade = vendas.reduce(
    (total, venda) =>
      total + Number(venda.quantidade || 0),
    0
  );

  if (!quantidade) return 0;

  return receitaMes / quantidade;
}

export function getUltimaVenda(vendas) {
  if (!vendas.length) return null;

  return vendas.reduce((maisRecente, venda) => {
    if (!maisRecente) return venda;

    return new Date(venda.data) >
      new Date(maisRecente.data)
      ? venda
      : maisRecente;
  }, null);
}

export function formatVendaValue(value) {
  return formatCurrency(Number(value || 0));
}