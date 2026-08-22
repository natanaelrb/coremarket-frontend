// Permite ao usuário mostrar/ocultar colunas da tabela. Persistido em
// localStorage para manter a preferência entre sessões.
import { useCallback, useEffect, useState } from "react";
import { DEFAULT_COLUMNS } from "../constants/tableColumns";

const STORAGE_KEY = "coremarket-compras-columns";

export function useColumnCustomization() {
  const [columns, setColumns] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : DEFAULT_COLUMNS;
    } catch {
      return DEFAULT_COLUMNS;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(columns));
  }, [columns]);

  const toggleColumn = useCallback((id) => {
    setColumns((prev) => prev.map((col) => (col.id === id && !col.locked ? { ...col, visible: !col.visible } : col)));
  }, []);

  const resetColumns = useCallback(() => setColumns(DEFAULT_COLUMNS), []);

  return { columns, toggleColumn, resetColumns };
}
