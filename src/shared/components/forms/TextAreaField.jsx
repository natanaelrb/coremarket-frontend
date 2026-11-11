import { FormField } from "./FormField";
import { fieldBase, fieldBorder } from "./fieldStyles";
import { cn } from "../../utils/cn";

export function TextAreaField({
  label,
  error,
  hint,
  required,
  className,
  rows = 3,
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
      <textarea
        rows={rows}
        className={cn(
          fieldBase,
          fieldBorder(error),
          "h-auto resize-none py-2 leading-relaxed",
        )}
        {...props}
      />
    </FormField>
  );
}
