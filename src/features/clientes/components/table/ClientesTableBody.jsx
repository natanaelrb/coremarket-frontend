import TableSkeleton from "./TableSkeleton";
import EmptyState from "./EmptyState";
import ClienteTableRow from "./ClienteTableRow";

export default function ClientesTableBody({
  loading,
  clientes,
  visibleCols,
  isSelected,
  onToggleSelect,
  onView,
  onEdit,
  onDelete,
  onNovoCliente,
}) {
  if (loading)
    return (
      <tbody>
        <TableSkeleton />
      </tbody>
    );
  if (clientes.length === 0)
    return (
      <tbody>
        <EmptyState onNovoCliente={onNovoCliente} />
      </tbody>
    );

  return (
    <tbody key={clientes.map((c) => c.id).join("-")}>
      {clientes.map((cliente, i) => (
        <ClienteTableRow
          key={cliente.id}
          cliente={cliente}
          visibleCols={visibleCols}
          selected={isSelected(cliente.id)}
          onToggleSelect={onToggleSelect}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
          delay={i * 35}
        />
      ))}
    </tbody>
  );
}
