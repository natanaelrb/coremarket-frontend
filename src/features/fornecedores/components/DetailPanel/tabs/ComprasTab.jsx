import StatusBadge from '../../Table/StatusBadge.jsx'
import { formatCurrency, formatDate } from '../../../../../shared/utils/formatters.js'

// MOCK — substituir por: GET /api/fornecedores/:id/compras
const comprasMock = [
  { numero: '#5487', data: '2026-07-10', valor: 3250.0, status: 'Ativo' },
  { numero: '#5462', data: '2026-06-28', valor: 4820.5, status: 'Ativo' },
  { numero: '#5431', data: '2026-06-14', valor: 2100.0, status: 'Inativo' },
  { numero: '#5390', data: '2026-05-30', valor: 5600.3, status: 'Ativo' },
]

export default function ComprasTab() {
  return (
    <div className="animate-fade-in space-y-2">
      {comprasMock.map((compra) => (
        <div
          key={compra.numero}
          className="flex items-center justify-between rounded-xl border border-gray-100 p-3 transition-colors hover:bg-gray-50 dark:border-[#1c2044] dark:hover:bg-[#181c3a]"
        >
          <div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
              Compra {compra.numero}
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">{formatDate(compra.data)}</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
              {formatCurrency(compra.valor)}
            </span>
            <StatusBadge status={compra.status} />
          </div>
        </div>
      ))}
    </div>
  )
}
