import { CreditCard, CircleCheck, CircleX } from "lucide-react";

import {
  FormField,
  TextInput,
  SelectInput,
  TextArea,
} from "../../../../../shared/components/forms/FormField.jsx";

import { STATUS_CLIENTE } from "../../../../../shared/constants/enums.js";
import { STATUS_CLIENTE_CONFIG } from "../../../constants/statusClienteConfig.js";
import { cn } from "../../../../../shared/utils/classNames.js";

/**
 * Seção de informações comerciais do cliente.
 */
export function InformacoesComerciaisSection({
  form,
  setField,
}) {
  return (
    <fieldset>
      {/* Section header */}
      <div className="mb-5 flex items-start gap-3">
        <div
          className="
            flex h-9 w-9 shrink-0 items-center justify-center
            rounded-lg
            bg-amber-50
            text-amber-600
            ring-1 ring-amber-100
            dark:bg-amber-500/10
            dark:text-amber-400
            dark:ring-amber-500/20
          "
        >
          <CreditCard size={18} strokeWidth={2} />
        </div>

        <div>
          <legend
            className="
              text-sm font-semibold
              text-slate-900
              dark:text-white
            "
          >
            Informações comerciais
          </legend>

          <p
            className="
              mt-0.5 text-xs
              text-slate-500
              dark:text-slate-400
            "
          >
            Defina condições comerciais e situação do cliente.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Limite + prazo */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField label="Limite de crédito">
            <TextInput
              type="number"
              min="0"
              step="0.01"
              value={form.limiteCredito}
              onChange={(e) =>
                setField("limiteCredito", e.target.value)
              }
              placeholder="1000,00"
              inputMode="decimal"
            />
          </FormField>

          <FormField label="Prazo padrão para pagamento">
            <SelectInput
              value={form.prazoPagamento}
              onChange={(e) =>
                setField("prazoPagamento", e.target.value)
              }
            >
              <option value="">Selecione</option>
              <option value="A_VISTA">À vista</option>
              <option value="7_DIAS">7 dias</option>
              <option value="15_DIAS">15 dias</option>
              <option value="30_DIAS">30 dias</option>
            </SelectInput>
          </FormField>
        </div>

        {/* Status */}
        <div>
          <span
            className="
              mb-2 block
              text-[12px]
              font-medium
              text-slate-600
              dark:text-slate-300
            "
          >
            Status
          </span>

          <div
            className="
              inline-flex
              rounded-xl
              border border-slate-200
              bg-slate-50
              p-1
              dark:border-white/10
              dark:bg-white/[0.03]
            "
          >
            {[STATUS_CLIENTE.ATIVO, STATUS_CLIENTE.INATIVO].map(
              (status) => {
                const ativo = form.status === status;
                const isAtivo = status === STATUS_CLIENTE.ATIVO;

                const Icon = isAtivo
                  ? CircleCheck
                  : CircleX;

                return (
                  <button
                    type="button"
                    key={status}
                    onClick={() => setField("status", status)}
                    className={cn(
                      `
                        inline-flex
                        items-center
                        gap-2
                        rounded-lg
                        px-4
                        py-2
                        text-xs
                        font-medium
                        transition-all
                        duration-150
                      `,
                      ativo
                        ? isAtivo
                          ? `
                              bg-emerald-500
                              text-white
                              shadow-sm
                              shadow-emerald-500/20
                            `
                          : `
                              bg-slate-600
                              text-white
                              shadow-sm
                            `
                        : `
                            text-slate-500
                            hover:bg-white
                            hover:text-slate-700
                            dark:text-slate-400
                            dark:hover:bg-white/5
                            dark:hover:text-slate-200
                          `
                    )}
                  >
                    <Icon size={14} strokeWidth={2} />
                    {STATUS_CLIENTE_CONFIG[status].label}
                  </button>
                );
              }
            )}
          </div>
        </div>

        {/* Observações */}
        <FormField label="Observações">
          <TextArea
            rows={3}
            value={form.observacoes}
            onChange={(e) =>
              setField("observacoes", e.target.value)
            }
            placeholder="Ex: Cliente costuma pagar no dia 10."
          />
        </FormField>
      </div>
    </fieldset>
  );
}