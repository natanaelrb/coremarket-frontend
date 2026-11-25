export default function IconButton({
  icon: Icon,
  children,
  onClick,
  badge,
  className = "",
  title,
  label,
  size = "md",
  variant = "ghost",
  type = "button",
  disabled = false,
}) {
  const sizes = {
    sm: "h-8 w-8",
    md: "h-9 w-9",
    lg: "h-10 w-10",
  };

  const variants = {
    ghost:
      "text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-white/[0.06] dark:hover:text-white",
    danger:
      "text-red-500 hover:bg-red-50 hover:text-red-700 dark:hover:bg-red-500/10",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      title={title || label}
      aria-label={label || title}
      disabled={disabled}
      className={`
        relative inline-flex shrink-0
        items-center justify-center rounded-md
        transition-all duration-150
        disabled:cursor-not-allowed disabled:opacity-50
        ${sizes[size] || sizes.md}
        ${variants[variant] || variants.ghost}
        ${className}
      `}
    >
      {Icon ? <Icon size={16} strokeWidth={1.8} /> : children}

      {badge && (
        <span
          className="
            absolute -right-0.5 -top-0.5
            flex h-3.5 min-w-3.5
            items-center justify-center
            rounded-full text-[8px]
            font-bold text-white
          "
        >
          {badge}
        </span>
      )}
    </button>
  );
}
