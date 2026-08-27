import { X } from 'lucide-react';
import StatusBadge from '../MovementsTable/StatusBadge';
import { formatFullDateTime } from "../utils/formatDate";

export default function DetailPanelHeader({ movement, onClose }) {
  return (
    <div className="border-b border-white/5 px-5 py-4">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">Detalhes da Movimentação</h3>
        <button
          type="button"
          onClick={onClose}
          className="rounded-lg p-1 text-slate-500 transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-sm font-semibold text-violet-400">{movement.id}</span>
        <StatusBadge status={movement.status} />
      </div>
      <p className="mt-1 text-xs text-slate-500">{formatFullDateTime(movement.dataHora)}</p>
      <p className="mt-1 text-xs text-slate-500">Tipo: <span className="text-slate-300">{movement.tipo === 'ENTRADA' ? 'Entrada' : movement.tipo}</span></p>
    </div>
  );
}
