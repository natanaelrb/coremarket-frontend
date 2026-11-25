import { useState } from "react";

import { listarVendas } from "../services/vendaStorage.js";

function calcularCategorias() {
  const vendas = listarVendas().filter(
    (venda) => venda.status === "CONCLUIDA",
  );

  const agrupamento = {};

  vendas.forEach((venda) => {
    const itens = venda.itens || [];

    const subtotalItens = itens.reduce(
      (total, item) => total + Number(item.subtotal || 0),
      0,
    );

    const totalVenda = Math.max(0, Number(venda.total || 0));

    itens.forEach((item) => {
      const nome = item.categoria || "Sem categoria";
      const subtotalItem = Number(item.subtotal || 0);
      const quantidade = Number(item.quantidade || 0);

      if (!agrupamento[nome]) {
        agrupamento[nome] = {
          nome,
          quantidade: 0,
          faturamento: 0,
        };
      }

      const participacaoItem =
        subtotalItens > 0 ? subtotalItem / subtotalItens : 0;

      agrupamento[nome].quantidade += quantidade;
      agrupamento[nome].faturamento += totalVenda * participacaoItem;
    });
  });

  const resultado = Object.values(agrupamento).sort(
    (a, b) => b.faturamento - a.faturamento,
  );

  const faturamentoTotal = resultado.reduce(
    (total, categoria) => total + categoria.faturamento,
    0,
  );

  return resultado.map((categoria) => ({
    ...categoria,
    participacao:
      faturamentoTotal > 0
        ? (categoria.faturamento / faturamentoTotal) * 100
        : 0,
  }));
}

export function useDesempenhoCategorias() {
  const [categorias] = useState(calcularCategorias);

  return {
    categorias,
    carregando: false,
  };
}

export default useDesempenhoCategorias;