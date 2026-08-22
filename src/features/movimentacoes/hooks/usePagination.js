import { useMemo, useState, useEffect } from 'react';

// Paginação client-side genérica e reutilizável.
export function usePagination(items, itemsPerPage = 25) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [totalPages, currentPage]);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, currentPage, itemsPerPage]);

  const rangeLabel = useMemo(() => {
    if (items.length === 0) return 'Nenhum resultado';
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, items.length);
    return `Mostrando ${start}-${end} de ${items.length} movimentações`;
  }, [items.length, currentPage, itemsPerPage]);

  function goToPage(page) {
    setCurrentPage(Math.min(Math.max(1, page), totalPages));
  }

  return { currentPage, totalPages, paginatedItems, rangeLabel, goToPage };
}
