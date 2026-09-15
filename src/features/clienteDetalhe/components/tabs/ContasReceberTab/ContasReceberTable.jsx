import { Wallet } from 'lucide-react'
import { StatusContaBadge } from './StatusContaBadge.jsx'
import IconButton from "../../../../../shared/components/actions/IconButton.jsx";
import { formatCurrency } from "../../../../../shared/utils/formatCurrency.js";
import { formatDate } from "../../../../../shared/utils/formatDate.js";
import { STATUS_CONTA_RECEBER } from "../../../../../shared/constants/enums.js";

/** "Contas a receber" table: vencimento, valor, pago, saldo, status, ações. */
export function ContasReceberTable({ contas, onRegistrarPagamento }) {
  return (
    <div className="rounded-xl border border-cm-border-dark light:border-cm-border-light bg-cm-panel-dark light:bg-cm-panel-light overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-xs text-slate-400 light:text-slate-500 border-b border-cm-border-dark light:border-cm-border-light">
            <th className="px-4 py-3 font-medium">Venda</th>
            <th className="px-4 py-3 font-medium">Vencimento</th>
            <th className="px-4 py-3 font-medium">Valor</th>
            <th className="px-4 py-3 font-medium">Pago</th>
            <th className="px-4 py-3 font-medium">Saldo</th>
            <th className="px-4 py-3 font-medium">Status</th>
            <th className="px-4 py-3 font-medium">Ações</th>
          </tr>
        </thead>
        <tbody>
          {contas.map((c) => (
            <tr key={c.id} className="border-b border-cm-border-dark/60 light:border-cm-border-light">
              <td className="px-4 py-3 font-medium text-white light:text-slate-900">{c.id}</td>
              <td className="px-4 py-3 text-slate-300 light:text-slate-600">{formatDate(c.vencimento)}</td>
              <td className="px-4 py-3 text-slate-300 light:text-slate-600">{formatCurrency(c.valor)}</td>
              <td className="px-4 py-3 text-slate-300 light:text-slate-600">{formatCurrency(c.pago)}</td>
              <td className="px-4 py-3 font-medium text-white light:text-slate-900">{formatCurrency(c.saldo)}</td>
              <td className="px-4 py-3">
                <StatusContaBadge status={c.status} />
              </td>
              <td className="px-4 py-3">
                {c.status !== STATUS_CONTA_RECEBER.PAGO && (
                  <IconButton icon={Wallet} label="Registrar pagamento" onClick={() => onRegistrarPagamento(c)} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
