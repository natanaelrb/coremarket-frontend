import { PieChart, Pie, Cell } from 'recharts';

export default function LossReasonsDonut({ motivos }) {
  const total = motivos.reduce((acc, m) => acc + m.quantidade, 0);

  return (
    <div className="rounded-2xl border border-white/5 bg-[#141833] p-5">
      <h3 className="mb-4 text-sm font-semibold text-white">Motivos de perda</h3>
      <div className="flex items-center gap-4">
        <div className="relative h-24 w-24 shrink-0">
          <PieChart width={96} height={96}>
            <Pie
              data={motivos}
              dataKey="quantidade"
              nameKey="nome"
              innerRadius={30}
              outerRadius={46}
              paddingAngle={3}
              isAnimationActive
              animationDuration={800}
            >
              {motivos.map((m) => <Cell key={m.nome} fill={m.cor} stroke="none" />)}
            </Pie>
          </PieChart>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-base font-bold text-white">{total}</span>
            <span className="text-[10px] text-slate-500">unidades</span>
          </div>
        </div>
        <ul className="flex-1 space-y-1.5 text-xs">
          {motivos.map((m) => (
            <li key={m.nome} className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: m.cor }} />
              <span className="flex-1 text-slate-400">{m.nome}</span>
              <span className="text-slate-300">{m.percentual}% ({m.quantidade})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
