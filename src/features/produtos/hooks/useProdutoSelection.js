// Hook responsável exclusivamente pela seleção de linhas da tabela (checkboxes).
import { useState, useCallback, useMemo, useEffect } from 'react';

export function useProdutoSelection(visibleItems) {
  const [selectedIds, setSelectedIds] = useState(() => new Set());

  // Remove da seleção itens que saíram da lista visível (ex: após filtrar)
  useEffect(() => {
    const visibleIds = new Set(visibleItems.map((i) => i.id));
    setSelectedIds((prev) => {
      const next = new Set([...prev].filter((id) => visibleIds.has(id)));
      return next.size === prev.size ? prev : next;
    });
  }, [visibleItems]);

  const toggleOne = useCallback((id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const allSelected = visibleItems.length > 0 && visibleItems.every((i) => selectedIds.has(i.id));
  const someSelected = selectedIds.size > 0 && !allSelected;

  const toggleAll = useCallback(() => {
    setSelectedIds((prev) => {
      if (allSelected) return new Set();
      return new Set(visibleItems.map((i) => i.id));
    });
  }, [allSelected, visibleItems]);

  const clearSelection = useCallback(() => setSelectedIds(new Set()), []);

  const selectedCount = selectedIds.size;

  return useMemo(
    () => ({ selectedIds, toggleOne, toggleAll, allSelected, someSelected, clearSelection, selectedCount }),
    [selectedIds, toggleOne, toggleAll, allSelected, someSelected, clearSelection, selectedCount]
  );
}
