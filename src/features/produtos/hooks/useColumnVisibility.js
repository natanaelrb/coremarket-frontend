// Hook responsável exclusivamente por controlar quais colunas da tabela estão visíveis.
import { useState, useCallback } from 'react';
import { DEFAULT_VISIBLE_COLUMNS } from '../constants/tableColumns';

export function useColumnVisibility() {
  const [visibleColumns, setVisibleColumns] = useState(() => new Set(DEFAULT_VISIBLE_COLUMNS));

  const toggleColumn = useCallback((key) => {
    setVisibleColumns((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, []);

  const isVisible = useCallback((key) => visibleColumns.has(key), [visibleColumns]);

  const resetColumns = useCallback(() => setVisibleColumns(new Set(DEFAULT_VISIBLE_COLUMNS)), []);

  return { visibleColumns, toggleColumn, isVisible, resetColumns };
}
