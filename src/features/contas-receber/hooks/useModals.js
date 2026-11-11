import { useCallback, useState } from 'react';

/** Um modal por vez: { type, payload }. */
export function useModals() {
  const [modal, setModal] = useState({ type: null, payload: null });
  const open = useCallback((type, payload = null) => setModal({ type, payload }), []);
  const close = useCallback(() => setModal({ type: null, payload: null }), []);
  return { modal, open, close };
}
