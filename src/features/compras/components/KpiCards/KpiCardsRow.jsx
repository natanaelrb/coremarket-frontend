// Renderiza a fileira de KPIs de compras + o card de destaque (custo médio).
// Toda a lógica de cálculo já chega pronta via props (useComprasKpis).
import { ShoppingBag, Clock, PackageCheck, Truck, FileText, AlertTriangle, Receipt } from "lucide-react";
import { KpiCard } from "./KpiCard";
import { HighlightKpiCard } from "./HighlightKpiCard";
import { formatCurrency, pluralize } from "../../utils/formatters";

export function KpiCardsRow({ kpis }) {
  return (
    <div className="flex flex-wrap gap-3">
      <KpiCard
        icon={ShoppingBag}
        label="Compras no período"
        value={formatCurrency(kpis.totalCompras)}
        trend={kpis.variacaoTotalCompras}
        helper="vs período anterior"
        color="violet"
        delay={0}
      />
      <KpiCard
        icon={Clock}
        label="Pedidos em aberto"
        value={kpis.pedidosEmAbertoCount}
        helper={`${kpis.pedidosEmAbertoNovosHoje} novos hoje`}
        color="blue"
        delay={40}
      />
      <KpiCard
        icon={Truck}
        label="Aguardando recebimento"
        value={kpis.aguardandoRecebimentoCount}
        helper={formatCurrency(kpis.aguardandoRecebimentoValor)}
        color="amber"
        delay={80}
      />
      <KpiCard
        icon={PackageCheck}
        label="Recebidos no período"
        value={kpis.recebidosNoPeriodoCount}
        trend={kpis.recebidosVariacao}
        helper="vs período anterior"
        color="emerald"
        delay={120}
      />
      <KpiCard
        icon={FileText}
        label="Contas a pagar"
        value={formatCurrency(kpis.contasAPagarValor)}
        helper={`${kpis.contasAPagarTitulos} ${pluralize(kpis.contasAPagarTitulos, "título em aberto", "títulos em aberto")}`}
        color="slate"
        delay={160}
      />
      <KpiCard
        icon={AlertTriangle}
        label="Compras vencidas"
        value={kpis.comprasVencidasCount}
        helper={formatCurrency(kpis.comprasVencidasValor)}
        color="red"
        delay={200}
      />
      <KpiCard
        icon={Receipt}
        label="Ticket médio de compra"
        value={formatCurrency(kpis.ticketMedio)}
        trend={kpis.variacaoTicketMedio}
        helper="vs período anterior"
        color="violet"
        delay={240}
      />
      <HighlightKpiCard value={kpis.variacaoCustoMedio} delay={280} />
    </div>
  );
}
