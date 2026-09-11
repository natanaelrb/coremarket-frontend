import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import { pagamentoService } from '../services/pagamentoService.js';

const INITIAL_FORM = {
  pessoa: '',
  origemReferencia: '',
  forma: 'BOLETO',
  valor: '',
  dataVencimento: '',
};

/** Owns the "Registrar pagamento" modal — mirrors useRegistrarRecebimento. */
export function useRegistrarPagamento(onRegistered) {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => {
    setIsOpen(false);
    setForm(INITIAL_FORM);
  }, []);

  const updateField = useCallback((field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  }, []);

  const submit = useCallback(async () => {
    setIsSubmitting(true);
    try {
      await pagamentoService.registrarPagamento(form);
      toast.success('Pagamento registrado com sucesso!');
      onRegistered?.();
      close();
    } catch (err) {
      toast.error('Não foi possível registrar o pagamento.');
    } finally {
      setIsSubmitting(false);
    }
  }, [form, onRegistered, close]);

  return { isOpen, open, close, form, updateField, submit, isSubmitting };
}
