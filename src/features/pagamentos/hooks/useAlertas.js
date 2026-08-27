import { useEffect, useState } from 'react';
import { pagamentoService } from '../services/pagamentoService.js';

/** Loads the "Alertas importantes" cards shown at the bottom of the page. */
export function useAlertas(periodo) {
  const [alertas, setAlertas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    pagamentoService
      .buscarAlertas({ periodoInicio: periodo.start, periodoFim: periodo.end })
      .then((data) => {
        if (!cancelled) setAlertas(data);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [periodo.start, periodo.end]);

  return { alertas, isLoading };
}
