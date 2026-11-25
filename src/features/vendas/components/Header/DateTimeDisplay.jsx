import { useEffect, useState } from "react";
import {
  CalendarDays,
  Clock3,
  Clock,
} from "lucide-react";

import {
  formatDate,
  formatTime,
} from "../../../../shared/utils/formatters.js";

export function DateTimeDisplay() {
  const [agora, setAgora] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setAgora(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex h-full min-h-[150px] min-w-0 flex-1 items-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md dark:border-white/10 dark:bg-[#15182D]">

      {/* Detalhe lateral */}
      <div className="absolute inset-y-0 left-0 z-10 w-1 bg-violet-600" />

      <div className="relative z-10 flex w-full min-w-0 items-center gap-3 p-3 pl-5">

        {/* Ícone calendário */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-violet-100 bg-violet-50 text-violet-700 dark:border-violet-500/20 dark:bg-violet-500/10 dark:text-violet-400">
          <CalendarDays size={27} strokeWidth={1.8} />
        </div>

        {/* Data e horário */}
        <div className="min-w-0">
          <span className="block text-sm font-semibold text-cm-text-muted">
            Data e horário
          </span>

          <span className="mt-1.5 block whitespace-nowrap text-2xl font-bold tracking-tight text-cm-text">
            {formatDate(agora)}
          </span>

          <span className="mt-2 flex items-center gap-2 text-sm font-semibold tabular-nums text-cm-text">
            <Clock3
              size={18}
              className="shrink-0 text-violet-600 dark:text-violet-400"
            />
            {formatTime(agora)}
          </span>
        </div>
      </div>

      {/* Relógio decorativo */}
      <div className="pointer-events-none absolute -bottom-10 -right-10 flex h-40 w-40 items-center justify-center rounded-full bg-violet-50/70 dark:bg-violet-500/5">
        <Clock
          size={115}
          strokeWidth={1}
          className="text-violet-200/70 dark:text-violet-400/10"
        />
      </div>
    </div>
  );
}
