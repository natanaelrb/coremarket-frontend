import { useEffect, useState } from 'react';
import { pagamentoService } from '../services/pagamentoService.js';

/** Loads the "Previsão financeira (próximos 30 dias)" card data. */
export function usePrevisaoFinanceira() {
  const [previsao, setPrevisao] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    pagamentoService.buscarPrevisaoFinanceira().then((data) => {
      if (!cancelled) {
        setPrevisao(data);
        setIsLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return { previsao, isLoading };
}
