export default function Input({
  label,
  error,
  hint,
  leftIcon,
  rightIcon,
  className = "",
  ...props
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-xs font-medium text-slate-600 dark:text-[var(--sidebar-text)]/60">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[var(--sidebar-text)]/30 pointer-events-none">
            {leftIcon}
          </div>
        )}
        <input
          className={`
            w-full rounded-lg border bg-white dark:bg-white/5 text-sm text-slate-800 dark:text-[var(--sidebar-text)]/90
            placeholder:text-slate-400 dark:placeholder:text-[var(--sidebar-text)]/30
            focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400
            disabled:opacity-50 disabled:cursor-not-allowed
            transition duration-150
            ${
              error
                ? "border-red-300 dark:border-red-500/40 focus:ring-red-500/20 focus:border-red-400"
                : "border-slate-200 dark:border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
            }
            ${leftIcon ? "pl-9" : "pl-3"}
            ${rightIcon ? "pr-9" : "pr-3"}
            py-2
            ${className}
          `}
          {...props}
        />
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-[var(--sidebar-text)]/30 pointer-events-none">
            {rightIcon}
          </div>
        )}
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
      {hint && !error && (
        <p className="text-xs text-slate-400 dark:text-[var(--sidebar-text)]/30">
          {hint}
        </p>
      )}
    </div>
  );
}
