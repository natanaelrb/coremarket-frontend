import Card, { CardStepHeader } from "../../../../shared/components/layout/Card.jsx";
import { TipoVendaOption } from "./TipoVendaOption.jsx";
import { TIPO_VENDA_OPTIONS } from "../../constants/formaPagamento.js";

export function TipoVendaPanel({ tipoVendaState }) {
  const { tipoVenda, setTipoVenda } = tipoVendaState;

  return (
    <Card className="overflow-hidden">
      <div className="p-5 sm:p-4">
        <CardStepHeader
          step={4}
          title="Tipo de venda"
          description="Escolha como esta venda será registrada"
        />

        <div className="mt-5 space-y-3">
          {TIPO_VENDA_OPTIONS.map((opcao) => (
            <TipoVendaOption
              key={opcao.value}
              selecionado={tipoVenda === opcao.value}
              label={opcao.label}
              description={opcao.description}
              onSelecionar={() => setTipoVenda(opcao.value)}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
