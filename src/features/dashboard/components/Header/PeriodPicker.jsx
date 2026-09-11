import { useEffect, useRef } from 'react';
import { Calendar, ChevronDown } from 'lucide-react';
import { PERIOD_OPTIONS } from '../../constants/dashboardTabs';

/** Dropdown de seleção de período, usado no cabeçalho do Dashboard. */
export default function PeriodPicker({ periodId, label, isOpen, onToggle, onSelect }) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) onToggle(false);
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onToggle]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => onToggle(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        className="flex items-center gap-2 rounded-xl border border-[var(--border-subtle)]
          bg-[var(--bg-surface)] px-3.5 py-2 text-sm text-[var(--text-primary)]
          hover:bg-[var(--bg-hover)] transition-colors"
      >
        <Calendar className="h-4 w-4 text-[var(--text-secondary)]" aria-hidden="true" />
        {label}
        <ChevronDown className="h-3.5 w-3.5 text-[var(--text-secondary)]" aria-hidden="true" />
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute right-0 z-20 mt-2 w-52 overflow-hidden rounded-xl border
            border-[var(--border-subtle)] bg-[var(--bg-surface)] py-1.5 shadow-lg animate-card-in"
        >
          {PERIOD_OPTIONS.map((option) => (
            <li key={option.id}>
              <button
                type="button"
                role="option"
                aria-selected={option.id === periodId}
                onClick={() => onSelect(option.id)}
                className={`w-full px-3.5 py-2 text-left text-sm transition-colors hover:bg-[var(--bg-hover)]
                  ${option.id === periodId ? 'text-[var(--color-brand-600,#7c3aed)] font-medium' : 'text-[var(--text-primary)]'}`}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
