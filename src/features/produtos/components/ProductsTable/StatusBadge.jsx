
// Badge de status (bolinha + texto) reaproveitando STATUS_CONFIG.
import { STATUS_CONFIG } from "../../constants/statusConfig";

export function StatusBadge({ status }) {
  const config = STATUS_CONFIG[status];

  if (!config) return null;

  return (
    <span
      className={`
        inline-flex
        max-w-full
        items-center
        gap-1.5
        whitespace-nowrap
        rounded-full
        px-2.5
        py-1
        text-[11px]
        font-semibold
        leading-4
        ring-1
        ring-inset
        ring-black/[0.03]
        transition-colors
        duration-200
        dark:ring-white/[0.05]
        ${config.bgClass}
        ${config.textClass}
      `}
      title={`Status: ${config.label}`}
    >
      <span
        aria-hidden="true"
        className={`
          h-1.5
          w-1.5
          shrink-0
          rounded-full
          ${config.dotClass}
        `}
      />

      <span className="truncate">
        {config.label}
      </span>
    </span>
  );
}

