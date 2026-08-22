// Seleção múltipla de linhas da tabela (checkboxes), usada para ações em
// lote futuras (exportar seleção, cancelar em lote, etc).
import { useCallback, useMemo, useState } from "react";

export function useComprasSelection(itemsOnPage) {
  const [selectedIds, setSelectedIds] = useState(() => new Set());

  const toggleOne = useCallback((id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const allOnPageSelected = itemsOnPage.length > 0 && itemsOnPage.every((item) => selectedIds.has(item.id));

  const toggleAllOnPage = useCallback(() => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (allOnPageSelected) {
        itemsOnPage.forEach((item) => next.delete(item.id));
      } else {
        itemsOnPage.forEach((item) => next.add(item.id));
      }
      return next;
    });
  }, [itemsOnPage, allOnPageSelected]);

  const clearSelection = useCallback(() => setSelectedIds(new Set()), []);

  const selectedCount = useMemo(() => selectedIds.size, [selectedIds]);

  return { selectedIds, toggleOne, toggleAllOnPage, allOnPageSelected, clearSelection, selectedCount };
}
