import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from 'recharts';
import { formatNumber } from "../utils/formatQuantity";

export default function EntradasVsSaidasChart({ entradas, saidas }) {
  const data = [
    { name: 'Entradas', value: entradas, color: '#22C55E' },
    { name: 'Saídas', value: saidas, color: '#EF4444' },
  ];

  return (
    <div className="rounded-2xl border border-white/5 bg-[#141833] p-5">
      <h3 className="mb-4 text-sm font-semibold text-white">Entradas x Saídas</h3>
      <div className="mb-3 flex items-center justify-between text-sm">
        <span className="text-slate-400">Entradas</span>
        <span className="font-semibold text-emerald-400">{formatNumber(entradas)}</span>
      </div>
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="text-slate-400">Saídas</span>
        <span className="font-semibold text-red-400">{formatNumber(saidas)}</span>
      </div>
      <ResponsiveContainer width="100%" height={140}>
        <BarChart data={data} layout="vertical" margin={{ left: 0, right: 16 }}>
          <XAxis type="number" hide />
          <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={28} isAnimationActive animationDuration={800}>
            {data.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
