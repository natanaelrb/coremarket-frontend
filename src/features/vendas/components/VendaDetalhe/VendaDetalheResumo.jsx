import { formatCurrency } from '../../../../shared/utils/formatters.js';

/**
 * Bloco de resumo financeiro (subtotal, descontos, total) do recibo.
 * @param {{ subtotal: number, descontoItens: number, descontoVenda: number, total: number }} props
 */
export function VendaDetalheResumo({ subtotal, descontoItens, descontoVenda, total }) {
  return (
    <div className="mb-4 border-t border-cm-border pt-3">
      <p className="mb-1.5 text-xs font-medium text-cm-text-faint">Resumo financeiro</p>
      <div className="space-y-1 text-xs">
        <div className="flex justify-between">
          <span className="text-cm-text-muted">Subtotal</span>
          <span className="text-cm-text">{formatCurrency(subtotal)}</span>
        </div>
        {descontoItens > 0 && (
          <div className="flex justify-between">
            <span className="text-cm-text-muted">Desconto itens</span>
            <span className="text-cm-danger">- {formatCurrency(descontoItens)}</span>
          </div>
        )}
        {descontoVenda > 0 && (
          <div className="flex justify-between">
            <span className="text-cm-text-muted">Desconto venda</span>
            <span className="text-cm-danger">- {formatCurrency(descontoVenda)}</span>
          </div>
        )}
      </div>
      <div className="mt-2 flex items-center justify-between border-t border-dashed border-cm-border pt-2">
        <span className="text-sm font-bold text-cm-text">Total</span>
        <span className="text-lg font-extrabold text-cm-success">{formatCurrency(total)}</span>
      </div>
    </div>
  );
}

