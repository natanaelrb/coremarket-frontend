import { useEffect, useState } from 'react';
import { pagamentoService } from '../services/pagamentoService.js';

/**
 * Loads the raw pagamentos list for the active período. Owns loading/error
 * state so consuming components only render.
 * @param {{ start: string, end: string }} periodo
 */
export function usePagamentos(periodo) {
  const [pagamentos, setPagamentos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setError(null);

    pagamentoService
      .listar({ periodoInicio: periodo.start, periodoFim: periodo.end })
      .then((data) => {
        if (!cancelled) setPagamentos(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [periodo.start, periodo.end]);

  return { pagamentos, isLoading, error };
}
