// Hook responsável exclusivamente por buscar os dados brutos de compras.
// TODO(api): substituir o import mock por uma chamada real, ex:
//   const { data } = await api.get("/api/compras", { params: filtros });

import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import {
  getComprasSnapshot,
  subscribeCompras,
} from "../data/comprasStore";

export function useComprasData() {
  const compras = useSyncExternalStore(
    subscribeCompras,
    getComprasSnapshot,
    getComprasSnapshot
  );

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 350);
    return () => clearTimeout(timeout);
  }, []);

  const atualizar = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 350));
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { compras, isLoading, error, atualizar };
}
