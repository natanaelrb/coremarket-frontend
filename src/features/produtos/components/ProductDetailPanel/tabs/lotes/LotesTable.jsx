import { Eye, MoreHorizontal } from "lucide-react";

import {
  formatDate,
  getDiasRestantes,
  getLoteStatus,
  getLotes,
} from "./lotes.utils";

import { LoteStatusBadge } from "./LotesShared";

export function LotesTable({ produto }) {
  const lotes = getLotes(produto);

  return (
    <div className="px-5 pb-5">
      <div
        className="
          overflow-hidden
          rounded-xl
          border
          border-slate-200

          dark:border-[#17375d]
        "
      >
        <div
          className="
            overflow-x-auto
          "
        >
          <table className="w-full min-w-[850px] border-collapse">
            <thead>
              <tr
                className="
                  bg-slate-50
                  dark:bg-[#09213f]
                "
              >
                <th className="px-3 py-3 text-left text-[9px] font-bold text-slate-500 dark:text-[#8da8c6]">
                  Lote ↕
                </th>

                <th className="px-3 py-3 text-left text-[9px] font-bold text-slate-500 dark:text-[#8da8c6]">
                  Quantidade ↕
                </th>

                <th className="px-3 py-3 text-left text-[9px] font-bold text-slate-500 dark:text-[#8da8c6]">
                  Validade ↕
                </th>

                <th className="px-3 py-3 text-left text-[9px] font-bold text-slate-500 dark:text-[#8da8c6]">
                  Dias restantes ↕
                </th>

                <th className="px-3 py-3 text-left text-[9px] font-bold text-slate-500 dark:text-[#8da8c6]">
                  Status ↕
                </th>

                <th className="px-3 py-3 text-left text-[9px] font-bold text-slate-500 dark:text-[#8da8c6]">
                  Observações ↕
                </th>

                <th className="px-3 py-3 text-right text-[9px] font-bold text-slate-500 dark:text-[#8da8c6]">
                  Ações
                </th>
              </tr>
            </thead>

            <tbody>
              {lotes.length > 0 ? (
                lotes.map((lote, index) => {
                  const dias = getDiasRestantes(
                    lote?.validade
                  );

                  const status =
                    getLoteStatus(lote);

                  return (
                    <tr
                      key={
                        lote.id ??
                        lote.codigo ??
                        `lote-${index}`
                      }
                      className="
                        border-t
                        border-slate-100
                        transition-colors
                        hover:bg-slate-50

                        dark:border-[#12365a]
                        dark:hover:bg-[#09294d]
                      "
                    >
                      <td className="px-3 py-3">
                        <div className="flex items-center gap-2">
                          <span
                            className="
                              text-[10px]
                              font-semibold
                              text-slate-700
                              dark:text-[#d7e5f7]
                            "
                          >
                            {lote.codigo ||
                              lote.numero ||
                              `L00${index + 1}`}
                          </span>

                          {index === 0 && (
                            <span
                              className="
                                rounded-full
                                border
                                border-emerald-200
                                bg-emerald-50
                                px-1.5
                                py-0.5
                                text-[8px]
                                font-semibold
                                text-emerald-600

                                dark:border-emerald-500/20
                                dark:bg-emerald-500/10
                                dark:text-emerald-300
                              "
                            >
                              Lote principal
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="px-3 py-3 text-[10px] font-medium text-slate-600 dark:text-[#b8cbe2]">
                        {Number(
                          lote.quantidade ?? 0
                        )}{" "}
                        un
                      </td>

                      <td className="px-3 py-3 text-[10px] text-slate-600 dark:text-[#b8cbe2]">
                        {formatDate(
                          lote.validade
                        )}
                      </td>

                      <td className="px-3 py-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`
                              h-2
                              w-2
                              rounded-full
                              ${
                                dias === null
                                  ? "bg-slate-300 dark:bg-slate-500"
                                  : dias < 0
                                    ? "bg-red-500"
                                    : dias <= 30
                                      ? "bg-amber-500"
                                      : "bg-emerald-500"
                              }
                            `}
                          />

                          <span className="text-[10px] font-medium text-slate-600 dark:text-[#b8cbe2]">
                            {dias === null
                              ? "—"
                              : `${dias} dias`}
                          </span>
                        </div>
                      </td>

                      <td className="px-3 py-3">
                        <LoteStatusBadge
                          status={status}
                        />
                      </td>

                      <td className="max-w-[180px] truncate px-3 py-3 text-[10px] text-slate-600 dark:text-[#b8cbe2]">
                        {lote.observacao ||
                          lote.observacoes ||
                          "—"}
                      </td>

                      <td className="px-3 py-3">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            title="Visualizar lote"
                            className="
                              flex
                              h-8
                              w-8
                              items-center
                              justify-center
                              rounded-lg
                              border
                              border-slate-200
                              bg-slate-50
                              text-slate-500
                              transition-all
                              hover:border-blue-200
                              hover:bg-blue-50
                              hover:text-blue-600

                              dark:border-[#17375d]
                              dark:bg-[#09213f]
                              dark:text-[#8da8c6]
                              dark:hover:bg-blue-500/10
                              dark:hover:text-blue-400
                            "
                          >
                            <Eye size={14} />
                          </button>

                          <button
                            type="button"
                            title="Mais ações"
                            className="
                              flex
                              h-8
                              w-8
                              items-center
                              justify-center
                              rounded-lg
                              border
                              border-slate-200
                              bg-slate-50
                              text-slate-500
                              transition-all
                              hover:border-slate-300
                              hover:bg-slate-100

                              dark:border-[#17375d]
                              dark:bg-[#09213f]
                              dark:text-[#8da8c6]
                              dark:hover:bg-[#0c2a4d]
                            "
                          >
                            <MoreHorizontal
                              size={15}
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={7}
                    className="
                      py-12
                      text-center
                      text-xs
                      text-slate-400

                      dark:text-[#7290b4]
                    "
                  >
                    Nenhum lote cadastrado para este produto.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-slate-100
            px-3
            py-3

            dark:border-[#12365a]
          "
        >
          <span className="text-[9px] text-slate-400 dark:text-[#7290b4]">
            Mostrando {lotes.length} de{" "}
            {lotes.length} lotes
          </span>

          <div className="flex items-center gap-1">
            <button
              type="button"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                text-slate-400

                dark:border-[#17375d]
                dark:text-[#587795]
              "
            >
              ‹
            </button>

            <button
              type="button"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                bg-emerald-500
                text-xs
                font-bold
                text-white
              "
            >
              1
            </button>

            <button
              type="button"
              className="
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                text-slate-500

                dark:border-[#17375d]
                dark:text-[#8da8c6]
              "
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}