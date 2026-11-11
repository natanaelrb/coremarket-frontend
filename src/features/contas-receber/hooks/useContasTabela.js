import { useMemo } from 'react';
import { paginate, sortContas } from '../utils';
import { useContasSort } from './useContasSort';
import { usePagination } from './usePagination';

/** Ordenação + paginação da lista filtrada. */
export function useContasTabela({ rows, resetKey }) {
  const sorting = useContasSort();
  const sorted = useMemo(() => sortContas(rows, sorting.sort), [rows, sorting.sort]);
  const pagination = usePagination({ total: sorted.length, resetKey: `${resetKey}|${sorting.sort.key}|${sorting.sort.dir}` });
  const pageRows = useMemo(() => paginate(sorted, pagination.page, pagination.pageSize), [sorted, pagination.page, pagination.pageSize]);
  return { ...sorting, sorted, rows: pageRows, pagination };
}
