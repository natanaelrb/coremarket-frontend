import {
  ChevronDown,
  Download,
  FileJson,
  FileSpreadsheet,
  ListChecks,
} from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button";
import Dropdown, { DropdownItem } from "../../../../shared/components/ui/Dropdown";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";

export function ExportMenu() {
  const { exportacao, selection } = useContasReceberContext();
  return (
    <Dropdown
      width={230}
      trigger={({ toggle }) => (
        <Button icon={Download} iconRight={ChevronDown} onClick={toggle}>
          Exportar
        </Button>
      )}
    >
      <DropdownItem
        icon={FileSpreadsheet}
        hint="Excel"
        onClick={() => exportacao.exportar("csv")}
      >
        Lista filtrada (CSV)
      </DropdownItem>
      <DropdownItem icon={FileJson} onClick={() => exportacao.exportar("json")}>
        Lista filtrada (JSON)
      </DropdownItem>
      <DropdownItem
        icon={ListChecks}
        disabled={!selection.count}
        hint={selection.count ? String(selection.count) : undefined}
        onClick={() => exportacao.exportar("csv", true)}
      >
        Somente selecionadas (CSV)
      </DropdownItem>
    </Dropdown>
  );
}
