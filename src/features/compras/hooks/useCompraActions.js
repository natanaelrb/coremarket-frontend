// Ações imperativas sobre uma compra (cancelar, editar, imprimir) isoladas
// da UI para facilitar a futura ligação com endpoints reais.
// TODO(api): cancelar -> PATCH /api/compras/{id}/cancelar
// TODO(api): editar -> abrir formulário populado via GET /api/compras/{id}
// TODO(api): imprimir -> GET /api/compras/{id}/pdf
import { useCallback, useState } from "react";

export function useCompraActions({ onCancelSuccess } = {}) {
  const [isCancelling, setIsCancelling] = useState(false);
  const [confirmCancelId, setConfirmCancelId] = useState(null);

  const requestCancel = useCallback((id) => setConfirmCancelId(id), []);
  const dismissCancel = useCallback(() => setConfirmCancelId(null), []);

  const confirmCancel = useCallback(async () => {
    if (!confirmCancelId) return;
    setIsCancelling(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsCancelling(false);
    setConfirmCancelId(null);
    onCancelSuccess?.(confirmCancelId);
  }, [confirmCancelId, onCancelSuccess]);

  const imprimirCompra = useCallback((id) => {
    window.print();
  }, []);

  return { confirmCancelId, isCancelling, requestCancel, dismissCancel, confirmCancel, imprimirCompra };
}
