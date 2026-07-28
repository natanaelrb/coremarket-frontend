import TableHeaderRow from "./TableHeaderRow";
import ClientesTableBody from "./ClientesTableBody";

export default function ClientesTable({
  loading,
  clientes,
  visibleCols,
  allSelected,
  onToggleSelectAll,
  isSelected,
  onToggleSelect,
  sort,
  onToggleSort,
  onView,
  onEdit,
  onDelete,
  onNovoCliente,
}) {
  return (
    <div
      className="
        overflow-x-auto
        rounded-2xl
        border
        border-slate-200
        dark:border-white/5

        bg-white
        dark:bg-white dark:bg-[#12162C]

        shadow-sm
      "
    >
      <table
        className="
          w-full
          text-sm
          border-separate
          border-spacing-0
        "
      >
        <TableHeaderRow
          visibleCols={visibleCols}
          allSelected={allSelected}
          onToggleSelectAll={onToggleSelectAll}
          sort={sort}
          onToggleSort={onToggleSort}
        />
        <ClientesTableBody
          loading={loading}
          clientes={clientes}
          visibleCols={visibleCols}
          isSelected={isSelected}
          onToggleSelect={onToggleSelect}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
          onNovoCliente={onNovoCliente}
        />
      </table>
    </div>
  );
}
