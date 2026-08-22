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
          ? 'border-violet-600 bg-violet-600'
          : 'border-gray-300 bg-white hover:border-violet-400 dark:border-gray-600 dark:bg-transparent',
      ].join(' ')}
    >
      {checked && !indeterminate && <Check size={11} strokeWidth={3} className="text-white" />}
      {indeterminate && <Minus size={11} strokeWidth={3} className="text-white" />}
    </button>
  );
}
