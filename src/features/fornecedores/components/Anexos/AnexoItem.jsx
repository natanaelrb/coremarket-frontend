import { FileText, Download } from 'lucide-react'
import { formatDate } from '../../../../shared/utils/formatters.js'

export default function AnexoItem({ anexo }) {
  return (
    <div className="row-hover flex items-center gap-3 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-[#181c3a]">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-rose-50 dark:bg-rose-500/10">
        <FileText size={16} className="text-rose-500 dark:text-rose-400" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-gray-700 dark:text-gray-200">{anexo.nome}</p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          {anexo.tamanho} · {formatDate(anexo.data)}
        </p>
      </div>
      <button className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-violet-600 dark:hover:bg-[#1f234a] dark:hover:text-violet-400">
        <Download size={15} />
      </button>
    </div>
  )
}
