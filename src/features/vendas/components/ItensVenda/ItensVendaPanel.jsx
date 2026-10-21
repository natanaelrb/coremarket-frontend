import { useState } from "react";
import Card, { CardStepHeader } from "../../../../shared/components/layout/Card.jsx";
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
      <div className="p-5 sm:p-4">
        <CardStepHeader
          step={2}
          title="Itens da venda"
          description="Confira os produtos, quantidades e descontos"
        >
          <span className="inline-flex shrink-0 items-center rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-xs font-semibold text-green-700 dark:text-green-400">
            {carrinho.itens.length}{" "}
            {carrinho.itens.length === 1 ? "item" : "itens"}
          </span>
        </CardStepHeader>

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

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-cm-border pt-4">
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
