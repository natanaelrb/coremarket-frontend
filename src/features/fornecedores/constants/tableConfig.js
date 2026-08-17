export const TABLE_COLUMNS = [
  { key: 'fornecedor', label: 'Fornecedor', sortable: true },
  { key: 'documento', label: 'Documento', sortable: false },
  { key: 'cidadeEstado', label: 'Cidade / Estado', sortable: true },
  { key: 'telefone', label: 'Telefone', sortable: false },
  { key: 'produtos', label: 'Produtos', sortable: true },
  { key: 'ultimaCompra', label: 'Última Compra', sortable: true },
  { key: 'totalComprado', label: 'Total Comprado', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
  { key: 'acoes', label: 'Ações', sortable: false },
]

export const STATUS_STYLES = {
  Ativo: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400',
  Inativo: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-400',
  Bloqueado: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400',
}

export const DETAIL_TABS = [
  { key: 'visao-geral', label: 'Visão Geral' },
  { key: 'dados', label: 'Dados' },
  { key: 'produtos', label: 'Produtos' },
  { key: 'compras', label: 'Compras' },
  { key: 'financeiro', label: 'Financeiro' },
  { key: 'mais', label: 'Mais' },
]

export const TIMELINE_TABS = [
  { key: 'timeline', label: 'Timeline' },
  { key: 'contatos', label: 'Contatos' },
  { key: 'anexos', label: 'Anexos' },
  { key: 'observacoes', label: 'Observações' },
  { key: 'historico-financeiro', label: 'Histórico Financeiro' },
]

export const TIMELINE_DOT_COLORS = {
  compra: 'bg-emerald-500',
  produto: 'bg-sky-500',
  preco: 'bg-amber-500',
  pagamento: 'bg-emerald-500',
  cadastro: 'bg-violet-500',
}

export const ALERTA_ICON_STYLES = {
  pendente: { bg: 'bg-amber-100 dark:bg-amber-500/15', text: 'text-amber-600 dark:text-amber-400' },
  atraso: { bg: 'bg-rose-100 dark:bg-rose-500/15', text: 'text-rose-600 dark:text-rose-400' },
  info: { bg: 'bg-sky-100 dark:bg-sky-500/15', text: 'text-sky-600 dark:text-sky-400' },
  estoque: { bg: 'bg-violet-100 dark:bg-violet-500/15', text: 'text-violet-600 dark:text-violet-400' },
}
