import Avatar from "../../../../../shared/components/data-display/Avatar.jsx";
import { formatCurrency } from "../../../../../shared/utils/formatCurrency.js";

/** Mini client summary shown at the top of the "Registrar pagamento" modal. */
export function ClienteResumoPagamento({ cliente }) {
  return (
    <div className="flex items-center gap-3 pb-4 border-b border-cm-border-dark light:border-cm-border-light mb-4">
      <Avatar name={cliente.nome} size="md" />
      <div className="flex-1">
        <p className="font-medium text-white light:text-slate-900">{cliente.nome}</p>
        <p className="text-xs text-slate-400 light:text-slate-500">{cliente.id}</p>
      </div>
      <div className="text-right">
        <p className="text-xs text-slate-400 light:text-slate-500">Saldo atual</p>
        <p className="font-semibold text-cm-red">{formatCurrency(cliente.emAberto)}</p>
      </div>
    </div>
  )
}
