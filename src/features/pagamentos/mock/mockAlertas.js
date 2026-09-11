// TODO(api): substituir por GET /api/pagamentos/alertas?periodoInicio=&periodoFim=
export const MOCK_ALERTAS = [
  {
    id: 'alerta-vencidos',
    tone: 'danger',
    titulo: '12 pagamentos vencidos',
    valorTotal: 3240.0,
    actionLabel: 'Ver vencidos',
    filterTabKey: 'vencidos',
  },
  {
    id: 'alerta-vencem-hoje',
    tone: 'warning',
    titulo: '8 pagamentos vencem hoje',
    valorTotal: 980.0,
    actionLabel: 'Ver hoje',
    filterTabKey: 'a-pagar',
  },
  {
    id: 'alerta-vencem-semana',
    tone: 'info',
    titulo: '28 vencem nos próximos 7 dias',
    valorTotal: 4850.0,
    actionLabel: 'Ver próximos',
    filterTabKey: 'a-pagar',
  },
];
