// Hook responsável exclusivamente por buscar os dados brutos de compras.
// TODO(api): substituir o import mock por uma chamada real, ex:
//   const { data } = await api.get("/api/compras", { params: filtros });
import { useEffect, useState } from "react";
import { mockCompras } from "../data/mockCompras";

export function useComprasData() {
  const [compras, setCompras] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    setIsLoading(true);

    const timeout = setTimeout(() => {
      if (!active) return;
      try {
        setCompras(mockCompras);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }, 350);

    return () => {
      active = false;
      clearTimeout(timeout);
    };
  }, []);

  return { compras, isLoading, error };
}
