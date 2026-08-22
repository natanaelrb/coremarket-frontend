import { MessageCircle } from "lucide-react";
import InitialsAvatar from "../../../../shared/components/data-display/InitialsAvatar.jsx";
import StatusBadge from "./StatusBadge.jsx";
import RowActionsMenu from "./RowActionsMenu.jsx";
import {
  formatCurrency,
  formatDate,
  formatRelativeDays,
} from "../../../../shared/utils/formatters.js";

export default function TableRow({
  fornecedor,
  isSelected,
  onToggleSelect,
  isActive,
  onClick,
  delayIndex,
}) {
  return (
    <tr
      onClick={onClick}
      className={`row-hover animate-fade-in-up stagger-${Math.min(delayIndex + 1, 6)} cursor-pointer border-b border-gray-50 last:border-0 dark:border-[#181c3a] ${
        isActive
          ? "bg-violet-50/70 dark:bg-violet-500/10"
          : "hover:bg-gray-50 dark:hover:bg-[#181c3a]"
      }`}
    >
      <td className="py-3 pl-4" onClick={(e) => e.stopPropagation()}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggleSelect}
          className="h-4 w-4 cursor-pointer rounded border-gray-300 text-violet-600 focus:ring-violet-400 dark:border-[#3a3f6b] dark:bg-[#0f1230]"
        />
      </td>

      <td className="px-3 py-3">
        <div className="flex items-center gap-3">
          <InitialsAvatar name={fornecedor.nomeFantasia} size="sm" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-gray-800 dark:text-gray-100">
              {fornecedor.nomeFantasia}
            </p>
            <p className="truncate text-xs text-gray-400 dark:text-gray-500">
              {fornecedor.razaoSocial}
            </p>
          </div>
        </div>
      </td>

      <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-500 dark:text-gray-400">
        {fornecedor.documento}
      </td>

      <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-600 dark:text-gray-300">
        {fornecedor.cidade} - {fornecedor.estado}
      </td>

      <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-600 dark:text-gray-300">
        <span className="flex items-center gap-1.5">
          {fornecedor.telefone}
          {fornecedor.whatsapp && (
            <MessageCircle size={14} className="text-emerald-500" />
          )}
        </span>
      </td>

      <td className="whitespace-nowrap px-3 py-3 text-sm text-gray-600 dark:text-gray-300">
        {fornecedor.produtos}
      </td>

      <td className="whitespace-nowrap px-3 py-3">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {formatDate(fornecedor.ultimaCompra)}
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          {formatRelativeDays(fornecedor.ultimaCompra)}
        </p>
      </td>

      <td className="whitespace-nowrap px-3 py-3 text-sm font-semibold text-gray-800 dark:text-gray-100">
        {formatCurrency(fornecedor.totalComprado)}
      </td>

      <td className="whitespace-nowrap px-3 py-3">
        <StatusBadge status={fornecedor.status} />
      </td>

      <td className="px-3 py-3" onClick={(e) => e.stopPropagation()}>
        <RowActionsMenu fornecedor={fornecedor} />
      </td>
    </tr>
  );
}
