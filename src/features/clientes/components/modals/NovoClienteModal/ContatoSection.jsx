import { Phone } from "lucide-react";

import {
  FormField,
  TextInput,
} from "../../../../../shared/components/forms/FormField.jsx";

/**
 * Seção de contato do cliente.
 */
export function ContatoSection({
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
          <Phone size={18} strokeWidth={2} />
        </div>

        <div>
          <legend
            className="
              text-sm font-semibold
              text-slate-900
              dark:text-white
            "
          >
            Contato
          </legend>

          <p
            className="
              mt-0.5 text-xs
              text-slate-500
              dark:text-slate-400
            "
          >
            Telefone e canais de comunicação do cliente.
          </p>
        </div>
      </div>

      {/* Telefone + WhatsApp */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField
            label="Telefone"
            required
            error={errors.telefone}
          >
            <TextInput
              type="tel"
              value={form.telefone}
              onChange={(e) =>
                setField("telefone", e.target.value)
              }
              placeholder="(89) 99999-9999"
              error={errors.telefone}
            />
          </FormField>

          <FormField label="WhatsApp">
            <TextInput
              type="tel"
              value={form.whatsapp}
              onChange={(e) =>
                setField("whatsapp", e.target.value)
              }
              placeholder="(89) 99999-9999"
            />
          </FormField>
        </div>

        {/* E-mail */}
        <FormField
          label="E-mail"
          error={errors.email}
        >
          <TextInput
            type="email"
            value={form.email}
            onChange={(e) =>
              setField("email", e.target.value)
            }
            placeholder="exemplo@email.com"
            error={errors.email}
          />
        </FormField>
      </div>
    </fieldset>
  );
}