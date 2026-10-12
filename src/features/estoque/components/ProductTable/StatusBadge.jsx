import { Badge } from "../../../../shared/components/ui/Badge.jsx";
import { getStatusConfig } from "../../constants/statusConfig.js";

const TONE_MAP = {
  success: "green",
  danger: "red",
  warning: "amber",
  info: "blue",
  accent: "violet",
  neutral: "neutral",
};

export default function StatusBadge({ status }) {
  const { label, tone } = getStatusConfig(status);

  return (
    <Badge tone={TONE_MAP[tone] ?? "neutral"}>
      {label}
    </Badge>
  );
}