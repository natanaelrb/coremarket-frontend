import { Info, ArrowUp, ArrowDown } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, YAxis } from 'recharts';
import DashboardCard from '../shared/DashboardCard';
import { formatCurrency } from '../../utils/dashboardFormatters';
import { formatPercent } from '../../utils/dashboardFormatters';

const STAT_CONFIG = [
  {
    key: 'ticketMedio',
    title: 'Ticket médio',
    tooltip: 'Faturamento total dividido pelo número de vendas',
    color: '#8b5cf6',
    format: formatCurrency,
    comparisonPrefix: 'vs período anterior',
  },
  {
    key: 'margemLucro',
    title: 'Margem de lucro',
    tooltip: 'Lucro líquido dividido pelo faturamento bruto',
    color: '#8b5cf6',
    format: (v) => `${v.toFixed(1)}%`,
    comparisonPrefix: 'vs período anterior',
  },
  {
    key: 'taxaConversao',
    title: 'Taxa de conversão',
    tooltip: 'Percentual de oportunidades que resultaram em uma venda',
    color: '#3b82f6',
    format: (v) => `${v.toFixed(1)}%`,
    comparisonPrefix: 'vs período anterior',
  },
  {
    key: 'frequenciaCompra',
    title: 'Frequência de compra',
    tooltip: 'Média de compras por cliente no período',
    color: '#f59e0b',
    format: (v) => v.toFixed(1),
    comparisonText: 'média de compras por cliente',
  },
  {
    key: 'produtosPorVenda',
    title: 'Produtos por venda',
    tooltip: 'Média de itens por venda registrada',
    color: '#22c55e',
    format: (v) => v.toFixed(1),
    comparisonText: 'média de itens por venda',
  },
];

/**
 * KPIs avançados.
 *
 * A taxa de conversão está atualmente utilizando dados mockados,
 * pois o backend ainda não possui o indicador de oportunidades/
 * atendimentos necessários para calcular essa métrica de forma real.
 *
 * Quando o endpoint real estiver disponível, basta substituir
 * mockAdvancedStats no dashboardService.js.
 */
export default function AdvancedStatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
      {STAT_CONFIG.map((cfg, index) => {
        const data = stats[cfg.key];
        const isPositive = data.variacao >= 0;
        return (
          <DashboardCard
          key={cfg.key}
          className="
            relative
            h-[102px]
            px-4
            py-2.5
            animate-card-in
            hover:-translate-y-0.5
            hover:shadow-lg
            transition-all
          "
          style={{ animationDelay: `${index * 60}ms` }}
        >
          {/* Título */}
          <div className="flex items-center gap-1">
            <span className="text-[13px] font-semibold text-[var(--text-primary)]">
              {cfg.title}
            </span>

            <Info
              className="h-3.5 w-3.5 text-[var(--text-primary)]"
              aria-label={cfg.tooltip}
              title={cfg.tooltip}
            />
          </div>

          {/* Valor + variação */}
          <div className="mt-1.5 flex items-center gap-2">
            <p className="text-[21px] leading-none font-semibold text-[var(--text-primary)] tabular-nums">
              {cfg.format(data.valor)}
            </p>

            <span
              className={`flex items-center gap-0.5 text-[12px] font-medium ${
                isPositive ? 'text-[#16a34a]' : 'text-[#ef4444]'
              }`}
            >
              {isPositive ? (
                <ArrowUp className="h-3 w-3" />
              ) : (
                <ArrowDown className="h-3 w-3" />
              )}

              {formatPercent(data.variacao)}
            </span>
          </div>

          {/* Comparação + gráfico */}
          {/* Comparação */}
          <span className="absolute left-4 bottom-5 whitespace-nowrap text-[10px] leading-tight text-[var(--text-tertiary)]">
            {cfg.comparisonText ??
              `${cfg.comparisonPrefix} (${cfg.format(data.anterior)})`}
          </span>

          {/* Gráfico */}
          <div className="absolute right-3 bottom-2 h-9 -ml-4 w-[70px] shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.historico.map((v) => ({ v }))}>
                <YAxis
                  hide
                  domain={['dataMin', 'dataMax']}
                />

                <Line
                  type="monotone"
                  dataKey="v"
                  stroke={cfg.color}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>
        );
      })}
    </div>
  );
}
