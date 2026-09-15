// TODO(api): substituir por GET /api/clientes/segmentacao
export const MOCK_SEGMENTACAO_CONTAGEM = {
  TODOS: 1248,
  MAIORES_COMPRADORES: 210,
  INADIMPLENTES: 47,
  INATIVOS: 143,
  NOVOS_CLIENTES: 58,
}

// TODO(api): substituir por GET /api/clientes/top?limit=5&ordenarPor=totalComprado
export const MOCK_TOP_CLIENTES = [
  { posicao: 1, nome: 'João da Silva', compras: 47, totalComprado: 8450.0 },
  { posicao: 2, nome: 'Maria Santos', compras: 38, totalComprado: 3240.0 },
  { posicao: 3, nome: 'Carlos Souza', compras: 32, totalComprado: 2780.0 },
  { posicao: 4, nome: 'Ana Costa', compras: 21, totalComprado: 2150.0 },
  { posicao: 5, nome: 'Fernanda Oliveira', compras: 25, totalComprado: 1980.0 },
]
