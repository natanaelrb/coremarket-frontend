import {
  Users,
  UserCheck,
  UserX,
  ShoppingCart,
  Wallet,
  ClipboardList,
} from "lucide-react";

import StatCard from "./StatCard.jsx";
import StatCardSkeleton from "./StatCardSkeleton.jsx";

import { formatCurrency } from "../../../../shared/utils/formatters.js";

export default function StatsCardsGrid({ stats, isLoading }) {
  if (isLoading || !stats) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <StatCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  const cards = [
    {
      icon: Users,
      iconBg: "bg-slate-100 dark:bg-slate-500/10",
      iconColor: "text-slate-600 dark:text-slate-300",
      label: "Total de Fornecedores",
      value: stats.total ?? 0,
      caption: "Cadastros registrados",
    },
    {
      icon: UserCheck,
      iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      label: "Fornecedores Ativos",
      value: stats.ativos ?? 0,
      caption: `${stats.ativosPercent ?? 0}% do total`,
      captionColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: UserX,
      iconBg: "bg-rose-50 dark:bg-rose-500/10",
      iconColor: "text-rose-600 dark:text-rose-400",
      label: "Fornecedores Inativos",
      value: stats.inativos ?? 0,
      caption: `${stats.inativosPercent ?? 0}% do total`,
      captionColor: "text-rose-500 dark:text-rose-400",
    },
    {
      icon: ShoppingCart,
      iconBg: "bg-sky-50 dark:bg-sky-500/10",
      iconColor: "text-sky-600 dark:text-sky-400",
      label: "Compras no Mês",
      value: formatCurrency(stats.comprasNoMes ?? 0),
      caption: "Total de compras",
    },
    {
      icon: Wallet,
      iconBg: "bg-emerald-50 dark:bg-emerald-500/10",
      iconColor: "text-emerald-600 dark:text-emerald-400",
      label: "Valor Comprado",
      value: formatCurrency(stats.valorCompradoAno ?? 0),
      caption: "Total no ano",
      captionColor: "text-slate-500 dark:text-slate-400",
    },
    {
      icon: ClipboardList,
      iconBg: "bg-amber-50 dark:bg-amber-500/10",
      iconColor: "text-amber-600 dark:text-amber-400",
      label: "Pedidos Pendentes",
      value: stats.pedidosPendentes ?? 0,
      caption: `${stats.pedidosAtrasados ?? 0} atrasados`,
      captionColor: "text-rose-500 dark:text-rose-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card, index) => (
        <StatCard
          key={card.label}
          {...card}
          delayIndex={index}
        />
      ))}
    </div>
  );
}