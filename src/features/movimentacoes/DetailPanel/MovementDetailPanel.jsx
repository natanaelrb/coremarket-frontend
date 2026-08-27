import { AnimatePresence, motion } from 'framer-motion';
import DetailPanelHeader from './DetailPanelHeader';
import ProductInfoSection from './ProductInfoSection';
import MovementInfoSection from './MovementInfoSection';
import StockInfoSection from './StockInfoSection';
import OriginInfoSection from './OriginInfoSection';
import ResponsibleSection from './ResponsibleSection';
import ReasonSection from './ReasonSection';
import AdditionalInfoSection from './AdditionalInfoSection';
import RegistryActionsSection from './RegistryActionsSection';

// Painel lateral de detalhes — apenas orquestra as seções, sem lógica própria.
export default function MovementDetailPanel({ movement, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && movement && (
        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 24 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="w-full max-w-[360px] shrink-0 overflow-y-auto rounded-2xl border border-white/5 bg-[#141833]"
        >
          <DetailPanelHeader movement={movement} onClose={onClose} />
          <ProductInfoSection produto={movement.produto} />
          <MovementInfoSection movement={movement} />
          <StockInfoSection movement={movement} />
          <OriginInfoSection movement={movement} />
          <ResponsibleSection usuario={movement.usuario} />
          <ReasonSection motivo={movement.motivo} observacao={movement.observacao} />
          <AdditionalInfoSection movement={movement} />
          <RegistryActionsSection />
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
