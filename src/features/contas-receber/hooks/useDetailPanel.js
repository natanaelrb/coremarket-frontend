import { useCallback, useMemo, useState } from 'react';

const DEFAULT_SELECTED = 'CR-00152';

/** Conta exibida no painel lateral de detalhes. */
export function useDetailPanel(contas) {
  const [selectedId, setSelectedId] = useState(DEFAULT_SELECTED);
  const [isOpen, setIsOpen] = useState(true);
  const conta = useMemo(() => contas.find((c) => c.id === selectedId) ?? null, [contas, selectedId]);
  const select = useCallback((id) => { setSelectedId(id); setIsOpen(true); }, []);
  const close = useCallback(() => setIsOpen(false), []);
  return { conta, selectedId, isOpen, select, close };
}
