import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ProdutosChart({ data = [] }) {
  const hasData = data.length > 0;

  return (
    <section
      className="
        min-w-0
        rounded-xl
        border border-slate-200/80
        bg-white
        p-4
        shadow-sm shadow-slate-900/[0.02]
        dark:border-[#252a4a]
        dark:bg-[#141833]
        dark:shadow-black/10
      "
    >
      <h4
        className="
          mb-4
          text-sm
          font-semibold
          text-slate-800
          dark:text-slate-100
        "
      >
        Produtos mais comprados
      </h4>

      {hasData ? (
        <div className="flex min-w-0 items-center gap-4">
          <div className="shrink-0">
            <ResponsiveContainer width={110} height={110}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="percentual"
                  nameKey="nome"
                  innerRadius={30}
                  outerRadius={50}
                  paddingAngle={2}
                  animationDuration={700}
                >
                  {data.map((entry) => (
                    <Cell
                      key={entry.nome}
                      fill={entry.cor}
                      stroke="none"
                    />
                  ))}
                </Pie>

                <Tooltip
                  formatter={(value, name) => [
                    `${value}%`,
                    name,
                  ]}
                  contentStyle={{
                    fontSize: 12,
                    borderRadius: 8,
                    border: "1px solid #E2E8F0",
                    backgroundColor: "#FFFFFF",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <ul className="min-w-0 flex-1 space-y-2">
            {data.map((entry) => (
              <li
                key={entry.nome}
                className="flex items-center justify-between gap-2 text-xs"
              >
                <span className="flex min-w-0 items-center gap-1.5 text-slate-500 dark:text-slate-400">
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: entry.cor }}
                    aria-hidden="true"
                  />

                  <span className="truncate">
                    {entry.nome}
                  </span>
                </span>

                <span className="shrink-0 font-medium tabular-nums text-slate-700 dark:text-slate-200">
                  {entry.percentual}%
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex h-[110px] items-center justify-center text-sm text-slate-500 dark:text-slate-400">
          Nenhum produto disponível.
        </div>
      )}
    </section>
  );
}