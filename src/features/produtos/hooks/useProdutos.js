// Hook responsável por carregar a lista de produtos (fonte de dados).
// Troca simples: substituir a leitura do mock por uma chamada axios em /api/produtos.
import { useEffect, useMemo, useState } from 'react';
import { PRODUTOS_MOCK } from '../mocks/produtos.mock';
import { resolveProductStatus } from '../utils/validadeUtils';

export function useProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ativo = true;
    setIsLoading(true);

    // TODO: substituir por `api.get('/produtos')`
    const timeout = setTimeout(() => {
      if (!ativo) return;
      try {
        const comStatus = PRODUTOS_MOCK.map((p) => ({ ...p, status: resolveProductStatus(p) }));
        setProdutos(comStatus);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }, 250);

    return () => {
      ativo = false;
      clearTimeout(timeout);
    };
  }, []);

  const refetch = () => {
    setIsLoading(true);
    setTimeout(() => {
      const comStatus = PRODUTOS_MOCK.map((p) => ({ ...p, status: resolveProductStatus(p) }));
      setProdutos(comStatus);
      setIsLoading(false);
    }, 400);
  };

  return useMemo(
    () => ({ produtos, isLoading, error, refetch }),
    [produtos, isLoading, error]
  );
}
