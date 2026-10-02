import {
  UserRound,
} from "lucide-react";

import {
  FormField,
  TextInput,
  SelectInput,
} from "../../../../../shared/components/forms/FormField.jsx";

import { GENERO_PESSOA } from "../../../../../shared/constants/enums.js";

const GENERO_LABELS = {
  [GENERO_PESSOA.MASCULINO]: "Masculino",
  [GENERO_PESSOA.FEMININO]: "Feminino",
  [GENERO_PESSOA.OUTRO]: "Outro",
  [GENERO_PESSOA.PREFIRO_NAO_INFORMAR]: "Prefiro não informar",
};

/**
 * Seção de dados pessoais do cliente.
 */
export function DadosPessoaisSection({
  form,
  setField,
  errors,
}) {
  return (
    <fieldset className="border-b border-slate-200 pb-6 dark:border-white/10">
      {/* Section header */}
      <div className="mb-5 flex items-start gap-3">
        <div
          className="
            flex h-9 w-9 shrink-0 items-center justify-center
            rounded-lg
            bg-emerald-50
            text-emerald-600
            ring-1 ring-emerald-100
            dark:bg-emerald-500/10
            dark:text-emerald-400
            dark:ring-emerald-500/20
          "
        >
          <UserRound size={18} strokeWidth={2} />
        </div>

        <div>
          <legend
            className="
              text-sm font-semibold
              text-slate-900
              dark:text-white
            "
          >
            Dados pessoais
          </legend>

          <p
            className="
              mt-0.5 text-xs
              text-slate-500
              dark:text-slate-400
            "
          >
            Informações básicas para identificação do cliente.
          </p>
        </div>
      </div>

      {/* Nome */}
      <div className="space-y-4">
        <FormField
          label="Nome completo"
          required
          error={errors.nomeCompleto}
        >
          <TextInput
            value={form.nomeCompleto}
            onChange={(e) =>
              setField("nomeCompleto", e.target.value)
            }
            placeholder="Ex: João da Silva"
            error={errors.nomeCompleto}
          />
        </FormField>

        {/* Documento + nascimento */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            label="CPF/CNPJ"
            required
            error={errors.documento}
          >
            <TextInput
              value={form.documento}
              onChange={(e) =>
                setField("documento", e.target.value)
              }
              placeholder="000.000.000-00"
              error={errors.documento}
            />
          </FormField>

          <FormField label="Data de nascimento">
            <TextInput
              type="date"
              value={form.dataNascimento}
              onChange={(e) =>
                setField("dataNascimento", e.target.value)
              }
            />
          </FormField>
        </div>

        {/* Gênero */}
        <div className="max-w-[50%]">
          <FormField label="Gênero (opcional)">
            <SelectInput
              value={form.genero}
              onChange={(e) =>
                setField("genero", e.target.value)
              }
            >
              <option value="">Selecione</option>

              {Object.entries(GENERO_LABELS).map(
                ([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                )
              )}
            </SelectInput>
          </FormField>
        </div>
      </div>
    </fieldset>
  );
}