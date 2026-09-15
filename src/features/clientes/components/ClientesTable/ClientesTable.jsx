import { Users } from 'lucide-react'
import { ClientesTableHeader } from './ClientesTableHeader.jsx'
import { ClienteRow } from './ClienteRow.jsx'
import { TableFooter } from './TableFooter.jsx'
import { EmptyState } from "../../../../shared/components/ui/EmptyState.jsx";

/**
 * The clients data table: header, rows, empty state, and footer pagination.
 * All state (filtering/pagination/selection) is owned by the parent page
 * via hooks — this component is purely presentational.
 */
export function ClientesTable({
  clientes,
  selectedIds,
  onToggleSelect,
  onToggleAll,
  onView,
  onEdit,
  onRegistrarPagamento,
  onExcluir,
  page,
  totalPages,
  totalItems,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) {
  const allSelected = clientes.length > 0 && clientes.every((c) => selectedIds.includes(c.id))

  return (
    <div className="rounded-xl border border-cm-border-dark light:border-cm-border-light bg-cm-panel-dark light:bg-cm-panel-light overflow-hidden animate-slide-up"
      style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}
    >
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <ClientesTableHeader allSelected={allSelected} onToggleAll={() => onToggleAll(clientes.map((c) => c.id))} />
          <tbody>
            {clientes.map((cliente) => (
              <ClienteRow
                key={cliente.id}
                cliente={cliente}
                selected={selectedIds.includes(cliente.id)}
                onToggleSelect={() => onToggleSelect(cliente.id)}
                onView={() => onView(cliente)}
                onEdit={() => onEdit(cliente)}
                onRegistrarPagamento={() => onRegistrarPagamento(cliente)}
                onExcluir={() => onExcluir(cliente)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {clientes.length === 0 && (
        <EmptyState
          icon={Users}
          title="Nenhum cliente encontrado"
          description="Ajuste os filtros ou o termo de busca para ver resultados."
        />
      )}

      {clientes.length > 0 && (
        <TableFooter
          page={page}
          totalPages={totalPages}
          totalItems={totalItems}
          pageSize={pageSize}
          onPageChange={onPageChange}
          onPageSizeChange={onPageSizeChange}
        />
      )}
    </div>
  )
}
