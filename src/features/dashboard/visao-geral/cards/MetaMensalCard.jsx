import ChartCard from "../cards/ChartCard";
import { fmt } from "../utils/dashboardUtils";
import { useChartTheme } from "../config/chartTheme";
import { META_MENSAL, ATUAL_MES } from "../data/dashboardData";

export default function MetaMensalCard() {
  const ct = useChartTheme();
  const progresso = Math.min((ATUAL_MES / META_MENSAL) * 100, 100);
  const circunferencia = 2 * Math.PI * 40;

  return (
    <ChartCard title="Meta mensal">
      <div className="flex flex-col items-center justify-center h-full gap-3 py-1">
        <div className="relative w-28 h-28">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke={ct.violetSoft}
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke={ct.violet}
              strokeWidth="10"
              strokeDasharray={circunferencia}
              strokeDashoffset={circunferencia * (1 - progresso / 100)}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.6s ease" }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-slate-800 dark:text-[var(--sidebar-text)]">
              {Math.round(progresso)}%
            </span>
          </div>
        </div>
        <div className="text-center text-xs space-y-0.5">
          <p className="text-slate-500 dark:text-[var(--sidebar-text)]/45">
            Meta: {fmt(META_MENSAL)}
          </p>
          <p className="text-slate-500 dark:text-[var(--sidebar-text)]/45">
            Atual: {fmt(ATUAL_MES)}
          </p>
        </div>
      </div>
    </ChartCard>
  );
}
