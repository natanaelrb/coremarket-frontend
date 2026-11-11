import { useCallback, useMemo, useState } from 'react';

/** Seleção por checkbox (independente do painel de detalhes). */
export function useContaSelection(contas) {
  const [ids, setIds] = useState(() => new Set());
  const selectedContas = useMemo(() => contas.filter((c) => ids.has(c.id)), [contas, ids]);

  const toggle = useCallback((id) => setIds((p) => { const n = new Set(p); n.has(id) ? n.delete(id) : n.add(id); return n; }), []);
  const setMany = useCallback((list, on) => setIds((p) => { const n = new Set(p); list.forEach((id) => (on ? n.add(id) : n.delete(id))); return n; }), []);
  const clear = useCallback(() => setIds(new Set()), []);

  return { ids, count: selectedContas.length, selectedContas, toggle, setMany, clear, isSelected: (id) => ids.has(id) };
}
