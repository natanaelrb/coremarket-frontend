import TableToolbar from "../toolbar/TableToolbar";
import ClientesTable from "./ClientesTable";
import TablePagination from "../pagination/TablePagination";

export default function ClientesTableCard({
    visibleCols, onToggleColumn,
    selectedCount, onBulkEmail, onBulkExport, onBulkDelete,
    sort, onSortChange, onToggleSort,
    loading, clientes, allSelected, onToggleSelectAll, isSelected, onToggleSelect,
    onView, onEdit, onDelete, onNovoCliente,
    shownCount, totalCount, page, totalPages, onPrev, onNext, perPage, onPerPageChange,
  }) {

  return (
    <div className="rounded-2xl border border-slate-100 dark:border-white/5 bg-white shadow-sm dark:bg-white dark:bg-[#12162C] overflow-hidden cm-fade-up" style={{ animationDelay: "380ms" }}>
      <TableToolbar
        visibleCols={visibleCols}
        onToggleColumn={onToggleColumn}
        selectedCount={selectedCount}
        onBulkEmail={onBulkEmail}
        onBulkExport={onBulkExport}
        onBulkDelete={onBulkDelete}
        sort={sort}
        onSortChange={onSortChange}
      />

      <ClientesTable
        loading={loading}
        clientes={clientes}
        visibleCols={visibleCols}
        allSelected={allSelected}
        onToggleSelectAll={onToggleSelectAll}
        isSelected={isSelected}
        onToggleSelect={onToggleSelect}
        sort={sort}
        onToggleSort={onToggleSort}
        onView={onView}
        onEdit={onEdit}
        onDelete={onDelete}
        onNovoCliente={onNovoCliente}
      />

      <TablePagination
        shownCount={shownCount}
        totalCount={totalCount}
        page={page}
        totalPages={totalPages}
        onPrev={onPrev}
        onNext={onNext}
        perPage={perPage}
        onPerPageChange={onPerPageChange}
      />
    </div>
  );
}
