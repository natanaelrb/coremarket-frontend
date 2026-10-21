import {
  ShoppingCart,
  TrendingUp,
  ShoppingBasket,
  XCircle,
  Tag,
  Wallet,
  ReceiptText,
  Banknote,
  Package,
  BadgePercent,
  CalendarDays,
  CircleCheck,
} from 'lucide-react';

import { KPICard } from './KPICard.jsx';
import {
  formatCurrency,
  formatNumber,
  formatPercent,
} from '../../../../shared/utils/formatters.js';

export function KPICardsRow({ kpis, loading }) {
  if (loading || !kpis) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <KPICard key={i} loading />
        ))}
      </div>
    );
  }

  const cards = [
    {
      icon: <ShoppingCart size={21} />,
      tone: 'accent',
      label: 'Vendas hoje',
      value: formatCurrency(kpis.vendasHoje),
      helper: 'Faturamento bruto do dia',
      details: [
        {
          icon: <ReceiptText size={15} />,
          label: 'Quantidade de vendas',
          value: formatNumber(kpis.quantidadeVendasHoje),
        },
        {
          icon: <CalendarDays size={15} />,
          label: 'Média por venda',
          value: kpis.quantidadeVendasHoje > 0
            ? formatCurrency(
                kpis.vendasHoje / kpis.quantidadeVendasHoje
              )
            : formatCurrency(0),
        },
      ],
      footer: 'Movimentação de hoje',
    },
    {
      icon: <TrendingUp size={21} />,
      tone: 'info',
      label: 'Ticket médio',
      value: formatCurrency(kpis.ticketMedio),
      helper: 'Valor médio por venda',
      trend: {
        value: formatPercent(kpis.variacaoTicketMedio),
        positive: kpis.variacaoTicketMedio >= 0,
      },
      details: [
        {
          icon: <Banknote size={15} />,
          label: 'Valor médio',
          value: formatCurrency(kpis.ticketMedio),
        },
        {
          icon: <TrendingUp size={15} />,
          label: 'Variação do período',
          value: formatPercent(kpis.variacaoTicketMedio),
        },
      ],
      footer: 'Comparação com o período de referência',
    },
    {
      icon: <ShoppingBasket size={21} />,
      tone: 'accent',
      label: 'Itens vendidos',
      value: formatNumber(kpis.itensVendidos),
      helper: 'Unidades comercializadas',
      details: [
        {
          icon: <Package size={15} />,
          label: 'Total de unidades',
          value: formatNumber(kpis.itensVendidos),
        },
        {
          icon: <ReceiptText size={15} />,
          label: 'Média por venda hoje',
          value: kpis.quantidadeVendasHoje > 0
            ? formatNumber(
                kpis.itensVendidos / kpis.quantidadeVendasHoje
              )
            : '—',
        },
      ],
      footer: 'Volume de itens registrado',
    },
    {
      icon: <XCircle size={21} />,
      tone: 'danger',
      label: 'Vendas canceladas',
      value: formatNumber(kpis.vendasCanceladas),
      helper: 'Quantidade de cancelamentos',
      details: [
        {
          icon: <Banknote size={15} />,
          label: 'Valor cancelado',
          value: formatCurrency(kpis.valorCancelado),
        },
        {
          icon: <CircleCheck size={15} />,
          label: 'Situação',
          value: kpis.vendasCanceladas > 0
            ? 'Requer atenção'
            : 'Sem cancelamentos',
        },
      ],
      footer: 'Acompanhe os cancelamentos registrados',
    },
    {
      icon: <Tag size={21} />,
      tone: 'warning',
      label: 'Descontos concedidos',
      value: formatCurrency(kpis.descontosTotais),
      helper: 'Total concedido em descontos',
      details: [
        {
          icon: <BadgePercent size={15} />,
          label: 'Descontos acumulados',
          value: formatCurrency(kpis.descontosTotais),
        },
        {
          icon: <ReceiptText size={15} />,
          label: 'Controle comercial',
          value: 'Descontos aplicados',
        },
      ],
      footer: 'Impacto dos descontos nas vendas',
    },
    {
      icon: <Wallet size={21} />,
      tone: 'success',
      label: 'Recebido hoje',
      value: formatCurrency(kpis.recebidoHoje),
      helper: 'Total recebido no dia',
      details: [
        {
          icon: <Banknote size={15} />,
          label: 'Valor recebido',
          value: formatCurrency(kpis.recebidoHoje),
        },
        {
          icon: <CalendarDays size={15} />,
          label: 'Referência',
          value: 'Hoje',
        },
      ],
      footer: 'Valores registrados como recebidos',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <KPICard key={card.label} {...card} />
      ))}
    </div>
  );
}
