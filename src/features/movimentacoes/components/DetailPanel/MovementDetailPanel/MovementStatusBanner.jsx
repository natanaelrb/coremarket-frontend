import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function MovementStatusBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: 0.28,
      }}
      className="
        mt-[14px]
        flex
        items-center
        justify-between
        gap-4
        rounded-xl
        border
        border-emerald-200
        bg-emerald-50
        px-4
        py-3
      "
    >
      <div className="flex min-w-0 items-center gap-3">
        <div
          className="
            flex
            h-8
            w-8
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-emerald-200
            bg-emerald-100
            text-emerald-600
          "
        >
          <Check
            className="h-4 w-4"
            strokeWidth={2}
          />
        </div>

        <div className="min-w-0">
          <p className="text-xs font-semibold text-emerald-800">
            Movimentação registrada com sucesso
          </p>

          <p className="mt-0.5 truncate text-[10px] text-emerald-600">
            Esta movimentação foi concluída e já está refletida no estoque.
          </p>
        </div>
      </div>

      <div
        className="
          hidden
          shrink-0
          items-center
          gap-1.5
          text-[10px]
          font-semibold
          text-emerald-600
          sm:flex
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Verificado
      </div>
    </motion.div>
  );
}