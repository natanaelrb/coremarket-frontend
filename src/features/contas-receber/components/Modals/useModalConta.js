import { useContasReceberContext } from '../../hooks/useContasReceberContext';

/** Resolve a conta do modal aberto a partir do payload. */
export function useModalConta(contaId) {
  const ctx = useContasReceberContext();
  return { ...ctx, conta: ctx.contas.find((c) => c.id === contaId) ?? null };
}
