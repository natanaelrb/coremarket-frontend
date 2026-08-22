import { AreaChart, Area, ResponsiveContainer } from 'recharts';

// Mini gráfico de área usado dentro dos cards de Entradas / Saídas / Saldo.
export default function Sparkline({ data, color }) {
  const chartData = data.map((v, i) => ({ i, v }));
  const gradientId = `spark-${color.replace('#', '')}`;

  return (
    <ResponsiveContainer width="100%" height={48}>
      <AreaChart data={chartData} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.45} />
            <stop offset="100%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="v"
          stroke={color}
          strokeWidth={2}
          fill={`url(#${gradientId})`}
          isAnimationActive
          animationDuration={900}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
