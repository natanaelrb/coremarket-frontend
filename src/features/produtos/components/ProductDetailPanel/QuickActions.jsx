// Grade de ações rápidas do produto (Editar, Duplicar, Código de barras, Etiqueta, Histórico).
import { Pencil, Copy, Barcode, Tag, History } from 'lucide-react';

const ACTIONS = [
  { key: 'editar', label: 'Editar', icon: Pencil },
  { key: 'duplicar', label: 'Duplicar', icon: Copy },
  { key: 'barcode', label: 'Código de barras', icon: Barcode },
  { key: 'etiqueta', label: 'Etiqueta', icon: Tag },
  { key: 'historico', label: 'Histórico', icon: History },
];

export function QuickActions({ onAction }) {
  return (
    <div className="border-b border-gray-100 p-5 dark:border-gray-800">
      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Ações rápidas</h4>
      <div className="grid grid-cols-5 gap-2">
        {ACTIONS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => onAction?.(key)}
            title={label}
            className="flex flex-col items-center gap-1.5 rounded-xl border border-gray-100 py-3 text-gray-500 transition-all duration-150 hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-600 dark:border-gray-800 dark:text-gray-400 dark:hover:border-violet-500/30 dark:hover:bg-violet-500/10 dark:hover:text-violet-400"
          >
            <Icon size={16} />
            <span className="text-[10px] leading-none">{label.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
