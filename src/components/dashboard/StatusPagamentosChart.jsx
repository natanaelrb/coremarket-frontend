import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import ChartCard from "./ChartCard";
import { statusPagamentos } from "./dashboardData";

const total = statusPagamentos.reduce((acc, s) => acc + s.qtd, 0);

export default function StatusPagamentosChart() {
  return (
    <ChartCard title="Status de pagamentos">
      <div className="flex flex-col items-center">
        <ResponsiveContainer width="100%" height={140}>
          <PieChart>
            <Pie
              data={statusPagamentos}
              cx="50%"
              cy="50%"
              innerRadius={42}
              outerRadius={64}
              paddingAngle={2}
              dataKey="qtd"
            >
              {statusPagamentos.map((e) => (
                <Cell key={e.name} fill={e.color} />
              ))}
            </Pie>
            <Tooltip formatter={(v) => `${v} contas`} />
          </PieChart>
        </ResponsiveContainer>
        <div className="w-full space-y-1.5 mt-2">
          {statusPagamentos.map((s) => {
            const pct = ((s.qtd / total) * 100).toFixed(1);
            return (
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
                  {s.qtd} ({pct}%)
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </ChartCard>
  );
}
