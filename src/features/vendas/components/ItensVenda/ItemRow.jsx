import { Pencil, Trash2, Barcode, Package } from 'lucide-react';
import { QuantityControl } from './QuantityControl.jsx';
import IconButton from '../../../../shared/components/actions/IconButton.jsx';
import { formatCurrency } from '../../../../shared/utils/formatters.js';
import { calcularSubtotalLiquidoItem } from '../../utils/calculators.js';

/**
 * Linha da tabela de itens da venda, com controles de quantidade e ações.
 */
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
        group cursor-pointer transition-colors duration-200
        ${selecionado
          ? 'bg-cm-accent-soft/70'
          : 'hover:bg-cm-surface-hover'
        }
      `}
    >
      {/* Produto */}
      <td className="py-3 pl-4 pr-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={`
              relative flex h-10 w-10 shrink-0 items-center justify-center
              rounded-xl border transition-colors duration-200
              ${selecionado
                ? 'border-cm-accent/30 bg-cm-accent-soft text-cm-accent'
                : 'border-cm-border bg-cm-surface-hover text-cm-text-muted'
              }
            `}
          >
            <Package className="h-5 w-5" />

            {selecionado && (
              <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full border-2 border-cm-surface bg-cm-accent" />
            )}
          </div>

          <div className="min-w-0">
            <p
              className={`
                truncate font-semibold transition-colors
                ${selecionado ? 'text-cm-accent' : 'text-cm-text'}
              `}
              title={item.nome}
            >
              {item.nome}
            </p>

            <p className="mt-1 flex items-center gap-1 truncate text-xs text-cm-text-faint">
              <Barcode className="h-3 w-3 shrink-0" />
              <span>{item.codigoBarras || 'Sem código de barras'}</span>
            </p>
          </div>
        </div>
      </td>

      {/* Quantidade */}
      <td className="px-3 py-3 text-center">
        <div className="flex justify-center">
          <QuantityControl
            quantidade={item.quantidade}
            onIncrementar={onIncrementar}
            onDecrementar={onDecrementar}
          />
        </div>
      </td>

      {/* Preço unitário */}
      <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums text-cm-text-muted">
        {formatCurrency(item.precoUnitario)}
      </td>

      {/* Desconto */}
      <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums">
        {item.descontoItem > 0 ? (
          <span className="inline-flex items-center rounded-lg bg-cm-success-soft px-2 py-1 text-xs font-semibold text-cm-success">
            −{formatCurrency(item.descontoItem)}
          </span>
        ) : (
          <span className="text-cm-text-faint">
            {formatCurrency(0)}
          </span>
        )}
      </td>

      {/* Subtotal */}
      <td className="whitespace-nowrap px-3 py-3 text-right tabular-nums">
        <span className="font-bold text-cm-text">
          {formatCurrency(subtotal)}
        </span>
      </td>

      {/* Ações */}
      <td className="py-3 pl-3 pr-4">
        <div className="flex items-center justify-end gap-1">
          <div
            className={`
              rounded-lg transition-colors
              ${selecionado ? 'bg-cm-surface/70' : ''}
            `}
          >
            <IconButton
              size="sm"
              label={`Editar desconto de ${item.nome}`}
              onClick={(e) => {
                e.stopPropagation();
                onEditarDesconto();
              }}
            >
              <Pencil className="h-4 w-4" />
            </IconButton>
          </div>

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
