import { motion } from 'framer-motion';
import { Printer, Download, RotateCcw } from 'lucide-react';
import DetailSectionCard from './DetailSectionCard';

export default function RegistryActionsSection() {
  return (
    <DetailSectionCard title="Ações do registro">
      <div className="flex flex-wrap gap-2">
        <motion.button whileTap={{ scale: 0.96 }} className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-white/20">
          <Printer className="h-3.5 w-3.5" /> Imprimir
        </motion.button>
        <motion.button whileTap={{ scale: 0.96 }} className="flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-white/20">
          <Download className="h-3.5 w-3.5" /> Exportar
        </motion.button>
        <motion.button whileTap={{ scale: 0.96 }} className="flex items-center gap-1.5 rounded-lg border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-400 hover:bg-red-500/20">
          <RotateCcw className="h-3.5 w-3.5" /> Estornar movimentação
        </motion.button>
      </div>
    </DetailSectionCard>
  );
}
