import { FormField } from "./FormField";
import { fieldBase, fieldBorder } from "./fieldStyles";
import { cn } from "../../utils/cn";

export function TextField({
  label,
  error,
  hint,
  required,
  className,
  inputClassName,
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
      <input
        className={cn(fieldBase, fieldBorder(error), inputClassName)}
        {...props}
      />
    </FormField>
  );
}
