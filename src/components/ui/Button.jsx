const variants = {
  primary:
    "bg-violet-600 hover:bg-violet-700 text-[var(--sidebar-text)] border-transparent shadow-sm shadow-violet-600/20",
  outline:
    "bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-[var(--sidebar-text)]/80 border-slate-200 dark:border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20",
  ghost:
    "bg-transparent hover:bg-slate-100 dark:hover:bg-white/8 text-slate-600 dark:text-slate-900 dark:text-slate-600 dark:text-white/70 border-transparent",
  danger:
    "bg-red-50 dark:bg-red-500/10 hover:bg-red-100 dark:hover:bg-red-500/20 text-red-600 dark:text-red-400 border-red-100 dark:border-red-500/20 hover:border-red-200",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs gap-1.5",
  md: "px-4 py-2 text-sm gap-2",
  lg: "px-5 py-2.5 text-sm gap-2",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  loading = false,
  ...props
}) {
  return (
    <button
      disabled={disabled || loading}
      className={`
        inline-flex items-center justify-center font-medium rounded-lg border
        transition-all duration-150 active:scale-[0.97]
        focus:outline-none focus:ring-2 focus:ring-violet-500/30
        disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          />
        </svg>
      ) : (
        children
      )}
    </button>
  );
}
