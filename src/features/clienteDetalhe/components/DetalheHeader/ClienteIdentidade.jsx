import Avatar from "../../../../shared/components/data-display/Avatar.jsx";
import { Badge } from "../../../../shared/components/ui/Badge.jsx";
import { formatDate } from "../../../../shared/utils/formatDate.js";
import { getStatusConfig } from "../../../clientes/utils/clienteStatusHelpers.js";

/** Avatar + name + status badge + id + "cliente desde" caption. */
export function ClienteIdentidade({ cliente }) {
  const status = getStatusConfig(cliente.status);

  return (
    <div className="flex items-center gap-3.5">
      <Avatar name={cliente.nome} size="lg" />

      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-xl font-semibold tracking-tight text-[#0f172a] dark:text-white">
            {cliente.nome}
          </h1>

          <Badge tone={status.tone}>
            {status.label}
          </Badge>
        </div>

        <p className="mt-1 text-xs font-medium text-[#64748b] dark:text-slate-400">
          {cliente.id}
          <span className="mx-1.5 text-slate-300 dark:text-slate-600">
            ·
          </span>
          Cliente desde {formatDate(cliente.clienteDesde)}
        </p>
      </div>
    </div>
  );
}