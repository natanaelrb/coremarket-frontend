
/**
 * Linha da tabela de produtos.
 * Puramente apresentacional; toda lógica vem via props/hooks do pai.
 */

import { Checkbox } from "../../../../shared/components/ui/Checkbox";
import { ProductImage } from "./ProductImage";
import { StatusBadge } from "./StatusBadge";
import { ValidadeCell } from "./ValidadeCell";
import { RowActionsMenu } from "./RowActionsMenu";
import { formatCurrency, formatNumber } from "../../utils/formatters";

export function ProductRow({
  produto,
  isSelected = false,
  isVisible,
  onToggleSelect,
  onOpenDetail,
  rowActions = {},
}) {
  const estoque = Number(produto.estoque) || 0;
  const estoqueMinimo = Number(produto.estoqueMinimo) || 0;

  const estoqueColorClass =
    estoque === 0
      ? "text-red-500 dark:text-red-400"
      : estoque <= estoqueMinimo
        ? "text-amber-500 dark:text-amber-400"
        : "text-emerald-600 dark:text-emerald-400";

  const detailLabel = `Abrir detalhes de ${produto.nome || "produto"}`;

  const handleOpenDetail = () => {
    onOpenDetail?.(produto);
  };

  const handleToggleSelect = () => {
    onToggleSelect?.(produto.id);
  };

  return (
    <tr
      className={`
        group
        border-b border-slate-100
        transition-colors duration-150
        last:border-0
        hover:bg-slate-50/80
        dark:border-white/[0.06]
        dark:hover:bg-white/[0.035]
        ${
          isSelected
            ? "bg-emerald-50/70 hover:bg-emerald-50 dark:bg-emerald-500/[0.08] dark:hover:bg-emerald-500/[0.11]"
            : ""
        }
      `}
    >
      {/* Seleção */}
      <td className="w-12 px-4 py-3.5 align-middle">
        <Checkbox
          checked={isSelected}
          onChange={handleToggleSelect}
          ariaLabel={`Selecionar ${produto.nome || "produto"}`}
        />
      </td>

      {/* Imagem */}
      {isVisible("imagem") && (
        <td className="px-3 py-3.5 align-middle">
          <button
            type="button"
            onClick={handleOpenDetail}
            aria-label={detailLabel}
            className="
              block rounded-xl
              outline-none
              transition-transform duration-200
              hover:scale-105
              focus-visible:ring-2
              focus-visible:ring-emerald-500/50
              motion-reduce:transform-none
            "
          >
            <ProductImage
              emoji={produto.imagemEmoji}
              color={produto.imagemCor}
            />
          </button>
        </td>
      )}

      {/* Código */}
      <td className="max-w-28 px-3 py-3.5 align-middle">
        <button
          type="button"
          onClick={handleOpenDetail}
          aria-label={detailLabel}
          title={produto.codigo || "Sem código"}
          className="
            block max-w-full truncate
            text-left text-xs font-semibold
            text-slate-500
            outline-none
            transition-colors duration-150
            hover:text-emerald-600
            focus-visible:rounded-sm
            focus-visible:ring-2
            focus-visible:ring-emerald-500/40
            dark:text-slate-400
            dark:hover:text-emerald-400
          "
        >
          {produto.codigo || "—"}
        </button>
      </td>

      {/* Código de barras */}
      {isVisible("codigoBarras") && (
        <td
          className="
            max-w-36 px-3 py-3.5
            text-xs text-slate-500
            dark:text-slate-400
          "
          title={produto.codigoBarras || "Sem código de barras"}
        >
          <span className="block truncate">
            {produto.codigoBarras || "—"}
          </span>
        </td>
      )}

      {/* Nome */}
      <td className="min-w-44 max-w-64 px-3 py-3.5 align-middle">
        <button
          type="button"
          onClick={handleOpenDetail}
          aria-label={detailLabel}
          title={produto.nome || "Produto sem nome"}
          className="
            block max-w-full truncate
            text-left text-sm font-semibold
            text-slate-700
            outline-none
            transition-colors duration-150
            hover:text-emerald-600
            focus-visible:rounded-sm
            focus-visible:ring-2
            focus-visible:ring-emerald-500/40
            dark:text-slate-100
            dark:hover:text-emerald-400
          "
        >
          {produto.nome || "Produto sem nome"}
        </button>
      </td>

      {/* Categoria */}
      {isVisible("categoria") && (
        <td className="px-3 py-3.5 align-middle">
          <span
            className="
              inline-flex max-w-36 truncate
              rounded-md
              bg-blue-50 px-2 py-1
              text-xs font-semibold
              text-blue-600
              ring-1 ring-inset ring-blue-500/[0.08]
              dark:bg-blue-500/10
              dark:text-blue-400
            "
            title={produto.categoria || "Sem categoria"}
          >
            {produto.categoria || "Sem categoria"}
          </span>
        </td>
      )}

      {/* Marca */}
      {isVisible("marca") && (
        <td
          className="
            max-w-32 px-3 py-3.5
            text-sm text-slate-600
            dark:text-slate-300
          "
          title={produto.marca || "Sem marca"}
        >
          <span className="block truncate">
            {produto.marca || "—"}
          </span>
        </td>
      )}

      {/* Preço de venda */}
      {isVisible("precoVenda") && (
        <td
          className="
            whitespace-nowrap
            px-3 py-3.5
            text-right
            text-sm font-semibold
            tabular-nums
            text-slate-800
            dark:text-slate-100
          "
        >
          {formatCurrency(produto.precoVenda)}
        </td>
      )}

      {/* Estoque atual */}
      {isVisible("estoque") && (
        <td
          className={`
            whitespace-nowrap
            px-3 py-3.5
            text-right
            text-sm font-bold
            tabular-nums
            ${estoqueColorClass}
          `}
        >
          {formatNumber(estoque)}
        </td>
      )}

      {/* Estoque mínimo */}
      {isVisible("estoqueMinimo") && (
        <td
          className="
            whitespace-nowrap
            px-3 py-3.5
            text-right
            text-sm
            tabular-nums
            text-slate-500
            dark:text-slate-400
          "
        >
          {formatNumber(estoqueMinimo)}
        </td>
      )}

      {/* Validade */}
      {isVisible("validade") && (
        <td className="whitespace-nowrap px-3 py-3.5 align-middle">
          <ValidadeCell validade={produto.validadeMaisProxima} />
        </td>
      )}

      {/* Status */}
      <td className="whitespace-nowrap px-3 py-3.5 align-middle">
        <StatusBadge status={produto.status} />
      </td>

      {/* Ações */}
      <td className="w-16 px-3 py-3.5 text-right align-middle">
        <div className="flex justify-end">
          <RowActionsMenu
            produto={produto}
            {...rowActions}
          />
        </div>
      </td>
    </tr>
  );
}

