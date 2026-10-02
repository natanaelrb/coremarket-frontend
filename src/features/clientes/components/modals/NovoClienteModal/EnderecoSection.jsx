import { MapPin } from "lucide-react";

import {
  FormField,
  TextInput,
} from "../../../../../shared/components/forms/FormField.jsx";

/**
 * Seção de endereço do cliente.
 */
export function EnderecoSection({
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
          <MapPin size={18} strokeWidth={2} />
        </div>

        <div>
          <legend
            className="
              text-sm font-semibold
              text-slate-900
              dark:text-white
            "
          >
            Endereço
          </legend>

          <p
            className="
              mt-0.5 text-xs
              text-slate-500
              dark:text-slate-400
            "
          >
            Localização residencial ou comercial do cliente.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* CEP + Estado */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[1fr_120px]">
          <FormField label="CEP">
            <TextInput
              inputMode="numeric"
              value={form.cep}
              onChange={(e) =>
                setField("cep", e.target.value)
              }
              placeholder="00000-000"
            />
          </FormField>

          <FormField
            label="Estado"
            required
            error={errors.estado}
          >
            <TextInput
              value={form.estado}
              onChange={(e) =>
                setField(
                  "estado",
                  e.target.value.toUpperCase()
                )
              }
              placeholder="PI"
              maxLength={2}
              className="uppercase"
              error={errors.estado}
            />
          </FormField>
        </div>

        {/* Rua */}
        <FormField
          label="Rua"
          required
          error={errors.rua}
        >
          <TextInput
            value={form.rua}
            onChange={(e) =>
              setField("rua", e.target.value)
            }
            placeholder="Ex: Av. Principal"
            error={errors.rua}
          />
        </FormField>

        {/* Número + complemento */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-[140px_1fr]">
          <FormField
            label="Número"
            required
            error={errors.numero}
          >
            <TextInput
              inputMode="numeric"
              value={form.numero}
              onChange={(e) =>
                setField("numero", e.target.value)
              }
              placeholder="123"
              error={errors.numero}
            />
          </FormField>

          <FormField label="Complemento">
            <TextInput
              value={form.complemento}
              onChange={(e) =>
                setField(
                  "complemento",
                  e.target.value
                )
              }
              placeholder="Apto, Bloco..."
            />
          </FormField>
        </div>

        {/* Bairro */}
        <FormField
          label="Bairro"
          required
          error={errors.bairro}
        >
          <TextInput
            value={form.bairro}
            onChange={(e) =>
              setField("bairro", e.target.value)
            }
            placeholder="Centro"
            error={errors.bairro}
          />
        </FormField>
      </div>
    </fieldset>
  );
}