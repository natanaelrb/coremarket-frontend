import { ArrowLeft } from 'lucide-react'

/** Back-to-clients-list link at the top of the detail page. */
export function VoltarButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 text-sm text-slate-400 light:text-slate-500 hover:text-white light:hover:text-slate-900 transition-colors mb-4"
    >
      <ArrowLeft size={15} />
      Voltar para clientes
    </button>
  )
}
