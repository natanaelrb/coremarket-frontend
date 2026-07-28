import { X } from "lucide-react";
import { ModalTextField, ModalSelectField } from "./ModalFormFields";
import useNovoClienteForm from "../../hooks/useNovoClienteForm";
import { CIDADES } from "../../mocks/cidadesMock";
import ModalFooter from "./ModalFooter";

export default function NovoClienteModal({ onClose, onSaved }) {
  const { form, errors, saving, setField, setCpf, setTelefone, submit } =
    useNovoClienteForm(onSaved);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 cm-backdrop">
      <div
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg rounded-2xl bg-white dark:bg-white dark:bg-[#12162C] border border-slate-200 dark:border-slate-200 dark:border-white/10 shadow-2xl cm-modal">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-white/5">
          <h3 className="text-[15px] font-semibold text-slate-900 dark:text-[var(--sidebar-text)]">
            Novo cliente
          </h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <div className="px-6 py-5 space-y-4 max-h-[65vh] overflow-y-auto">
          <ModalTextField
            label="Nome completo"
            value={form.nome}
            onChange={(v) => setField("nome", v)}
            placeholder="Ex: Maria da Silva"
            error={errors.nome}
          />

          <div className="grid grid-cols-2 gap-3">
            <ModalSelectField
              label="Tipo"
              value={form.tipo}
              onChange={(v) => setField("tipo", v)}
              options={["Pessoa Física", "Pessoa Jurídica"]}
            />
            <ModalSelectField
              label="Cidade"
              value={form.cidade}
              onChange={(v) => setField("cidade", v)}
              options={CIDADES}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <ModalTextField
              label={form.tipo === "Pessoa Jurídica" ? "CNPJ" : "CPF"}
              value={form.cpf}
              onChange={setCpf}
              placeholder="000.000.000-00"
              error={errors.cpf}
            />
            <ModalTextField
              label="Telefone"
              value={form.telefone}
              onChange={setTelefone}
              placeholder="(89) 99999-9999"
              error={errors.telefone}
            />
          </div>

          <ModalTextField
            label="E-mail (opcional)"
            value={form.email}
            onChange={(v) => setField("email", v)}
            placeholder="cliente@email.com"
            error={errors.email}
          />
        </div>

        <ModalFooter onCancel={onClose} onSave={submit} saving={saving} />
      </div>
    </div>
  );
}
