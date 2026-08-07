import { FileText, Link2, Ban, Trash2 } from 'lucide-react'

const actions = [
  { icon: FileText, label: 'Gerar relatório do fornecedor' },
  { icon: Link2, label: 'Vincular a outro cadastro' },
  { icon: Ban, label: 'Bloquear fornecedor', danger: false },
  { icon: Trash2, label: 'Excluir fornecedor', danger: true },
]

export default function MaisTab() {
  return (
    <div className="animate-fade-in space-y-2">
      {actions.map((action) => (
        <button
          key={action.label}
          className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left text-sm font-medium transition-colors ${
            action.danger
              ? 'border-rose-100 text-rose-600 hover:bg-rose-50 dark:border-rose-500/20 dark:text-rose-400 dark:hover:bg-rose-500/10'
              : 'border-gray-100 text-gray-600 hover:bg-gray-50 dark:border-[#1c2044] dark:text-gray-300 dark:hover:bg-[#181c3a]'
          }`}
        >
          <action.icon size={16} />
          {action.label}
        </button>
      ))}
    </div>
  )
}
