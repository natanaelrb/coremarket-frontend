import { useState, useMemo } from 'react'


import FornecedoresHeader from "../features/fornecedores/components/Header/FornecedoresHeader.jsx";
import StatsCardsGrid from "../features/fornecedores/components/StatsCards/StatsCardsGrid.jsx";
import FiltersBar from "../features/fornecedores/components/Filters/FiltersBar.jsx";
import FornecedoresTable from "../features/fornecedores/components/Table/FornecedoresTable.jsx";
import DetailPanel from "../features/fornecedores/components/DetailPanel/DetailPanel.jsx";
import TimelineSection from "../features/fornecedores/components/Timeline/TimelineSection.jsx";
import AnexosRecentes from "../features/fornecedores/components/Anexos/AnexosRecentes.jsx";
import NovoFornecedorModal from "../features/fornecedores/components/Modal/NovoFornecedorModal.jsx";

import { useFornecedores } from "../features/fornecedores/hooks/useFornecedores.js";
import { useFornecedorFilters } from "../features/fornecedores/hooks/useFornecedorFilters.js";
import { usePagination } from "../features/fornecedores/hooks/usePagination.js";
import { useRowSelection } from "../features/fornecedores/hooks/useRowSelection.js";
import { useFornecedorDetail } from "../features/fornecedores/hooks/useFornecedorDetail.js";

export default function FornecedoresPage() {
  const { fornecedores, stats, isLoading } = useFornecedores()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    filters,
    updateFilter,
    clearFilters,
    searchTerm,
    setSearchTerm,
    showAdvanced,
    setShowAdvanced,
    activeFilterChips,
    filteredFornecedores,
    sortKey,
    sortDirection,
    toggleSort,
  } = useFornecedorFilters(fornecedores)

  const pagination = usePagination(filteredFornecedores, 10)
  const selection = useRowSelection()

  const {
    selectedFornecedor,
    detalhe,
    selectFornecedor,
    activeTab,
    setActiveTab,
    activeSidePanel,
    setActiveSidePanel,
    isPanelOpen,
    closePanel,
  } = useFornecedorDetail(fornecedores)

  const cidades = useMemo(
    () => [...new Set(fornecedores.map((f) => f.cidade))].sort(),
    [fornecedores]
  )

  return (
  <>
    <div className="space-y-5">
      <FornecedoresHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        onToggleFilters={() => setShowAdvanced((prev) => !prev)}
        onNewFornecedor={() => setIsModalOpen(true)}
      />

      <StatsCardsGrid stats={stats} isLoading={isLoading} />

      <FiltersBar
        filters={filters}
        updateFilter={updateFilter}
        clearFilters={clearFilters}
        activeFilterChips={activeFilterChips}
        showAdvanced={showAdvanced}
        setShowAdvanced={setShowAdvanced}
        cidades={cidades}
        produtos={[]}
      />

      <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
        <FornecedoresTable
          isLoading={isLoading}
          fornecedores={pagination.paginatedItems}
          selectedFornecedorId={selectedFornecedor?.id}
          onSelectFornecedor={selectFornecedor}
          selection={selection}
          sortKey={sortKey}
          sortDirection={sortDirection}
          onToggleSort={toggleSort}
          pagination={pagination}
        />

        {isPanelOpen && (
          <DetailPanel
            fornecedor={selectedFornecedor}
            detalhe={detalhe}
            activeTab={activeTab}
            onChangeTab={setActiveTab}
            onClose={closePanel}
          />
        )}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1fr_380px]">
        <TimelineSection
          activeSidePanel={activeSidePanel}
          onChangeSidePanel={setActiveSidePanel}
          detalhe={detalhe}
        />

        <AnexosRecentes anexos={detalhe.anexos} />
      </div>
    </div>

    <NovoFornecedorModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      onSave={(data) => console.log(data)}
    />
  </>
);
}
