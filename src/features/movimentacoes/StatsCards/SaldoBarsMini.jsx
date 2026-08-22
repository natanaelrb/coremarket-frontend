import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';

// Mini gráfico de barras usado no card de Saldo movimentado.
export default function SaldoBarsMini({ data }) {
  const chartData = data.map((v, i) => ({ i, v }));

  return (
    <ResponsiveContainer width={48} height={36}>
      <BarChart data={chartData} barGap={1}>
        <Bar dataKey="v" radius={[2, 2, 0, 0]} isAnimationActive animationDuration={700}>
          {chartData.map((entry) => (
            <Cell key={entry.i} fill={entry.v >= 0 ? '#7C3AED' : '#EF4444'} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
