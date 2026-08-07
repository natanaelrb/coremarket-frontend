import { TIMELINE_DOT_COLORS } from '../../constants/tableConfig.js'
import { formatDate } from '../../../../shared/utils/formatters.js'

export default function TimelineList({ items }) {
  if (!items || items.length === 0) {
    return <p className="py-8 text-center text-sm text-gray-400 dark:text-gray-500">Sem eventos registrados.</p>
  }

  return (
    <ul className="space-y-0">
      {items.map((item, index) => (
        <li key={index} className="animate-fade-in-up relative flex gap-3 pb-5 last:pb-0">
          {index < items.length - 1 && (
            <span className="absolute left-[5px] top-3 h-full w-px bg-gray-100 dark:bg-[#1c2044]" />
          )}
          <span
            className={`relative z-10 mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
              TIMELINE_DOT_COLORS[item.tipo] ?? 'bg-gray-400'
            }`}
          />
          <div className="min-w-0 flex-1">
            <p className="text-xs text-gray-400 dark:text-gray-500">{formatDate(item.data)}</p>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">{item.titulo}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500">{item.detalhe}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
