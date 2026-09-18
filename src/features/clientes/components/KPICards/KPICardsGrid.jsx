import { Users, UserCheck, Wallet, AlertTriangle, Clock } from 'lucide-react'
import { KPICard } from './KPICard.jsx'
import { formatCurrency } from "../../../../shared/utils/formatCurrency.js";

/**
 * Grid of the five headline KPI cards shown at the top of the clients page.
 * @param {{kpis: import('../../types/cliente.types.js').KpiClientes}} props
 */
export function KPICardsGrid({ kpis }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-3">
      <KPICard
        icon={<Users size={18} />}
        tone="violet"
        value={kpis.totalClientes.toLocaleString('pt-BR')}
        label="Total de clientes"
        caption={`+${kpis.variacaoPeriodo}% no período`}
        delay={0}
      />

      <KPICard
        icon={<UserCheck size={18} />}
        tone="green"
        value={kpis.clientesAtivos.toLocaleString('pt-BR')}
        label="Clientes ativos"
        caption={`${kpis.percentualAtivos}% da base`}
        delay={60}
      />

      <KPICard
        icon={<Wallet size={18} />}
        tone="blue"
        value={formatCurrency(kpis.totalAReceber)}
        label="Total a receber"
        delay={120}
      />

      <KPICard
        icon={<AlertTriangle size={18} />}
        tone="red"
        value={kpis.clientesInadimplentes.toLocaleString('pt-BR')}
        label="Clientes inadimplentes"
        caption={`${formatCurrency(kpis.valorEmAtrasoTotal)} em atraso`}
        delay={180}
      />

      <KPICard
        icon={<Clock size={18} />}
        tone="amber"
        value={kpis.pagamentosPendentes.toLocaleString('pt-BR')}
        label="Pagamentos pendentes"
        caption="Contas em aberto"
        delay={240}
      />
    </div>
  )
}