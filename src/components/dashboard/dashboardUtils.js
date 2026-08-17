export function fmt(v) {
  return Number(v).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function fmtK(v) {
  return v >= 1000 ? `R$${(v / 1000).toFixed(0)}k` : `R$${v}`;
}

export function heatColor(val, max, dark) {
  const pct = val / max;
  if (dark) {
    if (pct < 0.2) return "#23254A";
    if (pct < 0.4) return "#3B3D7A";
    if (pct < 0.6) return "#5B5FA8";
    if (pct < 0.8) return "#7C7FD4";
    return "#A5A8F0";
  }
  if (pct < 0.2) return "#EDE9FE";
  if (pct < 0.4) return "#C4B5FD";
  if (pct < 0.6) return "#A78BFA";
  if (pct < 0.8) return "#7C3AED";
  return "#5B21B6";
}
