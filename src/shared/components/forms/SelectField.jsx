import { ChevronDown } from "lucide-react";
import { FormField } from "./FormField";
import { fieldBase, fieldBorder } from "./fieldStyles";
import { cn } from "../../utils/cn";

/** options: [{ value, label }] */
export function SelectField({
  label,
  options,
  error,
  hint,
  required,
  className,
  placeholder,
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
        <select
          className={cn(fieldBase, fieldBorder(error), "appearance-none pr-8")}
          {...props}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-3.5 -translate-y-1/2 text-ink-3" />
      </div>
    </FormField>
  );
}
