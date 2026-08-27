// Encapsula a exportação da lista atual (respeitando filtros aplicados).
import { useCallback, useState } from "react";
import { exportComprasToCsv } from "../utils/exportHelpers";

export function useComprasExport(compras) {
  const [isExporting, setIsExporting] = useState(false);

  const exportar = useCallback(async () => {
    setIsExporting(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    exportComprasToCsv(compras, `compras-${Date.now()}.csv`);
    setIsExporting(false);
  }, [compras]);

  return { exportar, isExporting };
}
