import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, MoreVertical, Printer, RotateCcw } from 'lucide-react';
import { useClickOutside } from "../hooks/useClickOutside";

export default function RowActionsMenu({ onView }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside(ref, () => setIsOpen(false), isOpen);

  return (
    <div className="relative flex items-center justify-end gap-1" ref={ref}>
      <button
        type="button"
        onClick={onView}
        title="Ver detalhes"
        className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
      >
        <Eye className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        title="Mais ações"
        className="rounded-lg p-1.5 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
      >
        <MoreVertical className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-9 z-20 w-44 overflow-hidden rounded-lg border border-white/10 bg-[#1B1F3F] py-1 shadow-xl"
          >
            <button className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-slate-300 hover:bg-white/5">
              <Printer className="h-3.5 w-3.5" /> Imprimir
            </button>
            <button className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-red-400 hover:bg-white/5">
              <RotateCcw className="h-3.5 w-3.5" /> Estornar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
