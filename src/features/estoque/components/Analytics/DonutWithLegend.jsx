import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function DonutWithLegend({
  data = [],
  nameKey,
  valueKey,
  colors = [],
  centerLabel,
  centerValue,
  donutSize = 180,
  innerRadius = 54,
  outerRadius = 78,
  centerValueClassName = "text-[17px]",
  legendSpacing = "space-y-2.5",
}) {
  if (!data.length) {
    return (
      <div className="flex h-full min-h-[245px] items-center justify-center">
        <p className="text-sm text-gray-400 dark:text-gray-500">
          Nenhum dado disponível.
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-[245px] items-center gap-5">
      {/* Donut */}
      <div
        className="relative shrink-0"
        style={{
          width: donutSize,
          height: donutSize,
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey={valueKey}
              nameKey={nameKey}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              paddingAngle={3}
              stroke="none"
              animationDuration={700}
            >
              {data.map((item, index) => (
                <Cell
                  key={`${item?.[nameKey] ?? index}-${index}`}
                  fill={colors[index % colors.length] ?? "#8b5cf6"}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* Centro */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-3 text-center">
          <span
            className={`
              max-w-[135px]
              truncate
              font-bold
              leading-tight
              tracking-tight
              text-slate-800
              dark:text-white
              ${centerValueClassName}
            `}
          >
            {centerValue ?? 0}
          </span>

          <span className="mt-1 text-[10px] font-medium text-slate-400 dark:text-slate-500">
            {centerLabel ?? ""}
          </span>
        </div>
      </div>

      {/* Legenda */}
      <div className="min-w-0 flex-1">
        <div className={legendSpacing}>
          {data.map((item, index) => {
            const name = item?.[nameKey] ?? "Sem nome";
            const value = item?.[valueKey] ?? 0;
            const color =
              colors[index % colors.length] ?? "#8b5cf6";

            return (
              <div
                key={`${name}-${index}`}
                className="
                  flex items-center justify-between
                  gap-3
                  rounded-lg
                  px-2 py-2
                  transition-colors
                  hover:bg-gray-50
                  dark:hover:bg-white/5
                "
              >
                <div className="flex min-w-0 items-center gap-2.5">
                  <span
                    className="h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ backgroundColor: color }}
                  />

                  <span className="truncate text-xs font-medium text-slate-600 dark:text-slate-300">
                    {name}
                  </span>
                </div>

                <span className="shrink-0 text-xs font-semibold text-slate-800 dark:text-white">
                  {value}%
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}