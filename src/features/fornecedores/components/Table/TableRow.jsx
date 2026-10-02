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
      className={`
        row-hover
        animate-fade-in-up
        stagger-${Math.min(delayIndex + 1, 6)}
        cursor-pointer
        border-b border-slate-100
        last:border-0
        transition-colors
        dark:border-[#1c2044]
        ${
          isActive
            ? "bg-emerald-50/70 dark:bg-emerald-500/[0.08]"
            : "hover:bg-slate-50 dark:hover:bg-[#181d3b]"
        }
      `}
    >
      {/* Checkbox */}
      <td
        className="py-3 pl-4"
        onClick={(event) => event.stopPropagation()}
      >
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggleSelect}
          aria-label={`Selecionar ${fornecedor.nomeFantasia}`}
          className="
            h-4 w-4
            cursor-pointer
            rounded
            border-slate-300
            text-emerald-600
            accent-emerald-600
            focus:outline-none
            focus:ring-2
            focus:ring-emerald-500/30
            dark:border-[#3a4168]
            dark:bg-[#0f1230]
          "
        />
      </td>

      {/* Fornecedor */}
      <td className="px-3 py-3">
        <div className="flex items-center gap-3">
          <InitialsAvatar
            name={fornecedor.nomeFantasia}
            size="sm"
          />

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">
              {fornecedor.nomeFantasia}
            </p>

            <p className="truncate text-xs text-slate-400 dark:text-slate-500">
              {fornecedor.razaoSocial}
            </p>
          </div>
        </div>
      </td>

      {/* Documento */}
      <td className="whitespace-nowrap px-3 py-3 text-sm text-slate-500 dark:text-slate-400">
        {fornecedor.documento}
      </td>

      {/* Localização */}
      <td className="whitespace-nowrap px-3 py-3 text-sm text-slate-600 dark:text-slate-300">
        {fornecedor.cidade} - {fornecedor.estado}
      </td>

      {/* Telefone */}
      <td className="whitespace-nowrap px-3 py-3 text-sm text-slate-600 dark:text-slate-300">
        <span className="flex items-center gap-1.5">
          {fornecedor.telefone}

          {fornecedor.whatsapp && (
            <MessageCircle
              size={14}
              strokeWidth={2}
              className="text-emerald-500 dark:text-emerald-400"
              aria-label="Possui WhatsApp"
            />
          )}
        </span>
      </td>

      {/* Produtos */}
      <td className="whitespace-nowrap px-3 py-3 text-sm text-slate-600 dark:text-slate-300">
        {fornecedor.produtos}
      </td>

      {/* Última compra */}
      <td className="whitespace-nowrap px-3 py-3">
        <p className="text-sm text-slate-600 dark:text-slate-300">
          {formatDate(fornecedor.ultimaCompra)}
        </p>

        <p className="text-xs text-slate-400 dark:text-slate-500">
          {formatRelativeDays(fornecedor.ultimaCompra)}
        </p>
      </td>

      {/* Total comprado */}
      <td className="whitespace-nowrap px-3 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100">
        {formatCurrency(fornecedor.totalComprado)}
      </td>

      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3">
        <StatusBadge status={fornecedor.status} />
      </td>

      {/* Ações */}
      <td
        className="px-3 py-3"
        onClick={(event) => event.stopPropagation()}
      >
        <RowActionsMenu fornecedor={fornecedor} />
      </td>
    </tr>
  );
}