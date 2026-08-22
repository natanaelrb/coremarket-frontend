import { ProdutoSuggestionItem } from './ProdutoSuggestionItem.jsx';

/**
 * Lista de sugestões de produtos exibida abaixo do campo de busca.
 * @param {{
 *  produtos: import('../../types/venda.types.js').Produto[],
 *  onAdicionarProduto: (produto: import('../../types/venda.types.js').Produto) => void,
 * }} props
 */
export function ProdutoSuggestions({ produtos, onAdicionarProduto }) {
  if (produtos.length === 0) {
    return (
      <p className="px-3 py-6 text-center text-sm text-cm-text-faint">
        Nenhum produto encontrado para essa busca.
      </p>
    );
  }

  return (
    <div className="animate-fade-in">
      <p className="px-3 pb-1.5 text-xs font-medium text-cm-text-faint">Sugestões de produtos</p>
      <ul className="space-y-0.5">
        {produtos.map((produto) => (
          <ProdutoSuggestionItem
            key={produto.id}
            produto={produto}
            onAdicionar={() => onAdicionarProduto(produto)}
          />
        ))}
      </ul>
    </div>
  );
}

