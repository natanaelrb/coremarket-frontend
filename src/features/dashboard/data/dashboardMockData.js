import acucarImg from "../../../assets/products/acucar-1kg.png";
import arrozImg from "../../../assets/products/Arroz.png";
import cafeImg from "../../../assets/products/cafe-kimimo.png";
import feijaoImg from "../../../assets/products/feijao-carioca.png";
import oleoImg from "../../../assets/products/oleo-soja.png";

/**
 * Dados mockados do módulo Dashboard.
 * Cada bloco indica o endpoint real que deverá substituí-lo (ver dashboardService.js).
 */

// TODO(api): GET /dashboard/overview -> stats
export const mockOverviewStats = {
  clientes: {
    valor: 84,
    variacao: 12,
    historico: [58, 65, 61, 70, 68, 82, 76, 80, 92, 85, 81, 84],
  },

  produtos: {
    valor: 312,
    variacao: 18,
    historico: [225, 238, 232, 255, 280, 260, 248, 310, 285, 300, 275, 312],
  },

  compras: {
    valor: 12540,
    variacao: 24.5,
    historico: [7800, 8500, 8200, 9400, 11000, 9800, 8700, 10500, 9900, 11500, 10800, 12540],
  },

  vendas: {
    valor: 18760,
    variacao: 32.1,
    historico: [11800, 13200, 12500, 14000, 13700, 15800, 14900, 17200, 16500, 18100, 17600, 18760],
  },

  lucroLiquido: {
    valor: 6220,
    variacao: 28.7,
    historico: [2900, 3400, 3100, 3900, 4500, 4100, 5200, 4700, 5600, 5100, 5800, 6220],
  },
};

// TODO(api): GET /dashboard/overview -> faturamentoMensal
export const mockFaturamentoMensal = [
  { mes: 'Mai', vendas: 13200, compras: 9100, lucro: 4100 },
  { mes: 'Jun', vendas: 14100, compras: 9600, lucro: 4500 },
  { mes: 'Jul', vendas: 13600, compras: 10300, lucro: 3300 },
  { mes: 'Ago', vendas: 15200, compras: 10100, lucro: 5100 },
  { mes: 'Set', vendas: 14800, compras: 10800, lucro: 4000 },
  { mes: 'Out', vendas: 16100, compras: 11200, lucro: 4900 },
  { mes: 'Nov', vendas: 15600, compras: 11900, lucro: 3700 },
  { mes: 'Dez', vendas: 17300, compras: 12100, lucro: 5200 },
  { mes: 'Jan', vendas: 16800, compras: 12600, lucro: 4200 },
  { mes: 'Fev', vendas: 17900, compras: 12300, lucro: 5600 },
  { mes: 'Mar', vendas: 18200, compras: 12900, lucro: 5300 },
  { mes: 'Abr', vendas: 18760, compras: 12540, lucro: 6220 },
];

// TODO(api): GET /dashboard/overview -> vendasPorCategoria
export const mockVendasPorCategoria = [
  { categoria: 'Alimentos', percentual: 38.2, valor: 7160 },
  { categoria: 'Bebidas', percentual: 24.7, valor: 4640 },
  { categoria: 'Higiene', percentual: 18.3, valor: 3430 },
  { categoria: 'Limpeza', percentual: 10.1, valor: 1890 },
  { categoria: 'Outros', percentual: 8.7, valor: 1640 },
];

// TODO(api): GET /dashboard/overview -> statusPagamentos
export const mockStatusPagamentos = [
  { status: 'PAGO', label: 'Pagos', quantidade: 62, percentual: 45.6 },
  { status: 'PENDENTE', label: 'Pendentes', quantidade: 48, percentual: 35.3 },
  { status: 'VENCIDO', label: 'Vencidos', quantidade: 26, percentual: 19.1 },
];

// TODO(api): GET /dashboard/overview -> produtosMaisVendidos
export const mockProdutosMaisVendidos = [
  {
    produto: 'Arroz 5kg',
    quantidade: 245,
    faturamento: 1960,
    imagemUrl: arrozImg,
  },
  {
    produto: 'Feijão Carioca 1kg',
    quantidade: 189,
    faturamento: 1512,
    imagemUrl: feijaoImg,
  },
  {
    produto: 'Óleo de Soja 900ml',
    quantidade: 156,
    faturamento: 1248,
    imagemUrl: oleoImg,
  },
  {
    produto: 'Açúcar 1kg',
    quantidade: 134,
    faturamento: 938,
    imagemUrl: acucarImg,
  },
  {
    produto: 'Café 500g',
    quantidade: 128,
    faturamento: 896,
    imagemUrl: cafeImg,
  },
];

