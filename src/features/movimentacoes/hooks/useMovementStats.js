import { useState, useEffect } from 'react';
import { MOCK_STATS } from '../data/mockStats';

// TODO(api): GET /api/estoque/movimentacoes/resumo?periodoInicio=&periodoFim=
export function useMovementStats() {
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStats(MOCK_STATS);
      setIsLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return { stats, isLoading };
}
