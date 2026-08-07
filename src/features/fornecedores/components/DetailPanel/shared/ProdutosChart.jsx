import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

export default function ProdutosChart({ data }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 dark:border-[#1c2044] dark:bg-[#10132c]">
      <h4 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-200">Produtos mais comprados</h4>
      <div className="flex items-center gap-4">
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
                <Cell key={entry.nome} fill={entry.cor} stroke="none" />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name) => [`${value}%`, name]}
              contentStyle={{ fontSize: 12, borderRadius: 8 }}
            />
          </PieChart>
        </ResponsiveContainer>

        <ul className="flex-1 space-y-1.5">
          {data.map((entry) => (
            <li key={entry.nome} className="flex items-center justify-between text-xs">
              <span className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: entry.cor }}
                />
                {entry.nome}
              </span>
              <span className="font-medium text-gray-700 dark:text-gray-200">{entry.percentual}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
