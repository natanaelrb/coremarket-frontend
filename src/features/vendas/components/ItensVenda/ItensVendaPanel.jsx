import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Card from "../../../../shared/components/layout/Card.jsx";
import { ItensTable } from "./ItensTable.jsx";
import { ObservacaoButton } from "./ObservacaoButton.jsx";
import { LimparVendaButton } from "./LimparVendaButton.jsx";
import { DescontoItemModal } from "./DescontoItemModal.jsx";

export function ItensVendaPanel({ carrinho }) {
  const [itemEmEdicaoId, setItemEmEdicaoId] = useState(null);

  const itemEmEdicao =
    carrinho.itens.find((item) => item.id === itemEmEdicaoId) ?? null;

  return (
    <Card className="overflow-hidden">
      <div className="p-5 sm:p-5">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
              <ShoppingCart size={19} strokeWidth={2} />
            </div>

            <div className="min-w-0">
              <h3 className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                Itens da venda
              </h3>

              <p className="mt-0.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                Produtos adicionados ao carrinho
              </p>
            </div>
          </div>

          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
            {carrinho.itens.length}{" "}
            {carrinho.itens.length === 1 ? "item" : "itens"}
          </span>
        </div>

        <div className="mt-5 min-w-0">
          <ItensTable
            itens={carrinho.itens}
            itemSelecionadoId={carrinho.itemSelecionadoId}
            onSelecionarItem={carrinho.setItemSelecionadoId}
            onIncrementar={(id) => carrinho.incrementarQuantidade(id, 1)}
            onDecrementar={(id) => carrinho.incrementarQuantidade(id, -1)}
            onEditarDesconto={setItemEmEdicaoId}
            onRemover={carrinho.removerItem}
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-cm-border pt-4">
          <ObservacaoButton
            observacao={carrinho.observacao}
            onChange={carrinho.setObservacao}
          />

          <LimparVendaButton
            onConfirmar={carrinho.limparVenda}
            disabled={carrinho.itens.length === 0}
          />
        </div>
      </div>

      {itemEmEdicao && (
        <DescontoItemModal
          item={itemEmEdicao}
          onFechar={() => setItemEmEdicaoId(null)}
          onSalvar={(valor) => {
            carrinho.atualizarDescontoItem(itemEmEdicao.id, valor);
            setItemEmEdicaoId(null);
          }}
        />
      )}
    </Card>
  );
}
