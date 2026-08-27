/**
 * Mock recent stock movement feed shown in the product detail panel.
 * TODO(api): replace with GET /api/estoque/produtos/{id}/movimentacoes?limit=5
 */
export const MOCK_MOVIMENTACOES_RECENTES = [
  { id: 'mv-1', dataHora: '2025-05-12T10:23:00', tipo: 'Entrada', tone: 'success', quantidade: 100, doc: 'NF 12458' },
  { id: 'mv-2', dataHora: '2025-05-10T16:45:00', tipo: 'Venda', tone: 'danger', quantidade: -8, doc: 'Venda 15478' },
  { id: 'mv-3', dataHora: '2025-05-08T09:12:00', tipo: 'Transferência', tone: 'info', quantidade: -20, doc: 'TRF 000125' },
  { id: 'mv-4', dataHora: '2025-05-05T14:30:00', tipo: 'Ajuste', tone: 'warning', quantidade: 2, doc: 'Ajuste Manual' },
  { id: 'mv-5', dataHora: '2025-05-01T11:05:00', tipo: 'Venda', tone: 'danger', quantidade: -5, doc: 'Venda 15230' },
]
