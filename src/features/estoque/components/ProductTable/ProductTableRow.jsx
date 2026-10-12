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
    produto.status === "vencido" || produto.status === "vence_hoje"
      ? "text-rose-600 dark:text-rose-400"
      : produto.status === "proximo_validade"
        ? "text-amber-600 dark:text-amber-400"
        : "text-gray-400 dark:text-gray-500";

  return (
    <tr
      onClick={() => onOpenDetail(produto)}
      className={cn(
        "group cursor-pointer border-b border-gray-100 text-sm transition-colors dark:border-[#1B1E3D]",
        isActive
          ? "bg-violet-50/60 dark:bg-violet-500/5"
          : isSelected
            ? "bg-emerald-50/40 dark:bg-emerald-500/5"
            : "hover:bg-gray-50 dark:hover:bg-[#171A38]",
      )}
    >
      {/* Seleção */}
      <td
        className="py-3.5 pl-4"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggleSelect(produto.id)}
          className="h-4 w-4 cursor-pointer rounded border-gray-300 text-emerald-600 focus:ring-emerald-500 dark:border-gray-600"
        />
      </td>

      {/* Produto */}
      <td className="px-3 py-3.5">
        <div className="flex min-w-0 items-center gap-3">
          <ProductImage
            src={produto.imagem}
            alt={produto.nome}
          />

          <div className="min-w-0">
            <p className="truncate font-semibold text-gray-900 transition-colors group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
              {produto.nome}
            </p>

            <p className="mt-0.5 truncate text-xs text-gray-400 dark:text-gray-500">
              {produto.marca}
            </p>
          </div>
        </div>
      </td>

      {/* SKU */}
      <td className="px-3 py-3.5">
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {produto.sku}
        </span>
      </td>

      {/* Código */}
      <td className="px-3 py-3.5 text-gray-500 dark:text-gray-400">
        {produto.codigoBarras}
      </td>

      {/* Categoria */}
      <td className="px-3 py-3.5">
        <span className="inline-flex rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-white/5 dark:text-gray-300">
          {produto.categoria}
        </span>
      </td>

      {/* Localização */}
      <td className="px-3 py-3.5">
        <span className="text-gray-600 dark:text-gray-300">
          {produto.localizacao}
        </span>
      </td>

      {/* Quantidade */}
      <td className="px-3 py-3.5">
        <span className="font-semibold text-gray-900 dark:text-white">
          {produto.quantidade}
        </span>
      </td>

      {/* Disponível */}
      <td className="px-3 py-3.5">
        <span
          className={cn(
            "font-semibold",
            produto.disponivel === 0
              ? "text-rose-600 dark:text-rose-400"
              : produto.disponivel <= produto.estMinimo
                ? "text-amber-600 dark:text-amber-400"
                : "text-emerald-600 dark:text-emerald-400",
          )}
        >
          {produto.disponivel}
        </span>
      </td>

      {/* Estoque mínimo */}
      <td className="px-3 py-3.5 text-gray-500 dark:text-gray-400">
        {produto.estMinimo}
      </td>

      {/* Validade */}
      <td className="px-3 py-3.5">
        <p className="text-gray-600 dark:text-gray-300">
          {produto.validade
            ? formatDate(produto.validade)
            : "-"}
        </p>

        {produto.validade && dias != null && (
          <p
            className={cn(
              "mt-0.5 text-xs font-medium",
              validadeTone,
            )}
          >
            {formatValidadeLabel(produto.validade)}
          </p>
        )}
      </td>

      {/* Status */}
      <td className="px-3 py-3.5">
        <StatusBadge status={produto.status} />
      </td>

      {/* Valor */}
      <td className="px-3 py-3.5">
        <span className="font-semibold text-gray-900 dark:text-white">
          {formatCurrency(produto.valorEmEstoque)}
        </span>
      </td>

      {/* Ações */}
      <td
        className="px-3 py-3.5 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <ActionsMenu
          produto={produto}
          onSelect={onActionSelect}
        />
      </td>
    </tr>
  );
}