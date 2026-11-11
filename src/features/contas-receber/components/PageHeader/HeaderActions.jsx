import { CircleDollarSign, Plus } from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";
import { DateRangePicker } from "./DateRangePicker";
import { ExportMenu } from "./ExportMenu";
import { PrintMenu } from "./PrintMenu";
import { MoreMenu } from "./MoreMenu";

export function HeaderActions() {
  const { actions, detail } = useContasReceberContext();
  return (
    <div className="flex flex-wrap items-center gap-2">
      <DateRangePicker />
      <Button variant="success" icon={Plus} onClick={actions.novaConta}>
        Nova conta a receber
      </Button>
      <Button
        variant="primary"
        icon={CircleDollarSign}
        onClick={() =>
          actions.registrarRecebimento(
            detail.conta?.aberto ? detail.conta : null,
          )
        }
      >
        Registrar recebimento
      </Button>
      <ExportMenu />
      <PrintMenu />
      <MoreMenu />
    </div>
  );
}
