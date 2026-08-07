import { formatCurrency } from '../../../../../shared/utils/formatters.js'

export default function FinanceiroTab({ detalhe }) {
  const { indicadores } = detalhe

  const cards = [
    { label: 'Total Gasto', value: indicadores.totalGasto, color: 'text-gray-800 dark:text-gray-100' },
    { label: 'Ticket Médio', value: indicadores.ticketMedio, color: 'text-violet-600 dark:text-violet-400' },
    { label: 'Maior Compra', value: indicadores.maiorCompra, color: 'text-emerald-600 dark:text-emerald-400' },
  ]

  return (
    <div className="animate-fade-in space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-gray-100 bg-white p-3 text-center dark:border-[#1c2044] dark:bg-[#10132c]"
          >
            <p className="text-xs text-gray-400 dark:text-gray-500">{card.label}</p>
            <p className={`mt-1 text-sm font-bold ${card.color}`}>{formatCurrency(card.value)}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-gray-100 bg-white p-4 dark:border-[#1c2044] dark:bg-[#10132c]">
        <h4 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-200">Situação de Pagamentos</h4>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">Pedidos pendentes</span>
          <span className="font-medium text-amber-600 dark:text-amber-400">
            {indicadores.pedidosPendentes}
          </span>
        </div>
      </div>
    </div>
  )
}
