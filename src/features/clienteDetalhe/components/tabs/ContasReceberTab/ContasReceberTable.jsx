import { Wallet } from "lucide-react";

import { StatusContaBadge } from "./StatusContaBadge.jsx";
import IconButton from "../../../../../shared/components/actions/IconButton.jsx";
import { formatCurrency } from "../../../../../shared/utils/formatCurrency.js";
import { formatDate } from "../../../../../shared/utils/formatDate.js";
import { STATUS_CONTA_RECEBER } from "../../../../../shared/constants/enums.js";

/** "Contas a receber" table: vencimento, valor, pago, saldo, status, ações. */
export function ContasReceberTable({
  contas = [],
  onRegistrarPagamento,
}) {
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
        <table className="w-full min-w-[900px] text-sm">
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
                Venda
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">
                Vencimento
              </th>

              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 dark:text-slate-400">
                Valor
              </th>

              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 dark:text-slate-400">
                Pago
              </th>

              <th className="px-4 py-3 text-right text-xs font-semibold text-slate-500 dark:text-slate-400">
                Saldo
              </th>

              <th className="px-4 py-3 text-left text-xs font-semibold text-slate-500 dark:text-slate-400">
                Status
              </th>

              <th className="px-4 py-3 text-center text-xs font-semibold text-slate-500 dark:text-slate-400">
                Ações
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-white/5">
            {contas.map((c) => (
              <tr
                key={c.id}
                className="
                  transition-colors
                  hover:bg-slate-50/80
                  dark:hover:bg-white/[0.02]
                "
              >
                <td className="px-4 py-3 font-medium text-[#0f172a] dark:text-white">
                  {c.id}
                </td>

                <td className="px-4 py-3 text-[#64748b] dark:text-slate-300">
                  {formatDate(c.vencimento)}
                </td>

                <td className="px-4 py-3 text-right text-[#64748b] dark:text-slate-300">
                  {formatCurrency(c.valor)}
                </td>

                <td className="px-4 py-3 text-right text-[#64748b] dark:text-slate-300">
                  {formatCurrency(c.pago)}
                </td>

                <td className="px-4 py-3 text-right font-semibold text-[#0f172a] dark:text-white">
                  {formatCurrency(c.saldo)}
                </td>

                <td className="px-4 py-3">
                  <StatusContaBadge status={c.status} />
                </td>

                <td className="px-4 py-3 text-center">
                  {c.status !== STATUS_CONTA_RECEBER.PAGO && (
                    <div className="flex justify-center">
                      <IconButton
                        icon={Wallet}
                        label="Registrar pagamento"
                        onClick={() => onRegistrarPagamento(c)}
                      />
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}