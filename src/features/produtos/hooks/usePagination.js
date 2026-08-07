// Hook genérico de paginação client-side (independente de domínio).
import { useMemo, useState, useEffect, useCallback } from 'react';
import { DEFAULT_ITEMS_PER_PAGE } from '../constants/tableColumns';

export function usePagination(items, itemsPerPageInicial = DEFAULT_ITEMS_PER_PAGE) {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageInicial);

  const totalPages = Math.max(Math.ceil(items.length / itemsPerPage), 1);

  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, page, itemsPerPage]);

  const goToPage = useCallback((target) => {
    setPage(Math.min(Math.max(target, 1), totalPages));
  }, [totalPages]);

  const nextPage = useCallback(() => goToPage(page + 1), [goToPage, page]);
  const prevPage = useCallback(() => goToPage(page - 1), [goToPage, page]);

  const changeItemsPerPage = useCallback((value) => {
    setItemsPerPage(value);
    setPage(1);
  }, []);

  return {
    page,
    totalPages,
    itemsPerPage,
    paginatedItems,
    goToPage,
    nextPage,
    prevPage,
    changeItemsPerPage,
    totalItems: items.length,
  };
}
