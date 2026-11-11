/** POST /api/contas-receber/{id}/cancelamento */
export const applyCancelamento = (conta, form, hoje) => ({
  ...conta, cancelada: { data: hoje, motivo: form.motivo, observacao: form.observacao ?? '' },
});
