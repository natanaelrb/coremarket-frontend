import { useCallback, useMemo, useState } from 'react';
import { DEFAULT_FILTERS } from '../constants';
import { countActiveFilters, countAdvancedFilters } from '../utils';

/**
 * Filtros em dois níveis:
 *  - `draft`: o que o usuário edita nos selects (só vale ao clicar em "Aplicar filtros");
 *  - `applied`: o que realmente filtra a tabela.
 * Busca, cartões de status e cliques nas tabelas aplicam na hora (`patch`).
 */
export function useContasFilters() {
  const [draft, setDraft] = useState(DEFAULT_FILTERS);
  const [applied, setApplied] = useState(DEFAULT_FILTERS);

  const setDraftField = useCallback((key, value) => setDraft((d) => ({ ...d, [key]: value })), []);
  const apply = useCallback(() => setApplied(draft), [draft]);
  const clear = useCallback(() => { setDraft(DEFAULT_FILTERS); setApplied(DEFAULT_FILTERS); }, []);
  const patch = useCallback((partial) => {
    setDraft((d) => ({ ...d, ...partial }));
    setApplied((a) => ({ ...a, ...partial }));
  }, []);

  const activeCount = useMemo(() => countActiveFilters(applied), [applied]);
  const advancedCount = useMemo(() => countAdvancedFilters(applied.advanced), [applied.advanced]);
  const hasPendingChanges = useMemo(() => JSON.stringify(draft) !== JSON.stringify(applied), [draft, applied]);

  return {
    draft, applied, setDraftField, apply, clear, patch,
    activeCount, advancedCount, hasActive: activeCount + advancedCount > 0, hasPendingChanges,
  };
}
