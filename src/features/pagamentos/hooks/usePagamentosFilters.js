import { useCallback, useMemo, useState } from 'react';

/** Initial shape of the filters-bar state. */
const INITIAL_FILTERS = {
  busca: '',
  tipo: 'TODOS',
  status: 'TODOS',
  forma: 'TODOS',
  origem: 'TODOS',
  campoData: 'vencimento',
  dataInicio: '',
  dataFim: '',
  valorMinimo: 0,
  valorMaximo: 0,
};

/**
 * Owns the filters-bar draft/applied state. Filters are only applied to
 * the table when the user clicks "Aplicar filtros", matching the
 * reference UI; "Limpar filtros" resets both draft and applied state.
 */
export function usePagamentosFilters() {
  const [draft, setDraft] = useState(INITIAL_FILTERS);
  const [applied, setApplied] = useState(INITIAL_FILTERS);

  const updateField = useCallback((field, value) => {
    setDraft((prev) => ({ ...prev, [field]: value }));
  }, []);

  const applyFilters = useCallback(() => {
    setApplied(draft);
  }, [draft]);

  const clearFilters = useCallback(() => {
    setDraft(INITIAL_FILTERS);
    setApplied(INITIAL_FILTERS);
  }, []);

  const hasActiveFilters = useMemo(() => {
    return Object.entries(applied).some(([key, value]) => value !== INITIAL_FILTERS[key]);
  }, [applied]);

  return { draft, applied, updateField, applyFilters, clearFilters, hasActiveFilters };
}
