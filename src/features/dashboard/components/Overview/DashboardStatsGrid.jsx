import { Users, Package, ShoppingBag, ShoppingCart, DollarSign } from 'lucide-react';
import StatCard from '../shared/StatCard';
import { formatCurrency, formatNumber } from '../../utils/dashboardFormatters';

const STAT_CONFIG = [
  {
    key: "clientes",
    title: "Clientes",
    icon: Users,
    iconBg: "rgba(59, 130, 246, 0.12)",
    iconColor: "#3B82F6",
    format: formatNumber,
    sparkColor: "#3B82F6",
  },

  {
    key: "produtos",
    title: "Produtos",
    icon: Package,
    iconBg: "rgba(245, 158, 11, 0.12)",
    iconColor: "#F59E0B",
    format: formatNumber,
    sparkColor: "#F59E0B",
  },

  {
    key: "compras",
    title: "Compras",
    icon: ShoppingBag,
    iconBg: "rgba(236, 72, 153, 0.12)",
    iconColor: "#EC4899",
    format: formatCurrency,
    sparkColor: "#EC4899",
  },

  {
    key: "vendas",
    title: "Vendas",
    icon: ShoppingCart,
    iconBg: "rgba(16, 185, 129, 0.12)",
    iconColor: "#10B981",
    format: formatCurrency,
    sparkColor: "#10B981",
  },

  {
    key: "lucroLiquido",
    title: "Lucro Líquido",
    icon: DollarSign,
    iconBg: "rgba(139, 92, 246, 0.12)",
    iconColor: "#8B5CF6",
    format: formatCurrency,
    sparkColor: "#8B5CF6",
  },
];

/** Grade de KPIs principais da Visão Geral (Clientes, Produtos, Compras, Vendas, Lucro Líquido). */
export default function DashboardStatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      {STAT_CONFIG.map((cfg, index) => {
        const data = stats[cfg.key];
        return (
          <StatCard
            key={cfg.key}
            icon={cfg.icon}
            iconBg={cfg.iconBg}
            iconColor={cfg.iconColor}
            title={cfg.title}
            value={cfg.format(data.valor)}
            variation={data.variacao}
            comparisonLabel="este mês"
            sparkline={data.historico}
            sparklineColor={cfg.sparkColor}
            style={{ animationDelay: `${index * 60}ms` }}
          />
        );
      })}
    </div>
  );
}
