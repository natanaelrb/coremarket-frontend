import { useState } from "react";

import {
  MOCK_CAIXA,
  MOCK_OPERADOR,
} from "../data/mockKPIs.js";

import { listarVendas } from "../services/vendaStorage.js";

function calcularKPIsVendas(vendas) {
  const agora = new Date();

  const vendasHoje = vendas.filter((venda) => {
    const data = new Date(venda.dataHora);

    return (
      !Number.isNaN(data.getTime()) &&
      data.getFullYear() === agora.getFullYear() &&
      data.getMonth() === agora.getMonth() &&
      data.getDate() === agora.getDate()
    );
  });

  const concluidas = vendasHoje.filter(
    (venda) => venda.status === "CONCLUIDA",
  );

  const canceladas = vendasHoje.filter(
    (venda) => venda.status === "CANCELADA",
  );

  const faturamento = concluidas.reduce(
    (total, venda) => total + Number(venda.total || 0),
    0,
  );

  const quantidadeVendas = concluidas.length;

  const itensVendidos = concluidas.reduce((total, venda) => {
    if (Number.isFinite(Number(venda.quantidadeItens))) {
      return total + Number(venda.quantidadeItens);
    }

    return (
      total +
      (venda.itens || []).reduce(
        (soma, item) => soma + Number(item.quantidade || 0),
        0,
      )
    );
  }, 0);

  const valorCancelado = canceladas.reduce(
    (total, venda) => total + Number(venda.total || 0),
    0,
  );

  return {
    vendasHoje: faturamento,
    quantidadeVendasHoje: quantidadeVendas,
    ticketMedio:
      quantidadeVendas > 0 ? faturamento / quantidadeVendas : 0,
    itensVendidos,
    vendasCanceladas: canceladas.length,
    valorCancelado,
  };
}

export function useKPIsVendas() {
  const [kpis] = useState(() =>
    calcularKPIsVendas(listarVendas()),
  );

  return {
    kpis,
    carregando: false,
    caixa: MOCK_CAIXA,
    operador: MOCK_OPERADOR,
  };
}

export default useKPIsVendas;