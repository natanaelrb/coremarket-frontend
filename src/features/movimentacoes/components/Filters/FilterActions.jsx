import { motion } from 'framer-motion';
import { XCircle, Filter } from 'lucide-react';

export default function FilterActions({ onClear, onApply }) {
  return (
    <div className="flex w-full items-center justify-end gap-2">
      {/* Ação secundária */}
      <motion.button
        type="button"
        onClick={onClear}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        className="
          flex
          h-10
          items-center
          gap-1.5
          rounded-lg
          border border-slate-200
          bg-white
          px-4
          text-sm
          font-medium
          text-slate-600
          transition
          hover:border-slate-300
          hover:bg-slate-50
          hover:text-slate-700
        "
      >
        <XCircle className="h-4 w-4" strokeWidth={2} />
        Limpar filtros
      </motion.button>

      {/* Ação principal */}
      <motion.button
        type="button"
        onClick={onApply}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        className="
          flex
          h-10
          items-center
          gap-1.5
          rounded-lg
          bg-emerald-500
          px-4
          text-sm
          font-semibold
          text-white
          shadow-sm
          shadow-emerald-500/20
          transition
          hover:bg-emerald-600
          hover:shadow-md
          hover:shadow-emerald-500/20
        "
      >
        <Filter className="h-4 w-4" strokeWidth={2} />
        Aplicar filtros
      </motion.button>
    </div>
  );
}