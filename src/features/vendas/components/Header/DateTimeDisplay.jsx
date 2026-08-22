import { useEffect, useState } from 'react';
import { formatDate, formatTime } from '../../../../shared/utils/formatters.js';

/**
 * Exibe data e hora atuais, atualizando a cada segundo.
 */
export function DateTimeDisplay() {
  const [agora, setAgora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setAgora(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-end rounded-lg border border-cm-border bg-cm-surface px-4 py-2">
      <span className="text-xs font-medium text-cm-text">{formatDate(agora)}</span>
      <span className="text-[11px] tabular-nums text-cm-text-faint">{formatTime(agora)}</span>
    </div>
  );
}

