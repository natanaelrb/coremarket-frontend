import { useState } from 'react'

export const DETALHE_TABS = [
  { id: 'visao-geral', label: 'Visão geral' },
  { id: 'compras', label: 'Compras' },
  { id: 'contas-receber', label: 'Contas a receber' },
  { id: 'pagamentos', label: 'Pagamentos' },
  { id: 'historico', label: 'Histórico' },
  { id: 'observacoes', label: 'Observações' },
]

/** Owns which tab is active in the client detail panel. */
export function useClienteTabs() {
  const [activeTab, setActiveTab] = useState(DETALHE_TABS[0].id)
  return { activeTab, setActiveTab, tabs: DETALHE_TABS }
}
