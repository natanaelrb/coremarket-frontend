/** POST /api/contas-receber/{id}/promessa-pagamento */
export const applyPromessa = (conta, form) => ({ ...conta, promessa: { data: form.data, observacao: form.observacao ?? '' } });
