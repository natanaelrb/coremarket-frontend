import { Clock3, TrendingUp } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from 'recharts';

import { formatNumber } from '../../utils/formatQuantity';

export default function HourlyActivityChart({ horarios = [] }) {
  const dados = Array.isArray(horarios) ? horarios : [];

  const horarioPico =
    dados.length > 0
      ? dados.reduce(
          (maior, atual) =>
            Number(atual.total) > Number(maior.total) ? atual : maior,
          dados[0]
        )
      : null;

  const pico = horarioPico ? Number(horarioPico.total) : 0;

  const ticks = dados
    .filter((_, index) => index % 4 === 0)
    .map((item) => item.hora);

  return (
    <div
      className="
        min-h-[270px]
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        shadow-slate-900/[0.03]
        transition-all
        duration-200
        hover:border-slate-300
        hover:shadow-md
        dark:border-white/[0.06]
        dark:bg-[#141833]
        dark:shadow-black/10
        dark:hover:border-white/10
      "
    >
      {/* Cabeçalho */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-xl
              bg-sky-50
              text-sky-600
              dark:bg-sky-500/10
              dark:text-sky-400
            "
          >
            <Clock3 className="h-4 w-4" strokeWidth={2} />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-sm font-bold text-slate-900 dark:text-white">
              Horários com mais movimentações
            </h3>

            <p className="mt-0.5 text-[11px] text-slate-400 dark:text-slate-500">
              Distribuição das atividades ao longo do dia
            </p>
          </div>
        </div>

        {horarioPico && (
          <div
            className="
              flex shrink-0 items-center gap-1.5
              rounded-full
              border border-sky-200
              bg-sky-50
              px-2.5 py-1
              text-[10px]
              font-bold
              text-sky-600
              dark:border-sky-500/15
              dark:bg-sky-500/10
              dark:text-sky-400
            "
          >
            <TrendingUp className="h-3 w-3" strokeWidth={2.2} />
            Pico {horarioPico.hora}
          </div>
        )}
      </div>

      {/* Indicador do pico */}
      {horarioPico && (
        <div
          className="
            mt-4
            flex items-center justify-between
            rounded-xl
            border border-slate-200
            bg-slate-50
            px-3.5 py-2.5
            dark:border-white/[0.05]
            dark:bg-[#10152A]
          "
        >
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
              Horário de pico
            </p>

            <p className="mt-0.5 text-sm font-bold text-slate-800 dark:text-slate-100">
              {horarioPico.hora}
            </p>
          </div>

          <div className="text-right">
            <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
              Movimentações
            </p>

            <p className="mt-0.5 text-sm font-bold text-sky-600 dark:text-sky-400">
              {formatNumber(pico)}
            </p>
          </div>
        </div>
      )}

      {/* Gráfico */}
      <div className="mt-4 h-[125px] w-full">
        {dados.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={dados}
              margin={{
                top: 4,
                right: 2,
                bottom: 0,
                left: -18,
              }}
              barCategoryGap="24%"
            >
              <XAxis
                dataKey="hora"
                ticks={ticks}
                interval={0}
                tick={{
                  fill: '#94A3B8',
                  fontSize: 10,
                  fontWeight: 500,
                }}
                axisLine={false}
                tickLine={false}
                tickMargin={8}
              />

              <Tooltip
                cursor={{
                  fill: 'rgba(14, 165, 233, 0.05)',
                }}
                contentStyle={{
                  borderRadius: '10px',
                  border: '1px solid rgba(148, 163, 184, 0.18)',
                  background: '#141833',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
                  padding: '8px 10px',
                }}
                labelStyle={{
                  color: '#CBD5E1',
                  fontSize: 11,
                  fontWeight: 600,
                  marginBottom: 2,
                }}
                itemStyle={{
                  color: '#38BDF8',
                  fontSize: 11,
                  fontWeight: 700,
                }}
                formatter={(value) => [
                  formatNumber(value),
                  'Movimentações',
                ]}
              />

              <Bar
                dataKey="total"
                radius={[4, 4, 1, 1]}
                maxBarSize={14}
                isAnimationActive
                animationDuration={220}
                animationEasing="ease-out"
              >
                {dados.map((item) => {
                  const isPeak = item === horarioPico;

                  return (
                    <Cell
                      key={item.hora}
                      fill={isPeak ? '#38BDF8' : '#0EA5E9'}
                      fillOpacity={isPeak ? 1 : 0.48}
                    />
                  );
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-slate-400">
            Nenhuma movimentação encontrada no período.
          </div>
        )}
      </div>
    </div>
  );
}