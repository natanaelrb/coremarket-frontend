/**
 * Slices `items` for the given page (1-indexed) and page size.
 * @template T
 * @param {T[]} items
 * @param {number} page
 * @param {number} pageSize
 * @returns {{ pageItems: T[], totalPages: number, totalItems: number }}
 */
export function paginateArray(items, page, pageSize) {
  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  const pageItems = items.slice(start, start + pageSize);

  return { pageItems, totalPages, totalItems };
}
