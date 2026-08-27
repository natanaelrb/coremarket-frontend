import { useEffect, useState } from 'react';
import { MOCK_MOVEMENTS } from '../data/mockMovements';

// Fonte de dados das movimentações.
// TODO(api): substituir por chamada real:
//   GET /api/estoque/movimentacoes?page={page}&size={size}&...filtros
// Controller sugerido: MovimentacaoEstoqueController#listarMovimentacoes
export function useMovements() {
  const [movements, setMovements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      try {
        setMovements(MOCK_MOVEMENTS);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    }, 250);
    return () => clearTimeout(timeout);
  }, []);

  function refetch() {
    setIsLoading(true);
    setTimeout(() => {
      setMovements([...MOCK_MOVEMENTS]);
      setIsLoading(false);
    }, 400);
  }

  return { movements, isLoading, error, refetch };
}
