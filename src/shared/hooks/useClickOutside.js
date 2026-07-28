import { useEffect } from "react";

/**
 * Chama `handler` quando o usuário clica fora do elemento referenciado por `ref`.
 * Usado por todos os menus/dropdowns da aplicação (Colunas, Ordenar por, Filtros...).
 */
export default function useClickOutside(ref, handler) {
  useEffect(() => {
    function onMouseDown(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [ref, handler]);
}
