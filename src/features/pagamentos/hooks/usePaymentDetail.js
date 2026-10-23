import { useCallback, useEffect, useState } from 'react';
import { pagamentoService } from '../services/pagamentoService.js';

/**
 * Carrega os detalhes de um pagamento pelo ID.
 *
 * O ID pode vir diretamente da URL, permitindo abrir a página de detalhes
 * sem precisar selecionar o pagamento previamente na listagem.
 *
 * @param {string|null} pagamentoId
 */
export function usePaymentDetail(pagamentoId = null) {
  const [selectedId, setSelectedId] = useState(pagamentoId);
  const [detail, setDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(Boolean(pagamentoId));
  const [error, setError] = useState(null);

  useEffect(() => {
    setSelectedId(pagamentoId);
  }, [pagamentoId]);

  useEffect(() => {
    if (!selectedId) {
      setDetail(null);
      setIsLoading(false);
      setError(null);
      return undefined;
    }

    let cancelled = false;

    async function carregarDetalhe() {
      setIsLoading(true);
      setDetail(null);
      setError(null);

      try {
        const data = await pagamentoService.buscarDetalhe(selectedId);

        if (cancelled) return;

        if (!data) {
          setError('Pagamento não encontrado.');
          return;
        }

        setDetail(data);
      } catch {
        if (!cancelled) {
          setError('Não foi possível carregar os detalhes do pagamento.');
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    carregarDetalhe();

    return () => {
      cancelled = true;
    };
  }, [selectedId]);

  const openDetail = useCallback((id) => {
    setSelectedId(id);
  }, []);

  const closeDetail = useCallback(() => {
    setSelectedId(null);
  }, []);

  return {
    selectedId,
    detail,
    isLoading,
    error,
    isOpen: Boolean(selectedId),
    openDetail,
    closeDetail,
  };
}
