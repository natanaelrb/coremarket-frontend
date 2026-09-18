import { Badge } from "../../../../../shared/components/ui/Badge.jsx";
import { STATUS_CONTA_RECEBER } from "../../../../../shared/constants/enums.js";

const CONFIG = {
  [STATUS_CONTA_RECEBER.PAGO]: {
    label: "Pago",
    tone: "green",
  },

  [STATUS_CONTA_RECEBER.PARCIAL]: {
    label: "Parcial",
    tone: "amber",
  },

  [STATUS_CONTA_RECEBER.EM_ABERTO]: {
    label: "Em aberto",
    tone: "blue",
  },

  [STATUS_CONTA_RECEBER.EM_ATRASO]: {
    label: "Em atraso",
    tone: "red",
  },
};

/** Status pill for a receivable account row. */
export function StatusContaBadge({ status }) {
  const cfg = CONFIG[status] ?? {
    label: status,
    tone: "neutral",
  };

  return <Badge tone={cfg.tone}>{cfg.label}</Badge>;
}