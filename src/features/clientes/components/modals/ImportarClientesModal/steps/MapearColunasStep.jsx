import { SelectInput } from "../../../../../../shared/components/forms/FormField.jsx";

const CAMPOS_SISTEMA = ['Nome completo', 'CPF/CNPJ', 'Telefone', 'E-mail', 'Endereço']
const COLUNAS_ARQUIVO = ['coluna_a', 'coluna_b', 'coluna_c', 'coluna_d', 'coluna_e', 'Ignorar']

/** Step 2: maps each system field to a column detected in the uploaded file. */
export function MapearColunasStep() {
  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-400 light:text-slate-500 mb-2">
        Associe cada campo do CoreMarket à coluna correspondente do seu arquivo.
      </p>
      {CAMPOS_SISTEMA.map((campo, i) => (
        <div key={campo} className="grid grid-cols-2 items-center gap-4">
          <span className="text-sm text-slate-300 light:text-slate-600">{campo}</span>
          <SelectInput defaultValue={COLUNAS_ARQUIVO[i]}>
            {COLUNAS_ARQUIVO.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </SelectInput>
        </div>
      ))}
    </div>
  )
}
