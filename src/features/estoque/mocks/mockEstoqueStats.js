/**
 * Mock KPI values for the stat cards row.
 * TODO(api): replace with GET /api/estoque/resumo
 */
export const MOCK_ESTOQUE_STATS = {
  totalProdutos: { value: 3245, suffix: 'ativos' },
  itensEmEstoque: { value: 18742, suffix: 'unidades' },
  valorTotalEstoque: { value: 485320.8, suffix: null },
  baixoEstoque: { value: 23, suffix: 'produtos' },
  produtosZerados: { value: 11, suffix: 'produtos' },
  proximosValidade: { value: 17, suffix: 'produtos' },
  produtosVencidos: { value: 5, suffix: 'produtos' },
  perdasDoMes: { value: 3210.0, suffix: null },
  giroMedio: { value: 12.4, suffix: 'dias' },
  coberturaEstoque: { value: 28, suffix: 'dias' },
}
