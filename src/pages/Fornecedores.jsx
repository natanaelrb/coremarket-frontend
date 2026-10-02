import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import FornecedoresHeader from "../features/fornecedores/components/Header/FornecedoresHeader.jsx";
import StatsCardsGrid from "../features/fornecedores/components/StatsCards/StatsCardsGrid.jsx";
import FiltersBar from "../features/fornecedores/components/Filters/FiltersBar.jsx";
import FornecedoresTable from "../features/fornecedores/components/Table/FornecedoresTable.jsx";
import DetailPanel from "../features/fornecedores/components/DetailPanel/DetailPanel.jsx";
import NovoFornecedorModal from "../features/fornecedores/components/Modal/NovoFornecedorModal.jsx";

import { useFornecedores } from "../features/fornecedores/hooks/useFornecedores.js";
import { useFornecedorFilters } from "../features/fornecedores/hooks/useFornecedorFilters.js";
import { usePagination } from "../features/fornecedores/hooks/usePagination.js";
import { useRowSelection } from "../features/fornecedores/hooks/useRowSelection.js";
import { useFornecedorDetail } from "../features/fornecedores/hooks/useFornecedorDetail.js";

export default function FornecedoresPage() {
  const navigate = useNavigate();

  const {
    fornecedores,
    stats,
    isLoading,
  } = useFornecedores();

  const [isModalOpen, setIsModalOpen] = useState(false);

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
  } = useFornecedorFilters(fornecedores);

  const pagination = usePagination(filteredFornecedores, 10);
  const selection = useRowSelection();

  const {
    selectedFornecedor,
    detalhe,
    activeTab,
    setActiveTab,
    isPanelOpen,
    closePanel,
  } = useFornecedorDetail(fornecedores);

  const cidades = useMemo(
    () => [...new Set(fornecedores.map((f) => f.cidade))].sort(),
    [fornecedores]
  );

  return (
    <>
      <div className="space-y-5 -mt-4">
        <FornecedoresHeader
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onToggleFilters={() => setShowAdvanced((prev) => !prev)}
          onNewFornecedor={() => setIsModalOpen(true)}
        />

        <StatsCardsGrid
          stats={stats}
          isLoading={isLoading}
        />

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

        <FornecedoresTable
          isLoading={isLoading}
          fornecedores={pagination.paginatedItems}
          selectedFornecedorId={selectedFornecedor?.id}
          onSelectFornecedor={(id) =>
            navigate(`/fornecedores/${id}`)
          }
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

      <NovoFornecedorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={(data) => console.log(data)}
      />
    </>
  );
}