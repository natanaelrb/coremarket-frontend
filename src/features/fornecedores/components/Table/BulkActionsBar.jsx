import { X, Ban, Trash2, Download } from 'lucide-react'

export default function BulkActionsBar({ count, onClear }) {
  return (
    <div className="animate-fade-in-up flex items-center justify-between border-b border-violet-100 bg-violet-50 px-4 py-2.5 dark:border-violet-500/20 dark:bg-violet-500/10">
      <div className="flex items-center gap-2 text-sm font-medium text-violet-700 dark:text-violet-300">
        <button
          onClick={onClear}
          className="rounded-full p-0.5 transition-colors hover:bg-violet-100 dark:hover:bg-violet-500/20"
        >
          <X size={14} />
        </button>
        {count} selecionado{count > 1 ? 's' : ''}
      </div>
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-violet-700 transition-colors hover:bg-violet-100 dark:text-violet-300 dark:hover:bg-violet-500/20">
          <Download size={13} />
          Exportar
        </button>
        <button className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-violet-700 transition-colors hover:bg-violet-100 dark:text-violet-300 dark:hover:bg-violet-500/20">
          <Ban size={13} />
          Bloquear
        </button>
        <button className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-rose-600 transition-colors hover:bg-rose-100 dark:text-rose-400 dark:hover:bg-rose-500/15">
          <Trash2 size={13} />
          Excluir
        </button>
      </div>
    </div>
  )
}
