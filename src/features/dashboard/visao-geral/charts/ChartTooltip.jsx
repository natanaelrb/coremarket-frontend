import { useChartTheme } from "../config/chartTheme";
import { fmt } from "../utils/dashboardUtils";

export default function ChartTooltip({ active, payload, label }) {
  const ct = useChartTheme();
  if (!active || !payload?.length) return null;

  return (
    <div
      className="rounded-lg px-3 py-2 shadow-lg text-xs border"
      style={{ background: ct.tooltipBg, borderColor: ct.tooltipBorder }}
    >
      <p className="mb-1 font-medium" style={{ color: ct.tooltipText }}>{label}</p>
      {payload.map((p) => (
        <p key={p.dataKey || p.name} style={{ color: p.color }} className="font-semibold">
          {p.name}: {typeof p.value === "number" && p.value > 100 ? fmt(p.value) : p.value}
        </p>
      ))}
    </div>
  );
}
