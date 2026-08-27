/**
 * Mock series for the "Análises do Estoque" charts section.
 * TODO(api): replace each block with its corresponding analytics endpoint:
 *  - GET /api/estoque/analytics/entradas-saidas?dias=30
 *  - GET /api/estoque/analytics/valor-historico
 *  - GET /api/estoque/analytics/por-categoria
 *  - GET /api/estoque/analytics/situacao
 *  - GET /api/estoque/analytics/top-giro
 */
export const MOCK_ENTRADAS_SAIDAS = [
  { data: '10/04', entradas: 120, saidas: 90 },
  { data: '15/04', entradas: 98, saidas: 130 },
  { data: '20/04', entradas: 140, saidas: 100 },
  { data: '25/04', entradas: 160, saidas: 120 },
  { data: '30/04', entradas: 90, saidas: 150 },
  { data: '05/05', entradas: 175, saidas: 110 },
  { data: '10/05', entradas: 130, saidas: 95 },
]

export const MOCK_VALOR_ESTOQUE_HISTORICO = [
  { data: '10/04', valor: 410000 },
  { data: '17/04', valor: 452000 },
  { data: '24/04', valor: 468000 },
  { data: '01/05', valor: 431000 },
  { data: '08/05', valor: 470000 },
  { data: '15/05', valor: 485320.8 },
]

export const MOCK_ESTOQUE_POR_CATEGORIA = [
  { categoria: 'Alimentos', percentual: 35 },
  { categoria: 'Bebidas', percentual: 25 },
  { categoria: 'Limpeza', percentual: 15 },
  { categoria: 'Laticínios', percentual: 10 },
  { categoria: 'Frios', percentual: 8 },
  { categoria: 'Outros', percentual: 7 },
]

export const MOCK_SITUACAO_ESTOQUE = [
  { situacao: 'Normal', percentual: 72, tone: 'success' },
  { situacao: 'Baixo Estoque', percentual: 10, tone: 'warning' },
  { situacao: 'Sem estoque', percentual: 7, tone: 'danger' },
  { situacao: 'Próx. Validade', percentual: 6, tone: 'warning' },
  { situacao: 'Vencidos', percentual: 5, tone: 'danger' },
]

export const MOCK_TOP_GIRO = [
  { produto: 'Leite Italac 1L', dias: 4.2 },
  { produto: 'Coca-Cola 2L', dias: 6.1 },
  { produto: 'Arroz Tio João', dias: 7.3 },
  { produto: 'Detergente Ypê', dias: 8.5 },
  { produto: 'Pão de Forma', dias: 9.2 },
]
