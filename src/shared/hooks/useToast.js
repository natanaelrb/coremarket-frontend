import { useState, useEffect, useCallback } from "react";

/**
 * Gerencia uma notificação toast simples (mensagem + tipo), com auto-dismiss.
 */
export default function useToast(duration = 3000) {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = "success") => {
    setToast({ message, type, key: Date.now() });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), duration);
    return () => clearTimeout(timer);
  }, [toast, duration]);

  return { toast, showToast };
}
