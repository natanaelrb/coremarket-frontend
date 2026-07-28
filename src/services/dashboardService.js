export async function buscarResumoDashboard() {
  return {
    faturamentoTotal: 125000,
    totalClientes: 84,
    totalProdutos: 312,
    totalVendas: 587,

    vendasPorMes: [
      { mes: "Jan", valor: 12000 },
      { mes: "Fev", valor: 15000 },
      { mes: "Mar", valor: 18000 },
      { mes: "Abr", valor: 22000 },
      { mes: "Mai", valor: 28000 },
      { mes: "Jun", valor: 30000 }
    ]
  };
}