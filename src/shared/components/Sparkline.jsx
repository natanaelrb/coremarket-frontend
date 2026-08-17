import {
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

export default function Sparkline({ data, color }) {
  return (
    <div className="h-8 w-24">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>

          <defs>
            <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.55} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>

          <Area
            type="natural"
            dataKey="v"
            stroke={color}
            strokeWidth={2}
            fill={`url(#gradient-${color})`}
            dot={false}
            isAnimationActive
            animationDuration={900}
          />

        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}