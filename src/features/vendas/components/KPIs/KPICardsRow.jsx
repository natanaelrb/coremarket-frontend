import {
  ShoppingCart,
  TrendingUp,
  ShoppingBasket,
  XCircle,
  Tag,
  Wallet,
} from 'lucide-react';

import { KPICard } from './KPICard.jsx';
import {
  formatCurrency,
  formatNumber,
  formatPercent,
} from '../../../../shared/utils/formatters.js';

/**
 * Renderiza a linha de 6 cartões de indicadores do topo da página de vendas.
 * @param {{
 *   kpis: import('../../types/venda.types.js').KpiVendas | null,
 *   loading: boolean
 * }} props
 */
export function KPICardsRow({ kpis, loading }) {
  if (loading || !kpis) {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <KPICard key={i} loading />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      <KPICard
        icon={<ShoppingCart size={20} />}
        tone="accent"
        label="Vendas hoje"
        value={formatCurrency(kpis.vendasHoje)}
        helper={`${formatNumber(kpis.quantidadeVendasHoje)} vendas`}
      />

      <KPICard
        icon={<TrendingUp size={20} />}
        tone="info"
        label="Ticket médio"
        value={formatCurrency(kpis.ticketMedio)}
        trend={{
          value: formatPercent(kpis.variacaoTicketMedio),
          positive: kpis.variacaoTicketMedio >= 0,
        }}
      />

      <KPICard
        icon={<ShoppingBasket size={20} />}
        tone="accent"
        label="Itens vendidos"
        value={formatNumber(kpis.itensVendidos)}
      />

      <KPICard
        icon={<XCircle size={20} />}
        tone="danger"
        label="Canceladas"
        value={String(kpis.vendasCanceladas)}
        helper={formatCurrency(kpis.valorCancelado)}
      />

      <KPICard
        icon={<Tag size={20} />}
        tone="warning"
        label="Descontos"
        value={formatCurrency(kpis.descontosTotais)}
      />

      <KPICard
        icon={<Wallet size={20} />}
        tone="success"
        label="Recebido hoje"
        value={formatCurrency(kpis.recebidoHoje)}
      />
    </div>
  );
}