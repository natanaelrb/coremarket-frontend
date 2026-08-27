import ProductImage from "./ProductImage.jsx";
import StatusBadge from "./StatusBadge.jsx";
import ActionsMenu from "./ActionsMenu.jsx";
import { formatCurrency } from "../../../../shared/utils/formatCurrency.js";
import { formatDate } from "../../../movimentacoes/utils/formatDate.js";
import {
  formatValidadeLabel,
  calculateDiasValidade,
} from "../../utils/calculateDiasValidade.js";
import { cn } from "../../../../shared/utils/classNames.js";

/**
 * A single stock row. Clicking anywhere (except checkbox/actions) opens the
 * product in the detail panel via onOpenDetail.
 */
export default function ProductTableRow({
  produto,
  isSelected,
  onToggleSelect,
  onOpenDetail,
  onActionSelect,
  isActive,
}) {
  const dias = calculateDiasValidade(produto.validade);
  const validadeTone =
    produto.status === "vencido"
      ? "text-rose-600 dark:text-rose-400 font-medium"
      : produto.status === "vence_hoje"
        ? "text-rose-600 dark:text-rose-400 font-medium"
        : produto.status === "proximo_validade"
          ? "text-amber-600 dark:text-amber-400 font-medium"
          : "text-gray-500 dark:text-gray-400";

  return (
    <tr
      onClick={() => onOpenDetail(produto)}
      className={cn(
        "cursor-pointer border-b border-gray-50 dark:border-[#1B1E3D] text-sm transition-colors",
        isActive
          ? "bg-violet-50/60 dark:bg-violet-500/5"
          : "hover:bg-gray-50 dark:hover:bg-[#171A38]",
      )}
    >
      <td className="py-3 pl-4" onClick={(e) => e.stopPropagation()}>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggleSelect(produto.id)}
          className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-500 cursor-pointer"
        />
      </td>
      <td className="px-3 py-3">
        <div className="flex items-center gap-2.5">
          <ProductImage src={produto.imagem} alt={produto.nome} />
          <div className="min-w-0">
            <p className="truncate font-medium text-gray-900 dark:text-white">
              {produto.nome}
            </p>
            <p className="truncate text-xs text-gray-400 dark:text-gray-500">
              {produto.marca}
            </p>
          </div>
        </div>
      </td>
      <td className="px-3 py-3 text-gray-600 dark:text-gray-300">
        {produto.sku}
      </td>
      <td className="px-3 py-3 text-gray-600 dark:text-gray-300">
        {produto.codigoBarras}
      </td>
      <td className="px-3 py-3 text-gray-600 dark:text-gray-300">
        {produto.categoria}
      </td>
      <td className="px-3 py-3 text-gray-600 dark:text-gray-300">
        {produto.localizacao}
      </td>
      <td className="px-3 py-3 font-medium text-gray-900 dark:text-white">
        {produto.quantidade}
      </td>
      <td
        className={cn(
          "px-3 py-3 font-medium",
          produto.disponivel === 0
            ? "text-rose-600 dark:text-rose-400"
            : "text-emerald-600 dark:text-emerald-400",
        )}
      >
        {produto.disponivel}
      </td>
      <td className="px-3 py-3 text-gray-600 dark:text-gray-300">
        {produto.estMinimo}
      </td>
      <td className="px-3 py-3">
        <p className="text-gray-600 dark:text-gray-300">
          {produto.validade ? formatDate(produto.validade) : "-"}
        </p>
        {produto.validade && dias != null && (
          <p className={`text-xs ${validadeTone}`}>
            {formatValidadeLabel(produto.validade)}
          </p>
        )}
      </td>
      <td className="px-3 py-3">
        <StatusBadge status={produto.status} />
      </td>
      <td className="px-3 py-3 font-medium text-gray-900 dark:text-white">
        {formatCurrency(produto.valorEmEstoque)}
      </td>
      <td
        className="px-3 py-3 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <ActionsMenu produto={produto} onSelect={onActionSelect} />
      </td>
    </tr>
  );
}
