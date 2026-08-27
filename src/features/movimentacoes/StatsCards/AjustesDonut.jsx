import { PieChart, Pie, Cell } from 'recharts';

// Mini donut usado no card de Perdas (vencimento / avaria / outros).
export default function AjustesDonut({ vencimento, avaria, outros, total }) {
  const data = [
    { name: 'Vencimento', value: vencimento, color: '#EF4444' },
    { name: 'Avaria', value: avaria, color: '#F59E0B' },
    { name: 'Outros', value: outros, color: '#8B5CF6' },
  ];

  return (
    <div className="relative h-20 w-20 shrink-0">
      <PieChart width={80} height={80}>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={26}
          outerRadius={38}
          paddingAngle={3}
          isAnimationActive
          animationDuration={800}
        >
          {data.map((entry) => (
            <Cell key={entry.name} fill={entry.color} stroke="none" />
          ))}
        </Pie>
      </PieChart>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="text-sm font-bold text-white">{total}</span>
      </div>
    </div>
  );
}
