import { useEffect, useState } from "react";

/**
 * Retorna uma versão "atrasada" (debounced) do valor informado.
 * Útil para inputs de busca que disparam requisições/filtragem.
 * @template T
 * @param {T} value
 * @param {number} delayMs
 * @returns {T}
 */

export function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounced;
}
