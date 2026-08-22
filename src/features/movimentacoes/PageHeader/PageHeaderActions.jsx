import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Download, Printer, RefreshCw, ChevronDown } from 'lucide-react';
import { useClickOutside } from "../hooks/useClickOutside";
import { EXPORT_FORMATS } from "../utils/exportHelpers";

export default function PageHeaderActions({ onNewMovement, onExport, onPrint, onRefresh, isRefreshing }) {
  const [isExportOpen, setIsExportOpen] = useState(false);
  const exportRef = useRef(null);
  useClickOutside(exportRef, () => setIsExportOpen(false), isExportOpen);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        onClick={onNewMovement}
        className="flex items-center gap-1.5 rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-600/20 hover:bg-violet-500"
      >
        <Plus className="h-4 w-4" /> Nova movimentação
      </motion.button>

      <div className="relative" ref={exportRef}>
        <motion.button
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsExportOpen((v) => !v)}
          className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3.5 py-2 text-sm font-medium text-slate-300 hover:border-white/20"
        >
          <Download className="h-4 w-4" /> Exportar <ChevronDown className="h-3.5 w-3.5" />
        </motion.button>
        <AnimatePresence>
          {isExportOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -4 }}
              className="absolute right-0 top-11 z-20 w-40 overflow-hidden rounded-lg border border-white/10 bg-[#1B1F3F] py-1 shadow-xl"
            >
              {EXPORT_FORMATS.map((fmt) => (
                <button
                  key={fmt.key}
                  onClick={() => { onExport(fmt.key); setIsExportOpen(false); }}
                  className="flex w-full items-center px-3 py-2 text-left text-sm text-slate-300 hover:bg-white/5"
                >
                  {fmt.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        onClick={onPrint}
        className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3.5 py-2 text-sm font-medium text-slate-300 hover:border-white/20"
      >
        <Printer className="h-4 w-4" /> Imprimir
      </motion.button>

      <motion.button
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        onClick={onRefresh}
        className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3.5 py-2 text-sm font-medium text-slate-300 hover:border-white/20"
      >
        <RefreshCw className={`h-4 w-4 ${isRefreshing ? 'animate-spin' : ''}`} /> Atualizar
      </motion.button>
    </div>
  );
}
