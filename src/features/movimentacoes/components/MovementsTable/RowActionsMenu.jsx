import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, MoreVertical, Printer, RotateCcw } from "lucide-react";
import useClickOutside from "../../../../shared/hooks/useClickOutside.js";

export default function RowActionsMenu({ onView, onPrint, onReverse }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => setIsOpen(false), isOpen);

  const handleView = () => {
    setIsOpen(false);
    onView?.();
  };

  const handlePrint = () => {
    setIsOpen(false);
    onPrint?.();
  };

  const handleReverse = () => {
    setIsOpen(false);
    onReverse?.();
  };

  return (
    <div ref={ref} className="relative flex items-center justify-end gap-1">
      {/* Ver detalhes */}
      <button
        type="button"
        onClick={handleView}
        title="Ver detalhes"
        aria-label="Ver detalhes da movimentação"
        className="
          rounded-lg p-1.5
          text-slate-400
          transition-all duration-200
          hover:bg-emerald-50
          hover:text-emerald-600
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-emerald-500/30
        "
      >
        <Eye className="h-4 w-4" strokeWidth={2} />
      </button>

      {/* Mais ações */}
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        title="Mais ações"
        aria-label="Mais ações"
        aria-expanded={isOpen}
        className={`
          rounded-lg p-1.5
          transition-all duration-200
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-emerald-500/30
          ${
            isOpen
              ? "bg-slate-100 text-slate-700"
              : "text-slate-400 hover:bg-slate-100 hover:text-slate-700"
          }
        `}
      >
        <MoreVertical className="h-4 w-4" strokeWidth={2} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: -4,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.96,
              y: -4,
            }}
            transition={{
              duration: 0.15,
              ease: "easeOut",
            }}
            className="
              absolute right-0 top-[calc(100%+6px)] z-30
              w-48
              overflow-hidden
              rounded-xl
              border border-slate-200
              bg-white
              p-1
              shadow-lg
              shadow-slate-900/10
            "
          >
            {/* Imprimir */}
            <button
              type="button"
              onClick={handlePrint}
              className="
                flex w-full items-center gap-2.5
                rounded-lg
                px-3 py-2.5
                text-left text-sm font-medium
                text-slate-600
                transition-colors
                hover:bg-slate-50
                hover:text-slate-900
                focus:outline-none
                focus-visible:bg-slate-50
              "
            >
              <span
                className="
                  flex h-7 w-7 shrink-0
                  items-center justify-center
                  rounded-lg
                  bg-slate-100
                  text-slate-500
                "
              >
                <Printer className="h-3.5 w-3.5" strokeWidth={2} />
              </span>

              <span>Imprimir</span>
            </button>

            {/* Estornar */}
            <button
              type="button"
              onClick={handleReverse}
              className="
                flex w-full items-center gap-2.5
                rounded-lg
                px-3 py-2.5
                text-left text-sm font-medium
                text-red-600
                transition-colors
                hover:bg-red-50
                focus:outline-none
                focus-visible:bg-red-50
              "
            >
              <span
                className="
                  flex h-7 w-7 shrink-0
                  items-center justify-center
                  rounded-lg
                  bg-red-50
                  text-red-500
                "
              >
                <RotateCcw className="h-3.5 w-3.5" strokeWidth={2} />
              </span>

              <span>Estornar</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
