// TODO(api): substituir por GET /api/vendas/kpis?data=hoje
// Controller esperado: VendaController#obterKpisDoDia (retorno VendaKpiDTO)
export const MOCK_KPIS = {
  vendasHoje: 8742.5,
  quantidadeVendasHoje: 127,
  variacaoVendas: 8.4,
  ticketMedio: 68.84,
  variacaoTicketMedio: 3.2,
  itensVendidos: 1284,
  vendasCanceladas: 4,
  valorCancelado: 327.9,
  descontosTotais: 482.3,
  recebidoHoje: 8315.4,
};

// TODO(api): substituir por GET /api/caixas/atual
// Controller esperado: CaixaController#obterCaixaAberto
export const MOCK_CAIXA = {
  numero: '03',
  status: 'ABERTO',
};

// TODO(api): substituir pelo usuário autenticado via /api/auth/me
export const MOCK_OPERADOR = {
  nome: 'João Silva',
  avatarUrl: null,
};