// TODO(api): GET /dashboard/overview -> topClientes
export const mockTopClientes = [
  { cliente: 'Maria Silva', compras: 18, faturamento: 2450 },
  { cliente: 'João Santos', compras: 15, faturamento: 1980 },
  { cliente: 'Ana Costa', compras: 12, faturamento: 1650 },
  { cliente: 'Carlos Lima', compras: 11, faturamento: 1320 },
  { cliente: 'Fernanda Souza', compras: 9, faturamento: 1120 },
];

// TODO(api): GET /dashboard/overview -> alertas
export const mockAlertas = [
  { tipo: 'ESTOQUE_BAIXO', label: 'Produtos com estoque baixo', quantidade: 15, unidade: 'produtos', criticidade: 'ATENCAO' },
  { tipo: 'SEM_ESTOQUE', label: 'Produtos sem estoque', quantidade: 8, unidade: 'produtos', criticidade: 'CRITICO' },
  { tipo: 'COMPRAS_VENCIDAS', label: 'Compras vencidas', quantidade: 5, unidade: 'compras', criticidade: 'ATENCAO' },
  { tipo: 'VENDAS_VENCIDAS', label: 'Vendas vencidas', quantidade: 12, unidade: 'vendas', criticidade: 'CRITICO' },
];

// TODO(api): GET /dashboard/overview -> estoqueCritico
export const mockEstoqueCritico = [
  {
    produto: 'Arroz Tipo 1',
    quantidade: 10,
    minimo: 20,
    imagemUrl: arrozImg,
  },
  {
    produto: 'Feijão Carioca',
    quantidade: 5,
    minimo: 15,
    imagemUrl: feijaoImg,
  },
  {
    produto: 'Óleo de Soja',
    quantidade: 2,
    minimo: 12,
    imagemUrl: oleoImg,
  },
  {
    produto: 'Açúcar 1kg',
    quantidade: 8,
    minimo: 15,
    imagemUrl: acucarImg,
  },
  {
    produto: 'Café 500g',
    quantidade: 7,
    minimo: 10,
    imagemUrl: cafeImg,
  },
];

// TODO(api): GET /dashboard/overview -> resumoFinanceiro
export const mockResumoFinanceiro = {
  faturamentoBruto: 18760,
  custoMercadorias: 12540,
  lucroLiquido: 6220,
  margemPercentual: 33.1,
};

// TODO(api): GET /dashboard/overview -> metaMensal
export const mockMetaMensal = {
  meta: 25000,
  atual: 18760,
};

// ---------------------------------------------------------------------------
// Avançado
// ---------------------------------------------------------------------------

// TODO(api): GET /dashboard/advanced -> stats
export const mockAdvancedStats = {
  ticketMedio: {
    valor: 187.6,
    anterior: 161.4,
    variacao: 16.2,
    historico: [164.2, 158.7, 171.5, 166.3, 179.8, 174.6, 187.6],
  },

  margemLucro: {
    valor: 33.1,
    anterior: 28.3,
    variacao: 4.8,
    historico: [29.1, 27.8, 30.4, 28.9, 31.2, 30.1, 33.1],
  },

  taxaConversao: {
    valor: 68.4,
    anterior: 62.7,
    variacao: 9.1,
    historico: [61.5, 58.9, 64.2, 62.1, 66.8, 64.7, 68.4],
  },

  frequenciaCompra: {
    valor: 2.8,
    anterior: 2.6,
    variacao: 8.1,
    historico: [2.4, 2.2, 2.6, 2.5, 2.7, 2.6, 2.8],
  },

  produtosPorVenda: {
    valor: 4.3,
    anterior: 4.0,
    variacao: 6.7,
    historico: [3.8, 3.6, 4.0, 3.9, 4.2, 4.0, 4.3],
  },
};

// TODO(api): GET /dashboard/advanced -> faturamentoPorCategoria
export const mockFaturamentoPorCategoria = [
  { categoria: 'Alimentos', valor: 7160 },
  { categoria: 'Bebidas', valor: 4640 },
  { categoria: 'Higiene', valor: 3430 },
  { categoria: 'Limpeza', valor: 1890 },
  { categoria: 'Outros', valor: 1640 },
];

