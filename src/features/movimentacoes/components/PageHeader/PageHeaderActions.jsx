import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Download, Printer, RefreshCw, ChevronDown } from "lucide-react";

import useClickOutside from "../../../../shared/hooks/useClickOutside.js";
import { EXPORT_FORMATS } from "../../utils/exportHelpers.js";

export default function PageHeaderActions({
  onNewMovement,
  onExport,
  onPrint,
  onRefresh,
  isRefreshing,
}) {
  const [isExportOpen, setIsExportOpen] = useState(false);

  const exportRef = useRef(null);

  useClickOutside(exportRef, () => setIsExportOpen(false), isExportOpen);

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Nova movimentação */}

      {/* Exportar */}
      <div className="relative" ref={exportRef}>
        <motion.button
          type="button"
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsExportOpen((value) => !value)}
          className={`
            inline-flex items-center justify-center gap-2
            rounded-lg
            border
            px-3.5 py-2.5
            text-sm font-medium
            transition-all
            focus:outline-none
            focus:ring-2 focus:ring-green-500/20
            ${
              isExportOpen
                ? "border-green-200 bg-green-50 text-green-700"
                : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-800"
            }
          `}
        >
          <Download className="h-4 w-4" strokeWidth={2} />

          <span>Exportar</span>

          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${
              isExportOpen ? "rotate-180" : ""
            }`}
          />
        </motion.button>

        <AnimatePresence>
          {isExportOpen && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: -5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: -5,
              }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
              className="
                absolute right-0 top-[calc(100%+8px)] z-50
                w-44
                overflow-hidden
                rounded-xl
                border border-slate-200
                bg-white
                p-1
                shadow-xl shadow-slate-900/10
              "
            >
              <div className="border-b border-slate-100 px-3 py-2">
                <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Exportar como
                </span>
              </div>

              {EXPORT_FORMATS.map((format) => (
                <button
                  key={format.key}
                  type="button"
                  onClick={() => {
                    onExport(format.key);
                    setIsExportOpen(false);
                  }}
                  className="
                    flex w-full items-center
                    rounded-lg
                    px-3 py-2.5
                    text-left
                    text-sm font-medium text-slate-600
                    transition-colors
                    hover:bg-green-50
                    hover:text-green-700
                  "
                >
                  {format.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Imprimir */}
      <motion.button
        type="button"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        onClick={onPrint}
        className="
          inline-flex items-center justify-center gap-2
          rounded-lg
          border border-slate-200
          bg-white
          px-3.5 py-2.5
          text-sm font-medium text-slate-600
          transition-all
          hover:border-slate-300
          hover:bg-slate-50
          hover:text-slate-800
          focus:outline-none
          focus:ring-2 focus:ring-green-500/20
        "
      >
        <Printer className="h-4 w-4" strokeWidth={2} />
        Imprimir
      </motion.button>

      {/* Atualizar */}
      <motion.button
        type="button"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        onClick={onRefresh}
        disabled={isRefreshing}
        className="
          inline-flex items-center justify-center gap-2
          rounded-lg
          border border-slate-200
          bg-white
          px-3.5 py-2.5
          text-sm font-medium text-slate-600
          transition-all
          hover:border-slate-300
          hover:bg-slate-50
          hover:text-slate-800
          disabled:cursor-not-allowed
          disabled:opacity-60
          focus:outline-none
          focus:ring-2 focus:ring-green-500/20
        "
      >
        <RefreshCw
          className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`}
          strokeWidth={2}
        />
        Atualizar
      </motion.button>

      {/* Nova movimentação */}
      <motion.button
        type="button"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        onClick={onNewMovement}
        className="
          inline-flex items-center justify-center gap-2
          rounded-lg
          bg-[#22C55E]
          px-4 py-2.5
          text-sm font-semibold text-white
          shadow-sm shadow-green-600/20
          transition-colors
          hover:bg-[#16A34A]
          focus:outline-none
          focus:ring-2 focus:ring-green-500/30
          focus:ring-offset-2
        "
      >
        <Plus className="h-4 w-4" strokeWidth={2.5} />
        Nova movimentação
      </motion.button>
    </div>
  );
}
