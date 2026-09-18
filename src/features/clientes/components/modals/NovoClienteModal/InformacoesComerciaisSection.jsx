import {
  FormField,
  TextInput,
  SelectInput,
  TextArea,
} from "../../../../../shared/components/forms/FormField.jsx";
import { STATUS_CLIENTE } from "../../../../../shared/constants/enums.js";
import { STATUS_CLIENTE_CONFIG } from "../../../constants/statusClienteConfig.js";
import { cn } from "../../../../../shared/utils/classNames.js";

/** "Informações comerciais" fieldset: credit limit, payment terms, status, notes. */
export function InformacoesComerciaisSection({ form, setField }) {
  return (
    <fieldset className="space-y-4">
      <legend className="mb-1 text-sm font-semibold text-[#0f172a] dark:text-white">
        Informações comerciais
      </legend>

      <div className="grid grid-cols-2 gap-4">
        <FormField label="Limite de crédito">
          <TextInput
            type="number"
            value={form.limiteCredito}
            onChange={(e) =>
              setField("limiteCredito", e.target.value)
            }
            placeholder="R$ 1.000,00"
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

      <div>
        <span className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300">
          Status
        </span>

        <div className="flex gap-2">
          {[STATUS_CLIENTE.ATIVO, STATUS_CLIENTE.INATIVO].map(
            (status) => {
              const ativo = form.status === status;
              const isAtivo = status === STATUS_CLIENTE.ATIVO;

              return (
                <button
                  type="button"
                  key={status}
                  onClick={() => setField("status", status)}
                  className={cn(
                    `
                      rounded-lg
                      px-4 py-1.5
                      text-xs
                      font-medium
                      transition-all duration-150
                    `,
                    ativo
                      ? isAtivo
                        ? `
                            bg-[#22c55e]
                            text-white
                            shadow-sm
                            hover:bg-[#16a34a]
                          `
                        : `
                            bg-slate-600
                            text-white
                            shadow-sm
                            hover:bg-slate-700
                          `
                      : `
                          border
                          border-slate-200
                          bg-white
                          text-slate-500
                          hover:border-slate-300
                          hover:bg-slate-50
                          dark:border-white/10
                          dark:bg-zinc-900
                          dark:text-slate-400
                          dark:hover:bg-white/5
                        `,
                  )}
                >
                  {STATUS_CLIENTE_CONFIG[status].label}
                </button>
              );
            },
          )}
        </div>
      </div>

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
    </fieldset>
  );
}