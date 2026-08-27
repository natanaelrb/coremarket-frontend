import { useCallback, useEffect, useState } from 'react';
import { pagamentoService } from '../services/pagamentoService.js';

/**
 * Owns the "Detalhes do pagamento" side panel: which payment id is
 * selected, whether the panel is open, and the async detail payload.
 */
export function usePaymentDetail() {
  const [selectedId, setSelectedId] = useState(null);
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!selectedId) {
      setDetail(null);
      return undefined;
    }
    let cancelled = false;
    setIsLoading(true);
    pagamentoService.buscarDetalhe(selectedId).then((data) => {
      if (!cancelled) {
        setDetail(data);
        setIsLoading(false);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [selectedId]);

  const openDetail = useCallback((id) => setSelectedId(id), []);
  const closeDetail = useCallback(() => setSelectedId(null), []);

  return { isOpen: Boolean(selectedId), detail, isLoading, openDetail, closeDetail };
}
