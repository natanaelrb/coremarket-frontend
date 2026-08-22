// Ordenação client-side da tabela; independente de paginação e filtros
// para que cada responsabilidade permaneça isolada e testável.
import { useMemo, useState, useCallback } from "react";

export function useComprasSort(compras) {
  const [sortConfig, setSortConfig] = useState({ key: "data", direction: "desc" });

  const toggleSort = useCallback((key) => {
    setSortConfig((prev) => {
      if (prev.key !== key) return { key, direction: "asc" };
      return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
    });
  }, []);

  const comprasOrdenadas = useMemo(() => {
    const { key, direction } = sortConfig;
    const sorted = [...compras].sort((a, b) => {
      let valA = a[key];
      let valB = b[key];
      if (key === "compra") {
        valA = a.numero;
        valB = b.numero;
      }
      if (key === "recebimento") {
        valA = a.dataRecebimento || "";
        valB = b.dataRecebimento || "";
      }
      if (typeof valA === "string") return direction === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
      return direction === "asc" ? valA - valB : valB - valA;
    });
    return sorted;
  }, [compras, sortConfig]);

  return { comprasOrdenadas, sortConfig, toggleSort };
}
