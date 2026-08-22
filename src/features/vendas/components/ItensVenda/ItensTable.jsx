import { ShoppingCart } from 'lucide-react';
import { ItemRow } from './ItemRow.jsx';

/**
 * Tabela com os itens adicionados ao carrinho da venda em andamento.
 * @param {{
 *  itens: import('../../types/venda.types.js').ItemVenda[],
 *  itemSelecionadoId: string | null,
 *  onSelecionarItem: (id: string) => void,
 *  onIncrementar: (id: string) => void,
 *  onDecrementar: (id: string) => void,
 *  onEditarDesconto: (id: string) => void,
 *  onRemover: (id: string) => void,
 * }} props
 */
export function ItensTable({
  itens,
  itemSelecionadoId,
  onSelecionarItem,
  onIncrementar,
  onDecrementar,
  onEditarDesconto,
  onRemover,
}) {
  if (itens.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 py-10 text-center">
        <ShoppingCart className="h-8 w-8 text-cm-text-faint" />
        <p className="text-sm text-cm-text-muted">Nenhum item adicionado ainda.</p>
        <p className="text-xs text-cm-text-faint">Busque um produto acima para começar a venda.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] border-collapse">
        <thead>
          <tr className="border-b border-cm-border text-left text-xs text-cm-text-faint">
            <th className="pb-2 pl-2 font-medium">Produto</th>
            <th className="pb-2 text-center font-medium">Qtd.</th>
            <th className="pb-2 text-right font-medium">Preço unit.</th>
            <th className="pb-2 text-right font-medium">Desconto</th>
            <th className="pb-2 text-right font-medium">Subtotal</th>
            <th className="pb-2 pr-2 text-right font-medium">Ações</th>
          </tr>
        </thead>
        <tbody>
          {itens.map((item) => (
            <ItemRow
              key={item.id}
              item={item}
              selecionado={item.id === itemSelecionadoId}
              onSelecionar={() => onSelecionarItem(item.id)}
              onIncrementar={() => onIncrementar(item.id)}
              onDecrementar={() => onDecrementar(item.id)}
              onEditarDesconto={() => onEditarDesconto(item.id)}
              onRemover={() => onRemover(item.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

