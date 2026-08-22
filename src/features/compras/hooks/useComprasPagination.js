// Paginação client-side. Ao trocar de página ou tamanho de página, garante
// que o usuário nunca fique preso em uma página vazia após filtrar.
import { useEffect, useMemo, useState, useCallback } from "react";

export function useComprasPagination(items, initialPageSize = 10) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));

  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, page, pageSize]);

  const goToPage = useCallback((next) => setPage(Math.min(Math.max(1, next), totalPages)), [totalPages]);
  const changePageSize = useCallback((size) => {
    setPageSize(size);
    setPage(1);
  }, []);

  return { page, pageSize, totalPages, paginatedItems, goToPage, changePageSize };
}
