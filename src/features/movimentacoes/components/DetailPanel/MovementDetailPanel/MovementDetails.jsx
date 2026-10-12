import { motion } from 'framer-motion';

import ProductInfoSection from '../ProductInfoSection';
import MovementInfoSection from '../MovementInfoSection';
import StockInfoSection from '../StockInfoSection';
import OriginInfoSection from '../OriginInfoSection';

import ResponsibleSection from '../ResponsibleSection';
import ReasonSection from '../ReasonSection';
import AdditionalInfoSection from '../AdditionalInfoSection';
import RegistryActionsSection from '../RegistryActionsSection';

export default function MovementDetails({
  movement,
  onPrint,
  onExport,
  onReverse,
}) {
  return (
    <div className="grid grid-cols-1 gap-[14px] xl:grid-cols-12">
      {/* Coluna principal */}
      <motion.div
        initial={{
          opacity: 0,
          x: -12,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.4,
          delay: 0.1,
          ease: 'easeOut',
        }}
        className="
          flex
          flex-col
          gap-[14px]
          xl:col-span-8
        "
      >
        <ProductInfoSection
          produto={movement.produto}
        />

        <MovementInfoSection
          movement={movement}
        />

        <StockInfoSection
          movement={movement}
        />

        <OriginInfoSection
          movement={movement}
        />
      </motion.div>

      {/* Coluna lateral */}
      <motion.div
        initial={{
          opacity: 0,
          x: 12,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.4,
          delay: 0.14,
          ease: 'easeOut',
        }}
        className="
          flex
          flex-col
          gap-[14px]
          xl:col-span-4
        "
      >
        <ResponsibleSection
          usuario={movement.usuario}
        />

        <ReasonSection
          motivo={movement.motivo}
          observacao={movement.observacao}
        />

        <AdditionalInfoSection
          movement={movement}
        />

        <RegistryActionsSection
          onPrint={onPrint}
          onExport={onExport}
          onReverse={onReverse}
        />
      </motion.div>
    </div>
  );
}