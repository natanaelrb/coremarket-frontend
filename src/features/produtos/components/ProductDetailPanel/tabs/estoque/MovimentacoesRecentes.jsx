import {
  ArrowDownLeft,
  ArrowUpRight,
  Warehouse,
} from "lucide-react";

import {
  formatDateTime,
  getMovimentacoes,
} from "./estoque.utils";

function MovementBadge({ type }) {
  const isEntry =
    String(type).toLowerCase() === "entrada";

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1
        rounded-full
        px-2.5 py-1
        text-[9px]
        font-bold

        ${
          isEntry
            ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300"
            : "bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-300"
        }
      `}
    >
      {isEntry ? (
        <ArrowDownLeft size={11} />
      ) : (
        <ArrowUpRight size={11} />
      )}

      {type}
    </span>
  );
}

export function MovimentacoesRecentes({ produto }) {
  const movimentos = getMovimentacoes(produto);

  return (
    <section
      className="
        rounded-xl
        border border-slate-200
        bg-white
        p-4
        shadow-[0_2px_10px_rgba(15,23,42,0.025)]
        transition-all duration-300
        hover:border-slate-300
        hover:shadow-[0_8px_24px_rgba(15,23,42,0.06)]

        dark:border-[#17375d]
        dark:bg-[#061c38]
        dark:hover:border-[#24517f]
      "
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-bold text-slate-800 dark:text-[#e3edfc]">
          Movimentações recentes
        </h3>

        <button
          type="button"
          className="
            text-[10px]
            font-semibold
            text-emerald-600
            hover:text-emerald-700
            dark:text-emerald-400
            dark:hover:text-emerald-300
          "
        >
          Ver histórico →
        </button>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-[#12365a]">
        <div
          className="
            grid
            grid-cols-[1.15fr_1fr_0.8fr_0.9fr]
            bg-slate-50
            px-3 py-2.5
            dark:bg-[#09213f]
          "
        >
          <span className="text-[9px] font-semibold text-slate-500 dark:text-[#8da8c6]">
            Data
          </span>

          <span className="text-[9px] font-semibold text-slate-500 dark:text-[#8da8c6]">
            Tipo
          </span>

          <span className="text-[9px] font-semibold text-slate-500 dark:text-[#8da8c6]">
            Quantidade
          </span>

          <span className="text-[9px] font-semibold text-slate-500 dark:text-[#8da8c6]">
            Responsável
          </span>
        </div>

        {movimentos.length > 0 ? (
          movimentos.slice(0, 5).map((movimento, index) => {
            const tipo =
              movimento.tipo ||
              movimento.tipoMovimentacao ||
              "Entrada";

            const quantidade =
              movimento.quantidade ?? 0;

            return (
              <div
                key={
                  movimento.id ??
                  `${produto?.id}-mov-${index}`
                }
                className="
                  grid
                  grid-cols-[1.15fr_1fr_0.8fr_0.9fr]
                  items-center
                  border-t border-slate-100
                  px-3 py-2.5
                  hover:bg-slate-50
                  dark:border-[#12365a]
                  dark:hover:bg-[#09294d]
                "
              >
                <span className="text-[9px] text-slate-600 dark:text-[#b8cbe2]">
                  {formatDateTime(
                    movimento.data ||
                      movimento.dataHora ||
                      movimento.createdAt
                  )}
                </span>

                <MovementBadge type={tipo} />

                <span className="text-[10px] font-semibold text-slate-700 dark:text-[#d7e5f7]">
                  {Number(quantidade) >= 0 ? "+" : ""}
                  {quantidade}
                </span>

                <span className="truncate text-[9px] text-slate-600 dark:text-[#b8cbe2]">
                  {movimento.responsavel ||
                    movimento.usuario ||
                    "Admin"}
                </span>
              </div>
            );
          })
        ) : (
          <div className="flex min-h-[220px] items-center justify-center px-6 text-center">
            <div>
              <Warehouse
                size={28}
                className="mx-auto text-slate-300 dark:text-[#31577e]"
              />

              <p className="mt-2 text-xs font-medium text-slate-500 dark:text-[#7290b4]">
                Nenhuma movimentação registrada
              </p>

              <p className="mt-1 text-[10px] text-slate-400 dark:text-[#587795]">
                As movimentações deste produto aparecerão aqui.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}