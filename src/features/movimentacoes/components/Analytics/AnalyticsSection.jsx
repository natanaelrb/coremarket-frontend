import { BarChart3 } from 'lucide-react';

import AnalyticsTabs from './AnalyticsTabs';
import EntradasVsSaidasChart from './EntradasVsSaidasChart';
import TopProductsList from './TopProductsList';
import LossReasonsDonut from './LossReasonsDonut';
import HourlyActivityChart from './HourlyActivityChart';

export default function AnalyticsSection({
  data,
  isLoading,
  activeView,
  onChangeView,
}) {
  return (
    <section
      className="
        overflow-hidden
        rounded-2xl
        border border-slate-200
        bg-white
        shadow-sm shadow-slate-900/[0.04]

        dark:border-white/[0.06]
        dark:bg-[#0D1428]
        dark:shadow-black/10
      "
    >
      {/* =========================================================
          CABEÇALHO DA SEÇÃO
      ========================================================== */}
      <div
        className="
          flex
          flex-col
          gap-4
          border-b
          border-slate-200
          px-5
          py-4

          sm:flex-row
          sm:items-center
          sm:justify-between

          dark:border-white/[0.06]
        "
      >
        {/* Título */}
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-emerald-200
              bg-emerald-50
              text-emerald-600

              dark:border-emerald-500/20
              dark:bg-emerald-500/10
              dark:text-emerald-400
            "
          >
            <BarChart3
              className="h-5 w-5"
              strokeWidth={2}
            />
          </div>

          <div className="min-w-0">
            <h2
              className="
                text-sm
                font-bold
                tracking-tight
                text-slate-900

                dark:text-white
              "
            >
              Análises do Período
            </h2>

            <p
              className="
                mt-0.5
                truncate
                text-xs
                text-slate-500

                dark:text-slate-400
              "
            >
              Resumo das movimentações, produtos e desempenho do período.
            </p>
          </div>
        </div>

        {/* Abas */}
        <div className="shrink-0">
          <AnalyticsTabs
            activeView={activeView}
            onChange={onChangeView}
          />
        </div>
      </div>

      {/* =========================================================
          CONTEÚDO
      ========================================================== */}
      <div className="p-4 sm:p-5">
        {isLoading || !data ? (
          <div
            className="
              grid
              grid-cols-1
              gap-3
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="
                  h-[270px]
                  animate-pulse
                  rounded-xl
                  border
                  border-slate-200
                  bg-slate-100

                  dark:border-white/[0.06]
                  dark:bg-[#111A31]
                "
              />
            ))}
          </div>
        ) : (
          <div
            className="
              grid
              grid-cols-1
              gap-3
              md:grid-cols-2
              xl:grid-cols-4
            "
          >
            {/* Entradas x Saídas */}
            <EntradasVsSaidasChart
              entradas={data.entradasSaidas.entradas}
              saidas={data.entradasSaidas.saidas}
            />

            {/* Produtos mais movimentados */}
            <TopProductsList
              produtos={data.topProdutos}
            />

            {/* Motivos de perda */}
            <LossReasonsDonut
              motivos={data.motivosPerda}
            />

            {/* Horários */}
            <HourlyActivityChart
              horarios={data.horarios}
            />
          </div>
        )}
      </div>
    </section>
  );
}