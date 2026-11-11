import { useCallback, useState } from 'react';
import { DEFAULT_SORT } from '../constants';

export function useContasSort() {
  const [sort, setSort] = useState(DEFAULT_SORT);
  const toggleSort = useCallback((key) => setSort((s) => (s.key === key ? { key, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'asc' })), []);
  const sortBy = useCallback((key, dir = 'asc') => setSort({ key, dir }), []);
  return { sort, toggleSort, sortBy };
}
