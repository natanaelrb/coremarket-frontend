import { useEffect, useState } from "react";
import { validateRegistrarPagamento } from "../utils/validators.js";

/**
 * Owns the "Registrar pagamento" modal form state.
 * @param {import('../types/cliente.types.js').Cliente} cliente
 * @param {Array} contasEmAberto
 * @param {Object|null} contaSelecionada
 */
export function useRegistrarPagamentoForm(
  cliente,
  contasEmAberto = [],
  contaSelecionada = null,
  onConfirm
) {
  const contaInicial =
    contaSelecionada ??
    contasEmAberto[0] ??
    null;

  const [form, setForm] = useState({
    contaId: contaInicial?.id ?? "",
    valor: contaInicial?.saldo?.toString() ?? "",
    formaPagamento: "PIX",
    data: new Date().toISOString().slice(0, 10),
    observacao: "",
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const conta =
      contaSelecionada ??
      contasEmAberto.find(
        (item) => String(item.id) === String(form.contaId)
      ) ??
      contasEmAberto[0] ??
      null;

    if (!conta) {
      setForm((prev) => ({
        ...prev,
        contaId: "",
        valor: "",
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      contaId: conta.id,
      valor: conta.saldo?.toString() ?? "",
    }));

    setErrors({});
  }, [contaSelecionada, contasEmAberto]);

  function setField(field, value) {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  }

  // TODO(api): POST /api/clientes/{clienteId}/pagamentos
  async function confirmar() {
    const validation = validateRegistrarPagamento(form);

    setErrors(validation);

    if (Object.keys(validation).length > 0) {
      return false;
    }

    setSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    setSubmitting(false);

    onConfirm?.(form);

    return true;
  }

  return {
    form,
    setField,
    errors,
    submitting,
    confirmar,
  };
}