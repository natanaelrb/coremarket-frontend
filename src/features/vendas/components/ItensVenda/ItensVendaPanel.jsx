import { useState } from 'react';
import Card, { CardStepHeader } from "../../../../shared/components/layout/Card.jsx";
import { ItensTable } from './ItensTable.jsx';
import { ObservacaoButton } from './ObservacaoButton.jsx';
import { LimparVendaButton } from './LimparVendaButton.jsx';
import { DescontoItemModal } from './DescontoItemModal.jsx';

/**
 * Painel "2. Itens da venda": tabela de itens, observação e limpar venda.
 * @param {{ carrinho: ReturnType<typeof import('../../hooks/useItensVenda.js').useItensVenda> }} props
 */
export function ItensVendaPanel({ carrinho }) {
  const [itemEmEdicaoId, setItemEmEdicaoId] = useState(null);
  const itemEmEdicao = carrinho.itens.find((item) => item.id === itemEmEdicaoId) ?? null;

  return (
    <Card>
      <CardStepHeader
        step={2}
        title="Itens da venda"
        action={
          <span className="text-xs text-cm-text-faint">
            {carrinho.itens.length} {carrinho.itens.length === 1 ? 'item' : 'itens'}
          </span>
        }
      />

      <ItensTable
        itens={carrinho.itens}
        itemSelecionadoId={carrinho.itemSelecionadoId}
        onSelecionarItem={carrinho.setItemSelecionadoId}
        onIncrementar={(id) => carrinho.incrementarQuantidade(id, 1)}
        onDecrementar={(id) => carrinho.incrementarQuantidade(id, -1)}
        onEditarDesconto={setItemEmEdicaoId}
        onRemover={carrinho.removerItem}
      />

      <div className="mt-4 flex items-center justify-between border-t border-cm-border pt-4">
        <ObservacaoButton observacao={carrinho.observacao} onChange={carrinho.setObservacao} />
        <LimparVendaButton onConfirmar={carrinho.limparVenda} disabled={carrinho.itens.length === 0} />
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

