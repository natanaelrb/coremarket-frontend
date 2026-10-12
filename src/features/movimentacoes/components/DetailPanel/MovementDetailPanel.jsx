import { motion } from 'framer-motion';

import DetailPanelHeader from './DetailPanelHeader';

import MovementSummary from './MovementDetailPanel/MovementSummary';
import MovementDetails from './MovementDetailPanel/MovementDetails';
import MovementStatusBanner from './MovementDetailPanel/MovementStatusBanner';

export default function MovementDetailPanel({
  movement,
  onBack,
  onPrint,
  onExport,
  onReverse,
}) {
  if (!movement) return null;

  const quantidade = Number(
    movement.quantidade ?? 0,
  );

  const isPositive = quantidade > 0;
  const isNegative = quantidade < 0;

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
      }}
      className="
        min-h-screen
        bg-[#F8FAFC]
        text-slate-900
      "
    >
      <DetailPanelHeader
        movement={movement}
        onBack={onBack}
      />

      <div
        className="
          mx-auto
          w-[calc(100%+80px)]
          max-w-[1520px]
          -translate-x-10
          px-5
          pb-10
          pt-5
          sm:px-6
          lg:px-7
          2xl:px-8
        "
      >
        <MovementSummary
          movement={movement}
          isPositive={isPositive}
          isNegative={isNegative}
        />

        <MovementDetails
          movement={movement}
          onPrint={onPrint}
          onExport={onExport}
          onReverse={onReverse}
        />

        <MovementStatusBanner />
      </div>
    </motion.main>
  );
}