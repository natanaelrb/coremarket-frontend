import { TrendingUp, Receipt } from "lucide-react";
import ChartCard from "../../../components/dashboard/ChartCard";
import { fmt } from "../../../components/dashboard/dashboardUtils";
import { ticketMedio } from "../../../components/dashboard/dashboardData";

export default function TicketMedioCard() {
  return (
    <ChartCard title="Ticket médio">
      <div className="flex flex-col items-center justify-center h-full gap-2 py-3">
        <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-500/15 flex items-center justify-center mb-1">
          <Receipt size={18} className="text-violet-600 dark:text-violet-400" />
        </div>
        <p className="text-2xl font-bold text-slate-800 dark:text-[var(--sidebar-text)]">
          {fmt(ticketMedio.atual)}
        </p>
        <div className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
          <TrendingUp size={12} />
          <span>+{ticketMedio.variacao}% vs período anterior</span>
        </div>
        <p className="text-[11px] text-slate-400 dark:text-[var(--sidebar-text)]/35">
          Anterior: {fmt(ticketMedio.anterior)}
        </p>
      </div>
    </ChartCard>
  );
}
