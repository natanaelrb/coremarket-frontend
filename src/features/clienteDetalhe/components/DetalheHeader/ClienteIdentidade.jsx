import Avatar from "../../../../shared/components/data-display/Avatar.jsx";
import { Badge } from "../../../../shared/components/ui/Badge.jsx";
import { formatDate } from "../../../../shared/utils/formatDate.js";
import { getStatusConfig } from '../../../clientes/utils/clienteStatusHelpers.js'

/** Avatar + name + status badge + id + "cliente desde" caption. */
export function ClienteIdentidade({ cliente }) {
  const status = getStatusConfig(cliente.status)
  return (
    <div className="flex items-center gap-4">
      <Avatar name={cliente.nome} size="lg" />
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-white light:text-slate-900">{cliente.nome}</h1>
          <Badge tone={status.tone}>{status.label}</Badge>
        </div>
        <p className="text-sm text-slate-400 light:text-slate-500 mt-0.5">
          {cliente.id} · Cliente desde {formatDate(cliente.clienteDesde)}
        </p>
      </div>
    </div>
  )
}
