import { getStatusConfig } from "../../utils/statusConfig";

export default function StatusBadge({ status }) {
  const config = getStatusConfig(status);

  return (
    <span
      title={config.label}
      className={`
        inline-flex items-center gap-1.5
        whitespace-nowrap
        rounded-full
        border
        px-2.5 py-1.5
        text-xs font-semibold leading-none
        ${config.bg}
        ${config.text}
        ${config.border}
      `}
    >
      <span
        className={`
          h-1.5 w-1.5
          shrink-0
          rounded-full
          ${config.dot}
        `}
      />

      <span>{config.label}</span>
    </span>
  );
}
