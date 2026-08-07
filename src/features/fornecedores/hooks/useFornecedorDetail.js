import { useMemo, useState } from 'react'
import { detalheFornecedorMock, detalheFallback } from '../mocks/detailMock.js'

// TODO: substituir pelo client HTTP real apontando para:
// GET /api/fornecedores/:id/detalhe
export function useFornecedorDetail(fornecedores) {
  const [selectedId, setSelectedId] = useState(() => fornecedores[0]?.id ?? null)
  const [activeTab, setActiveTab] = useState('visao-geral')
  const [activeSidePanel, setActiveSidePanel] = useState('timeline')
  const [isPanelOpen, setIsPanelOpen] = useState(true)

  const selectedFornecedor = useMemo(
    () => fornecedores.find((f) => f.id === selectedId) ?? null,
    [fornecedores, selectedId]
  )

  const detalhe = useMemo(
    () => (selectedId ? detalheFornecedorMock[selectedId] ?? detalheFallback : detalheFallback),
    [selectedId]
  )

  const selectFornecedor = (id) => {
    setSelectedId(id)
    setActiveTab('visao-geral')
    setIsPanelOpen(true)
  }

  const closePanel = () => setIsPanelOpen(false)

  return {
    selectedFornecedor,
    detalhe,
    selectFornecedor,
    activeTab,
    setActiveTab,
    activeSidePanel,
    setActiveSidePanel,
    isPanelOpen,
    closePanel,
  }
}
