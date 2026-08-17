import { X } from 'lucide-react'
import InitialsAvatar from '../../../../shared/components/InitialsAvatar.jsx'
import StarRating from '../../../../shared/components/StarRating.jsx'
import StatusBadge from '../Table/StatusBadge.jsx'
import DetailTabs from './DetailTabs.jsx'
import VisaoGeralTab from './tabs/VisaoGeralTab.jsx'
import DadosTab from './tabs/DadosTab.jsx'
import ProdutosTab from './tabs/ProdutosTab.jsx'
import ComprasTab from './tabs/ComprasTab.jsx'
import FinanceiroTab from './tabs/FinanceiroTab.jsx'
import MaisTab from './tabs/MaisTab.jsx'

const TAB_COMPONENTS = {
  'visao-geral': VisaoGeralTab,
  dados: DadosTab,
  produtos: ProdutosTab,
  compras: ComprasTab,
  financeiro: FinanceiroTab,
  mais: MaisTab,
}

export default function DetailPanel({ fornecedor, detalhe, activeTab, onChangeTab, onClose }) {
  if (!fornecedor) {
    return (
      <div className="flex h-full items-center justify-center rounded-xl border border-gray-100 bg-white p-8 text-center text-sm text-gray-400 dark:border-[#1c2044] dark:bg-[#141833] dark:text-gray-500">
        Selecione um fornecedor na tabela para ver os detalhes.
      </div>
    )
  }

  const ActiveTabComponent = TAB_COMPONENTS[activeTab] ?? VisaoGeralTab

  return (
    <div className="animate-slide-in-right flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm dark:border-[#1c2044] dark:bg-[#141833]">
      <div className="flex items-start justify-between border-b border-gray-100 p-4 dark:border-[#1c2044]">
        <div className="flex items-center gap-3">
          <InitialsAvatar name={fornecedor.nomeFantasia} size="md" />
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">{fornecedor.nomeFantasia}</h3>
              <StatusBadge status={fornecedor.status} />
            </div>
            <div className="mt-0.5 flex items-center gap-1.5">
              <StarRating value={fornecedor.nota} size={12} />
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {fornecedor.nota.toFixed(1)} (28 avaliações)
              </span>
            </div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-[#1f234a] dark:hover:text-gray-200"
        >
          <X size={18} />
        </button>
      </div>

      <DetailTabs activeTab={activeTab} onChangeTab={onChangeTab} />

      <div className="flex-1 overflow-y-auto p-4">
        <ActiveTabComponent fornecedor={fornecedor} detalhe={detalhe} />
      </div>
    </div>
  )
}
