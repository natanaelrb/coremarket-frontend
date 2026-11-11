import { useCallback, useRef, useState } from 'react';

/** Envolve uma ação assíncrona com estado de loading (evita duplo clique). */
export function useAsyncSubmit(fn) {
  const [loading, setLoading] = useState(false);
  const busy = useRef(false);
  const submit = useCallback(async (...args) => {
    if (busy.current) return undefined;
    busy.current = true;
    setLoading(true);
    try { return await fn(...args); } finally { busy.current = false; setLoading(false); }
  }, [fn]);
  return { submit, loading };
}
