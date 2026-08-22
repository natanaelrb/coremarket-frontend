// MOCK DATA — Painel "Alertas e Avisos".
// TODO(api): GET /api/estoque/alertas?tipo=movimentacao
// Controller sugerido: EstoqueAlertaController#listarAlertas

export const MOCK_ALERTS = [
  {
    id: 'alt-1',
    severidade: 'critica',
    mensagem: '5 produtos tiveram perdas nos últimos 7 dias',
  },
  {
    id: 'alt-2',
    severidade: 'atencao',
    mensagem: 'Produto "Leite Integral 1L" teve 8 ajustes este mês',
  },
  {
    id: 'alt-3',
    severidade: 'critica',
    mensagem: 'Produto "Arroz Tio João 5kg" possui divergências recorrentes',
  },
  {
    id: 'alt-4',
    severidade: 'info',
    mensagem: '12 produtos próximos do vencimento',
  },
];
