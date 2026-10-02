// Página de Produtos.
// Responsabilidade única deste arquivo: orquestrar hooks e RENDERIZAR componentes.
// Nenhuma regra de negócio, formatação ou estilo vive aqui — tudo fica nas camadas
// hooks/ utils/ constants/ mocks/ e nos componentes de components/.
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader } from '../features/produtos/components/Toolbar';
import { KpiCards } from '../features/produtos/components/KpiCards';
import { FilterBar } from '../features/produtos/components/FilterBar';
import { ProductsTable } from '../features/produtos/components/ProductsTable';
import { WidgetsSection } from '../features/produtos/components/Widgets';
import { ToastContainer } from "../shared/components/feedback/ToastContainer";
import { NovoProdutoModal } from "../features/produtos/components/Modal/NovoProdutoModal";

import { useProdutos } from '../features/produtos/hooks/useProdutos';
import { useProdutoFilters } from '../features/produtos/hooks/useProdutoFilters';
import { useSortableData } from '../features/produtos/hooks/useSortableData';
import { usePagination } from '../features/produtos/hooks/usePagination';
import { useProdutoSelection } from '../features/produtos/hooks/useProdutoSelection';
import { useProdutoKpis } from '../features/produtos/hooks/useProdutoKpis';
import { useWidgetsData } from '../features/produtos/hooks/useWidgetsData';
import { useColumnVisibility } from '../features/produtos/hooks/useColumnVisibility';
import { useBulkActions } from '../features/produtos/hooks/useBulkActions';
import { useToast } from '../features/produtos/hooks/useToast';

export default function Produtos() {
  const navigate = useNavigate();
  const {
    produtos,
    isLoading,
    refetch,
    addProduto,
  } = useProdutos();
  const kpis = useProdutoKpis(produtos);
  const widgetsData = useWidgetsData(produtos, kpis);
  const { toasts, showToast, dismissToast } = useToast();

  const {
    filters,
    setFilter,
    clearFilters,
    activeFiltersCount,
    filteredProdutos,
    isAdvancedOpen,
    setIsAdvancedOpen,
  } = useProdutoFilters(produtos);
  
  const { sortedItems, sortConfig, requestSort } = useSortableData(filteredProdutos, 'codigo');
  const pagination = usePagination(sortedItems);
  const selection = useProdutoSelection(pagination.paginatedItems);
  const columnVisibility = useColumnVisibility();
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isNovoProdutoOpen, setIsNovoProdutoOpen] = useState(false);
  const handleRefresh = async () => {
    if (isRefreshing) return;

    setIsRefreshing(true);

    try {
      await refetch();
    } finally {
      setIsRefreshing(false);
    }
  };

  const bulkActions = useBulkActions({
    selectedIds: selection.selectedIds,
    clearSelection: selection.clearSelection,
    onCompleted: (action, ids) => showToast(`Ação "${action}" aplicada a ${ids.length} produto(s).`, 'success'),
  });

  const rowActions = {
    onEdit: (p) => showToast(`Editar ${p.nome} (conectar ao formulário real).`, 'info'),
    onDuplicate: (p) => showToast(`${p.nome} duplicado.`, 'success'),
    onGenerateBarcode: (p) => showToast(`Código de barras gerado para ${p.nome}.`, 'success'),
    onPrintLabel: (p) => showToast(`Etiqueta enviada para impressão: ${p.nome}.`, 'success'),
    onDelete: (p) => showToast(`${p.nome} removido.`, 'error'),
  };

  return (
    <div className="flex flex-col gap-5">
      <PageHeader
        onImport={() => showToast('Importação de produtos iniciada.', 'info')}
        onExport={() => showToast('Exportando produtos...', 'info')}
        onPrint={() => window.print()}
        onRefresh={handleRefresh}
        onNovoProduto={() => setIsNovoProdutoOpen(true)}
        isRefreshing={isRefreshing}
      />

      <KpiCards kpis={kpis} />

      <FilterBar
        filters={filters}
        setFilter={setFilter}
        clearFilters={clearFilters}
        activeFiltersCount={activeFiltersCount}
        isAdvancedOpen={isAdvancedOpen}
        setIsAdvancedOpen={setIsAdvancedOpen}
      />

      <ProductsTable
        isLoading={isLoading}
        paginatedProdutos={pagination.paginatedItems}
        totalFiltered={sortedItems.length}
        selection={selection}
        columnVisibility={columnVisibility}
        sorting={{ sortConfig, requestSort }}
        pagination={pagination}
        onOpenDetail={(produto) => navigate(`/produtos/${produto.id}`)}
        onRunBulkAction={bulkActions.runAction}
        onToggleMoreFilters={() => setIsAdvancedOpen(!isAdvancedOpen)}
        rowActions={rowActions}
        onClearFilters={clearFilters}
      />

      <WidgetsSection
        widgetsData={widgetsData}
        onVerTodosVencimento={() => showToast('Abrir relatório completo de vencimentos.', 'info')}
        onVerTodosVencidos={() => showToast('Abrir relatório completo de lotes vencidos.', 'info')}
        onVerRelatorioEstoque={() => showToast('Abrir relatório completo de estoque.', 'info')}
      />

      <NovoProdutoModal
        isOpen={isNovoProdutoOpen}
        onClose={() => setIsNovoProdutoOpen(false)}
        onSave={(produto) => {
          const novoProduto = addProduto(produto);

          setIsNovoProdutoOpen(false);

          showToast(
            `${novoProduto.nome} cadastrado com sucesso.`,
            "success"
          );
        }}
      />

      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
