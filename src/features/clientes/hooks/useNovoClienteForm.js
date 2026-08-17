import { useState } from "react";
import { maskCPF, maskPhone } from "../utils/masks";
import { CIDADES } from "../mocks/cidadesMock";

const INITIAL_FORM = {
  nome: "",
  tipo: "Pessoa Física",
  cpf: "",
  telefone: "",
  email: "",
  cidade: CIDADES[0],
};

/**
 * Estado + validação + submit do formulário "Novo cliente".
 * >>> Em produção, `submit` deve chamar clienteService.criar(form).
 */
export default function useNovoClienteForm(onSaved) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  function setField(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
    setErrors((e) => ({ ...e, [field]: null }));
  }

  function setCpf(value) {
    setField("cpf", maskCPF(value));
  }

  function setTelefone(value) {
    setField("telefone", maskPhone(value));
  }

  function validate() {
    const e = {};
    if (!form.nome.trim()) e.nome = "Informe o nome do cliente";
    if (form.cpf.replace(/\D/g, "").length < 11) e.cpf = "CPF incompleto";
    if (form.telefone.replace(/\D/g, "").length < 10) e.telefone = "Telefone incompleto";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "E-mail inválido";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function submit() {
    if (!validate()) return;
    setSaving(true);
    // >>> Substituir por chamada real: clienteService.criar(form)
    setTimeout(() => {
      setSaving(false);
      onSaved(form);
      setForm(INITIAL_FORM);
    }, 700);
  }

  return { form, errors, saving, setField, setCpf, setTelefone, submit };
}
