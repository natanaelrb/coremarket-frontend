import { Users, UserCheck, UserX, Star, DollarSign, TrendingUp } from "lucide-react";
import { currency } from "../utils/formatters";
import { SPARK_UP, SPARK_DOWN, SPARK_FLAT } from "../mocks/sparklineMock";

/**
 * Monta os dados de exibição dos 6 StatCards a partir das estatísticas calculadas.
 * Mantém StatsGrid livre de regras de formatação/ícone.
 */
export function buildStatsConfig(stats) {
  const pct = (part) => (stats.total ? Math.round((part / stats.total) * 100) : 0);

  return [
    {
      key: "total",
      icon: Users,
      iconBg: "rgba(124,58,237,0.12)",
      iconColor: "#7C3AED",
      label: "Total de Clientes",
      value: stats.total,
      sub: "+8% este mês",
      spark: SPARK_UP,
      sparkColor: "#7C3AED",
    },
    {
      key: "ativos",
      icon: UserCheck,
      iconBg: "rgba(16,185,129,0.12)",
      iconColor: "#10B981",
      label: "Clientes Ativos",
      value: stats.ativos,
      sub: `${pct(stats.ativos)}% do total`,
      spark: SPARK_UP,
      sparkColor: "#10B981",
    },
    {
      key: "inativos",
      icon: UserX,
      iconBg: "rgba(244,63,94,0.12)",
      iconColor: "#F43F5E",
      label: "Clientes Inativos",
      value: stats.inativos,
      sub: `${pct(stats.inativos)}% do total`,
      spark: SPARK_DOWN,
      sparkColor: "#F43F5E",
    },
    {
      key: "vip",
      icon: Star,
      iconBg: "rgba(245,158,11,0.12)",
      iconColor: "#F59E0B",
      label: "Clientes VIP",
      value: stats.vip,
      sub: `${pct(stats.vip)}% do total`,
      spark: SPARK_FLAT,
      sparkColor: "#F59E0B",
    },
    {
      key: "faturado",
      icon: DollarSign,
      iconBg: "rgba(59,130,246,0.12)",
      iconColor: "#3B82F6",
      label: "Total Faturado",
      value: currency(stats.faturado),
      sub: "+14% este mês",
      spark: SPARK_UP,
      sparkColor: "#3B82F6",
    },
    {
      key: "ticketMedio",
      icon: TrendingUp,
      iconBg: "rgba(139,92,246,0.12)",
      iconColor: "#8B5CF6",
      label: "Ticket Médio",
      value: currency(stats.ticketMedio),
      sub: "+3% este mês",
      spark: SPARK_UP,
      sparkColor: "#8B5CF6",
    },
  ];
}
