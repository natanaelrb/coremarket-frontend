import { getMovementTypeConfig } from "../utils/movementTypeConfig";

export default function TypeBadge({ tipo }) {
  const config = getMovementTypeConfig(tipo);
  if (!config) return null;
  const { IconComponent, label, text, bg } = config;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium ${text}`}
      style={{ backgroundColor: bg }}
    >
      <IconComponent className="h-3.5 w-3.5" />
      {label}
    </span>
  );
}
