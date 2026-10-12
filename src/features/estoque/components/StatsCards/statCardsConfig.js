import {
  Package,
  Layers,
  Wallet,
  AlertTriangle,
  TimerOff,
  CalendarClock,
  CalendarX2,
  TrendingDown,
  Repeat,
  RefreshCcw,
  PackageX,
  ChartNoAxesCombined,
} from 'lucide-react'

export const STAT_CARDS_CONFIG = [
  {
    key: 'totalProdutos',
    label: 'Total de Produtos',
    icon: Package,
    tone: 'success',
    format: 'integer',
    suffix: 'Produtos cadastrados',
    suffixTone: 'success',
    primary: true,
  },

  {
    key: 'itensEmEstoque',
    label: 'Itens em Estoque',
    icon: Layers,
    tone: 'success',
    format: 'integer',
    suffix: 'Quantidade disponível',
    suffixTone: 'success',
    primary: true,
  },

  {
    key: 'valorTotalEstoque',
    label: 'Valor Total do Estoque',
    icon: Wallet,
    tone: 'accent',
    format: 'currency',
    suffix: 'Valor em custo',
    suffixTone: 'accent',
    primary: true,
  },

  {
    key: 'baixoEstoque',
    label: 'Baixo Estoque',
    icon: AlertTriangle,
    tone: 'warning',
    format: 'integer',
    suffix: 'Precisam de reposição',
    suffixTone: 'warning',
    primary: true,
  },

  {
    key: 'produtosZerados',
    label: 'Produtos Zerados',
    icon: TimerOff,
    tone: 'danger',
    format: 'integer',
    suffix: 'Sem unidades disponíveis',
    suffixTone: 'danger',
    primary: true,
  },

  {
    key: 'perdasDoMes',
    label: 'Perdas do Mês',
    icon: TrendingDown,
    tone: 'danger',
    format: 'currency',
    suffix: 'Perdas registradas',
    suffixTone: 'danger',
    primary: true,
  },

  // Indicadores complementares
  {
    key: 'proximosValidade',
    label: 'Próximos da Validade',
    icon: CalendarClock,
    tone: 'warning',
    format: 'integer',
    suffix: 'Exigem atenção',
    suffixTone: 'warning',
    primary: false,
  },

  {
    key: 'produtosVencidos',
    label: 'Produtos Vencidos',
    icon: CalendarX2,
    tone: 'danger',
    format: 'integer',
    suffix: 'Fora da validade',
    suffixTone: 'danger',
    primary: false,
  },

  {
    key: 'giroMedio',
    label: 'Giro Médio',
    icon: Repeat,
    tone: 'accent',
    format: 'decimal',
    suffix: 'Rotação do estoque',
    suffixTone: 'accent',
    primary: false,
  },

  {
    key: 'coberturaEstoque',
    label: 'Cobertura de Estoque',
    icon: RefreshCcw,
    tone: 'success',
    format: 'integer',
    suffix: 'Dias de cobertura',
    suffixTone: 'success',
    primary: false,
  },

  {
    key: 'estoqueParado',
    label: 'Estoque Parado',
    icon: PackageX,
    tone: 'warning',
    format: 'integer',
    primary: true,
    suffix: 'Sem movimentação recente',
    suffixTone: 'warning',
  },
  {
    key: 'margemEstimada',
    label: 'Margem Estimada',
    icon: ChartNoAxesCombined,
    tone: 'accent',
    format: 'currency',
    primary: true,
    suffix: 'Potencial de margem',
    suffixTone: 'accent',
  },
]

export const TONE_ICON_STYLES = {
  accent:
    'bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400',

  warning:
    'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',

  danger:
    'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400',

  success:
    'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',

  neutral:
    'bg-gray-100 text-gray-600 dark:bg-gray-500/10 dark:text-gray-300',
}

export const SUFFIX_TONE_STYLES = {
  accent: 'text-violet-600 dark:text-violet-400',
  warning: 'text-amber-600 dark:text-amber-400',
  danger: 'text-rose-600 dark:text-rose-400',
  success: 'text-emerald-600 dark:text-emerald-400',
  neutral: 'text-gray-400 dark:text-gray-500',
}