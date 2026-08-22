import { useState } from 'react';

const TABS = ['ENTRADA', 'SAIDA', 'AJUSTE', 'TRANSFERENCIA'];

// Controla abertura/fechamento e aba ativa do modal "Nova movimentação".
export function useNewMovementModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('ENTRADA');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [justSubmitted, setJustSubmitted] = useState(false);

  function open() {
    setIsOpen(true);
    setJustSubmitted(false);
  }

  function close() {
    setIsOpen(false);
  }

  function submit(formData) {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setJustSubmitted(true);
      setTimeout(() => setIsOpen(false), 900);
    }, 700);
  }

  return { isOpen, open, close, activeTab, setActiveTab, tabs: TABS, isSubmitting, justSubmitted, submit };
}
