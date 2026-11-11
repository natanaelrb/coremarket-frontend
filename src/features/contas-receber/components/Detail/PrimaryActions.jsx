import { Button } from "../../../../shared/components/ui/Button";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";

export function PrimaryActions({ conta }) {
  const { actions } = useContasReceberContext();
  return (
    <div className="grid grid-cols-2 gap-2">
      <Button
        variant="success"
        className="h-9"
        disabled={!conta.aberto}
        onClick={() => actions.registrarRecebimento(conta)}
      >
        Registrar recebimento
      </Button>
      <Button
        className="h-9"
        disabled={!conta.aberto}
        onClick={() => actions.negociar(conta)}
      >
        Negociar dívida
      </Button>
    </div>
  );
}
