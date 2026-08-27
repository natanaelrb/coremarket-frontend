import { useEffect, useState } from 'react';
import { pagamentoService } from '../services/pagamentoService.js';

/** Loads the "Próximos vencimentos" summary list. */
export function useProximosVencimentos() {
  const [itens, setItens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    pagamentoService.buscarProximosVencimentos().then((data) => {
      if (!cancelled) {
        setItens(data);
        setIsLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return { itens, isLoading };
}
