// import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

// /**
//  * Reusable donut chart with a centered label/value and a right-side legend
//  * list. Used by both EstoquePorCategoriaChart and SituacaoEstoqueChart so
//  * the two only need to supply data + colors + center text.
//  */
// export default function DonutWithLegend({ data, nameKey, valueKey, colors, centerLabel, centerValue }) {
//   return (
//     <div className="flex items-center gap-4">
//       <div className="relative h-[150px] w-[150px] shrink-0">
//         <ResponsiveContainer width="100%" height="100%">
//           <PieChart>
//             <Pie
//               data={data}
//               dataKey={valueKey}
//               nameKey={nameKey}
//               innerRadius={48}
//               outerRadius={70}
//               paddingAngle={2}
//               startAngle={90}
//               endAngle={-270}
//               animationDuration={700}
//             >
//               {data.map((entry, index) => (
//                 <Cell key={entry[nameKey]} fill={colors[index % colors.length]} stroke="none" />
//               ))}
//             </Pie>
//           </PieChart>
//         </ResponsiveContainer>
//         <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
//           <span className="text-base font-bold text-gray-900 dark:text-white">{centerValue}</span>
//           <span className="text-[11px] text-gray-400 dark:text-gray-500">{centerLabel}</span>
//         </div>
//       </div>
//       <ul className="flex-1 space-y-1.5 text-xs">
//         {data.map((entry, index) => (
//           <li key={entry[nameKey]} className="flex items-center justify-between gap-2 text-gray-600 dark:text-gray-300">
//             <span className="flex items-center gap-1.5 truncate">
//               <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: colors[index % colors.length] }} />
//               <span className="truncate">{entry[nameKey]}</span>
//             </span>
//             <span className="font-medium text-gray-900 dark:text-white">{entry[valueKey]}%</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }


import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

/**
 * Gráfico de rosca reutilizável com valor central e legenda.
 */
export default function DonutWithLegend({
  data = [],
  nameKey,
  valueKey,
  colors = [],
  centerLabel,
  centerValue,
}) {
  return (
    <div className="flex h-full min-h-[260px] flex-col gap-4 lg:flex-row lg:items-center">
      <div className="relative h-[220px] flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey={valueKey}
              nameKey={nameKey}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={90}
              paddingAngle={3}
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

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-slate-800 dark:text-white">
            {centerValue ?? 0}
          </span>

          <span className="text-xs text-slate-500 dark:text-slate-400">
            {centerLabel ?? ""}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 lg:min-w-[180px]">
        {data.map((item, index) => {
          const name = item?.[nameKey] ?? "Sem nome";
          const value = item?.[valueKey] ?? 0;
          const color = colors[index % colors.length] ?? "#8b5cf6";

          return (
            <div
              key={`${name}-${index}`}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className="h-3 w-3 shrink-0 rounded-full"
                  style={{ backgroundColor: color }}
                />

                <span className="truncate text-sm text-slate-600 dark:text-slate-300">
                  {name}
                </span>
              </div>

              <span className="text-sm font-semibold text-slate-800 dark:text-white">
                {value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}