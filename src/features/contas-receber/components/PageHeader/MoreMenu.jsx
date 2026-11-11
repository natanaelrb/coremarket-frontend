import { FilterX, Moon, MoreVertical, RefreshCw, Sun } from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button";
import Dropdown, { DropdownItem } from "../../../../shared/components/ui/Dropdown";
import { useTheme } from "../../../../shared/hooks/useTheme";
import useToast from "../../../../shared/hooks/useToast";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";

export function MoreMenu() {
  const { recarregar, filters } = useContasReceberContext();
  const { isDark, toggleTheme } = useTheme();
  const toast = useToast();
  return (
    <Dropdown
      width={220}
      trigger={({ toggle }) => (
        <Button iconRight={MoreVertical} onClick={toggle}>
          Mais ações
        </Button>
      )}
    >
      <DropdownItem
        icon={RefreshCw}
        onClick={() => {
          recarregar();
          toast.info("Dados atualizados", "Dados de exemplo restaurados.");
        }}
      >
        Atualizar / restaurar dados
      </DropdownItem>
      <DropdownItem
        icon={FilterX}
        disabled={!filters.hasActive}
        onClick={filters.clear}
      >
        Limpar todos os filtros
      </DropdownItem>
      <DropdownItem icon={isDark ? Sun : Moon} onClick={toggleTheme}>
        {isDark ? "Tema claro" : "Tema escuro"}
      </DropdownItem>
    </Dropdown>
  );
}