// TODO(api): GET /dashboard/advanced -> comprasVsVendas (reaproveita a série mensal)
export const mockComprasVsVendas = mockFaturamentoMensal.map(({ mes, vendas, compras }) => ({ mes, vendas, compras }));

// TODO(api): GET /dashboard/advanced -> resumoFinanceiroDetalhado
export const mockResumoFinanceiroDetalhado = {
  faturamentoBruto: 18760,
  impostos: 1876,
  custoMercadorias: 12540,
  despesasOperacionais: 2124,
  lucroLiquido: 6220,
  margemPercentual: 33.1,
};

// TODO(api): GET /dashboard/advanced -> produtosMaisLucrativos
export const mockProdutosMaisLucrativos = [
  { produto: 'Café 500g', lucro: 980, margem: 42 },
  { produto: 'Óleo de Soja 900ml', lucro: 870, margem: 38 },
  { produto: 'Açúcar 1kg', lucro: 720, margem: 35 },
  { produto: 'Arroz 5kg', lucro: 640, margem: 28 },
  { produto: 'Feijão Carioca 1kg', lucro: 510, margem: 25 },
];

// TODO(api): GET /dashboard/advanced -> produtosMenosVendidos
export const mockProdutosMenosVendidos = [
  { produto: 'Fermento 100g', quantidade: 4 },
  { produto: 'Molho inglês', quantidade: 6 },
  { produto: 'Vinagre 750ml', quantidade: 8 },
  { produto: 'Azeitona 200g', quantidade: 9 },
  { produto: 'Sal grosso 1kg', quantidade: 11 },
];

// TODO(api): GET /dashboard/advanced -> rankingVendedores
// Entidade de vendedor ainda não existe no backend — mock claramente isolado
// para facilitar a substituição futura sem tocar na UI.
export const mockRankingVendedores = [
  { posicao: 1, nome: 'Lucas Pereira', faturamento: 21300, numeroVendas: 142 },
  { posicao: 2, nome: 'Beatriz Alves', faturamento: 17700, numeroVendas: 118 },
  { posicao: 3, nome: 'Rafael Souza', faturamento: 14550, numeroVendas: 97 },
  { posicao: 4, nome: 'Camila Rocha', faturamento: 12150, numeroVendas: 81 },
];

// TODO(api): GET /dashboard/advanced -> previsaoEstoque
export const mockPrevisaoEstoque = [
  { produto: 'Arroz Tipo 1', consumoMedioDiario: 2.5, estoqueAtual: 10 },
  { produto: 'Feijão Carioca', consumoMedioDiario: 2.5, estoqueAtual: 5 },
  { produto: 'Óleo de Soja', consumoMedioDiario: 2, estoqueAtual: 2 },
  { produto: 'Açúcar 1kg', consumoMedioDiario: 1.3, estoqueAtual: 8 },
];

// TODO(api): GET /dashboard/advanced -> heatmapVendas
// Matriz semana x dia da semana com intensidade relativa de vendas (0-1).
export const mockSalesHeatmap = [
  [0.3, 0.4, 0.5, 0.6, 0.8, 0.9, 0.5],
  [0.2, 0.3, 0.9, 0.5, 0.7, 0.8, 0.4],
  [0.4, 0.5, 0.6, 0.7, 0.9, 1.0, 0.6],
  [0.3, 0.6, 0.5, 0.6, 0.8, 0.9, 0.5],
  [0.5, 0.6, 0.7, 0.8, 0.9, 0.9, 0.6],
];

// TODO(api): GET /dashboard/advanced -> vendasPorDiaSemana
export const mockVendasPorDiaSemana = [
  { dia: 'Seg', faturamento: 1350 },
  { dia: 'Ter', faturamento: 1520 },
  { dia: 'Qua', faturamento: 1180 },
  { dia: 'Qui', faturamento: 1290 },
  { dia: 'Sex', faturamento: 2380 },
  { dia: 'Sáb', faturamento: 2650 },
  { dia: 'Dom', faturamento: 2010 },
];

// TODO(api): GET /dashboard/advanced -> analiseClientes
export const mockAnaliseClientes = {
  novos: {
    valor: 32,
    variacao: 14.2,
    historico: [18, 21, 20, 24, 22, 28, 26, 32],
  },

  recorrentes: {
    valor: 146,
    variacao: 9.3,
    historico: [112, 118, 115, 124, 121, 132, 138, 146],
  },

  inativos: {
    valor: 18,
    variacao: 5.6,
    historico: [11, 13, 12, 15, 14, 16, 15, 18],
  },
};