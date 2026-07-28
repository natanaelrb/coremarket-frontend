export default function SecondaryButton({
  icon: Icon,
  children,
  onClick,
  active = false,
  tone = "default",
  className = "",
}) {
  const toneClasses =
    tone === "danger"
      ? `
        border-red-500/20
        text-red-400
        hover:bg-red-500/10
      `
      : active
        ? `
        bg-violet-500/10
        border-violet-500/40
        text-violet-400
      `
        : `
        bg-[#161B36]
        border-slate-200 dark:border-white/10
        text-slate-300
        hover:bg-[#1B2144]
        hover:border-violet-500/40
        hover:text-[var(--sidebar-text)]
      `;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        h-10
        px-4
        rounded-xl
        border
        text-sm
        font-medium
        transition-all
        duration-200
        hover:scale-[1.02]
        active:scale-[0.98]
        ${toneClasses}
        ${className}
      `}
    >
      {Icon && <Icon size={16} />}
      {children}
    </button>
  );
}
