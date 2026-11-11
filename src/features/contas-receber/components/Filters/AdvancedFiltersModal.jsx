import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Modal } from "../../../../shared/components/ui/Modal";
import { Button } from "../../../../shared/components/ui/Button";
import { TextField } from "../../../../shared/components/forms/TextField";
import { DateField } from "../../../../shared/components/forms/DateField";
import { CurrencyField } from "../../../../shared/components/forms/CurrencyField";
import { Checkbox } from "../../../../shared/components/ui/Checkbox";
import { maskCPF } from "../../../../shared/utils/masks";
import { DEFAULT_ADVANCED_FILTERS } from "../../constants";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";

export function AdvancedFiltersModal() {
  const { filters, modals } = useContasReceberContext();
  const [f, setF] = useState(filters.applied.advanced);
  const set = (k, v) => setF((p) => ({ ...p, [k]: v }));

  return (
    <Modal
      open
      onClose={modals.close}
      icon={SlidersHorizontal}
      size="lg"
      title="Filtros avançados"
      subtitle="Refine a lista com critérios adicionais."
      footer={
        <>
          <Button onClick={() => setF(DEFAULT_ADVANCED_FILTERS)}>Limpar</Button>
          <Button onClick={modals.close}>Cancelar</Button>
          <Button
            variant="primary"
            onClick={() => {
              filters.patch({ advanced: f });
              modals.close();
            }}
          >
            Aplicar filtros
          </Button>
        </>
      }
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <TextField
          label="CPF do cliente"
          value={f.cpf}
          onChange={(e) => set("cpf", maskCPF(e.target.value))}
          placeholder="000.000.000-00"
        />
        <TextField
          label="Dias de atraso (mínimo)"
          type="number"
          min="0"
          value={f.atrasoMin}
          onChange={(e) => set("atrasoMin", e.target.value)}
          placeholder="0"
        />
        <CurrencyField
          label="Valor original — mínimo"
          value={f.valorMin}
          onChange={(v) => set("valorMin", v)}
        />
        <CurrencyField
          label="Valor original — máximo"
          value={f.valorMax}
          onChange={(v) => set("valorMax", v)}
        />
        <DateField
          label="Emissão — de"
          value={f.emissaoDe}
          onChange={(e) => set("emissaoDe", e.target.value)}
        />
        <DateField
          label="Emissão — até"
          value={f.emissaoAte}
          onChange={(e) => set("emissaoAte", e.target.value)}
        />
        <DateField
          label="Vencimento — de"
          value={f.vencimentoDe}
          onChange={(e) => set("vencimentoDe", e.target.value)}
        />
        <DateField
          label="Vencimento — até"
          value={f.vencimentoAte}
          onChange={(e) => set("vencimentoAte", e.target.value)}
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
        <Checkbox
          checked={f.apenasComSaldo}
          onChange={(e) => set("apenasComSaldo", e.target.checked)}
          label="Somente com saldo em aberto"
        />
        <Checkbox
          checked={f.apenasInadimplentes}
          onChange={(e) => set("apenasInadimplentes", e.target.checked)}
          label="Somente inadimplentes"
        />
      </div>
    </Modal>
  );
}
