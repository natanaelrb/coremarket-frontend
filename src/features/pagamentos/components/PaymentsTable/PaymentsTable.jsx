import { TABLE_COLUMNS } from '../../constants/index.js';
import { PaymentsTableRow } from './PaymentsTableRow.jsx';
import { TableSkeleton } from './TableSkeleton.jsx';
import { EmptyRow } from './EmptyRow.jsx';
import { Pagination } from './Pagination.jsx';
import { cn } from '../../../../shared/utils/cn.js';

/**
 * Payments data table with header, body (rows/skeleton/empty state) and
 * pagination footer.
 * @param {{
 *  pagination: ReturnType<typeof import('../../hooks/usePagination.js').usePagination>,
 *  isLoading: boolean,
 *  onVerDetalhes: (id: string) => void,
 *  onBaixarComprovante: (id: string) => void,
 *  onEstornar: (id: string) => void,
 * }} props
 */
export function PaymentsTable({ pagination, isLoading, onVerDetalhes, onBaixarComprovante, onEstornar }) {
  const { pageItems, page, totalPages, totalItems, pageSize, setPage, setPageSize } = pagination;

  return (
    <div className="card-surface animate-fade-in overflow-hidden rounded-[var(--radius-card)]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/60 dark:border-slate-800 dark:bg-slate-800/30">
              {TABLE_COLUMNS.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    'whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400',
                    col.align === 'right' ? 'text-right' : 'text-left'
                  )}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
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
                  onBaixarComprovante={() => onBaixarComprovante(pagamento.id)}
                  onEstornar={() => onEstornar(pagamento.id)}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        totalItems={totalItems}
        pageSize={pageSize}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
    </div>
  );
}
