import { useEffect, useState } from 'react';
import { DEFAULT_PAGE_SIZE } from '../constants';

/** `resetKey` muda → volta para a página 1. */
export function usePagination({ total, resetKey }) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(DEFAULT_PAGE_SIZE);
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  useEffect(() => { setPage(1); }, [resetKey, pageSize]);
  const current = Math.min(page, totalPages);
  return {
    page: current, setPage, pageSize, setPageSize, totalPages, total,
    from: total === 0 ? 0 : (current - 1) * pageSize + 1,
    to: Math.min(current * pageSize, total),
  };
}
