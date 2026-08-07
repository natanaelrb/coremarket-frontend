// Hook responsável exclusivamente por executar ações em massa sobre os produtos selecionados.
// Endpoint real sugerido: POST /api/produtos/bulk-actions
import { useCallback, useState } from 'react';

export function useBulkActions({ selectedIds, clearSelection, onCompleted }) {
  const [isProcessing, setIsProcessing] = useState(false);

  const runAction = useCallback((actionValue) => {
    if (selectedIds.size === 0) return;
    setIsProcessing(true);

    // TODO: substituir por chamada real à API com o array de ids selecionados.
    setTimeout(() => {
      setIsProcessing(false);
      clearSelection();
      onCompleted?.(actionValue, Array.from(selectedIds));
    }, 500);
  }, [selectedIds, clearSelection, onCompleted]);

  return { runAction, isProcessing };
}
