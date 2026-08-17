import { useState } from "react";

import { Users, Plus } from "lucide-react";
import PrimaryButton from "../shared/components/PrimaryButton";

import { useTheme } from "../contexts/ThemeContext";
import useToast from "../shared/hooks/useToast";
import Toast from "../shared/components/Toast";

import useClientes from "../features/clientes/hooks/useClientes";
import useClientesFilters from "../features/clientes/hooks/useClientesFilters";
import useSortableData from "../features/clientes/hooks/useSortableData";
import usePagination from "../features/clientes/hooks/usePagination";
import useRowSelection from "../features/clientes/hooks/useRowSelection";
import useColumnVisibility from "../features/clientes/hooks/useColumnVisibility";
import useSimulatedLoading from "../features/clientes/hooks/useSimulatedLoading";
import PageHeader from "../shared/components/PageHeader";
import TopbarSearch from "../layouts/topbars/components/TopbarSearch";

import {
  StatsGrid,
  SearchFiltersPanel,
  ClientesTableCard,
  NovoClienteModal,
} from "../features/clientes/components";

import "../shared/styles/animations.css";

export default function ClientesPage() {
  const { tema, alternarTema } = useTheme();
  const isDark = tema === "dark";
  
  const { toast, showToast } = useToast();
  const loading = useSimulatedLoading();

  const { clients, stats, addCliente, deleteCliente, deleteClientes } =
    useClientes();

  const {
    search,
    setSearch,
    filters,
    setFilter,
    advanced,
    setAdvancedField,
    clearAdvanced,
    showMoreFilters,
    setShowMoreFilters,
    filtered,
  } = useClientesFilters(clients);

  const { sorted, sort, setSort, toggleSort } = useSortableData(filtered, {
    key: "ultimaCompra",
    dir: "desc",
  });

  const resetKey = JSON.stringify({ search, filters, advanced });
  const { page, perPage, totalPages, paginated, setPerPage, goPrev, goNext } =
    usePagination(sorted, 10, resetKey);

  const {
    selected,
    selectedCount,
    isSelected,
    toggleOne,
    toggleAllVisible,
    removeMany,
    clear,
  } = useRowSelection();

  const { visibleCols, toggleColumn } = useColumnVisibility();

  const [modalOpen, setModalOpen] = useState(false);

  function handleSaveCliente(form) {
    addCliente(form);
    setModalOpen(false);
    showToast("Cliente cadastrado com sucesso");
  }

  function handleDeleteOne(cliente) {
    deleteCliente(cliente.id);
    removeMany([cliente.id]);
    showToast("Cliente excluído com sucesso");
  }

  function handleBulkDelete() {
    const ids = Array.from(selected);
    deleteClientes(ids);
    showToast(`${ids.length} cliente(s) excluído(s)`);
    clear();
  }

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="space-y-5">
       <PageHeader
          icon={Users}
          title="Clientes"
          subtitle="Gerencie sua base de clientes"
          onToggleTheme={alternarTema}
          >
            <div className="flex items-center gap-3">
              <TopbarSearch
                value={search}
                onChange={setSearch}
                placeholder="Pesquisar clientes..."
              />
          
          <PrimaryButton
              icon={Plus}
              onClick={() => setModalOpen(true)}
            >
              Novo cliente
            </PrimaryButton>
          </div>
        </PageHeader>
        

        <StatsGrid stats={stats} />

        <SearchFiltersPanel
          search={search}
          onSearchChange={setSearch}
          filters={filters}
          onFilterChange={setFilter}
          showMoreFilters={showMoreFilters}
          onToggleMoreFilters={() => setShowMoreFilters((s) => !s)}
          advanced={advanced}
          onAdvancedChange={setAdvancedField}
          onClearAdvanced={clearAdvanced}
        />

        <ClientesTableCard
          visibleCols={visibleCols}
          onToggleColumn={toggleColumn}
          selectedCount={selectedCount}
          onBulkEmail={() => showToast(`${selectedCount} e-mail(s) enviado(s)`)}
          onBulkExport={() => showToast("Exportação gerada com sucesso")}
          onBulkDelete={handleBulkDelete}
          sort={sort}
          onSortChange={setSort}
          onToggleSort={toggleSort}
          loading={loading}
          clientes={paginated}
          allSelected={
            paginated.length > 0 && paginated.every((c) => isSelected(c.id))
          }
          onToggleSelectAll={() => toggleAllVisible(paginated.map((c) => c.id))}
          isSelected={isSelected}
          onToggleSelect={toggleOne}
          onView={(c) => showToast(`Visualizando ${c.nome}`)}
          onEdit={(c) => showToast(`Editando ${c.nome}`)}
          onDelete={handleDeleteOne}
          onNovoCliente={() => setModalOpen(true)}
          shownCount={paginated.length}
          totalCount={sorted.length}
          page={page}
          totalPages={totalPages}
          onPrev={goPrev}
          onNext={goNext}
          perPage={perPage}
          onPerPageChange={setPerPage}
        />
      </div>

      {modalOpen && (
        <NovoClienteModal
          onClose={() => setModalOpen(false)}
          onSaved={handleSaveCliente}
        />
      )}
      <Toast toast={toast} />
    </div>
  );
}
