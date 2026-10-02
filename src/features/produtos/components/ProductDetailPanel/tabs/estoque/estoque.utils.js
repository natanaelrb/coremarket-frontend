export function formatDate(date) {
  if (!date) return "—";

  const value = new Date(date);

  if (Number.isNaN(value.getTime())) {
    return date;
  }

  return value.toLocaleDateString("pt-BR");
}

export function formatDateTime(date) {
  if (!date) return "—";

  const value = new Date(date);

  if (Number.isNaN(value.getTime())) {
    return date;
  }

  return value.toLocaleString("pt-BR", {
    dateStyle: "short",
    timeStyle: "short",
  });
}

export function getEstoqueData(produto) {
  const estoqueAtual = Number(produto?.estoque ?? 0);

  const reservado = Number(
    produto?.estoqueReservado ?? 0
  );

  const disponivel = Math.max(
    estoqueAtual - reservado,
    0
  );

  const estoqueMinimo = Number(
    produto?.estoqueMinimo ?? 0
  );

  const estoqueMaximo = Number(
    produto?.estoqueMaximo ?? estoqueMinimo * 15
  );

  const ocupacao =
    estoqueMaximo > 0
      ? Math.min(
          Math.round(
            (estoqueAtual / estoqueMaximo) * 100
          ),
          100
        )
      : 0;

  return {
    estoqueAtual,
    reservado,
    disponivel,
    estoqueMinimo,
    estoqueMaximo,
    ocupacao,
  };
}

export function getMovimentacoes(produto) {
  if (Array.isArray(produto?.movimentacoes)) {
    return produto.movimentacoes;
  }

  if (Array.isArray(produto?.movimentacoesRecentes)) {
    return produto.movimentacoesRecentes;
  }

  return [];
}