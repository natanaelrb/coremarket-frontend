import { ClientesHeader } from '../features/clientes/components/ClientesHeader/index.js'
import { KPICardsGrid } from '../features/clientes/components/KPICards/index.js'
import { AlertsBanner } from '../features/clientes/components/AlertsBanner/index.js'
import { FiltersToolbar } from '../features/clientes/components/FiltersToolbar/index.js'
import { ClientesTable } from '../features/clientes/components/ClientesTable/index.js'
import { NovoClienteModal } from '../features/clientes/components/modals/NovoClienteModal/index.js'
import { RegistrarPagamentoModal } from '../features/clientes/components/modals/RegistrarPagamentoModal/index.js'
import { ImportarClientesModal } from '../features/clientes/components/modals/ImportarClientesModal/index.js'
import { SegmentacaoModal } from '../features/clientes/components/modals/SegmentacaoModal/index.js'

import { useClientesList } from '../features/clientes/hooks/useClientesList.js'
import { useClientesFilters } from '../features/clientes/hooks/useClientesFilters.js'
import { useClienteSelection } from '../features/clientes/hooks/useClienteSelection.js'
import { usePagination } from '../features/clientes/hooks/usePagination.js'
import { useClientesModals } from '../features/clientes/hooks/useClientesModals.js'
import { useExportacao } from '../features/clientes/hooks/useExportacao.js'

import { MOCK_KPIS, MOCK_ALERTAS } from '../features/clientes/data/mockClientes.js'

/**
 * Clientes (Clients) page. Pure composition: every piece of state and every
 * side effect lives in a hook; this component only wires props together.
 */
export default function Clientes({ onOpenDetalhe }) {
  const { clientes, addCliente, updateCliente } = useClientesList()
  const { searchTerm, setSearchTerm, quickFilter, setQuickFilter, filtered } = useClientesFilters(clientes)
  const { page, totalPages, pageItems, goToPage, resetPage } = usePagination(filtered, 20)
  const selection = useClienteSelection()
  const modals = useClientesModals()
  const { exportando, exportar } = useExportacao()

  function handleSearch(value) {
    setSearchTerm(value)
    resetPage()
  }

  function handleQuickFilter(id) {
    setQuickFilter(id)
    resetPage()
  }

  function handleExcluir(cliente) {
    // TODO(api): DELETE /api/clientes/{id}
    console.info('Excluir cliente', cliente.id)
  }

  return (
    <div className="space-y-5 max-w-[1400px] mx-auto">
      <ClientesHeader searchTerm={searchTerm} onSearchChange={handleSearch} onNovoCliente={modals.abrirNovo} />

      <KPICardsGrid kpis={MOCK_KPIS} />

      <AlertsBanner alertas={MOCK_ALERTAS} />

      <FiltersToolbar
        searchTerm={searchTerm}
        onSearchChange={handleSearch}
        quickFilter={quickFilter}
        onQuickFilterChange={handleQuickFilter}
        onMaisFiltros={() => {}}
        onExportar={exportar}
        exportando={exportando}
        onNovoCliente={modals.abrirNovo}
        onImportar={modals.abrirImportar}
        onSegmentar={modals.abrirSegmentar}
      />

      <ClientesTable
        clientes={pageItems}
        selectedIds={selection.selectedIds}
        onToggleSelect={selection.toggle}
        onToggleAll={selection.toggleAll}
        onView={(cliente) => onOpenDetalhe(cliente)}
        onEdit={modals.abrirEditar}
        onRegistrarPagamento={modals.abrirPagamento}
        onExcluir={handleExcluir}
        page={page}
        totalPages={totalPages}
        totalItems={filtered.length}
        pageSize={20}
        onPageChange={goToPage}
        onPageSizeChange={() => {}}
      />

      <NovoClienteModal
        open={modals.modal === 'novo' || modals.modal === 'editar'}
        onClose={modals.fechar}
        clienteParaEditar={modals.modal === 'editar' ? modals.clienteAlvo : null}
        onSaved={(form) => {
          if (modals.modal === 'editar') {
            updateCliente(modals.clienteAlvo.id, { nome: form.nomeCompleto })
          } else {
            addCliente({
              id: `CLI-${Math.floor(Math.random() * 900000 + 100000)}`,
              nome: form.nomeCompleto,
              telefone: form.telefone,
              documento: form.documento,
              email: form.email,
              status: form.status,
              totalComprado: 0,
              emAberto: 0,
              emAtraso: 0,
              limiteCredito: Number(form.limiteCredito) || 0,
              limiteUtilizado: 0,
              quantidadeCompras: 0,
              ticketMedio: 0,
              clienteDesde: new Date().toISOString().slice(0, 10),
              ultimaCompra: null,
              observacoes: form.observacoes,
            })
          }
        }}
      />

      <RegistrarPagamentoModal
        open={modals.modal === 'pagamento'}
        onClose={modals.fechar}
        cliente={modals.clienteAlvo}
        contasEmAberto={
          modals.clienteAlvo
            ? [{ id: '#VEN-1020', vencimento: '2026-09-15', saldo: modals.clienteAlvo.emAberto }]
            : []
        }
        onConfirmado={(payload) => {
          updateCliente(modals.clienteAlvo.id, {
            emAberto: Math.max(0, modals.clienteAlvo.emAberto - Number(payload.valor)),
          })
        }}
      />

      <ImportarClientesModal open={modals.modal === 'importar'} onClose={modals.fechar} onImportado={() => {}} />

      <SegmentacaoModal open={modals.modal === 'segmentar'} onClose={modals.fechar} />
    </div>
  )
}
