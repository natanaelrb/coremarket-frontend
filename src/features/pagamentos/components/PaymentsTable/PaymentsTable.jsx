import { TABLE_COLUMNS } from '../../constants/index.js';
import { PaymentsTableRow } from './PaymentsTableRow.jsx';
import { TableSkeleton } from './TableSkeleton.jsx';
import { EmptyRow } from './EmptyRow.jsx';
import { Pagination } from './Pagination.jsx';
import { cn } from '../../../../shared/utils/cn.js';

/**
 * Payments data table with header, body (rows/skeleton/empty state) and
 * pagination footer.
 */
export function PaymentsTable({
  pagination,
  isLoading,
  onVerDetalhes,
  onBaixarComprovante,
  onEstornar,
}) {
  const {
    pageItems,
    page,
    totalPages,
    totalItems,
    pageSize,
    setPage,
    setPageSize,
  } = pagination;

  return (
    <div className="card-surface min-w-0 animate-fade-in overflow-hidden rounded-[var(--radius-card)] border border-slate-200/80 shadow-sm dark:border-white/10">
      <div className="min-w-0 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/80 dark:border-white/10 dark:bg-white/[0.03]">
              {TABLE_COLUMNS.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className={cn(
                    'whitespace-nowrap px-4 py-3.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-slate-500 sm:px-5 dark:text-slate-400',
                    col.align === 'right' ? 'text-right' : 'text-left'
                  )}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100 dark:divide-white/[0.06]">
            {isLoading ? (
              <TableSkeleton columns={TABLE_COLUMNS.length} />
            ) : pageItems.length === 0 ? (
              <EmptyRow columns={TABLE_COLUMNS.length} />
            ) : (
              pageItems.map((pagamento, index) => (
                <PaymentsTableRow
                  key={pagamento.id}
                  pagamento={pagamento}
                  delayMs={index * 25}
                  onVerDetalhes={() => onVerDetalhes(pagamento.id)}
                  onBaixarComprovante={() =>
                    onBaixarComprovante(pagamento.id)
                  }
                  onEstornar={() => onEstornar(pagamento.id)}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="border-t border-slate-200/80 dark:border-white/10">
        <Pagination
          page={page}
          totalPages={totalPages}
          totalItems={totalItems}
          pageSize={pageSize}
          onPageChange={setPage}
          onPageSizeChange={setPageSize}
        />
      </div>
    </div>
  );
}