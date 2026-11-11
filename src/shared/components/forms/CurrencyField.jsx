import { FormField } from "./FormField";
import { fieldBase, fieldBorder } from "./fieldStyles";
import { maskMoney } from "../../utils/masks";
import { cn } from "../../utils/cn";

/** Campo monetário: `value` é string "1.250,00"; use parseMoney() para converter. */
export function CurrencyField({
  label,
  value,
  onChange,
  error,
  hint,
  required,
  className,
  ...props
}) {
  return (
    <FormField
      label={label}
      error={error}
      hint={hint}
      required={required}
      className={className}
    >
      <div className="relative">
        <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-ink-3">
          R$
        </span>
        <input
          inputMode="numeric"
          value={value}
          onChange={(e) => onChange(maskMoney(e.target.value))}
          placeholder="0,00"
          className={cn(
            fieldBase,
            fieldBorder(error),
            "pl-9 text-right font-semibold tabular-nums",
          )}
          {...props}
        />
      </div>
    </FormField>
  );
}
