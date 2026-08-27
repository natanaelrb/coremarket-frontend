/**
 * Botão quadrado apenas com ícone.
 *
 * variant:
 * - outline: usado no header
 * - ghost: usado nas ações de linha
 */
export default function IconButton({
  icon: Icon,
  children,
  onClick,
  title,
  variant = 'outline',
  tone = 'default',
  size = 16,
  className = '',
  disabled = false,
}) {
  const base = `
    inline-flex
    items-center
    justify-center
    cursor-pointer
    transition-all
    duration-200
    hover:scale-110
    active:scale-95
    focus:outline-none
    focus:ring-2
    focus:ring-violet-500/40
    disabled:cursor-not-allowed
    disabled:opacity-50
    disabled:hover:scale-100
  `;

  const variants = {
    outline:
      'w-10 h-10 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#12162C] text-slate-500 dark:text-slate-300 shadow-sm hover:shadow-md hover:border-violet-300 dark:hover:border-violet-500/50',

    ghost:
      'w-8 h-8 rounded-md text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5',
  };

  const tones = {
    default: 'hover:text-violet-600',
    danger: 'hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10',
  };

  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${tones[tone]} ${className}`}
    >
      {Icon ? <Icon size={size} /> : children}
    </button>
  );
}