import { useEffect, useState } from "react";
import { CalendarDays, Clock3 } from "lucide-react";
import {
  formatDate,
  formatTime,
} from "../../../../shared/utils/formatters.js";

export function DateTimeDisplay() {
  const [agora, setAgora] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setAgora(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-[56px] min-w-0 flex-1 items-center gap-3 rounded-lg px-2 py-2 transition-colors duration-200 hover:bg-sky-50/50 dark:hover:bg-sky-950/20">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400">
        <CalendarDays size={19} strokeWidth={1.8} />
      </div>

      <div className="min-w-0">
        <span className="block text-xs font-medium text-cm-text-muted">
          Data e horário
        </span>

        <span className="mt-1 block whitespace-nowrap text-sm font-semibold leading-tight text-cm-text">
          {formatDate(agora)}
        </span>

        <span className="mt-1 flex items-center gap-1 text-xs tabular-nums text-cm-text-muted">
          <Clock3 size={12} />
          {formatTime(agora)}
        </span>
      </div>
    </div>
  );
}
