
// Miniatura do produto: emoji + cor de fundo do mock como placeholder visual leve.
export function ProductImage({ emoji, color, size = 36 }) {
  const safeSize = Math.max(28, Number(size) || 36);
  const backgroundColor = color || "#64748b";

  return (
    <div
      className="
        relative
        flex shrink-0
        items-center justify-center
        overflow-hidden
        rounded-xl
        border border-black/[0.04]
        bg-slate-50
        shadow-[0_1px_3px_rgba(15,23,42,0.04)]
        transition-all duration-200
        group-hover:border-slate-200
        group-hover:shadow-[0_3px_8px_rgba(15,23,42,0.06)]
        dark:border-white/[0.06]
        dark:bg-white/[0.04]
        dark:group-hover:border-white/[0.12]
      "
      style={{
        width: safeSize,
        height: safeSize,
        backgroundColor: `${backgroundColor}1A`,
      }}
      aria-hidden="true"
    >
      <span
        className="select-none leading-none"
        style={{
          fontSize: safeSize * 0.5,
        }}
      >
        {emoji || "📦"}
      </span>
    </div>
  );
}

