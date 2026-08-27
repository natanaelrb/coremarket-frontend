import { useCallback, useState } from 'react';
import toast from 'react-hot-toast';
import { pagamentoService } from '../services/pagamentoService.js';

const INITIAL_FORM = {
  pessoa: '',
  origemReferencia: '',
  forma: 'PIX',
  valor: '',
  dataVencimento: '',
};

/**
 * Owns the "Registrar recebimento" modal: open state, form state and
 * the submit action against the service layer.
 * @param {() => void} [onRegistered] - called after a successful submit, e.g. to refresh the list.
 */
export function useRegistrarRecebimento(onRegistered) {
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
      await pagamentoService.registrarRecebimento(form);
      toast.success('Recebimento registrado com sucesso!');
      onRegistered?.();
      close();
    } catch (err) {
      toast.error('Não foi possível registrar o recebimento.');
    } finally {
      setIsSubmitting(false);
    }
  }, [form, onRegistered, close]);

  return { isOpen, open, close, form, updateField, submit, isSubmitting };
}
