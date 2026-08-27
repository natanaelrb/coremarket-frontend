const VARIANTS = {
  primary:
    'bg-violet-600 text-white hover:bg-violet-700 shadow-sm shadow-violet-600/20',

  secondary:
    'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 dark:bg-[#151936] dark:text-gray-200 dark:border-gray-700 dark:hover:bg-white/5',

  ghost:
    'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5',

  danger:
    'bg-red-600 text-white hover:bg-red-700 shadow-sm shadow-red-600/20',

  success:
    'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm shadow-emerald-600/20',
};

const SIZES = {
  sm: 'px-2.5 py-1.5 text-xs',
  md: 'px-3.5 py-2 text-sm',
  lg: 'px-5 py-3 text-base',
};

export function Button({
  children,
  icon: Icon,
  variant = 'secondary',
  size = 'md',
  fullWidth = false,
  loading = false,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={[
        'inline-flex items-center justify-center gap-1.5 rounded-lg font-medium transition-all duration-150',
        'active:scale-[0.97]',
        'disabled:cursor-not-allowed disabled:opacity-50',
        SIZES[size] ?? SIZES.md,
        VARIANTS[variant] ?? VARIANTS.secondary,
        fullWidth ? 'w-full' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {loading ? (
        <span
          className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"
          aria-hidden="true"
        />
      ) : (
        Icon && <Icon size={15} />
      )}

      {children}
    </button>
  );
}