// Miniatura do produto: usa emoji + cor de fundo do mock como placeholder visual leve.
export function ProductImage({ emoji, color, size = 36 }) {
  return (
    <div
      className="flex shrink-0 items-center justify-center rounded-lg text-base transition-transform duration-150 group-hover:scale-105"
      style={{ width: size, height: size, backgroundColor: `${color}1A` }}
    >
      <span style={{ fontSize: size * 0.5 }}>{emoji}</span>
    </div>
  );
}
