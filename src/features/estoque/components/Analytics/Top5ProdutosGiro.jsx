import ChartCard from "./ChartCard.jsx";
import { useChartTheme } from "../../../../shared/hooks/useChartTheme.js";

export default function Top5ProdutosGiro({ data = [] }) {
  const theme = useChartTheme();

  if (!data.length) {
    return (
      <ChartCard
        title="Top 5 Produtos (Giro)"
        description="Produtos com maior velocidade de saída."
      >
        <div className="flex h-full min-h-[245px] items-center justify-center">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Nenhum dado disponível.
          </p>
        </div>
      </ChartCard>
    );
  }

  const maxDias = Math.max(...data.map((item) => item.dias));

  return (
    <ChartCard
      title="Top 5 Produtos (Giro)"
      description="Produtos com maior velocidade de saída."
    >
      <div className="flex h-full min-h-[245px] flex-col">
        <ul className="flex flex-1 flex-col justify-between py-2">
          {data.map((item, index) => {
            const percentual =
              maxDias > 0 ? (item.dias / maxDias) * 100 : 0;

            return (
              <li
                key={item.produto}
                className="flex items-center gap-3"
              >
                {/* Ranking */}
                <span className="w-5 shrink-0 text-[11px] font-semibold text-gray-400 dark:text-gray-500">
                  {index + 1}
                </span>

                {/* Produto */}
                <span className="w-[105px] shrink-0 truncate text-xs font-medium text-gray-600 dark:text-gray-300">
                  {item.produto}
                </span>

                {/* Barra */}
                <div className="h-2.5 min-w-0 flex-1 overflow-hidden rounded-full bg-gray-100 dark:bg-[#1E2142]">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${percentual}%`,
                      backgroundColor: theme.accent,
                    }}
                  />
                </div>

                {/* Dias */}
                <span className="w-[54px] shrink-0 text-right text-[11px] font-semibold text-gray-800 dark:text-white">
                  {item.dias} dias
                </span>
              </li>
            );
          })}
        </ul>

        <div className="mt-3 flex shrink-0 items-center gap-2 border-t border-gray-100 pt-3 dark:border-white/5">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: theme.accent }}
          />

          <span className="text-[11px] text-gray-400 dark:text-gray-500">
            Menor tempo em estoque = maior giro
          </span>
        </div>
      </div>
    </ChartCard>
  );
}