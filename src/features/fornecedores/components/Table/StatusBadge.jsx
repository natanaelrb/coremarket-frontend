import { STATUS_STYLES } from '../../constants/tableConfig.js'

export default function StatusBadge({ status }) {
  const style = STATUS_STYLES[status] ?? 'bg-gray-100 text-gray-600 dark:bg-gray-500/15 dark:text-gray-300'

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${style}`}>
      {status}
    </span>
  )
}
