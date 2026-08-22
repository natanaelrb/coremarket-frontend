export const HISTORICO_COLUMNS = [
  { key: 'numero', label: 'Venda' },
  { key: 'dataHora', label: 'Data / Hora' },
  { key: 'cliente', label: 'Cliente' },
  { key: 'operador', label: 'Operador' },
  { key: 'itens', label: 'Itens', align: 'center' },
  { key: 'total', label: 'Total', align: 'right' },
  { key: 'pagamento', label: 'Pagamento' },
  { key: 'status', label: 'Status' },
  { key: 'acoes', label: 'Ações', align: 'right' },
];

export const PAGE_SIZE_OPTIONS = [5, 10, 20, 50];

export const PERIODO_OPTIONS = [
  { value: 'HOJE', label: 'Hoje' },
  { value: 'ONTEM', label: 'Ontem' },
  { value: '7_DIAS', label: 'Últimos 7 dias' },
  { value: '30_DIAS', label: 'Últimos 30 dias' },
  { value: 'PERSONALIZADO', label: 'Personalizado' },
];

