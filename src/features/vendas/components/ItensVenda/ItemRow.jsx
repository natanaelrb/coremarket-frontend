import { Pencil, Trash2 } from 'lucide-react';
import { QuantityControl } from './QuantityControl.jsx';
import IconButton from "../../../../shared/components/actions/IconButton.jsx";
import { formatCurrency } from '../../../../shared/utils/formatters.js';
import { calcularSubtotalLiquidoItem } from '../../utils/calculators.js';

/**
 * Linha da tabela de itens da venda, com controles de quantidade e ações.
 * @param {{
 *  item: import('../../types/venda.types.js').ItemVenda,
 *  selecionado: boolean,
 *  onSelecionar: () => void,
 *  onIncrementar: () => void,
 *  onDecrementar: () => void,
 *  onEditarDesconto: () => void,
 *  onRemover: () => void,
 * }} props
 */
export function ItemRow({ item, selecionado, onSelecionar, onIncrementar, onDecrementar, onEditarDesconto, onRemover }) {
  const subtotal = calcularSubtotalLiquidoItem(item);

  return (
    <tr
      onClick={onSelecionar}
      className={`
        animate-fade-in cursor-pointer border-b border-cm-border/60 text-sm transition-colors duration-150 last:border-0
        ${selecionado ? 'bg-cm-accent-soft/60' : 'hover:bg-cm-surface-hover'}
      `}
    >
      <td className="py-2.5 pl-2">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cm-surface-hover text-[10px] font-semibold text-cm-text-muted">
            {item.nome.slice(0, 2).toUpperCase()}
          </div>
          <div className="min-w-0">
            <p className="truncate font-medium text-cm-text">{item.nome}</p>
            <p className="truncate text-xs text-cm-text-faint">{item.codigoBarras}</p>
          </div>
        </div>
      </td>
      <td className="py-2.5 text-center">
        <QuantityControl quantidade={item.quantidade} onIncrementar={onIncrementar} onDecrementar={onDecrementar} />
      </td>
      <td className="py-2.5 text-right text-cm-text-muted">{formatCurrency(item.precoUnitario)}</td>
      <td className="py-2.5 text-right">
        {item.descontoItem > 0 ? (
          <span className="text-cm-success">{formatCurrency(item.descontoItem)}</span>
        ) : (
          <span className="text-cm-text-faint">{formatCurrency(0)}</span>
        )}
      </td>
      <td className="py-2.5 text-right font-semibold text-cm-text">{formatCurrency(subtotal)}</td>
      <td className="py-2.5 pr-2">
        <div className="flex items-center justify-end gap-1">
          <IconButton
            size="sm"
            label="Editar desconto do item"
            onClick={(e) => {
              e.stopPropagation();
              onEditarDesconto();
            }}
          >
            <Pencil className="h-3.5 w-3.5" />
          </IconButton>
          <IconButton
            size="sm"
            variant="danger"
            label="Remover item"
            onClick={(e) => {
              e.stopPropagation();
              onRemover();
            }}
          >
            <Trash2 className="h-3.5 w-3.5" />
          </IconButton>
        </div>
      </td>
    </tr>
  );
}

