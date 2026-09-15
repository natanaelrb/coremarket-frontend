import { FormField, TextInput } from "../../../../../shared/components/forms/FormField.jsx";

/** "Contato" fieldset: phone, WhatsApp, e-mail. */
export function ContatoSection({ form, setField, errors }) {
  return (
    <fieldset className="space-y-4">
      <legend className="text-sm font-semibold text-white light:text-slate-900 mb-1">Contato</legend>
      <div className="grid grid-cols-2 gap-4">
        <FormField label="Telefone" required error={errors.telefone}>
          <TextInput
            value={form.telefone}
            onChange={(e) => setField('telefone', e.target.value)}
            placeholder="(89) 99999-9999"
            error={errors.telefone}
          />
        </FormField>
        <FormField label="WhatsApp">
          <TextInput
            value={form.whatsapp}
            onChange={(e) => setField('whatsapp', e.target.value)}
            placeholder="(89) 99999-9999"
          />
        </FormField>
      </div>
      <FormField label="E-mail" error={errors.email}>
        <TextInput
          type="email"
          value={form.email}
          onChange={(e) => setField('email', e.target.value)}
          placeholder="exemplo@email.com"
          error={errors.email}
        />
      </FormField>
    </fieldset>
  )
}
