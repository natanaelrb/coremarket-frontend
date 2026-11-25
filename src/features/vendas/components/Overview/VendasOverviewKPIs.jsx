import {
  ShoppingCart,
  TrendingUp,
  XCircle,
  ReceiptText,
} from "lucide-react";

import { KPICard } from "../KPIs/KPICard.jsx";
import {
  formatCurrency,
  formatNumber,
} from "../../../../shared/utils/formatters.js";

export function VendasOverviewKPIs({ kpis, loading }) {
  if (loading || !kpis) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <KPICard key={index} loading compact />
        ))}
      </div>
    );
  }

  const cards = [
    {
      icon: <ShoppingCart size={20} />,
      tone: "accent",
      label: "Faturamento hoje",
      value: formatCurrency(kpis.vendasHoje),
      helper: `${formatNumber(kpis.quantidadeVendasHoje)} vendas realizadas`,
    },
    {
      icon: <TrendingUp size={20} />,
      tone: "info",
      label: "Ticket médio",
      value: formatCurrency(kpis.ticketMedio),
      helper: "Valor médio por venda",
    },
    {
      icon: <ReceiptText size={20} />,
      tone: "success",
      label: "Itens vendidos",
      value: formatNumber(kpis.itensVendidos),
      helper: "Unidades comercializadas",
    },
    {
      icon: <XCircle size={20} />,
      tone: "danger",
      label: "Vendas canceladas",
      value: formatNumber(kpis.vendasCanceladas),
      helper: `Total cancelado: ${formatCurrency(kpis.valorCancelado)}`,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <KPICard key={card.label} {...card} compact />
      ))}
    </div>
  );
}

export default VendasOverviewKPIs;
