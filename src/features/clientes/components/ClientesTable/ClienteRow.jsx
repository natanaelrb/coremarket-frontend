import Avatar from "../../../../shared/components/data-display/Avatar.jsx";
import { Badge } from "../../../../shared/components/ui/Badge.jsx";
import { TableActionsCell } from './TableActionsCell.jsx'
import { formatCurrency } from "../../../../shared/utils/formatCurrency.js";
import { formatDate } from "../../../../shared/utils/formatDate.js";
import { formatPhone } from "../../../../shared/utils/formatPhone.js";
import { getStatusConfig } from '../../utils/clienteStatusHelpers.js'
import { cn } from "../../../../shared/utils/classNames.js";

/**
 * Single row in the clients table.
 * @param {{cliente: import('../../types/cliente.types.js').Cliente}} props
 */
export function ClienteRow({ cliente, selected, onToggleSelect, onView, onEdit, onRegistrarPagamento, onExcluir }) {
  const status = getStatusConfig(cliente.status)

  return (
    <tr
      className={cn(
        'border-b border-cm-border-dark/60 light:border-cm-border-light text-sm transition-colors hover:bg-white/[0.03] light:hover:bg-black/[0.02]',
        selected && 'bg-cm-violet-dim/40',
      )}
    >
      <td className="py-3 pl-4 pr-2">
        <input
          type="checkbox"
          checked={selected}
          onChange={onToggleSelect}
          className="rounded border-cm-border-dark accent-cm-violet"
        />
      </td>
      <td className="py-3 px-3">
        <button onClick={onView} className="flex items-center gap-3 text-left group">
          <Avatar name={cliente.nome} size="sm" />
          <span>
            <span className="block font-medium text-white light:text-slate-900 group-hover:text-cm-violet-soft transition-colors">
              {cliente.nome}
            </span>
            <span className="block text-xs text-slate-500">{cliente.id}</span>
          </span>
        </button>
      </td>
      <td className="py-3 px-3 text-slate-300 light:text-slate-600">{formatPhone(cliente.telefone)}</td>
      <td className="py-3 px-3 text-slate-300 light:text-slate-600">{formatDate(cliente.ultimaCompra)}</td>
      <td className="py-3 px-3 font-medium text-white light:text-slate-900">{formatCurrency(cliente.totalComprado)}</td>
      <td className="py-3 px-3 text-slate-300 light:text-slate-600">{formatCurrency(cliente.emAberto)}</td>
      <td className="py-3 px-3">
        <Badge tone={status.tone}>{status.label}</Badge>
      </td>
      <td className="py-3 px-3">
        <TableActionsCell
          onView={onView}
          onEdit={onEdit}
          onRegistrarPagamento={onRegistrarPagamento}
          onExcluir={onExcluir}
        />
      </td>
    </tr>
  )
}
