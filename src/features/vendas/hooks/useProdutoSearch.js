import { useMemo, useRef, useState } from 'react';
import { useDebounce } from '../../../shared/hooks/useDebounce.js';
import { MOCK_PRODUTOS } from '../data/mockProdutos.js';

/**
 * Gerencia o campo de busca de produtos (código de barras, código ou nome)
 * e a lista de sugestões filtradas.
 * TODO(api): trocar o filtro local por GET /api/produtos/buscar?termo={termo}
 */
export function useProdutoSearch() {
  const [termo, setTermo] = useState('');
  const inputRef = useRef(null);
  const termoDebounced = useDebounce(termo, 200);

  const sugestoes = useMemo(() => {
    const query = termoDebounced.trim().toLowerCase();
    if (!query) return MOCK_PRODUTOS.slice(0, 4);

    return MOCK_PRODUTOS.filter(
      (produto) =>
        produto.nome.toLowerCase().includes(query) || produto.codigoBarras.includes(query),
    ).slice(0, 8);
  }, [termoDebounced]);

  function limparBusca() {
    setTermo('');
  }

  function focar() {
    inputRef.current?.focus();
  }

  return {
    termo,
    setTermo,
    sugestoes,
    inputRef,
    limparBusca,
    focar,
  };
}

