// Hook responsável exclusivamente pela ordenação da tabela (coluna + direção).
import { useMemo, useState, useCallback } from 'react';

export function useSortableData(items, defaultKey = 'codigo') {
  const [sortConfig, setSortConfig] = useState({ key: defaultKey, direction: 'asc' });

  const sortedItems = useMemo(() => {
    const { key, direction } = sortConfig;
    if (!key) return items;

    return [...items].sort((a, b) => {
      const valA = a[key];
      const valB = b[key];

      if (valA === null || valA === undefined) return 1;
      if (valB === null || valB === undefined) return -1;

      if (typeof valA === 'number' && typeof valB === 'number') {
        return direction === 'asc' ? valA - valB : valB - valA;
      }

      return direction === 'asc'
        ? String(valA).localeCompare(String(valB), 'pt-BR')
        : String(valB).localeCompare(String(valA), 'pt-BR');
    });
  }, [items, sortConfig]);

  const requestSort = useCallback((key) => {
    setSortConfig((prev) => {
      if (prev.key !== key) return { key, direction: 'asc' };
      return { key, direction: prev.direction === 'asc' ? 'desc' : 'asc' };
    });
  }, []);

  return { sortedItems, sortConfig, requestSort };
}
