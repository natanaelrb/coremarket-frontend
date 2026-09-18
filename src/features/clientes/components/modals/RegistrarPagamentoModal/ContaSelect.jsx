import {
  FormField,
  SelectInput,
} from "../../../../../shared/components/forms/FormField.jsx";

import { formatCurrency } from "../../../../../shared/utils/formatCurrency.js";
import { formatDate } from "../../../../../shared/utils/formatDate.js";

/** Dropdown listing the client's open receivable accounts to pay against. */
export function ContaSelect({
  contas = [],
  value,
  onChange,
  error,
}) {
  return (
    <FormField label="Conta" required error={error}>
      <SelectInput
        value={value}
        onChange={(e) => onChange(e.target.value)}
        error={error}
      >
        {contas.map((conta) => (
          <option key={conta.id} value={conta.id}>
            {conta.id} · Vencimento: {formatDate(conta.vencimento)} -{" "}
            {formatCurrency(conta.saldo)}
          </option>
        ))}
      </SelectInput>
    </FormField>
  );
}