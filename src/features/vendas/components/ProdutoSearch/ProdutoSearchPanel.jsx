import Card, { CardStepHeader } from "../../../../shared/components/layout/Card.jsx";
import { SearchInput } from './SearchInput.jsx';
import { ProdutoSuggestions } from './ProdutoSuggestions.jsx';
import { useToast } from "../../../../shared/contexts/ToastContext.jsx";

/**
 * Painel "1. Buscar produto": campo de busca + sugestões + escanear.
 * @param {{
 *  produtoSearch: ReturnType<typeof import('../../hooks/useProdutoSearch.js').useProdutoSearch>,
 *  onAdicionarProduto: (produto: import('../../types/venda.types.js').Produto) => void,
 * }} props
 */
export function ProdutoSearchPanel({ produtoSearch, onAdicionarProduto }) {
  const { notify } = useToast();
  const { termo, setTermo, sugestoes, inputRef } = produtoSearch;

  function handleEscanear() {
    notify('Leitor de câmera indisponível nesta demonstração.', 'info');
  }

  return (
    <Card>
      <CardStepHeader step={1} title="Buscar produto" />
      <SearchInput value={termo} onChange={setTermo} inputRef={inputRef} onEscanear={handleEscanear} />
      <div className="mt-3">
        <ProdutoSuggestions produtos={sugestoes} onAdicionarProduto={onAdicionarProduto} />
      </div>
    </Card>
  );
}

