const VARIANTS = {
  primary:
    "bg-[#22c55e] text-white shadow-sm shadow-[#22c55e]/20 hover:bg-[#16a34a]",

  secondary:
    "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:bg-[#151936] dark:text-slate-200 dark:hover:bg-white/5",

  ghost:
    "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5",

  danger:
    "bg-[#ef4444] text-white shadow-sm shadow-[#ef4444]/20 hover:bg-[#dc2626]",

  success:
    "bg-[#22c55e] text-white shadow-sm shadow-[#22c55e]/20 hover:bg-[#16a34a]",
};

const SIZES = {
  sm: "px-2.5 py-1.5 text-xs",
  md: "px-3.5 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

export function Button({
  children,
  icon: Icon,
  variant = "secondary",
  size = "md",
  fullWidth = false,
  loading = false,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={[
        "inline-flex items-center justify-center gap-1.5 rounded-lg font-medium transition-all duration-150",
        "active:scale-[0.97]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        SIZES[size] ?? SIZES.md,
        VARIANTS[variant] ?? VARIANTS.secondary,
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {loading ? (
        <span
          className="
            h-4 w-4
            animate-spin
            rounded-full
            border-2
            border-white/30
            border-t-white
          "
          aria-hidden="true"
        />
      ) : (
        Icon && <Icon size={15} />
      )}

      {children}
    </button>
  );
}