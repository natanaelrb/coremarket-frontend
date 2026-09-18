import { formatCurrency } from "../../../../../shared/utils/formatCurrency.js";
import { formatDate } from "../../../../../shared/utils/formatDate.js";
import { FORMA_PAGAMENTO_CONFIG } from "../../../../clientes/constants/formaPagamentoConfig.js";

/** Full purchase-history table for the "Compras" tab. */
export function ComprasTable({ compras = [] }) {
  return (
    <div
      className="
        overflow-hidden
        rounded-xl
        border border-slate-200
        bg-white
        shadow-[0_1px_2px_rgba(15,23,42,0.02)]
        dark:border-white/10
        dark:bg-zinc-900
      "
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/70 dark:border-white/10 dark:bg-white/[0.02]">
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">
                Venda
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">
                Data
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">
                Itens
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">
                Forma de pagamento
              </th>

              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 dark:text-slate-400">
                Valor
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-white/5">
            {compras.map((c) => (
              <tr
                key={c.venda}
                className="
                  transition-colors
                  hover:bg-slate-50/80
                  dark:hover:bg-white/[0.02]
                "
              >
                <td className="px-4 py-3 font-medium text-[#0f172a] dark:text-white">
                  {c.venda}
                </td>

                <td className="px-4 py-3 text-[#64748b] dark:text-slate-300">
                  {formatDate(c.data)}
                </td>

                <td className="px-4 py-3 text-[#64748b] dark:text-slate-300">
                  {c.itens}
                </td>

                <td className="px-4 py-3 text-[#64748b] dark:text-slate-300">
                  {FORMA_PAGAMENTO_CONFIG[c.formaPagamento]?.label ??
                    c.formaPagamento}
                </td>

                <td className="px-4 py-3 text-right font-semibold text-[#0f172a] dark:text-white">
                  {formatCurrency(c.valor)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}