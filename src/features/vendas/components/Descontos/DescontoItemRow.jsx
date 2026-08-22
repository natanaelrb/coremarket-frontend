import { formatCurrency } from '../../../../shared/utils/formatters.js';

/**
 * Linha somente leitura mostrando o total de desconto já aplicado item a item.
 * @param {{ valor: number }} props
 */
export function DescontoItemRow({ valor }) {
  return (
    <div className="flex items-center justify-between py-1.5 text-sm">
      <span className="text-cm-text-muted">Desconto por item já aplicado</span>
      <span className="font-medium text-cm-success">- {formatCurrency(valor)}</span>
    </div>
  );
}

