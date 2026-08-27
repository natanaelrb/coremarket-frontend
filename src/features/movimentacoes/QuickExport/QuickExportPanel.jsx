import { FileSpreadsheet, FileText, FileDown, ListFilter, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ExportOptionButton from './ExportOptionButton';
import { EXPORT_FORMATS } from "../utils/exportHelpers";

const ICONS = { xlsx: FileSpreadsheet, csv: FileText, pdf: FileDown };

// Orquestra o painel "Exportação rápida" — estado vem de hooks/useExport.
export default function QuickExportPanel({ onExport, isExporting, lastExport, filteredCount, totalCount }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-[#141833] p-5">
      <h3 className="mb-1 text-sm font-semibold text-white">Exportação rápida</h3>
      <p className="mb-4 text-xs text-slate-500">Exporte relatórios de movimentações</p>

      <ul className="mb-4 space-y-1.5 text-xs text-slate-400">
        <li className="flex items-center gap-1.5"><Layers className="h-3.5 w-3.5" /> Todas as movimentações ({totalCount})</li>
        <li className="flex items-center gap-1.5"><ListFilter className="h-3.5 w-3.5" /> Apenas as filtradas ({filteredCount})</li>
      </ul>

      <div className="grid grid-cols-3 gap-2">
        {EXPORT_FORMATS.map((fmt) => (
          <ExportOptionButton
            key={fmt.key}
            label={fmt.label.split(' ')[0]}
            icon={ICONS[fmt.key]}
            colorClass={fmt.color}
            isExporting={isExporting}
            onClick={() => onExport(fmt.key)}
          />
        ))}
      </div>

      <AnimatePresence>
        {lastExport && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-3 text-xs text-emerald-400"
          >
            {lastExport.fileName} gerado com sucesso.
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
