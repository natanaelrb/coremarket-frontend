import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MovementsTableHeader from './MovementsTableHeader';
import MovementsTableRow from './MovementsTableRow';
import TableEmptyState from './TableEmptyState';
import TableToolbarInfo from './TableToolbarInfo';
import TablePagination from './TablePagination';
import { usePagination } from "../hooks/usePagination";

// Componente de renderização pura da tabela — todo o estado de paginação vive aqui
// via usePagination (dono do estado), o restante é recebido via props.
export default function MovementsTable({ movements, selectedId, onSelectMovement }) {
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const { currentPage, totalPages, paginatedItems, rangeLabel, goToPage } = usePagination(movements, itemsPerPage);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/5 bg-[#141833]">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <MovementsTableHeader />
          <tbody>
            <AnimatePresence initial={false}>
              {paginatedItems.length === 0 ? (
                <TableEmptyState />
              ) : (
                paginatedItems.map((movement) => (
                  <MovementsTableRow
                    key={movement.id}
                    movement={movement}
                    isSelected={movement.id === selectedId}
                    onSelect={onSelectMovement}
                  />
                ))
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
        <TableToolbarInfo rangeLabel={rangeLabel} />
      </div>

      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={goToPage}
        itemsPerPage={itemsPerPage}
        onItemsPerPageChange={setItemsPerPage}
      />
    </div>
  );
}
