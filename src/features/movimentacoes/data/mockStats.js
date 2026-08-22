// MOCK DATA — Cards de estatísticas do topo da página.
// TODO(api): GET /api/estoque/movimentacoes/resumo?periodoInicio=&periodoFim=
// Controller sugerido: MovimentacaoEstoqueController#resumoPeriodo
// DTO sugerido: ResumoMovimentacaoDTO (entradas, saidas, ajustes, perdas, saldo, series)

export const MOCK_STATS = {
  entradas: {
    total: 1248,
    variacaoPercentual: 12,
    tendencia: 'up',
    serie: [4, 6, 5, 8, 7, 9, 8, 10, 9, 12, 11, 13],
  },
  saidas: {
    total: 986,
    variacaoPercentual: -8,
    tendencia: 'down',
    serie: [10, 9, 11, 8, 9, 7, 8, 6, 7, 6, 5, 6],
  },
  ajustes: {
    total: 14,
    variacaoAbsoluta: 2,
  },
  perdas: {
    total: 32,
    vencimento: 18,
    avaria: 9,
    outros: 5,
  },
  saldo: {
    entradas: 1248,
    saidas: -986,
    total: 262,
    serie: [2, -1, 3, 4, -2, 5, 6, 3, 4, 5, 6, 7],
  },
};
