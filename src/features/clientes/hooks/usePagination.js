import { useState, useEffect } from "react";

/**
 * Pagina `data`. `resetKey` faz a página voltar para 1 sempre que mudar
 * (usado para resetar a paginação quando busca/filtros mudam).
 */
export default function usePagination(data, initialPerPage, resetKey) {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(initialPerPage);

  useEffect(() => {
    setPage(1);
  }, [resetKey, perPage]);

  const totalPages = Math.max(1, Math.ceil(data.length / perPage));
  const currentPage = Math.min(page, totalPages);
  const paginated = data.slice((currentPage - 1) * perPage, currentPage * perPage);

  return {
    page: currentPage,
    perPage,
    totalPages,
    paginated,
    setPage,
    setPerPage,
    goPrev: () => setPage((p) => Math.max(1, p - 1)),
    goNext: () => setPage((p) => Math.min(totalPages, p + 1)),
  };
}
