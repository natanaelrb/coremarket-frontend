import {
  ReceiptText,
  CheckCircle2,
  XCircle,
  Clock3,
  LoaderCircle,
} from 'lucide-react';
import { Badge } from '../../../../shared/components/ui/Badge.jsx';
import { STATUS_VENDA_CONFIG } from '../../constants/statusVenda.js';

const STATUS_TONE = {
  CONCLUIDA: 'green',
  CANCELADA: 'red',
  PENDENTE: 'amber',
  EM_ANDAMENTO: 'blue',
};

const STATUS_ICON = {
  CONCLUIDA: CheckCircle2,
  CANCELADA: XCircle,
  PENDENTE: Clock3,
  EM_ANDAMENTO: LoaderCircle,
};

export function VendaDetalheHeader({ numero, status }) {
  const config = STATUS_VENDA_CONFIG[status] ?? { label: status };
  const tone = STATUS_TONE[status] ?? 'neutral';
  const StatusIcon = STATUS_ICON[status] ?? Clock3;

  const badgeClasses = {
    green: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    red: 'bg-rose-50 text-rose-700 border-rose-200',
    amber: 'bg-amber-50 text-amber-700 border-amber-200',
    blue: 'bg-sky-50 text-sky-700 border-sky-200',
    neutral: 'bg-slate-100 text-slate-600 border-slate-200',
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-green-200 bg-green-50 text-green-700">
          <ReceiptText className="h-5 w-5" />
        </div>

        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-green-700">
            Comprovante de venda
          </p>

          <h2 className="mt-1 truncate text-lg font-extrabold tracking-tight text-slate-800">
            Venda #{String(numero).replace(/^#/, '')}
          </h2>
        </div>
      </div>

      <Badge
        tone={tone}
        bgClass={badgeClasses[tone].split(' ')[0]}
        textClass={badgeClasses[tone].split(' ')[1]}
        borderClass={badgeClasses[tone].split(' ')[2]}
      >
        <StatusIcon className="h-3.5 w-3.5" />
        {config.label}
      </Badge>
    </div>
  );
}
