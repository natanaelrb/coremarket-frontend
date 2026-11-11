/** Próximo número sequencial de conta (CR-00241…). */
export const nextContaNumber = (contas) => contas.reduce((max, c) => Math.max(max, Number(c.id.replace(/\D/g, ''))), 0) + 1;
export const formatContaId = (n) => `CR-${String(n).padStart(5, '0')}`;
