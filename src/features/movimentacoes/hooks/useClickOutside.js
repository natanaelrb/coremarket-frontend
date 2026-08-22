import { useEffect } from 'react';

// Fecha dropdowns/menus/modais ao clicar fora do elemento referenciado.
export function useClickOutside(ref, onOutsideClick, active = true) {
  useEffect(() => {
    if (!active) return;
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [ref, onOutsideClick, active]);
}
