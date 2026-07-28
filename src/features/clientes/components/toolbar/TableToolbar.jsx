import ColumnsMenu from "./ColumnsMenu";
import BulkActionsBar from "./BulkActionsBar";
import SortMenu from "./SortMenu";

export default function TableToolbar({
  visibleCols,
  onToggleColumn,
  selectedCount,
  onBulkEmail,
  onBulkExport,
  onBulkDelete,
  sort,
  onSortChange,
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        px-6
        py-5
        border-b
        border-white/5
        
      "
    >
      <ColumnsMenu
        visibleCols={visibleCols}
        onToggleColumn={onToggleColumn}
      />

      {selectedCount > 0 ? (
        <BulkActionsBar
          count={selectedCount}
          onEmail={onBulkEmail}
          onExport={onBulkExport}
          onDelete={onBulkDelete}
        />
      ) : (
        <SortMenu
          sort={sort}
          onSortChange={onSortChange}
        />
      )}
    </div>
  );
}