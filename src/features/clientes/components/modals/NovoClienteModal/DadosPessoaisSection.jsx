import { FormField, TextInput, SelectInput } from "../../../../../shared/components/forms/FormField.jsx";
import { GENERO_PESSOA } from "../../../../../shared/constants/enums.js";

const GENERO_LABELS = {
  [GENERO_PESSOA.MASCULINO]: 'Masculino',
  [GENERO_PESSOA.FEMININO]: 'Feminino',
  [GENERO_PESSOA.OUTRO]: 'Outro',
  [GENERO_PESSOA.PREFIRO_NAO_INFORMAR]: 'Prefiro não informar',
}

/** "Dados pessoais" fieldset: name, CPF/CNPJ, birth date, gender. */
export function DadosPessoaisSection({ form, setField, errors }) {
  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-semibold text-white light:text-slate-900 mb-1">Dados pessoais</legend>
      <FormField label="Nome completo" required error={errors.nomeCompleto}>
        <TextInput
          value={form.nomeCompleto}
          onChange={(e) => setField('nomeCompleto', e.target.value)}
          placeholder="Ex: João da Silva"
          error={errors.nomeCompleto}
        />
      </FormField>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="CPF/CNPJ" required error={errors.documento}>
          <TextInput
            value={form.documento}
            onChange={(e) => setField('documento', e.target.value)}
            placeholder="000.000.000-00"
            error={errors.documento}
          />
        </FormField>
        <FormField label="Data de nascimento">
          <TextInput
            type="date"
            value={form.dataNascimento}
            onChange={(e) => setField('dataNascimento', e.target.value)}
          />
        </FormField>
      </div>

      <FormField label="Gênero (opcional)">
        <SelectInput value={form.genero} onChange={(e) => setField('genero', e.target.value)}>
          <option value="">Selecione</option>
          {Object.entries(GENERO_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </SelectInput>
      </FormField>
    </fieldset>
  )
}
