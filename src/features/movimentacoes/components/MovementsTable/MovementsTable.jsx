import { motion, AnimatePresence } from "framer-motion";
import { ListFilter } from "lucide-react";
import { useState } from "react";

import MovementsTableHeader from "./MovementsTableHeader";
import MovementsTableRow from "./MovementsTableRow";
import TableEmptyState from "./TableEmptyState";
import TableToolbarInfo from "./TableToolbarInfo";
import TablePagination from "./TablePagination";
import { usePagination } from "../../hooks/usePagination";

export default function MovementsTable({ movements, onOpenMovement }) {
  const [itemsPerPage, setItemsPerPage] = useState(25);

  const { currentPage, totalPages, paginatedItems, rangeLabel, goToPage } =
    usePagination(movements, itemsPerPage);

  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="
        overflow-hidden
        rounded-2xl
        border border-slate-200
        bg-white
        shadow-sm
        shadow-slate-900/[0.04]
      "
    >
      {/* Cabeçalho da tabela */}
      <div
        className="
          flex
          flex-col
          gap-3
          border-b border-slate-200
          px-5
          py-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div className="flex items-center gap-3">
          <span
            className="
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-xl bg-emerald-50 text-emerald-600
            "
          >
            <ListFilter className="h-4 w-4" strokeWidth={2} />
          </span>

          <div>
            <h2 className="text-sm font-semibold text-slate-800">
              Movimentações registradas
            </h2>

            <p className="mt-0.5 text-xs text-slate-400">
              Histórico de entradas, saídas, ajustes e transferências.
            </p>
          </div>
        </div>

        <div className="text-xs font-medium text-slate-500">
          {movements.length}{" "}
          {movements.length === 1
            ? "registro encontrado"
            : "registros encontrados"}
        </div>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1080px] border-collapse">
          <MovementsTableHeader />

          <tbody className="divide-y divide-slate-100">
            <AnimatePresence initial={false}>
              {paginatedItems.length === 0 ? (
                <TableEmptyState />
              ) : (
                paginatedItems.map((movement) => (
                  <MovementsTableRow
                    key={movement.id}
                    movement={movement}
                    onOpenMovement={onOpenMovement}
                  />
                ))
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Informações da tabela */}
      <div
        className="
          flex
          flex-wrap
          items-center
          justify-between
          gap-3
          border-t border-slate-100
          bg-slate-50/50
          px-5
          py-3
        "
      >
        <TableToolbarInfo rangeLabel={rangeLabel} />
      </div>

      {/* Paginação */}
      <div className="border-t border-slate-200 bg-white px-5 py-3">
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={setItemsPerPage}
        />
      </div>
    </motion.section>
  );
}
