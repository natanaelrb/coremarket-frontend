import { formatCurrency } from "../../../../../shared/utils/formatCurrency.js";
import { formatDate } from "../../../../../shared/utils/formatDate.js";
import { FORMA_PAGAMENTO_CONFIG } from "../../../../clientes/constants/formaPagamentoConfig.js";

/** "Histórico de pagamentos" table: data, conta, valor, forma, registrado por. */
export function PagamentosTable({ pagamentos = [] }) {
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
            <tr
              className="
                border-b
                border-slate-200
                bg-slate-50/70
                dark:border-white/10
                dark:bg-white/[0.02]
              "
            >
              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">
                Data
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">
                Conta
              </th>

              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 dark:text-slate-400">
                Valor
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">
                Forma
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">
                Registrado por
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-white/5">
            {pagamentos.map((p) => (
              <tr
                key={p.id}
                className="
                  transition-colors
                  hover:bg-slate-50/80
                  dark:hover:bg-white/[0.02]
                "
              >
                <td className="px-4 py-3 text-[#64748b] dark:text-slate-300">
                  {formatDate(p.data)}
                </td>

                <td className="px-4 py-3 font-medium text-[#0f172a] dark:text-white">
                  {p.conta}
                </td>

                <td className="px-4 py-3 text-right font-semibold text-[#16a34a] dark:text-[#4ade80]">
                  {formatCurrency(p.valor)}
                </td>

                <td className="px-4 py-3 text-[#64748b] dark:text-slate-300">
                  {FORMA_PAGAMENTO_CONFIG[p.forma]?.label ?? p.forma}
                </td>

                <td className="px-4 py-3 text-[#64748b] dark:text-slate-300">
                  {p.registradoPor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}