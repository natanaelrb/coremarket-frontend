import { Pencil, Trash2, Barcode, Package } from 'lucide-react';
import { QuantityControl } from './QuantityControl.jsx';
import IconButton from '../../../../shared/components/actions/IconButton.jsx';
import { formatCurrency } from '../../../../shared/utils/formatters.js';
import { calcularSubtotalLiquidoItem } from '../../utils/calculators.js';

export function ItemRow({
  item,
  selecionado,
  onSelecionar,
  onIncrementar,
  onDecrementar,
  onEditarDesconto,
  onRemover,
}) {
  const subtotal = calcularSubtotalLiquidoItem(item);

  return (
    <tr
      onClick={onSelecionar}
      aria-selected={selecionado}
      className={`
        group cursor-pointer border-b border-cm-border/60
        transition-colors duration-200 last:border-b-0
        ${selecionado
          ? 'bg-blue-50/80 dark:bg-blue-500/[0.08]'
          : 'hover:bg-blue-50/40 dark:hover:bg-blue-500/[0.04]'
        }
      `}
    >
      <td className="py-3.5 pl-4 pr-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className={`
            relative flex h-11 w-11 shrink-0 items-center justify-center
            rounded-xl border transition-colors duration-200
            ${selecionado
              ? 'border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-500/30 dark:bg-blue-500/15 dark:text-blue-400'
              : 'border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400'
            }
          `}>
            <Package className="h-5 w-5" />

            {selecionado && (
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-cm-surface bg-blue-600" />
            )}
          </div>

          <div className="min-w-0">
            <p
              className={`truncate text-sm font-semibold transition-colors ${
                selecionado
                  ? 'text-blue-700 dark:text-blue-400'
                  : 'text-cm-text'
              }`}
              title={item.nome}
            >
              {item.nome}
            </p>

            <p className="mt-1 flex items-center gap-1.5 truncate text-xs text-cm-text-faint">
              <Barcode className="h-3 w-3 shrink-0" />
              <span>{item.codigoBarras || 'Sem código de barras'}</span>
            </p>
          </div>
        </div>
      </td>

      <td className="px-3 py-3.5 text-center">
        <div className="flex justify-center">
          <QuantityControl
            quantidade={item.quantidade}
            onIncrementar={onIncrementar}
            onDecrementar={onDecrementar}
          />
        </div>
      </td>

      <td className="whitespace-nowrap px-3 py-3.5 text-right text-sm tabular-nums text-cm-text-muted">
        {formatCurrency(item.precoUnitario)}
      </td>

      <td className="whitespace-nowrap px-3 py-3.5 text-right tabular-nums">
        {item.descontoItem > 0 ? (
          <span className="inline-flex items-center rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
            −{formatCurrency(item.descontoItem)}
          </span>
        ) : (
          <span className="text-sm text-cm-text-faint">
            {formatCurrency(0)}
          </span>
        )}
      </td>

      <td className="whitespace-nowrap px-3 py-3.5 text-right tabular-nums">
        <span className="text-sm font-bold text-cm-text">
          {formatCurrency(subtotal)}
        </span>
      </td>

      <td className="py-3.5 pl-3 pr-4">
        <div className="flex items-center justify-end gap-1">
          <IconButton
            size="sm"
            label={`Editar desconto de ${item.nome}`}
            onClick={(e) => {
              e.stopPropagation();
              onEditarDesconto();
            }}
            className="text-blue-600 hover:bg-blue-50 hover:text-blue-700 dark:text-blue-400 dark:hover:bg-blue-500/10"
          >
            <Pencil className="h-4 w-4" />
          </IconButton>

          <IconButton
            size="sm"
            variant="danger"
            label={`Remover ${item.nome} da venda`}
            onClick={(e) => {
              e.stopPropagation();
              onRemover();
            }}
          >
            <Trash2 className="h-4 w-4" />
          </IconButton>
        </div>
      </td>
    </tr>
  );
}
