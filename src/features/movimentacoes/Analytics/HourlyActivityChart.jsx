import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

export default function HourlyActivityChart({ horarios }) {
  const ticks = horarios.filter((_, i) => i % 4 === 0).map((h) => h.hora);

  return (
    <div className="rounded-2xl border border-white/5 bg-[#141833] p-5">
      <h3 className="mb-4 text-sm font-semibold text-white">Horários com mais movimentações</h3>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={horarios} margin={{ left: -20 }}>
          <XAxis
            dataKey="hora"
            ticks={ticks}
            interval={0}
            tick={{ fill: '#64748B', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Bar dataKey="total" fill="#7C3AED" radius={[3, 3, 0, 0]} isAnimationActive animationDuration={900} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
