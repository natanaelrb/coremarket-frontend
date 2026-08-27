import { useState } from 'react';

// Controla qual movimentação está selecionada para exibição no painel lateral de detalhes.
export function useMovementDetail(movements) {
  const [selectedId, setSelectedId] = useState(movements[0]?.id ?? null);
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  function selectMovement(id) {
    setSelectedId(id);
    setIsPanelOpen(true);
  }

  function closePanel() {
    setIsPanelOpen(false);
  }

  const selectedMovement = movements.find((m) => m.id === selectedId) || null;

  return { selectedMovement, selectedId, isPanelOpen, selectMovement, closePanel };
}
