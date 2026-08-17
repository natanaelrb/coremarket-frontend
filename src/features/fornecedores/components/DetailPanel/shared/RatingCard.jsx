import StarRating from '../../../../../shared/components/StarRating.jsx'

const LABELS = {
  preco: 'Preço',
  entrega: 'Entrega',
  qualidade: 'Qualidade',
  atendimento: 'Atendimento',
  prazo: 'Prazo',
  confiabilidade: 'Confiabilidade',
}

export default function RatingCard({ title, ratings, notaGeral }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 dark:border-[#1c2044] dark:bg-[#10132c]">
      <h4 className="mb-3 text-sm font-semibold text-gray-700 dark:text-gray-200">{title}</h4>
      <div className="space-y-2.5">
        {Object.entries(ratings).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <span className="text-sm text-gray-400 dark:text-gray-500">{LABELS[key] ?? key}</span>
            <StarRating value={value} size={13} />
          </div>
        ))}
      </div>
      {notaGeral !== undefined && (
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 dark:border-[#1c2044]">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Nota Geral</span>
          <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
            {notaGeral.toFixed(1)} / 5
          </span>
        </div>
      )}
    </div>
  )
}
