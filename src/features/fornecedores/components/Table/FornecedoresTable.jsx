import TableHeader from "./TableHeader.jsx";
import TableRow from "./TableRow.jsx";
import TableRowSkeleton from "./TableRowSkeleton.jsx";
import EmptyState from "./EmptyState.jsx";
import TablePagination from "./TablePagination.jsx";
import BulkActionsBar from "./BulkActionsBar.jsx";

export default function FornecedoresTable({
  isLoading,
  fornecedores,
  selectedFornecedorId,
  onSelectFornecedor,
  selection,
  sortKey,
  sortDirection,
  onToggleSort,
  pagination,
}) {
  const allIds = fornecedores.map((f) => f.id);

  const allSelected =
    fornecedores.length > 0 &&
    selection.selectedIds.length === fornecedores.length;

  const hasSelection = selection.selectedIds.length > 0;
  const hasFornecedores = fornecedores.length > 0;

  return (
    <div
      className="
        animate-fade-in-up
        stagger-3
        overflow-hidden
        rounded-xl
        border border-slate-200/80
        bg-white
        shadow-sm shadow-slate-900/[0.03]
        dark:border-[#252a4a]
        dark:bg-[#141833]
        dark:shadow-black/10
      "
      aria-busy={isLoading}
    >
      {hasSelection && (
        <BulkActionsBar
          count={selection.selectedIds.length}
          onClear={selection.clearSelection}
        />
      )}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] border-collapse text-sm">
          <TableHeader
            allSelected={allSelected}
            onToggleAll={() => selection.toggleAll(allIds)}
            sortKey={sortKey}
            sortDirection={sortDirection}
            onToggleSort={onToggleSort}
          />

          <tbody>
            {isLoading &&
              Array.from({ length: 6 }).map((_, index) => (
                <TableRowSkeleton key={index} />
              ))}

            {!isLoading && !hasFornecedores && (
              <tr>
                <td colSpan={9}>
                  <EmptyState />
                </td>
              </tr>
            )}

            {!isLoading &&
              fornecedores.map((fornecedor, index) => (
                <TableRow
                  key={fornecedor.id}
                  fornecedor={fornecedor}
                  isSelected={selection.isSelected(fornecedor.id)}
                  onToggleSelect={() =>
                    selection.toggleRow(fornecedor.id)
                  }
                  isActive={fornecedor.id === selectedFornecedorId}
                  onClick={() => onSelectFornecedor(fornecedor.id)}
                  delayIndex={index}
                />
              ))}
          </tbody>
        </table>
      </div>

      {!isLoading && hasFornecedores && (
        <TablePagination pagination={pagination} />
      )}
    </div>
  );
}