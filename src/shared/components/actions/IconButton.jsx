export default function IconButton({
  icon: Icon,
  onClick,
  badge,
  className = "",
  title,
}) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={`
        relative
        flex h-8 w-8
        items-center justify-center
        rounded-md
        text-slate-500
        transition-all duration-150
        hover:bg-slate-100
        hover:text-slate-700
        dark:text-slate-400
        dark:hover:bg-white/[0.06]
        dark:hover:text-white
        ${className}
      `}
    >
      <Icon size={16} strokeWidth={1.8} />

      {badge && (
        <span
          className="
            absolute -right-0.5 -top-0.5
            flex h-3.5 min-w-3.5
            items-center justify-center
            rounded-full
            bg-red-500
            px-1
            text-[8px]
            font-bold
            text-white
          "
        >
          {badge}
        </span>
      )}
    </button>
  );
}