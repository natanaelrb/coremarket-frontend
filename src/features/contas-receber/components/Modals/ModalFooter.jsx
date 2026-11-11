import { Button } from "../../../../shared/components/ui/Button";

export function ModalFooter({
  onCancel,
  onSubmit,
  loading,
  submitLabel = "Salvar",
  variant = "primary",
  disabled,
  icon,
}) {
  return (
    <>
      <Button onClick={onCancel} disabled={loading}>
        Cancelar
      </Button>
      <Button
        variant={variant}
        icon={icon}
        loading={loading}
        disabled={disabled}
        onClick={onSubmit}
      >
        {submitLabel}
      </Button>
    </>
  );
}
