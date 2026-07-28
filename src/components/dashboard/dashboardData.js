// ─── DADOS MOCKADOS — DASHBOARD V1 + V2 ──────────────────────────────────────
// Substituir por chamadas à API conforme os endpoints forem criados

export const META_MENSAL = 25000;
export const ATUAL_MES = 18760;

// Faturamento mensal — Vendas × Compras × Lucro (12 meses, como no print)
export const faturamentoMensal = [
  { mes: "Mai", vendas: 9800,  compras: 7200,  lucro: 2600 },
  { mes: "Jun", vendas: 11200, compras: 7600,  lucro: 3600 },
  { mes: "Jul", vendas: 14500, compras: 8800,  lucro: 5700 },
  { mes: "Ago", vendas: 12300, compras: 8100,  lucro: 4200 },
  { mes: "Set", vendas: 16800, compras: 9400,  lucro: 7400 },
  { mes: "Out", vendas: 13900, compras: 8700,  lucro: 5200 },
  { mes: "Nov", vendas: 19200, compras: 10200, lucro: 9000 },
  { mes: "Dez", vendas: 15600, compras: 9100,  lucro: 6500 },
  { mes: "Jan", vendas: 17400, compras: 9800,  lucro: 7600 },
  { mes: "Fev", vendas: 14100, compras: 8600,  lucro: 5500 },
  { mes: "Mar", vendas: 16700, compras: 9900,  lucro: 6800 },
  { mes: "Abr", vendas: 18760, compras: 12540, lucro: 6220 },
];

// Produtos mais vendidos — tabela
export const produtosMaisVendidos = [
  { nome: "Arroz 5kg",         quantidade: 245, faturamento: 1960 },
  { nome: "Feijão Carioca 1kg",quantidade: 189, faturamento: 1512 },
  { nome: "Óleo de Soja 900ml",quantidade: 156, faturamento: 1248 },
  { nome: "Açúcar 1kg",        quantidade: 134, faturamento: 938  },
  { nome: "Café 500g",         quantidade: 128, faturamento: 896  },
];

// Vendas por categoria — donut
export const vendasPorCategoria = [
  { name: "Alimentos", value: 38.2, color: "#7C3AED" },
  { name: "Bebidas",   value: 24.7, color: "#2563EB" },
  { name: "Higiene",   value: 18.3, color: "#0EA5E9" },
  { name: "Limpeza",   value: 10.1, color: "#F59E0B" },
  { name: "Outros",    value: 8.7,  color: "#64748B" },
];

// Status de pagamentos — donut
export const statusPagamentos = [
  { name: "Pagos",     value: 62, qtd: 62, color: "#10B981" },
  { name: "Pendentes", value: 48, qtd: 48, color: "#F59E0B" },
  { name: "Vencidos",  value: 26, qtd: 26, color: "#EF4444" },
];

// Top clientes — tabela
export const topClientes = [
  { nome: "Maria Silva",    compras: 18, faturamento: 2450 },
  { nome: "João Santos",    compras: 15, faturamento: 1980 },
  { nome: "Ana Costa",      compras: 12, faturamento: 1650 },
  { nome: "Carlos Lima",    compras: 11, faturamento: 1320 },
  { nome: "Fernanda Souza", compras: 9,  faturamento: 1120 },
];

// Alertas importantes
export const alertasImportantes = [
  { titulo: "Produtos com estoque baixo", detalhe: "15 produtos", qtd: 15, nivel: "amber" },
  { titulo: "Produtos sem estoque",       detalhe: "8 produtos",  qtd: 8,  nivel: "red" },
  { titulo: "Compras vencidas",           detalhe: "5 compras",   qtd: 5,  nivel: "amber" },
  { titulo: "Vendas vencidas",            detalhe: "12 vendas",   qtd: 12, nivel: "red" },
];

// Compras × Vendas — linha
export const comprasVsVendas = faturamentoMensal.map((m) => ({
  mes: m.mes, compras: m.compras, vendas: m.vendas,
}));

// Resumo financeiro
export const resumoFinanceiro = {
  faturamentoBruto: 18760,
  custoMercadorias: 12540,
  lucroLiquido: 6220,
};

// Estoque crítico
export const estoqueCritico = [
  { nome: "Arroz Tipo 1",   qtd: 10, max: 100 },
  { nome: "Feijão Carioca", qtd: 5,  max: 100 },
  { nome: "Óleo de Soja",   qtd: 2,  max: 100 },
  { nome: "Açúcar 1kg",     qtd: 8,  max: 100 },
];

// Vendas por dia da semana
export const vendasPorDia = [
  { dia: "Seg", vendas: 820  },
  { dia: "Ter", vendas: 1240 },
  { dia: "Qua", vendas: 1680 },
  { dia: "Qui", vendas: 2100 },
  { dia: "Sex", vendas: 2800 },
  { dia: "Sáb", vendas: 3400 },
  { dia: "Dom", vendas: 1500 },
];

// ─── DADOS V2 (avançado) ─────────────────────────────────────────────────────

export const faturamentoPorCategoria = [
  { categoria: "Alimentos", faturamento: 7180 },
  { categoria: "Bebidas",   faturamento: 4630 },
  { categoria: "Higiene",   faturamento: 3430 },
  { categoria: "Limpeza",   faturamento: 1900 },
  { categoria: "Outros",    faturamento: 1620 },
];

export const produtosMaisLucrativos = [
  { nome: "Café 500g",          margem: 42, lucro: 980 },
  { nome: "Óleo de Soja 900ml", margem: 38, lucro: 870 },
  { nome: "Açúcar 1kg",         margem: 35, lucro: 720 },
  { nome: "Arroz 5kg",          margem: 28, lucro: 640 },
  { nome: "Feijão Carioca 1kg", margem: 25, lucro: 510 },
];

export const produtosMenosVendidos = [
  { nome: "Fermento 100g",     vendas: 4 },
  { nome: "Molho inglês",      vendas: 6 },
  { nome: "Vinagre 750ml",     vendas: 8 },
  { nome: "Azeitona 200g",     vendas: 9 },
  { nome: "Sal grosso 1kg",    vendas: 11 },
];

export const rankingVendedores = [
  { nome: "Lucas Pereira",  vendas: 142, total: 21300 },
  { nome: "Beatriz Alves",  vendas: 118, total: 17700 },
  { nome: "Rafael Souza",   vendas: 97,  total: 14550 },
  { nome: "Camila Rocha",   vendas: 81,  total: 12150 },
];

export const previsaoEstoque = [
  { nome: "Arroz Tipo 1",   diasRestantes: 4,  mediaDiaria: 2.5 },
  { nome: "Feijão Carioca", diasRestantes: 2,  mediaDiaria: 2.5 },
  { nome: "Óleo de Soja",   diasRestantes: 1,  mediaDiaria: 2   },
  { nome: "Açúcar 1kg",     diasRestantes: 6,  mediaDiaria: 1.3 },
];

export const ticketMedio = {
  atual: 187.60,
  anterior: 161.40,
  variacao: 16.2,
};

// Heatmap: 5 semanas × 7 dias
export const heatmapData = [
  [320, 580, 720,  940,  1200, 1450, 680],
  [290, 610, 680,  880,  1180, 1520, 720],
  [350, 540, 760,  1020, 1310, 1380, 590],
  [410, 650, 810,  990,  1240, 1490, 710],
  [280, 490, 640,  760,  1100, 1360, 630],
];
export const DIAS_SEMANA = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
export const HEAT_MAX = 1520;
