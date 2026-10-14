// Encapsula a exportação da lista atual (respeitando filtros aplicados).
import { useCallback, useState } from "react";
import { exportComprasToCsv } from "../utils/exportHelpers";

export function useComprasExport(compras) {
  const [isExporting, setIsExporting] = useState(false);

  const exportar = useCallback(async () => {
    console.log("=== DIAGNÓSTICO DA EXPORTAÇÃO ===");
    console.log("Valor recebido:", compras);
    console.log("É um array?", Array.isArray(compras));
    console.log("Quantidade:", compras?.length);
    console.log("Primeira compra:", compras?.[0]);

    if (!Array.isArray(compras) || compras.length === 0) {
      window.alert(
        "Nenhuma compra chegou à exportação. Confira o console (F12)."
      );
      return;
    }

    setIsExporting(true);

    try {
      exportComprasToCsv(compras, "diagnostico-compras.csv");
      window.alert(`Exportação iniciada com ${compras.length} compras.`);
    } catch (error) {
      console.error("Erro na exportação:", error);
      window.alert(`Erro ao exportar: ${error.message}`);
    } finally {
      setIsExporting(false);
    }
  }, [compras]);

  return { exportar, isExporting };
}
