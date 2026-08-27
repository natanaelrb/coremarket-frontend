import { useCallback, useState } from 'react';

/**
 * Gerencia a lista de itens (carrinho) da venda em andamento: adicionar,
 * remover, atualizar quantidade e desconto por item.
 */
export function useItensVenda(itensIniciais = []) {
  const [itens, setItens] = useState(itensIniciais);
  const [itemSelecionadoId, setItemSelecionadoId] = useState(null);
  const [observacao, setObservacao] = useState('');

  const adicionarProduto = useCallback((produto, quantidade = 1) => {
    setItens((prev) => {
      const existente = prev.find((item) => item.produtoId === produto.id);
      if (existente) {
        return prev.map((item) =>
          item.produtoId === produto.id
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item,
        );
      }
      return [
        ...prev,
        {
          id: crypto.randomUUID(),
          produtoId: produto.id,
          nome: produto.nome,
          codigoBarras: produto.codigoBarras,
          quantidade,
          precoUnitario: produto.preco,
          descontoItem: 0,
          imagemUrl: produto.imagemUrl ?? null,
        },
      ];
    });
  }, []);

  const removerItem = useCallback((itemId) => {
    setItens((prev) => prev.filter((item) => item.id !== itemId));
    setItemSelecionadoId((atual) => (atual === itemId ? null : atual));
  }, []);

  const atualizarQuantidade = useCallback((itemId, quantidade) => {
    setItens((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantidade: Math.max(1, quantidade) } : item,
      ),
    );
  }, []);

  const incrementarQuantidade = useCallback((itemId, delta = 1) => {
    setItens((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantidade: Math.max(1, item.quantidade + delta) } : item,
      ),
    );
  }, []);

  const atualizarDescontoItem = useCallback((itemId, desconto) => {
    setItens((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, descontoItem: Math.max(0, desconto) } : item)),
    );
  }, []);

  const limparVenda = useCallback(() => {
    setItens([]);
    setItemSelecionadoId(null);
    setObservacao('');
  }, []);

  return {
    itens,
    itemSelecionadoId,
    setItemSelecionadoId,
    observacao,
    setObservacao,
    adicionarProduto,
    removerItem,
    atualizarQuantidade,
    incrementarQuantidade,
    atualizarDescontoItem,
    limparVenda,
  };
}

