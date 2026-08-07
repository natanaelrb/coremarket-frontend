// Hook responsável exclusivamente pelo estado e aplicação dos filtros da página de Produtos.
import { useMemo, useState, useCallback } from 'react';

const INITIAL_FILTERS = {
  busca: '',
  categoria: 'todos',
  fornecedor: 'todos',
  marca: 'todos',
  status: 'todos',
  situacaoEstoque: 'todos',
  tipo: 'todos',
  precoMin: '',
  precoMax: '',
  dataCadastro: 'todos',
};

export function useProdutoFilters(produtos) {
  const [filters, setFilters] = useState(INITIAL_FILTERS);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  const setFilter = useCallback((key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  const clearFilters = useCallback(() => setFilters(INITIAL_FILTERS), []);

  const activeFiltersCount = useMemo(() => {
    return Object.entries(filters).filter(([key, value]) => {
      if (key === 'busca') return false;
      return value && value !== 'todos';
    }).length;
  }, [filters]);

  const filteredProdutos = useMemo(() => {
    return produtos.filter((p) => {
      if (filters.busca) {
        const termo = filters.busca.toLowerCase();
        const alvo = `${p.nome} ${p.codigo} ${p.sku} ${p.codigoBarras}`.toLowerCase();
        if (!alvo.includes(termo)) return false;
      }
      if (filters.categoria !== 'todos' && p.categoria !== filters.categoria) return false;
      if (filters.fornecedor !== 'todos' && p.fornecedor !== filters.fornecedor) return false;
      if (filters.marca !== 'todos' && p.marca !== filters.marca) return false;
      if (filters.status !== 'todos' && p.status !== filters.status) return false;
      if (filters.tipo !== 'todos' && p.tipo !== filters.tipo) return false;

      if (filters.situacaoEstoque === 'disponivel' && p.estoque <= p.estoqueMinimo) return false;
      if (filters.situacaoEstoque === 'baixo' && !(p.estoque > 0 && p.estoque <= p.estoqueMinimo)) return false;
      if (filters.situacaoEstoque === 'sem_estoque' && p.estoque > 0) return false;

      const precoMin = parseFloat(filters.precoMin);
      const precoMax = parseFloat(filters.precoMax);
      if (!Number.isNaN(precoMin) && p.precoVenda < precoMin) return false;
      if (!Number.isNaN(precoMax) && p.precoVenda > precoMax) return false;

      return true;
    });
  }, [produtos, filters]);

  return {
    filters,
    setFilter,
    clearFilters,
    activeFiltersCount,
    filteredProdutos,
    isAdvancedOpen,
    setIsAdvancedOpen,
  };
}
