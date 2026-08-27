// Linha da tabela de produtos. Puramente apresentacional; toda lógica vem via props/hooks do pai.
import { Checkbox } from "../../../../shared/components/ui/Checkbox";
import { ProductImage } from "./ProductImage";
import { StatusBadge } from "./StatusBadge";
import { ValidadeCell } from "./ValidadeCell";
import { RowActionsMenu } from "./RowActionsMenu";
import { formatCurrency, formatNumber } from "../../utils/formatters";

export function ProductRow({
  produto,
  isSelected,
  isVisible,
  onToggleSelect,
  onOpenDetail,
  rowActions,
}) {
  const estoqueColorClass =
    produto.estoque === 0
      ? "text-red-500"
      : produto.estoque <= produto.estoqueMinimo
        ? "text-amber-500"
        : "text-emerald-600 dark:text-emerald-400";

  return (
    <tr className="group border-b border-gray-50 transition-colors duration-100 last:border-0 hover:bg-violet-50/40 dark:border-gray-800/60 dark:hover:bg-white/[0.03]">
      <td className="w-10 px-4 py-3">
        <Checkbox
          checked={isSelected}
          onChange={() => onToggleSelect(produto.id)}
          ariaLabel={`Selecionar ${produto.nome}`}
        />
      </td>

      {isVisible("imagem") && (
        <td className="px-2 py-3">
          <button onClick={() => onOpenDetail(produto)} className="block">
            <ProductImage
              emoji={produto.imagemEmoji}
              color={produto.imagemCor}
            />
          </button>
        </td>
      )}

      <td className="px-2 py-3">
        <button
          onClick={() => onOpenDetail(produto)}
          className="text-sm font-medium text-gray-700 transition-colors hover:text-violet-600 dark:text-gray-200 dark:hover:text-violet-400"
        >
          {produto.codigo}
        </button>
      </td>

      {isVisible("codigoBarras") && (
        <td className="px-2 py-3 text-sm text-gray-500 dark:text-gray-400">
          {produto.codigoBarras}
        </td>
      )}

      <td className="px-2 py-3">
        <button
          onClick={() => onOpenDetail(produto)}
          className="text-left text-sm font-medium text-gray-800 transition-colors hover:text-violet-600 dark:text-gray-100 dark:hover:text-violet-400"
        >
          {produto.nome}
        </button>
      </td>

      {isVisible("categoria") && (
        <td className="px-2 py-3">
          <span className="inline-flex rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
            {produto.categoria}
          </span>
        </td>
      )}

      {isVisible("marca") && (
        <td className="px-2 py-3 text-sm text-gray-600 dark:text-gray-300">
          {produto.marca}
        </td>
      )}

      {isVisible("precoVenda") && (
        <td className="px-2 py-3 text-sm font-medium text-gray-800 dark:text-gray-100">
          {formatCurrency(produto.precoVenda)}
        </td>
      )}

      {isVisible("estoque") && (
        <td className={`px-2 py-3 text-sm font-semibold ${estoqueColorClass}`}>
          {formatNumber(produto.estoque)}
        </td>
      )}

      {isVisible("estoqueMinimo") && (
        <td className="px-2 py-3 text-sm text-gray-500 dark:text-gray-400">
          {formatNumber(produto.estoqueMinimo)}
        </td>
      )}

      {isVisible("validade") && (
        <td className="px-2 py-3">
          <ValidadeCell validade={produto.validadeMaisProxima} />
        </td>
      )}

      <td className="px-2 py-3">
        <StatusBadge status={produto.status} />
      </td>

      <td className="px-2 py-3">
        <RowActionsMenu produto={produto} {...rowActions} />
      </td>
    </tr>
  );
}
