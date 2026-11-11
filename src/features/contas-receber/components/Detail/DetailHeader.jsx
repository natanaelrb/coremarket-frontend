import { X } from 'lucide-react';

export function DetailHeader({ onClose }) {
  return (
    <div className="flex items-center justify-between px-4 pb-2 pt-3.5">
      <h2 className="text-[13px] font-bold text-ink">Detalhes da conta</h2>
      <button type="button" onClick={onClose} aria-label="Fechar detalhes" className="grid size-6 place-items-center rounded-md text-ink-3 transition hover:bg-surface-2 hover:text-ink">
        <X className="size-4" />
      </button>
    </div>
  );
}
