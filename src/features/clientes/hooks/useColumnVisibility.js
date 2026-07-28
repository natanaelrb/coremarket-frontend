import { useState } from "react";
import { COLUMN_DEFS } from "../constants/columns";

/**
 * Controla quais colunas da tabela estão visíveis (menu "Colunas").
 */
export default function useColumnVisibility() {
  const [visibleCols, setVisibleCols] = useState(
    Object.fromEntries(COLUMN_DEFS.map((c) => [c.key, true]))
  );

  function toggleColumn(key) {
    setVisibleCols((v) => ({ ...v, [key]: !v[key] }));
  }

  return { visibleCols, toggleColumn };
}
