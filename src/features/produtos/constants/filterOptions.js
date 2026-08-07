// Opções estáticas usadas nos filtros da FilterBar.
// As listas de categoria/fornecedor/marca vêm dos mocks (substituir por endpoints reais).

export const DATA_CADASTRO_OPTIONS = [
  { value: 'todos', label: 'Todos' },
  { value: '7d', label: 'Últimos 7 dias' },
  { value: '30d', label: 'Últimos 30 dias' },
  { value: '90d', label: 'Últimos 90 dias' },
  { value: 'ano', label: 'Este ano' },
];

export const BULK_ACTIONS = [
  { value: 'ativar', label: 'Ativar selecionados' },
  { value: 'inativar', label: 'Inativar selecionados' },
  { value: 'exportar', label: 'Exportar selecionados' },
  { value: 'excluir', label: 'Excluir selecionados', danger: true },
];
