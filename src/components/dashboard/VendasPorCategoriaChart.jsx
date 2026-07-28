import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import ChartCard from "./ChartCard";
import { vendasPorCategoria } from "./dashboardData";

export default function VendasPorCategoriaChart() {
  return (
    <ChartCard title="Vendas por categoria">
      <div className="flex flex-col items-center">
        <ResponsiveContainer width="100%" height={140}>
          <PieChart>
            <Pie
              data={vendasPorCategoria}
              cx="50%"
              cy="50%"
              innerRadius={42}
              outerRadius={64}
              paddingAngle={2}
              dataKey="value"
            >
              {vendasPorCategoria.map((e) => (
                <Cell key={e.name} fill={e.color} />
              ))}
            </Pie>
            <Tooltip formatter={(v) => `${v}%`} />
          </PieChart>
        </ResponsiveContainer>
        <div className="w-full space-y-1.5 mt-2">
          {vendasPorCategoria.map((s) => (
            <div
              key={s.name}
              className="flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: s.color }}
                />
                <span className="text-slate-600 dark:text-[var(--sidebar-text)]/60">
                  {s.name}
                </span>
              </div>
              <span className="font-semibold text-slate-800 dark:text-[var(--sidebar-text)]/85">
                {s.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  );
}
