import {
  Package, Layers, Wallet, AlertTriangle, TimerOff,
  CalendarClock, CalendarX2, TrendingDown, Repeat, RefreshCcw,
} from 'lucide-react'

/**
 * Declarative config mapping each stat card to its icon, tone, key in the
 * stats object, and value formatting. Drives StatsCardsGrid so adding or
 * reordering a KPI card never requires touching JSX.
 */
export const STAT_CARDS_CONFIG = [
  { key: 'totalProdutos', label: 'Total de Produtos', icon: Package, tone: 'accent', format: 'integer' },
  { key: 'itensEmEstoque', label: 'Itens em Estoque', icon: Layers, tone: 'info', format: 'integer' },
  { key: 'valorTotalEstoque', label: 'Valor Total do Estoque', icon: Wallet, tone: 'warning', format: 'currency' },
  { key: 'baixoEstoque', label: 'Baixo Estoque', icon: AlertTriangle, tone: 'danger', format: 'integer' },
  { key: 'produtosZerados', label: 'Produtos Zerados', icon: TimerOff, tone: 'neutral', format: 'integer' },
  { key: 'proximosValidade', label: 'Próximos da Validade', icon: CalendarClock, tone: 'warning', format: 'integer' },
  { key: 'produtosVencidos', label: 'Produtos Vencidos', icon: CalendarX2, tone: 'danger', format: 'integer' },
  { key: 'perdasDoMes', label: 'Perdas do Mês', icon: TrendingDown, tone: 'info', format: 'currency' },
  { key: 'giroMedio', label: 'Giro Médio', icon: Repeat, tone: 'success', format: 'decimal' },
  { key: 'coberturaEstoque', label: 'Cobertura de Estoque', icon: RefreshCcw, tone: 'accent', format: 'integer' },
]

export const TONE_ICON_STYLES = {
  accent: 'bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400',
  info: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
  warning: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',
  danger: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400',
  success: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
  neutral: 'bg-gray-100 text-gray-600 dark:bg-gray-500/10 dark:text-gray-300',
}
