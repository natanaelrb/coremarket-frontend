import { Users, UserCheck, UserX, ShoppingCart, Wallet, ClipboardList } from 'lucide-react'
import StatCard from './StatCard.jsx'
import StatCardSkeleton from './StatCardSkeleton.jsx'
import { formatCurrency } from '../../../../shared/utils/formatters.js'

export default function StatsCardsGrid({ stats, isLoading }) {
  if (isLoading || !stats) {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <StatCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  const cards = [
    {
      icon: Users,
      iconBg: 'bg-violet-100 dark:bg-violet-500/15',
      iconColor: 'text-violet-600 dark:text-violet-400',
      label: 'Total de Fornecedores',
      value: stats.total,
      caption: `${stats.totalPercentCadastrado}% cadastrados`,
    },
    {
      icon: UserCheck,
      iconBg: 'bg-emerald-100 dark:bg-emerald-500/15',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      label: 'Fornecedores Ativos',
      value: stats.ativos,
      caption: `${stats.ativosPercent}% do total`,
    },
    {
      icon: UserX,
      iconBg: 'bg-rose-100 dark:bg-rose-500/15',
      iconColor: 'text-rose-600 dark:text-rose-400',
      label: 'Fornecedores Inativos',
      value: stats.inativos,
      caption: `${stats.inativosPercent}% do total`,
    },
    {
      icon: ShoppingCart,
      iconBg: 'bg-sky-100 dark:bg-sky-500/15',
      iconColor: 'text-sky-600 dark:text-sky-400',
      label: 'Compras no Mês',
      value: formatCurrency(stats.comprasNoMes),
      caption: 'Total de compras',
    },
    {
      icon: Wallet,
      iconBg: 'bg-fuchsia-100 dark:bg-fuchsia-500/15',
      iconColor: 'text-fuchsia-600 dark:text-fuchsia-400',
      label: 'Valor Comprado',
      value: formatCurrency(stats.valorCompradoAno),
      caption: 'Total no ano',
    },
    {
      icon: ClipboardList,
      iconBg: 'bg-amber-100 dark:bg-amber-500/15',
      iconColor: 'text-amber-600 dark:text-amber-400',
      label: 'Pedidos Pendentes',
      value: stats.pedidosPendentes,
      caption: `${stats.pedidosAtrasados} atrasados`,
      captionColor: 'text-rose-500 dark:text-rose-400',
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
      {cards.map((card, index) => (
        <StatCard key={card.label} {...card} delayIndex={index} />
      ))}
    </div>
  )
}
