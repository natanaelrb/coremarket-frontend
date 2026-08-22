import { X } from 'lucide-react'
import ProductImage from '../ProductTable/ProductImage.jsx'
import StatusBadge from '../ProductTable/StatusBadge.jsx'

/**
 * Top block of the detail panel: product photo, name, brand, status and
 * the close ("x") control.
 */
export default function ProductDetailHeader({ produto, onClose }) {
  return (
    <div className="flex items-start gap-3 p-5 pb-4">
      <ProductImage src={produto.imagem} alt={produto.nome} size={56} />
      <div className="min-w-0 flex-1">
        <p className="truncate font-semibold text-gray-900 dark:text-white">{produto.nome}</p>
        <p className="truncate text-sm text-gray-400 dark:text-gray-500">{produto.marca}</p>
        <div className="mt-1.5"><StatusBadge status={produto.status} /></div>
      </div>
      <button
        onClick={onClose}
        className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1E2142] hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
        aria-label="Fechar detalhes"
      >
        <X size={18} />
      </button>
    </div>
  )
}
