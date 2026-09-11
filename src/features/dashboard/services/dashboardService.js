import axios from 'axios';
import * as mock from '../data/dashboardMockData';

const USE_MOCK = true; // TODO(api): remover quando os endpoints estiverem disponíveis

const api = axios.create({ baseURL: '/api' });

function withDelay(data, ms = 250) {
  return new Promise((resolve) => setTimeout(() => resolve(data), ms));
}

/**
 * Busca os dados da aba Visão Geral.
 * TODO(api): GET /dashboard/overview?periodo={periodId}
 */
export async function fetchOverviewData(periodId) {
  if (USE_MOCK) {
    return withDelay({
      stats: mock.mockOverviewStats,
      faturamentoMensal: mock.mockFaturamentoMensal,
      vendasPorCategoria: mock.mockVendasPorCategoria,
      statusPagamentos: mock.mockStatusPagamentos,
      produtosMaisVendidos: mock.mockProdutosMaisVendidos,
      topClientes: mock.mockTopClientes,
      alertas: mock.mockAlertas,
      estoqueCritico: mock.mockEstoqueCritico,
      resumoFinanceiro: mock.mockResumoFinanceiro,
      metaMensal: mock.mockMetaMensal,
    });
  }
  const { data } = await api.get('/dashboard/overview', { params: { periodo: periodId } });
  return data;
}

/**
 * Busca os dados da aba Avançado.
 * TODO(api): GET /dashboard/advanced?periodo={periodId}
 */
export async function fetchAdvancedData(periodId) {
  if (USE_MOCK) {
    return withDelay({
      stats: mock.mockAdvancedStats,
      faturamentoPorCategoria: mock.mockFaturamentoPorCategoria,
      comprasVsVendas: mock.mockComprasVsVendas,
      resumoFinanceiroDetalhado: mock.mockResumoFinanceiroDetalhado,
      produtosMaisLucrativos: mock.mockProdutosMaisLucrativos,
      produtosMenosVendidos: mock.mockProdutosMenosVendidos,
      rankingVendedores: mock.mockRankingVendedores,
      previsaoEstoque: mock.mockPrevisaoEstoque,
      salesHeatmap: mock.mockSalesHeatmap,
      vendasPorDiaSemana: mock.mockVendasPorDiaSemana,
      analiseClientes: mock.mockAnaliseClientes,
    });
  }
  const { data } = await api.get('/dashboard/advanced', { params: { periodo: periodId } });
  return data;
}
