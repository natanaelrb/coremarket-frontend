import { getMovementTypeConfig } from "../../utils/movementTypeConfig";

export default function TypeBadge({ tipo }) {
  const config = getMovementTypeConfig(tipo);

  if (!config) return null;

  const { IconComponent, label, text, bg } = config;

  return (
    <span
      title={label}
      className={`
        inline-flex
        items-center
        gap-1.5
        whitespace-nowrap
        rounded-lg
        px-2.5
        py-1.5
        text-xs
        font-semibold
        leading-none
        ${text}
      `}
      style={{
        backgroundColor: bg,
      }}
    >
      <IconComponent className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />

      <span>{label}</span>
    </span>
  );
}
