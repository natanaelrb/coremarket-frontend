// Checkbox estilizado com suporte a estado "indeterminado" (usado no header da tabela).
import { useEffect, useRef } from 'react';
import { Check, Minus } from 'lucide-react';

export function Checkbox({ checked, indeterminate = false, onChange, ariaLabel }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={indeterminate ? 'mixed' : checked}
      aria-label={ariaLabel}
      onClick={onChange}
      className={[
        'flex h-4 w-4 items-center justify-center rounded border transition-colors duration-150',
        checked || indeterminate
          ? 'border-[#22c55e] bg-[#22c55e]'
          : 'border-gray-300 bg-white hover:border-[#22c55e] dark:border-gray-600 dark:bg-transparent',
      ].join(' ')}
    >
      {checked && !indeterminate && (
        <Check size={11} strokeWidth={3} className="text-white" />
      )}

      {indeterminate && (
        <Minus size={11} strokeWidth={3} className="text-white" />
      )}
    </button>
  );
}