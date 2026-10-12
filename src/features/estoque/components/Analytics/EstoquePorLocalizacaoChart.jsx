import ChartCard from "./ChartCard.jsx";

export default function EstoquePorLocalizacaoChart({ data = [] }) {
  return (
    <ChartCard
      title="Estoque por Localização"
      description="Quantidade de itens armazenados por local."
    >
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.localizacao}>
            <div className="mb-1.5 flex items-center justify-between gap-3">
              <span className="truncate text-sm text-gray-600 dark:text-gray-300">
                {item.localizacao}
              </span>

              <span className="shrink-0 text-sm font-semibold text-gray-900 dark:text-white">
                {item.quantidade.toLocaleString("pt-BR")}
              </span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-gray-100 dark:bg-white/5">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                style={{ width: `${item.percentual}%` }}
              />
            </div>

            <p className="mt-1 text-[11px] text-gray-400 dark:text-gray-500">
              {item.percentual}% do estoque
            </p>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}