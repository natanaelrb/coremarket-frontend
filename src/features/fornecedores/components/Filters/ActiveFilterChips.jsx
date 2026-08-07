import { X } from 'lucide-react'

const LABELS = {
  situacao: 'Situação',
  tipo: 'Tipo',
  cidade: 'Cidade',
  estado: 'Estado',
  produto: 'Produto',
  ultimaCompra: 'Última Compra',
  valorComprado: 'Valor Comprado',
}

export default function ActiveFilterChips({ chips, onRemove }) {
  return (
    <div className="animate-fade-in-up mt-3 flex flex-wrap gap-2 border-t border-gray-100 pt-3 dark:border-[#1c2044]">
      {chips.map((chip) => (
        <span
          key={chip.key}
          className="flex items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 dark:bg-violet-500/10 dark:text-violet-300"
        >
          {LABELS[chip.key] ?? chip.key}: {chip.value}
          <button
            onClick={() => onRemove(chip.key)}
            className="rounded-full p-0.5 transition-colors hover:bg-violet-100 dark:hover:bg-violet-500/20"
          >
            <X size={12} />
          </button>
        </span>
      ))}
    </div>
  )
}
