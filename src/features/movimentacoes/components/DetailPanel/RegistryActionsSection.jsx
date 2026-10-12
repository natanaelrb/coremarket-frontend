import { motion } from 'framer-motion';
import {
  Download,
  Printer,
  RotateCcw,
} from 'lucide-react';

import DetailSectionCard from './DetailSectionCard';

const buttonBase = `
  group/button
  inline-flex
  items-center
  justify-center
  gap-2
  rounded-xl
  border
  px-3.5
  py-2.5
  text-xs
  font-semibold
  transition-all
  duration-200
  focus:outline-none
`;

export default function RegistryActionsSection({
  onPrint,
  onExport,
  onReverse,
}) {
  return (
    <DetailSectionCard title="Ações do registro">
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {/* Imprimir */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={onPrint}
          className={`
            ${buttonBase}
            border-slate-200
            bg-slate-50
            text-slate-600
            hover:-translate-y-0.5
            hover:border-slate-300
            hover:bg-slate-100
            hover:text-slate-800
            hover:shadow-[0_5px_14px_rgba(15,23,42,0.06)]
            focus-visible:ring-2
            focus-visible:ring-slate-400/30
          `}
        >
          <span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg
              border
              border-slate-200
              bg-white
              text-slate-500
              transition-all
              duration-200
              group-hover/button:scale-105
              group-hover/button:border-slate-300
            "
          >
            <Printer
              className="h-3.5 w-3.5"
              strokeWidth={2}
            />
          </span>

          <span>Imprimir</span>
        </motion.button>

        {/* Exportar */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={onExport}
          className={`
            ${buttonBase}
            border-blue-200
            bg-blue-50
            text-blue-700
            hover:-translate-y-0.5
            hover:border-blue-300
            hover:bg-blue-100
            hover:shadow-[0_5px_16px_rgba(59,130,246,0.10)]
            focus-visible:ring-2
            focus-visible:ring-blue-500/30
          `}
        >
          <span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg
              border
              border-blue-100
              bg-white
              text-blue-600
              transition-all
              duration-200
              group-hover/button:scale-105
              group-hover/button:border-blue-200
              group-hover/button:bg-blue-50
            "
          >
            <Download
              className="h-3.5 w-3.5"
              strokeWidth={2}
            />
          </span>

          <span>Exportar</span>
        </motion.button>

        {/* Estornar */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          onClick={onReverse}
          className={`
            ${buttonBase}
            border-red-200
            bg-red-50
            text-red-700
            hover:-translate-y-0.5
            hover:border-red-300
            hover:bg-red-100
            hover:shadow-[0_5px_16px_rgba(239,68,68,0.10)]
            focus-visible:ring-2
            focus-visible:ring-red-500/30
            sm:col-span-2
          `}
        >
          <span
            className="
              flex
              h-7
              w-7
              items-center
              justify-center
              rounded-lg
              border
              border-red-100
              bg-white
              text-red-600
              transition-all
              duration-200
              group-hover/button:scale-105
              group-hover/button:border-red-200
              group-hover/button:bg-red-50
            "
          >
            <RotateCcw
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover/button:-rotate-45"
              strokeWidth={2}
            />
          </span>

          <span>Estornar movimentação</span>
        </motion.button>
      </div>
    </DetailSectionCard>
  );
}