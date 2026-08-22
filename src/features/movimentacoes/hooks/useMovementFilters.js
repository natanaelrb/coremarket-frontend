import { useMemo, useState } from 'react';
import { filterMovements } from '../utils/filterMovements';
import { useDebounce } from './useDebounce';

const INITIAL_FILTERS = {
  periodoInicio: '2026-08-01',
  periodoFim: '2026-08-09',
  tipo: 'TODAS',
  origem: 'TODAS',
  categoria: 'TODAS',
  usuario: 'TODOS',
  status: 'TODOS',
  produtoBusca: '',
};

// Dono de todo o estado de filtros do painel "Filtros".
// Os filtros só são de fato aplicados quando o usuário clica em "Aplicar filtros",
// exceto a busca por produto, que é aplicada com debounce em tempo real.
export function useMovementFilters(movements, quickFilterValue) {
  const [draftFilters, setDraftFilters] = useState(INITIAL_FILTERS);
  const [appliedFilters, setAppliedFilters] = useState(INITIAL_FILTERS);
  const debouncedBusca = useDebounce(draftFilters.produtoBusca, 300);

  function updateDraft(key, value) {
    setDraftFilters((prev) => ({ ...prev, [key]: value }));
  }

  function applyFilters() {
    setAppliedFilters({ ...draftFilters, produtoBusca: debouncedBusca });
  }

  function clearFilters() {
    setDraftFilters(INITIAL_FILTERS);
    setAppliedFilters(INITIAL_FILTERS);
  }

  const filteredMovements = useMemo(() => {
    return filterMovements(movements, {
      ...appliedFilters,
      produtoBusca: debouncedBusca,
      quickFilter: quickFilterValue,
    });
  }, [movements, appliedFilters, debouncedBusca, quickFilterValue]);

  const hasActiveFilters = useMemo(() => {
    return Object.keys(INITIAL_FILTERS).some(
      (key) => key !== 'periodoInicio' && key !== 'periodoFim' && appliedFilters[key] !== INITIAL_FILTERS[key]
    );
  }, [appliedFilters]);

  return {
    draftFilters,
    appliedFilters,
    updateDraft,
    applyFilters,
    clearFilters,
    filteredMovements,
    hasActiveFilters,
  };
}
