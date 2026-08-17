// Botão base com variantes (primary, secondary, ghost, danger).
const VARIANTS = {
  primary:
    'bg-violet-600 text-white hover:bg-violet-700 shadow-sm shadow-violet-600/20',
  secondary:
    'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 dark:bg-[#151936] dark:text-gray-200 dark:border-gray-700 dark:hover:bg-white/5',
  ghost:
    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5',
  danger:
    'bg-red-600 text-white hover:bg-red-700 shadow-sm shadow-red-600/20',
};

export function Button({
  children,
  icon: Icon,
  variant = 'secondary',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        'inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-150 active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-50',
        VARIANTS[variant],
        className,
      ].join(' ')}
    >
      {Icon && <Icon size={15} />}
      {children}
    </button>
  );
}
