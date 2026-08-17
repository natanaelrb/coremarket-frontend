// Hook simples de notificações (toast) locais à feature Produtos.
// Pode ser substituído pelo sistema de toast compartilhado do projeto, se existir.
import { useState, useCallback, useRef } from 'react';

let idCounter = 0;

export function useToast() {
  const [toasts, setToasts] = useState([]);
  const timers = useRef({});

  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    clearTimeout(timers.current[id]);
    delete timers.current[id];
  }, []);

  const showToast = useCallback((message, type = 'success') => {
    const id = ++idCounter;
    setToasts((prev) => [...prev, { id, message, type }]);
    timers.current[id] = setTimeout(() => dismissToast(id), 3200);
  }, [dismissToast]);

  return { toasts, showToast, dismissToast };
}
