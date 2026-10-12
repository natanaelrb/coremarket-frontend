import { ArrowDownToLine, ArrowUpFromLine, CircleDollarSign } from 'lucide-react';
import { formatNumber } from '../../utils/formatQuantity';

export default function EntradasVsSaidasChart({
  entradas = 0,
  saidas = 0,
}) {
  const total = entradas + saidas;

  const percentualEntradas =
    total > 0 ? (entradas / total) * 100 : 0;

  const percentualSaidas =
    total > 0 ? (saidas / total) * 100 : 0;

  const saldo = entradas - saidas;

  const saldoPositivo = saldo >= 0;

  return (
    <article
      className="
        group
        flex
        min-h-[270px]
        flex-col
        rounded-xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-sm
        shadow-slate-900/[0.03]
        transition-all
        duration-150
        hover:-translate-y-[1px]
        hover:border-slate-300
        hover:shadow-md

        dark:border-white/[0.06]
        dark:bg-[#111A31]
        dark:shadow-black/10
        dark:hover:border-white/10
      "
    >
      {/* Cabeçalho */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-emerald-50
              text-emerald-600

              dark:bg-emerald-500/10
              dark:text-emerald-400
            "
          >
            <CircleDollarSign
              className="h-4.5 w-4.5"
              strokeWidth={2}
            />
          </div>

          <div className="min-w-0">
            <h3
              className="
                truncate
                text-sm
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              Entradas x Saídas
            </h3>

            <p
              className="
                mt-0.5
                text-[11px]
                text-slate-400
                dark:text-slate-500
              "
            >
              Total do período
            </p>
          </div>
        </div>

        <span
          className="
            shrink-0
            rounded-full
            border
            border-slate-200
            bg-slate-50
            px-2
            py-1
            text-[10px]
            font-semibold
            text-slate-500

            dark:border-white/[0.06]
            dark:bg-white/[0.03]
            dark:text-slate-400
          "
        >
          {formatNumber(total)} un.
        </span>
      </div>

      {/* Valores principais */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        {/* Entradas */}
        <div
          className="
            rounded-lg
            border
            border-emerald-100
            bg-emerald-50/70
            px-3
            py-3

            dark:border-emerald-500/10
            dark:bg-emerald-500/[0.06]
          "
        >
          <div className="flex items-center gap-1.5">
            <ArrowDownToLine
              className="h-3.5 w-3.5 text-emerald-500"
              strokeWidth={2.5}
            />

            <span
              className="
                text-[11px]
                font-medium
                text-emerald-700
                dark:text-emerald-400
              "
            >
              Entradas
            </span>
          </div>

          <p
            className="
              mt-1.5
              text-xl
              font-bold
              tracking-tight
              text-emerald-600
              dark:text-emerald-400
            "
          >
            {formatNumber(entradas)}
          </p>
        </div>

        {/* Saídas */}
        <div
          className="
            rounded-lg
            border
            border-red-100
            bg-red-50/70
            px-3
            py-3

            dark:border-red-500/10
            dark:bg-red-500/[0.06]
          "
        >
          <div className="flex items-center gap-1.5">
            <ArrowUpFromLine
              className="h-3.5 w-3.5 text-red-500"
              strokeWidth={2.5}
            />

            <span
              className="
                text-[11px]
                font-medium
                text-red-700
                dark:text-red-400
              "
            >
              Saídas
            </span>
          </div>

          <p
            className="
              mt-1.5
              text-xl
              font-bold
              tracking-tight
              text-red-600
              dark:text-red-400
            "
          >
            {formatNumber(saidas)}
          </p>
        </div>
      </div>

      {/* Barra comparativa */}
      <div className="mt-5">
        <div
          className="
            mb-2
            flex
            items-center
            justify-between
            text-[10px]
            font-semibold
          "
        >
          <span className="text-emerald-600 dark:text-emerald-400">
            {percentualEntradas.toFixed(1).replace('.', ',')}%
          </span>

          <span className="text-red-600 dark:text-red-400">
            {percentualSaidas.toFixed(1).replace('.', ',')}%
          </span>
        </div>

        <div
          className="
            flex
            h-2
            w-full
            overflow-hidden
            rounded-full
            bg-slate-100

            dark:bg-white/[0.06]
          "
        >
          <div
            className="
              h-full
              rounded-l-full
              bg-emerald-500
              transition-[width]
              duration-500
              ease-out
            "
            style={{
              width: `${percentualEntradas}%`,
            }}
          />

          <div
            className="
              h-full
              rounded-r-full
              bg-red-500
              transition-[width]
              duration-500
              ease-out
            "
            style={{
              width: `${percentualSaidas}%`,
            }}
          />
        </div>
      </div>

      {/* Saldo líquido */}
      <div
        className="
          mt-auto
          pt-4
        "
      >
        <div
          className={`
            flex
            items-center
            justify-between
            rounded-lg
            border
            px-3
            py-2.5

            ${
              saldoPositivo
                ? `
                  border-emerald-100
                  bg-emerald-50/60
                  dark:border-emerald-500/10
                  dark:bg-emerald-500/[0.05]
                `
                : `
                  border-red-100
                  bg-red-50/60
                  dark:border-red-500/10
                  dark:bg-red-500/[0.05]
                `
            }
          `}
        >
          <div className="flex items-center gap-2">
            <span
              className={`
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-md

                ${
                  saldoPositivo
                    ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
                    : 'bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400'
                }
              `}
            >
              <CircleDollarSign
                className="h-3.5 w-3.5"
                strokeWidth={2}
              />
            </span>

            <span
              className="
                text-[11px]
                font-medium
                text-slate-500
                dark:text-slate-400
              "
            >
              Saldo líquido
            </span>
          </div>

          <span
            className={`
              text-xs
              font-bold

              ${
                saldoPositivo
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-red-600 dark:text-red-400'
              }
            `}
          >
            {saldoPositivo ? '+' : ''}
            {formatNumber(saldo)} un.
          </span>
        </div>
      </div>
    </article>
  );
}