import { motion } from 'framer-motion';
import { XCircle, Filter } from 'lucide-react';

export default function FilterActions({ onClear, onApply }) {
  return (
    <div className="flex items-end gap-2">
      <motion.button
        type="button"
        onClick={onClear}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-1.5 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:border-white/20"
      >
        <XCircle className="h-4 w-4" /> Limpar filtros
      </motion.button>
      <motion.button
        type="button"
        onClick={onApply}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-1.5 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-600/20 transition-colors hover:bg-violet-500"
      >
        <Filter className="h-4 w-4" /> Aplicar filtros
      </motion.button>
    </div>
  );
}
