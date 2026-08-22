import { formatCurrency } from '../../../../shared/utils/formatters.js';

/**
 * Exibição em destaque do valor total da venda.
 * @param {{ total: number }} props
 */
export function TotalDisplay({ total }) {
  return (
    <div className="flex items-center justify-between border-t border-dashed border-cm-border pt-3">
      <span className="text-base font-bold text-cm-text">TOTAL</span>
      <span className="text-2xl font-extrabold text-cm-success tabular-nums">{formatCurrency(total)}</span>
    </div>
  );
}

