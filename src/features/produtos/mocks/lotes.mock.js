// Mock: lotes de produtos (granularidade abaixo do produto, usado nos widgets do rodapé).
// Endpoint real sugerido: GET /api/produtos/lotes?situacao=vencendo|vencido

export const LOTES_PROXIMOS_VENCIMENTO_MOCK = [
  { id: 'LT001', produtoId: 'PROD-0002', produtoNome: 'Leite Integral 1L', lote: 'LT001', validade: '2026-08-05', diasRestantes: 2, imagemEmoji: '🥛', imagemCor: '#3B82F6' },
  { id: 'IG004', produtoId: 'PROD-0003', produtoNome: 'Iogurte Natural 170g', lote: 'IG004', validade: '2026-08-03', diasRestantes: 0, imagemEmoji: '🍦', imagemCor: '#F43F5E' },
  { id: 'QJ015', produtoId: 'PROD-0006', produtoNome: 'Queijo Mussarela Kg', lote: 'QJ015', validade: '2026-07-30', diasRestantes: -4, imagemEmoji: '🧀', imagemCor: '#FACC15' },
  { id: 'PR015', produtoId: 'PROD-0007', produtoNome: 'Presunto Kg', lote: 'PR015', validade: '2026-07-28', diasRestantes: -6, imagemEmoji: '🍖', imagemCor: '#EA580C' },
];

export const LOTES_VENCIDOS_MOCK = [
  { id: 'QJ014', produtoId: 'PROD-0006', produtoNome: 'Queijo Mussarela', lote: 'QJ014', validade: '2026-07-25', diasVencido: 9, quantidade: 5, imagemEmoji: '🧀', imagemCor: '#FACC15' },
  { id: 'LT099', produtoId: 'PROD-0002', produtoNome: 'Leite Integral 1L', lote: 'LT099', validade: '2026-07-20', diasVencido: 14, quantidade: 4, imagemEmoji: '🥛', imagemCor: '#3B82F6' },
  { id: 'IG001', produtoId: 'PROD-0003', produtoNome: 'Iogurte Morango 170g', lote: 'IG001', validade: '2026-07-15', diasVencido: 19, quantidade: 6, imagemEmoji: '🍦', imagemCor: '#F43F5E' },
];

// Segmentos do gráfico "Valor em risco" (doughnut). Cores mapeadas em chartTheme.
export const VALOR_EM_RISCO_MOCK = {
  totalRisco: 3420.5,
  segmentos: [
    { key: 'vencidos', label: 'Vencidos', valor: 1250.3, percentual: 36.6, color: '#EF4444' },
    { key: 'vence_7', label: 'Vence em 7 dias', valor: 1120.8, percentual: 32.8, color: '#F59E0B' },
    { key: 'vence_15', label: 'Vence em 15 dias', valor: 689.4, percentual: 20.1, color: '#10B981' },
    { key: 'vence_30', label: 'Vence em 30 dias', valor: 360.0, percentual: 10.5, color: '#3B82F6' },
  ],
};
