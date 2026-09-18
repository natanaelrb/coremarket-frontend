import Avatar from "../../../../shared/components/data-display/Avatar.jsx";
import { Badge } from "../../../../shared/components/ui/Badge.jsx";
import { TableActionsCell } from "./TableActionsCell.jsx";
import { formatCurrency } from "../../../../shared/utils/formatCurrency.js";
import { formatDate } from "../../../../shared/utils/formatDate.js";
import { formatPhone } from "../../../../shared/utils/formatPhone.js";
import { getStatusConfig } from "../../utils/clienteStatusHelpers.js";
import { cn } from "../../../../shared/utils/classNames.js";

/**
 * Single row in the clients table.
 * @param {{cliente: import('../../types/cliente.types.js').Cliente}} props
 */
export function ClienteRow({
  cliente,
  selected,
  onToggleSelect,
  onView,
  onEdit,
  onRegistrarPagamento,
  onExcluir,
}) {
  const status = getStatusConfig(cliente.status);

  return (
    <tr
      className={cn(
        `
          border-b border-slate-100
          text-sm
          transition-colors duration-150
          hover:bg-slate-50/80
          dark:border-white/5
          dark:hover:bg-white/[0.025]
        `,
        selected &&
          "bg-[#f0fdf4] hover:bg-[#f0fdf4] dark:bg-emerald-950/20 dark:hover:bg-emerald-950/20"
      )}
    >
      {/* Seleção */}
      <td className="py-3.5 pl-4 pr-2">
        <input
          type="checkbox"
          checked={selected}
          onChange={onToggleSelect}
          className="
            h-3.5 w-3.5
            cursor-pointer
            rounded
            border-slate-300
            accent-[#42c878]
            dark:border-slate-600
          "
        />
      </td>

      {/* Cliente */}
      <td className="px-3 py-3.5">
        <button
          onClick={onView}
          className="group flex items-center gap-3 text-left"
        >
          <Avatar name={cliente.nome} size="sm" />

          <span className="min-w-0">
            <span
              className="
                block truncate
                font-medium
                text-slate-900
                transition-colors duration-150
                group-hover:text-[#248f52]
                dark:text-white
                dark:group-hover:text-[#65d98a]
              "
            >
              {cliente.nome}
            </span>

            <span className="block text-xs text-slate-400 dark:text-slate-500">
              {cliente.id}
            </span>
          </span>
        </button>
      </td>

      {/* Telefone */}
      <td className="px-3 py-3.5 text-slate-600 dark:text-slate-300">
        {formatPhone(cliente.telefone)}
      </td>

      {/* Última compra */}
      <td className="px-3 py-3.5 text-slate-600 dark:text-slate-300">
        {formatDate(cliente.ultimaCompra)}
      </td>

      {/* Total comprado */}
      <td className="px-3 py-3.5 font-medium text-slate-900 dark:text-white">
        {formatCurrency(cliente.totalComprado)}
      </td>

      {/* Em aberto */}
      <td
        className={cn(
          "px-3 py-3.5 font-medium",
          cliente.emAberto > 0
            ? "text-[#dc2626]"
            : "text-slate-600 dark:text-slate-300"
        )}
      >
        {formatCurrency(cliente.emAberto)}
      </td>

      {/* Status */}
      <td className="px-3 py-3.5">
        <Badge tone={status.tone}>{status.label}</Badge>
      </td>

      {/* Ações */}
      <td className="px-3 py-3.5">
        <TableActionsCell
          onView={onView}
          onEdit={onEdit}
          onRegistrarPagamento={onRegistrarPagamento}
          onExcluir={onExcluir}
        />
      </td>
    </tr>
  );
}