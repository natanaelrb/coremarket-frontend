import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';
import ModalTabs from './ModalTabs';
import EntradaForm from './EntradaForm';
import SaidaForm from './SaidaForm';
import AjusteForm from './AjusteForm';
import TransferenciaForm from './TransferenciaForm';

const FORM_BY_TAB = {
  ENTRADA: EntradaForm,
  SAIDA: SaidaForm,
  AJUSTE: AjusteForm,
  TRANSFERENCIA: TransferenciaForm,
};

// Orquestra o modal "Nova movimentação" — todo o estado vem de hooks/useNewMovementModal.
export default function NewMovementModal({
  isOpen, onClose, tabs, activeTab, onChangeTab, isSubmitting, justSubmitted, onSubmit,
}) {
  const [formData, setFormData] = useState({});
  const FormComponent = FORM_BY_TAB[activeTab];

  function updateField(key, value) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#141833] shadow-2xl"
          >
            <div className="flex items-center justify-between px-5 pt-4">
              <h3 className="text-sm font-semibold text-white">Nova movimentação</h3>
              <button onClick={onClose} className="rounded-lg p-1 text-slate-500 hover:bg-white/10 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            </div>

            <ModalTabs tabs={tabs} activeTab={activeTab} onChange={onChangeTab} />

            <div className="p-5">
              {justSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-2 py-8 text-center"
                >
                  <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                  <p className="text-sm font-medium text-white">Movimentação registrada com sucesso!</p>
                </motion.div>
              ) : (
                <>
                  <FormComponent formData={formData} onChange={updateField} />
                  <div className="mt-5 flex justify-end gap-2">
                    <button
                      onClick={onClose}
                      className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 hover:border-white/20"
                    >
                      Cancelar
                    </button>
                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      disabled={isSubmitting}
                      onClick={() => onSubmit(formData)}
                      className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-500 disabled:opacity-60"
                    >
                      {isSubmitting ? 'Salvando...' : 'Registrar movimentação'}
                    </motion.button>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
