import { ArrowDownToLine, ArrowUpFromLine, SlidersHorizontal, AlertTriangle, BarChart3 } from 'lucide-react';
import StatCard from './StatCard';
import Sparkline from './Sparkline';
import AjustesDonut from './AjustesDonut';
import SaldoBarsMini from './SaldoBarsMini';
import { formatNumber } from "../utils/formatQuantity";

// Renderiza a linha de 5 cards de estatísticas do topo da página.
export default function StatsCardsRow({ stats, isLoading }) {
  if (isLoading || !stats) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-[150px] animate-pulse rounded-2xl border border-white/5 bg-[#141833]" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
      <StatCard
        icon={ArrowDownToLine}
        iconBg="rgba(34,197,94,0.15)"
        iconColor="#22C55E"
        title="Entradas"
        value={stats.entradas.total}
        unitLabel="unidades"
        variacao={stats.entradas.variacaoPercentual}
        tendencia={stats.entradas.tendencia}
        delay={0}
      >
        <Sparkline data={stats.entradas.serie} color="#22C55E" />
      </StatCard>

      <StatCard
        icon={ArrowUpFromLine}
        iconBg="rgba(239,68,68,0.15)"
        iconColor="#EF4444"
        title="Saídas"
        value={stats.saidas.total}
        unitLabel="unidades"
        variacao={stats.saidas.variacaoPercentual}
        tendencia={stats.saidas.tendencia}
        delay={0.05}
      >
        <Sparkline data={stats.saidas.serie} color="#EF4444" />
      </StatCard>

      <StatCard
        icon={SlidersHorizontal}
        iconBg="rgba(59,130,246,0.15)"
        iconColor="#3B82F6"
        title="Ajustes"
        value={stats.ajustes.total}
        unitLabel="movimentações"
        delay={0.1}
      >
        <p className="text-xs font-medium text-blue-400">
          +{stats.ajustes.variacaoAbsoluta} em relação ao período anterior
        </p>
      </StatCard>

      <StatCard
        icon={AlertTriangle}
        iconBg="rgba(245,158,11,0.15)"
        iconColor="#F59E0B"
        title="Perdas"
        value={stats.perdas.total}
        unitLabel="unidades"
        delay={0.15}
      >
        <div className="mt-1 flex items-center justify-between">
          <ul className="space-y-1 text-xs text-slate-400">
            <li>Vencimento: <span className="text-slate-200">{stats.perdas.vencimento}</span></li>
            <li>Avaria: <span className="text-slate-200">{stats.perdas.avaria}</span></li>
            <li>Outros: <span className="text-slate-200">{stats.perdas.outros}</span></li>
          </ul>
          <AjustesDonut
            vencimento={stats.perdas.vencimento}
            avaria={stats.perdas.avaria}
            outros={stats.perdas.outros}
            total={stats.perdas.total}
          />
        </div>
      </StatCard>

      <div className="flex-1 min-w-[220px] rounded-2xl border border-white/5 bg-[#141833] p-5 shadow-lg shadow-black/10">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/15 text-violet-400">
            <BarChart3 className="h-4 w-4" />
          </span>
          <span className="text-sm font-medium text-slate-300">Saldo movimentado</span>
        </div>
        <div className="mb-2 space-y-1 text-xs">
          <p className="text-slate-400">Entradas: <span className="font-medium text-emerald-400">+{formatNumber(stats.saldo.entradas)}</span></p>
          <p className="text-slate-400">Saídas: <span className="font-medium text-red-400">{formatNumber(stats.saldo.saidas)}</span></p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-300">
            Saldo: <span className="font-bold text-emerald-400">+{formatNumber(stats.saldo.total)} unidades</span>
          </p>
          <SaldoBarsMini data={stats.saldo.serie} />
        </div>
      </div>
    </div>
  );
}
