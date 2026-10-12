
import { memo } from 'react';

/**
 * @typedef {Object} QuickFilterTabProps
 * @property {string} label - Texto do filtro.
 * @property {number} count - Quantidade de itens do filtro.
 * @property {string} [sign] - Prefixo opcional (ex.: "+" entrada, "−" saída).
 * @property {boolean} isActive - Filtro selecionado.
 * @property {() => void} onClick - Callback ao selecionar.
 * @property {boolean} [disabled] - Desabilita o filtro.
 */

const MAX_COUNT = 999;

/**
 * Formata a quantidade no padrão pt-BR.
 * Acima de 999, exibe "999+" para preservar o layout.
 */
const formatCount = (value) => {
  const count = Number(value) || 0;

  return count > MAX_COUNT
    ? `${MAX_COUNT}+`
    : count.toLocaleString('pt-BR');
};

/** @param {QuickFilterTabProps} props */
function QuickFilterTab({
  label,
  count,
  sign,
  isActive,
  onClick,
  disabled = false,
}) {
  const buttonClasses = [
    'group relative inline-flex shrink-0 items-center',
    'gap-2 whitespace-nowrap rounded-lg',
    'border px-3.5 py-2',
    'text-sm font-medium',
    'outline-none',
    'transition-[background-color,border-color,color,box-shadow,transform]',
    'duration-150 ease-out',
    'select-none',
    
    // Estado ativo
    isActive
      ? [
          'border-emerald-500',
          'bg-emerald-600',
          'text-white',
          'shadow-sm shadow-emerald-600/15',
        ].join(' ')
      : [
          'border-slate-200',
          'bg-white',
          'text-slate-600',
          'hover:border-emerald-200',
          'hover:bg-emerald-50/60',
          'hover:text-slate-800',
          'dark:border-white/10',
          'dark:bg-white/[0.035]',
          'dark:text-slate-300',
          'dark:hover:border-emerald-500/25',
          'dark:hover:bg-emerald-500/[0.06]',
          'dark:hover:text-white',
        ].join(' '),

    // Foco acessível
    'focus-visible:ring-2',
    'focus-visible:ring-emerald-500/40',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-offset-white',
    'dark:focus-visible:ring-offset-[#0D1029]',

    // Feedback de clique extremamente leve
    !disabled && 'active:scale-[0.985]',

    // Disabled
    'disabled:pointer-events-none',
    'disabled:cursor-not-allowed',
    'disabled:opacity-45',
  ]
    .filter(Boolean)
    .join(' ');

  const signClasses = isActive
    ? 'text-white/75'
    : 'text-slate-400 dark:text-slate-500';

  const countClasses = [
    'min-w-6 rounded-md px-1.5 py-0.5',
    'text-center text-xs font-semibold',
    'tabular-nums leading-none',
    'transition-colors duration-150',
    isActive
      ? 'bg-white/15 text-white'
      : [
          'bg-slate-100',
          'text-slate-500',
          'group-hover:bg-emerald-100/70',
          'group-hover:text-emerald-700',
          'dark:bg-white/[0.08]',
          'dark:text-slate-400',
          'dark:group-hover:bg-emerald-500/10',
          'dark:group-hover:text-emerald-300',
        ].join(' '),
  ].join(' ');

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={isActive}
      className={buttonClasses}
    >
      <span className="truncate">{label}</span>

      {sign && (
        <span
          aria-hidden="true"
          className={signClasses}
        >
          {sign}
        </span>
      )}

      <span className={countClasses}>
        {formatCount(count)}
      </span>
    </button>
  );
}

export default memo(QuickFilterTab);
