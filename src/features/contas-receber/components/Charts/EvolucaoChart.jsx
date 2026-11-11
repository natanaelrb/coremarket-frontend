import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CHART_SERIES } from "../../constants";
import { useChartTheme } from "../../../../shared/hooks/useChartTheme";
import { formatCompact } from "../../../../shared/utils/formatNumber";
import { ChartTooltip } from "./ChartTooltip";

export function EvolucaoChart({ data, hidden }) {
  const t = useChartTheme();
  const showDots = data.length <= 6;
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 8, right: 12, left: -14, bottom: 0 }}
      >
        <defs>
          {CHART_SERIES.filter((s) => s.area).map((s) => (
            <linearGradient
              key={s.key}
              id={`grad-${s.key}`}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor={s.color} stopOpacity={0.22} />
              <stop offset="100%" stopColor={s.color} stopOpacity={0.02} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid stroke={t.grid} strokeDasharray="3 3" vertical={false} />
        <XAxis
          dataKey="label"
          tick={{ fontSize: 10, fill: t.axis }}
          tickLine={false}
          axisLine={{ stroke: t.grid }}
          interval="preserveStartEnd"
          minTickGap={28}
        />
        <YAxis
          tick={{ fontSize: 10, fill: t.axis }}
          tickLine={false}
          axisLine={false}
          tickFormatter={formatCompact}
          width={44}
        />
        <Tooltip
          content={<ChartTooltip />}
          cursor={{ stroke: t.cursor, strokeOpacity: 0.25, strokeWidth: 1 }}
        />
        {CHART_SERIES.filter((s) => !hidden.has(s.key)).map((s) => (
          <Area
            key={s.key}
            type="monotone"
            dataKey={s.key}
            stroke={s.color}
            strokeWidth={2}
            fill={s.area ? `url(#grad-${s.key})` : "transparent"}
            dot={showDots ? { r: 3, fill: s.color, strokeWidth: 0 } : false}
            activeDot={{ r: 4, strokeWidth: 2, stroke: "#fff" }}
            isAnimationActive
            animationDuration={900}
          />
        ))}
      </AreaChart>
    </ResponsiveContainer>
  );
}
