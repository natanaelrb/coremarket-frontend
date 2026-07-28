import ChartCard from "../../../components/dashboard/ChartCard";
import { fmt, heatColor } from "../../../components/dashboard/dashboardUtils";
import { useChartTheme } from "../../../components/dashboard/chartTheme";
import {
  heatmapData,
  DIAS_SEMANA,
  HEAT_MAX,
} from "../../../components/dashboard/dashboardData";

export default function HeatmapVendas() {
  const { dark } = useChartTheme();
  const legendaCores = dark
    ? ["#23254A", "#3B3D7A", "#5B5FA8", "#7C7FD4", "#A5A8F0"]
    : ["#EDE9FE", "#C4B5FD", "#A78BFA", "#7C3AED", "#5B21B6"];

  return (
    <ChartCard
      title="Heatmap de vendas"
      subtitle="Intensidade de vendas por dia — últimas 5 semanas"
    >
      <div className="overflow-x-auto">
        <div className="flex gap-1.5 mb-2 ml-10">
          {DIAS_SEMANA.map((d) => (
            <div
              key={d}
              className="w-10 text-center text-[10px] font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35"
            >
              {d}
            </div>
          ))}
        </div>

        {heatmapData.map((semana, si) => (
          <div key={si} className="flex items-center gap-1.5 mb-1.5">
            <span className="text-[10px] text-slate-400 dark:text-[var(--sidebar-text)]/35 w-8 text-right flex-shrink-0">
              S{si + 1}
            </span>
            {semana.map((val, di) => (
              <div
                key={di}
                title={`${DIAS_SEMANA[di]} S${si + 1}: ${fmt(val)}`}
                className="w-10 h-8 rounded-md cursor-pointer transition-transform hover:scale-110"
                style={{ background: heatColor(val, HEAT_MAX, dark) }}
              />
            ))}
          </div>
        ))}

        <div className="flex items-center gap-2 mt-3 ml-10">
          <span className="text-[10px] text-slate-400 dark:text-[var(--sidebar-text)]/35">
            Menos
          </span>
          {legendaCores.map((c) => (
            <div
              key={c}
              className="w-5 h-3 rounded-sm"
              style={{ background: c }}
            />
          ))}
          <span className="text-[10px] text-slate-400 dark:text-[var(--sidebar-text)]/35">
            Mais
          </span>
        </div>
      </div>
    </ChartCard>
  );
}
