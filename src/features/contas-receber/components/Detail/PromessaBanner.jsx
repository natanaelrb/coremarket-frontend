import { CalendarCheck } from 'lucide-react';
import { formatDateBR } from "../../../../shared/utils/formatDate";

export function PromessaBanner({ promessa }) {
  if (!promessa) return null;
  return (
    <div className="flex items-start gap-2 rounded-lg border border-orange-500/30 bg-orange-500/10 p-2.5 text-[11px] text-orange-700 animate-pop dark:text-orange-300">
      <CalendarCheck className="mt-0.5 size-3.5 shrink-0" />
      <p><b>Promessa de pagamento</b> para {formatDateBR(promessa.data)}{promessa.observacao ? ` — ${promessa.observacao}` : ''}</p>
    </div>
  );
}
