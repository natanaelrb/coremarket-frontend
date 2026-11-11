import { useContext } from 'react';
import { ContasReceberContext } from '../context/ContasReceberContext';

/** Acesso ao estado/ações do módulo dentro dos componentes. */
export function useContasReceberContext() {
  const ctx = useContext(ContasReceberContext);
  if (!ctx) throw new Error('useContasReceberContext deve ser usado dentro de <ContasReceberProvider>');
  return ctx;
}
