import {
  ArrowDownToLine,
  ArrowUpFromLine,
  SlidersHorizontal,
  AlertTriangle,
  BarChart3,
} from '../shared/icons';

import StatCard from './StatCard';
import Sparkline from './Sparkline';
import AjustesDonut from './AjustesDonut';
import SaldoBarsMini from './SaldoBarsMini';

import { formatNumber } from '../../utils/formatQuantity';

// Renderiza a linha de 5 cards de estatísticas do topo da página.
export default function StatsCardsRow({ stats, isLoading }) {
  if (isLoading || !stats) {
    return (
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="
              h-[150px]
              animate-pulse
              rounded-2xl
              border
              border-slate-200
              bg-slate-100
              dark:border-white/5
              dark:bg-[#141833]
            "
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
      {/* Entradas */}
      <StatCard
        icon={ArrowDownToLine}
        iconBg="rgba(34,197,94,0.15)"
        iconColor="#22C55E"
        title="Entradas"
        value={stats.entradas.total}
        unitLabel="Unidades"
        variacao={stats.entradas.variacaoPercentual}
        tendencia={stats.entradas.tendencia}
        delay={0}
      >
        <Sparkline
          data={stats.entradas.serie}
          color="#22C55E"
        />
      </StatCard>

      {/* Saídas */}
      <StatCard
        icon={ArrowUpFromLine}
        iconBg="rgba(239,68,68,0.15)"
        iconColor="#EF4444"
        title="Saídas"
        value={stats.saidas.total}
        unitLabel="Unidades"
        variacao={stats.saidas.variacaoPercentual}
        tendencia={stats.saidas.tendencia}
        delay={0.05}
      >
        <Sparkline
          data={stats.saidas.serie}
          color="#EF4444"
        />
      </StatCard>

      {/* Ajustes */}
      <StatCard
        icon={SlidersHorizontal}
        iconBg="rgba(59,130,246,0.15)"
        iconColor="#3B82F6"
        title="Ajustes"
        value={stats.ajustes.total}
        unitLabel="movimentações"
        delay={0.1}
      >
        <div className="mt-9 w-full">
          <div className="flex h-14 w-full items-end gap-1">
            {[2, 4, 3, 5, 2, 6, 4, 7].map((value, index) => {
              const height = `${Math.max((value / 7) * 100, 20)}%`;

              return (
                <span
                  key={index}
                  className="
                    block
                    flex-1
                    rounded-t-[3px]
                    bg-blue-500
                    transition-all
                    duration-200
                    hover:bg-blue-600
                    dark:bg-blue-400
                    dark:hover:bg-blue-300
                  "
                  style={{
                    height,
                    minHeight: '7px',
                  }}
                />
              );
            })}
          </div>
          <div className="-mt-20 flex items-center gap-7">
            <span className="text-[11px] font-medium text-blue-600 dark:text-blue-400">
              Evolução no período
            </span>

            <span className="text-xs -ml-6 font-semibold text-blue-600 dark:text-blue-400">
              +{stats.ajustes.variacaoAbsoluta}
            </span>

          </div>
        </div>
      </StatCard>

      {/* Perdas */}
      <StatCard
        icon={AlertTriangle}
        iconBg="rgba(245,158,11,0.15)"
        iconColor="#F59E0B"
        title="Perdas"
        value={stats.perdas.total}
        unitLabel="Unidades"
        delay={0.15}
      >
        <div className="mt-4 flex items-center justify-between gap-4">
          {/* Distribuição */}
          <div className="min-w-0 flex-1 space-y-2.5">
            {/* Vencimento */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                <span className=" text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  Vencimento:
                </span>
              </div>

              <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                {stats.perdas.vencimento}
              </span>
            </div>

            {/* Avaria */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-400" />
                <span className="truncate text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  Avaria:
                </span>
              </div>

              <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                {stats.perdas.avaria}
              </span>
            </div>

            {/* Outros */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                <span className="truncate text-[11px] font-medium text-slate-500 dark:text-slate-400">
                  Outros:
                </span>
              </div>

              <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                {stats.perdas.outros}
              </span>
            </div>
          </div>

          {/* Donut */}
          <div className="flex shrink-0 items-center justify-center">
            <AjustesDonut
              vencimento={stats.perdas.vencimento}
              avaria={stats.perdas.avaria}
              outros={stats.perdas.outros}
              total={stats.perdas.total}
            />
          </div>
        </div>
      </StatCard>

      {/* Saldo movimentado */}
      <StatCard
        icon={BarChart3}
        iconBg="rgba(139,92,246,0.15)"
        iconColor="#8B5CF6"
        title="Saldo movimentado"
        value={stats.saldo.total}
        unitLabel="Unidades"
        delay={0.2}
      >
        <div className="space-y-2">
          <div className="space-y-1 text-sm">
            <p className="text-slate-900 dark:text-slate-900">
              Entradas:{' '}
              <span className="font-medium text-emerald-600 dark:text-emerald-400">
                +{formatNumber(stats.saldo.entradas)}
              </span>
            </p>

            <p className="text-slate-900 dark:text-slate-900">
              Saídas:{' '}
              <span className="font-medium text-red-600 dark:text-red-400">
                {formatNumber(stats.saldo.saidas)}
              </span>
            </p>
          </div>

          {/* Gráfico ocupando toda a largura */}
          <div className="mt-3 w-full">
          <SaldoBarsMini data={stats.saldo.serie} />
        </div>
        </div>
      </StatCard>
    </div>
  );
}