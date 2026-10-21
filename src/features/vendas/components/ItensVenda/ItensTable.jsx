import { ShoppingCart, PackageSearch } from 'lucide-react';
import { ItemRow } from './ItemRow.jsx';

/**
 * Tabela com os itens adicionados ao carrinho da venda em andamento.
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
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-cm-border bg-cm-surface/50 px-4 py-12 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cm-accent-soft text-cm-accent">
          <ShoppingCart className="h-7 w-7" />
        </div>

        <h3 className="text-sm font-semibold text-cm-text">
          Sua venda ainda está vazia
        </h3>

        <p className="mt-1 max-w-xs text-sm text-cm-text-muted">
          Adicione produtos para começar a montar o pedido.
        </p>

        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-cm-surface px-3 py-1.5 text-xs text-cm-text-faint">
          <PackageSearch className="h-3.5 w-3.5" />
          Busque um produto no campo acima
        </div>
      </div>
    );
  }

  
return (
  <div className="min-w-0 overflow-hidden rounded-xl border border-cm-border">
    <div className="overflow-x-auto">
      <table className="w-full min-w-[760px] border-collapse text-sm">
        <colgroup>
          <col className="w-auto" />
          <col className="w-[110px]" />
          <col className="w-[125px]" />
          <col className="w-[115px]" />
          <col className="w-[125px]" />
          <col className="w-[100px]" />
        </colgroup>

        <thead>
          <tr className="border-b border-cm-border bg-cm-surface-hover/70 text-left">
            <th scope="col" className="px-5 py-4 font-semibold text-cm-text-muted">
              Produto
            </th>
            <th scope="col" className="px-3 py-4 text-center font-semibold text-cm-text-muted">
              Qtd.
            </th>
            <th scope="col" className="px-3 py-4 text-right font-semibold text-cm-text-muted">
              Preço unit.
            </th>
            <th scope="col" className="px-3 py-4 text-right font-semibold text-cm-text-muted">
              Desconto
            </th>
            <th scope="col" className="px-3 py-4 text-right font-semibold text-cm-text-muted">
              Subtotal
            </th>
            <th scope="col" className="px-4 py-4 text-center font-semibold text-cm-text-muted">
              Ações
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-cm-border/70">
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

    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-cm-border bg-cm-surface/60 px-4 py-3">
      <span className="text-xs text-cm-text-faint">
        Produtos adicionados à venda
      </span>

      <span className="rounded-full bg-cm-accent-soft px-3 py-1.5 text-xs font-semibold text-cm-accent">
        {itens.length} {itens.length === 1 ? "item" : "itens"}
      </span>
    </div>
  </div>
  );
}