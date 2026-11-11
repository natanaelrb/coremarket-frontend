import { ChevronDown, FileText, Printer, Table2 } from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button";
import Dropdown, {
  DropdownItem,
} from "../../../../shared/components/ui/Dropdown";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";

export function PrintMenu() {
  const { exportacao, detail } = useContasReceberContext();
  return (
    <Dropdown
      width={220}
      trigger={({ toggle }) => (
        <Button icon={Printer} iconRight={ChevronDown} onClick={toggle}>
          Imprimir
        </Button>
      )}
    >
      <DropdownItem icon={Table2} onClick={exportacao.imprimirLista}>
        Lista filtrada
      </DropdownItem>
      <DropdownItem
        icon={FileText}
        disabled={!detail.conta}
        onClick={() => exportacao.imprimirConta(detail.conta)}
      >
        Conta em detalhe
      </DropdownItem>
    </Dropdown>
  );
}
