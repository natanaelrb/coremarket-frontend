import { useState } from "react";

/**
 * Controla o conjunto de linhas selecionadas (checkboxes da tabela)
 * e a lógica de "selecionar todos" restrita à página atual.
 */
export default function useRowSelection() {
  const [selected, setSelected] = useState(new Set());

  function toggleOne(id) {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function toggleAllVisible(visibleIds) {
    setSelected((prev) => {
      const allSelected = visibleIds.every((id) => prev.has(id));
      const next = new Set(prev);
      visibleIds.forEach((id) => (allSelected ? next.delete(id) : next.add(id)));
      return next;
    });
  }

  function removeMany(ids) {
    setSelected((prev) => {
      const next = new Set(prev);
      ids.forEach((id) => next.delete(id));
      return next;
    });
  }

  function clear() {
    setSelected(new Set());
  }

  return {
    selected,
    selectedCount: selected.size,
    isSelected: (id) => selected.has(id),
    toggleOne,
    toggleAllVisible,
    removeMany,
    clear,
  };
}
