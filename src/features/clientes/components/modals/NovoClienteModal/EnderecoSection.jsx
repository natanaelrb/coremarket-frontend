import { FormField, TextInput } from "../../../../../shared/components/forms/FormField.jsx";

/** "Endereço" fieldset: CEP, rua, número, complemento, bairro, estado. */
export function EnderecoSection({ form, setField, errors }) {
  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-semibold text-white light:text-slate-900 mb-1">Endereço</legend>
      <div className="grid grid-cols-2 gap-4">
        <FormField label="CEP">
          <TextInput value={form.cep} onChange={(e) => setField('cep', e.target.value)} placeholder="00000-000" />
        </FormField>
        <FormField label="Rua" required error={errors.rua}>
          <TextInput
            value={form.rua}
            onChange={(e) => setField('rua', e.target.value)}
            placeholder="Ex: Av. Principal"
            error={errors.rua}
          />
        </FormField>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <FormField label="Número" required error={errors.numero}>
          <TextInput
            value={form.numero}
            onChange={(e) => setField('numero', e.target.value)}
            placeholder="123"
            error={errors.numero}
          />
        </FormField>
        <FormField label="Complemento">
          <TextInput value={form.complemento} onChange={(e) => setField('complemento', e.target.value)} placeholder="Apto, Bloco..." />
        </FormField>
        <FormField label="Bairro" required error={errors.bairro}>
          <TextInput
            value={form.bairro}
            onChange={(e) => setField('bairro', e.target.value)}
            placeholder="Centro"
            error={errors.bairro}
          />
        </FormField>
      </div>
      <FormField label="Estado" required error={errors.estado} className="max-w-[140px]">
        <TextInput
          value={form.estado}
          onChange={(e) => setField('estado', e.target.value.toUpperCase())}
          placeholder="PI"
          maxLength={2}
          error={errors.estado}
        />
      </FormField>
    </fieldset>
  )
}
