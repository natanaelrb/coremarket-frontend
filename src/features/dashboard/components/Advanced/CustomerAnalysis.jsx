import { UserPlus, Users, UserX } from 'lucide-react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line } from 'recharts';

import DashboardCard from '../shared/DashboardCard';
import DashboardSection from '../shared/DashboardSection';
import { formatNumber, formatPercent } from '../../utils/dashboardFormatters';

const CONFIG = [
  {
    key: 'novos',
    label: 'Clientes novos',
    icon: UserPlus,
    iconBg: '#dcfce7',
    iconColor: '#16a34a',
    color: '#16a34a',
  },
  {
    key: 'inativos',
    label: 'Clientes inativos',
    icon: UserX,
    iconBg: '#fee2e2',
    iconColor: '#dc2626',
    color: '#ef4444',
  },
  {
    key: 'recorrentes',
    label: 'Clientes recorrentes',
    icon: Users,
    iconBg: '#e0e7ff',
    iconColor: '#4f46e5',
    color: '#4f46e5',
  },
];

/** Análise de clientes com indicadores e evolução histórica. */
export default function CustomerAnalysis({ data }) {
  return (
    <DashboardCard className="p-5 animate-card-in hover:-translate-y-0.5 hover:shadow-lg transition-all">
      <DashboardSection title="Análise de clientes" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {CONFIG.map((cfg) => {
          const item = data[cfg.key];

          const isPositive = item.variacao >= 0;
          const isBadTrendGood =
            cfg.key === 'inativos' ? !isPositive : isPositive;

          return (
            <div
              key={cfg.key}
              className="
                relative
                h-[160px]
                rounded-xl
                border
                border-[var(--border-subtle)]
                p-3
              "
            >
              {/* Ícone + título */}
              <div className="flex items-center gap-2">
                <div
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: cfg.iconBg }}
                >
                  <cfg.icon
                    className="h-3.5 w-3.5"
                    style={{ color: cfg.iconColor }}
                    aria-hidden="true"
                  />
                </div>

                <span className="text-[11px] font-medium text-[var(--text-secondary)]">
                  {cfg.label}
                </span>
              </div>

              {/* Valor + variação */}
              <div className="mt-3 flex items-center gap-2">
                <p className="text-[24px] leading-none font-semibold text-[var(--text-primary)] tabular-nums">
                  {formatNumber(item.valor)}
                </p>

                <span
                  className={`flex items-center gap-0.5 text-[11px] font-medium ${
                    isBadTrendGood
                      ? 'text-[#16a34a]'
                      : 'text-[#ef4444]'
                  }`}
                >
                  {isPositive ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}

                  {formatPercent(item.variacao)}
                </span>
              </div>

              {/* Comparação */}
              <span className="mt-2 block text-[10px] text-[var(--text-tertiary)]">
                vs período anterior
              </span>

              {/* Mini gráfico */}
              <div className="absolute bottom-2 left-3 right-3 h-8">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={item.historico?.map((valor) => ({ valor })) ?? []}
                  >
                    <Line
                      type="natural"
                      dataKey="valor"
                      stroke={cfg.color}
                      strokeWidth={2}
                      dot={false}
                      isAnimationActive
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardCard>
  );
}