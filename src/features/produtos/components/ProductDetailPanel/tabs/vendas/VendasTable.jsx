import { Eye, MoreHorizontal } from "lucide-react";

import {
  formatCurrency,
  formatDate,
  formatNumber,
} from "../../../../utils/formatters";

import { VendaStatusBadge } from "./VendasShared";

export function VendasTable({
  vendas,
}) {
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
            flex
            items-center
            justify-between
            border-b
            border-slate-100
            px-4
            py-3

            dark:border-[#12365a]
          "
        >
          <div>
            <h3
              className="
                text-xs
                font-bold
                text-slate-800
                dark:text-[#d7e5f7]
              "
            >
              Vendas recentes
            </h3>

            <p
              className="
                mt-0.5
                text-[9px]
                text-slate-400
                dark:text-[#7290b4]
              "
            >
              Últimas movimentações deste produto
            </p>
          </div>

          <span
            className="
              rounded-full
              bg-slate-100
              px-2
              py-1
              text-[9px]
              font-semibold
              text-slate-500

              dark:bg-[#09213f]
              dark:text-[#8da8c6]
            "
          >
            {vendas.length} registros
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse">
            <thead>
              <tr
                className="
                  bg-slate-50

                  dark:bg-[#09213f]
                "
              >
                <th className="px-4 py-3 text-left text-[9px] font-bold uppercase tracking-wide text-slate-500 dark:text-[#8da8c6]">
                  Data
                </th>

                <th className="px-4 py-3 text-left text-[9px] font-bold uppercase tracking-wide text-slate-500 dark:text-[#8da8c6]">
                  Operação
                </th>

                <th className="px-4 py-3 text-left text-[9px] font-bold uppercase tracking-wide text-slate-500 dark:text-[#8da8c6]">
                  Quantidade
                </th>

                <th className="px-4 py-3 text-left text-[9px] font-bold uppercase tracking-wide text-slate-500 dark:text-[#8da8c6]">
                  Valor unitário
                </th>

                <th className="px-4 py-3 text-left text-[9px] font-bold uppercase tracking-wide text-slate-500 dark:text-[#8da8c6]">
                  Total
                </th>

                <th className="px-4 py-3 text-left text-[9px] font-bold uppercase tracking-wide text-slate-500 dark:text-[#8da8c6]">
                  Status
                </th>

                <th className="px-4 py-3 text-right text-[9px] font-bold uppercase tracking-wide text-slate-500 dark:text-[#8da8c6]">
                  Ações
                </th>
              </tr>
            </thead>

            <tbody>
              {vendas.length > 0 ? (
                vendas.map((venda) => (
                  <tr
                    key={venda.id}
                    className="
                      border-t
                      border-slate-100
                      transition-colors
                      hover:bg-slate-50

                      dark:border-[#12365a]
                      dark:hover:bg-[#09294d]
                    "
                  >
                    <td className="px-4 py-3">
                      <span className="text-[10px] font-medium text-slate-600 dark:text-[#b8cbe2]">
                        {formatDate(venda.data)}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <span className="text-[10px] font-semibold text-slate-700 dark:text-[#d7e5f7]">
                        {venda.id}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <span className="text-[10px] font-semibold text-slate-700 dark:text-[#d7e5f7]">
                        {formatNumber(
                          venda.quantidade
                        )}{" "}
                        un
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <span className="text-[10px] text-slate-600 dark:text-[#b8cbe2]">
                        {formatCurrency(
                          venda.valorUnitario
                        )}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <span
                        className="
                          text-[10px]
                          font-bold
                          text-slate-800
                          dark:text-[#e3edfc]
                        "
                      >
                        {formatCurrency(
                          venda.valorTotal
                        )}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <VendaStatusBadge />
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          title="Visualizar venda"
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
                ))
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
                    Nenhuma venda encontrada.
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
            px-4
            py-3

            dark:border-[#12365a]
          "
        >
          <span
            className="
              text-[9px]
              text-slate-400
              dark:text-[#7290b4]
            "
          >
            Mostrando {vendas.length} vendas recentes
          </span>

          <button
            type="button"
            className="
              text-[9px]
              font-semibold
              text-emerald-600
              transition-colors
              hover:text-emerald-700

              dark:text-emerald-400
              dark:hover:text-emerald-300
            "
          >
            Ver histórico completo →
          </button>
        </div>
      </div>
    </div>
  );
}