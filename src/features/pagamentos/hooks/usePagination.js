import { useEffect, useMemo, useState } from 'react';
import { paginateArray } from '../utils/paginateArray.js';

/**
 * Client-side pagination over an arbitrary array. Resets to page 1
 * whenever the source array length or page size changes.
 * @template T
 * @param {T[]} items
 * @param {number} [initialPageSize=10]
 */
export function usePagination(items, initialPageSize = 10) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  useEffect(() => {
    setPage(1);
  }, [items.length, pageSize]);

  const { pageItems, totalPages, totalItems } = useMemo(
    () => paginateArray(items, page, pageSize),
    [items, page, pageSize]
  );

  return {
    page,
    setPage,
    pageSize,
    setPageSize,
    pageItems,
    totalPages,
    totalItems,
  };
}
