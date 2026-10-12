// Mini gráfico de barras em SVG puro — substitui o uso de "recharts" no card de Saldo.
export default function MiniBarChart({ data, positiveColor = '#22C55E', negativeColor = '#EF4444', width = 48, height = 36 }) {
  const max = Math.max(...data.map((v) => Math.abs(v)), 1);
  const barWidth = width / data.length;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} style={{ width, height }} className="shrink-0">
      {data.map((v, i) => {
        const barHeight = (Math.abs(v) / max) * height;
        const x = i * barWidth + 1;
        const y = height - barHeight;
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={Math.max(barWidth - 2, 1)}
            height={Math.max(barHeight, 1)}
            rx="1"
            fill={v >= 0 ? positiveColor : negativeColor}
          />
        );
      })}
    </svg>
  );
}
