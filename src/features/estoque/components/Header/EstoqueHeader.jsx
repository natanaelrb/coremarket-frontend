import { Boxes } from 'lucide-react'
import HeaderActions from './HeaderActions.jsx'

/**
 * Page title block + primary/secondary action buttons. Purely presentational;
 * receives its click handler from the page via useEstoqueActions.
 */
export default function EstoqueHeader({ onAction }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-4 animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400">
          <Boxes size={24} strokeWidth={2} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Estoque</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Gerencie produtos, movimentações, inventários e níveis de estoque.
          </p>
        </div>
      </div>
      <HeaderActions onAction={onAction} />
    </div>
  )
}
