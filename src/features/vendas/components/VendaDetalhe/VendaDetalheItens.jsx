import { formatCurrency } from '../../../../shared/utils/formatters.js';

/**
 * Lista compacta de itens exibida no recibo/detalhe da venda.
 * @param {{ itens: { nome: string, quantidade: number, subtotal: number }[] }} props
 */
export function VendaDetalheItens({ itens }) {
  return (
    <div className="mb-4">
      <p className="mb-1.5 text-xs font-medium text-cm-text-faint">Itens</p>
      <ul className="space-y-1">
        {itens.map((item, index) => (
          <li key={index} className="flex justify-between text-xs">
            <span className="text-cm-text-muted">
              {item.quantidade}x {item.nome}
            </span>
            <span className="text-cm-text">{formatCurrency(item.subtotal)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

