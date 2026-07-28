export async function buscarComprasPendentes() {
  return [
    {
      id: 1,
      cliente: { id: 1, nome: "Mercadinho Central" },
      valorTotal: 1500,
      valorPago: 500,
      saldoDevedor: 1000,
      formaPagamento: "PIX",
      statusPagamento: "PARCIAL",
      status: "PENDENTE",
      dataVencimento: "2026-06-20"
    }
  ];
}

export async function atualizarCompra(id, dados) {
  console.log("Compra atualizada:", id, dados);
  return dados;
}

export async function salvarCompra(compra) {
  console.log("Compra salva:", compra);
  return compra;
}

export async function excluirCompra(id) {
  console.log("Compra removida:", id);
  return true;
}

export async function listarCompras() {
  return [
    {
      id: 1,
      cliente: { id: 1, nome: "Mercadinho Central" },
      valorTotal: 1500,
      valorPago: 500,
      saldoDevedor: 1000,
      formaPagamento: "PIX",
      statusPagamento: "PARCIAL",
      status: "PENDENTE",
      dataVencimento: "2026-06-20"
    },
    {
      id: 2,
      cliente: { id: 2, nome: "Supermercado União" },
      valorTotal: 2200,
      valorPago: 2200,
      saldoDevedor: 0,
      formaPagamento: "Cartão",
      statusPagamento: "PAGO",
      status: "CONCLUIDA",
      dataVencimento: "2026-07-10"
    }
  ];
}