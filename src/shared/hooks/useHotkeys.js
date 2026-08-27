import { useEffect } from 'react';

/**
 * Registra atalhos de teclado globais.
 * @param {Record<string, (event: KeyboardEvent) => void>} bindings
 *   Mapa de "tecla" (ex: "F2", "F8", "Escape", "Delete") para handler.
 * @param {boolean} [enabled=true]
 */
export function useHotkeys(bindings, enabled = true) {
  useEffect(() => {
    if (!enabled) return undefined;

    function handleKeyDown(event) {
      const key = event.key;
      const handler = bindings[key];
      if (!handler) return;

      // Evita conflitos com digitação normal em inputs, exceto teclas de função e Escape.
      const isFunctionKey = /^F\d{1,2}$/.test(key) || key === 'Escape' || key === 'Delete';
      const isTypingTarget = ['INPUT', 'TEXTAREA', 'SELECT'].includes(
        document.activeElement?.tagName ?? '',
      );
      if (isTypingTarget && !isFunctionKey) return;

      event.preventDefault();
      handler(event);
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [bindings, enabled]);
}
