import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import ChartCard from './ChartCard.jsx'
import { useChartTheme } from '../../../../shared/hooks/useChartTheme.js'
import { formatCurrency } from '../../../../shared/utils/formatCurrency.js'

/**
 * Area chart showing the historical total stock value (R$) trend.
 */
export default function ValorEstoqueChart({ data }) {
  const theme = useChartTheme()

  return (
    <ChartCard title="Valor do Estoque (R$)">
      <ResponsiveContainer width="100%" height={220}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="valorEstoqueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={theme.info} stopOpacity={0.35} />
              <stop offset="95%" stopColor={theme.info} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke={theme.grid} vertical={false} />
          <XAxis dataKey="data" tick={{ fill: theme.axis, fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis
            tick={{ fill: theme.axis, fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            width={50}
            tickFormatter={(v) => `${Math.round(v / 1000)}k`}
          />
          <Tooltip
            contentStyle={{ background: theme.tooltipBg, border: `1px solid ${theme.tooltipBorder}`, borderRadius: 10, fontSize: 12 }}
            labelStyle={{ color: theme.tooltipText }}
            formatter={(value) => [formatCurrency(value), 'Valor']}
          />
          <Area type="monotone" dataKey="valor" stroke={theme.info} strokeWidth={2} fill="url(#valorEstoqueGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}
