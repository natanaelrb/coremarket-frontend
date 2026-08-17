import { AlertTriangle, Clock, Info, Package } from 'lucide-react'
import { ALERTA_ICON_STYLES } from '../../../constants/tableConfig.js'

const ICONS = {
  pendente: Clock,
  atraso: AlertTriangle,
  info: Info,
  estoque: Package,
}

export default function AlertasCard({ alertas }) {
  if (!alertas || alertas.length === 0) return null

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 dark:border-[#1c2044] dark:bg-[#10132c]">
      <h4 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-200">Alertas</h4>
      <ul className="space-y-3">
        {alertas.map((alerta, index) => {
          const Icon = ICONS[alerta.tipo] ?? Info
          const style = ALERTA_ICON_STYLES[alerta.tipo] ?? ALERTA_ICON_STYLES.info
          return (
            <li key={index} className="flex items-start gap-3">
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${style.bg}`}>
                <Icon size={15} className={style.text} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{alerta.titulo}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">{alerta.detalhe}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
