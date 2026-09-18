import {
  ShoppingBag,
  AlertTriangle,
  UserPlus,
  Info,
} from "lucide-react";

import { formatDateTime } from "../../../../../shared/utils/formatDate.js";
import { cn } from "../../../../../shared/utils/classNames.js";

const ICONS = {
  venda: ShoppingBag,
  alerta: AlertTriangle,
  cadastro: UserPlus,
};

const TONES = {
  venda: "bg-[#dcfce7] text-[#16a34a]",
  alerta: "bg-[#fef3c7] text-[#d97706]",
  cadastro: "bg-[#ede9fe] text-[#7c3aed]",
};

export function TimelineItem({ evento, isLast }) {
  const Icon = ICONS[evento.tipo] ?? Info;

  const iconTone =
    TONES[evento.tipo] ?? "bg-slate-100 text-slate-500";

  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
            iconTone
          )}
        >
          <Icon size={14} />
        </div>

        {!isLast && (
          <div className="my-1 w-px flex-1 bg-slate-200 dark:bg-white/10" />
        )}
      </div>

      <div className="pb-5">
        <p className="text-xs text-[#64748b] dark:text-slate-400">
          {formatDateTime(evento.dataHora)}
        </p>

        <p className="mt-0.5 text-sm text-[#334155] dark:text-slate-200">
          {evento.texto}
        </p>
      </div>
    </div>
  );
}