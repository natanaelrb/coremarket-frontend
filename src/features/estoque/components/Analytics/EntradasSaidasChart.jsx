import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import ChartCard from './ChartCard.jsx'
import { useChartTheme } from '../../../../shared/hooks/useChartTheme.js'

/**
 * Grouped bar chart comparing entradas (stock-in) vs saídas (stock-out)
 * over the last 30 days.
 */
export default function EntradasSaidasChart({ data }) {
  const theme = useChartTheme()

  return (
    <ChartCard title="Entradas x Saídas (30 dias)">
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={data} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke={theme.grid} vertical={false} />
          <XAxis dataKey="data" tick={{ fill: theme.axis, fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: theme.axis, fontSize: 11 }} axisLine={false} tickLine={false} width={30} />
          <Tooltip
            contentStyle={{ background: theme.tooltipBg, border: `1px solid ${theme.tooltipBorder}`, borderRadius: 10, fontSize: 12 }}
            labelStyle={{ color: theme.tooltipText }}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} iconType="circle" />
          <Bar dataKey="entradas" name="Entradas" fill={theme.success} radius={[4, 4, 0, 0]} maxBarSize={18} />
          <Bar dataKey="saidas" name="Saídas" fill={theme.danger} radius={[4, 4, 0, 0]} maxBarSize={18} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}
