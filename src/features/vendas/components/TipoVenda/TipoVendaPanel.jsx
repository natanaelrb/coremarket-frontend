import { CreditCard } from "lucide-react";

import Card from "../../../../shared/components/layout/Card.jsx";
import { TipoVendaOption } from "./TipoVendaOption.jsx";
import { TIPO_VENDA_OPTIONS } from "../../constants/formaPagamento.js";

export function TipoVendaPanel({ tipoVendaState }) {
  const { tipoVenda, setTipoVenda } = tipoVendaState;

  return (
    <Card className="overflow-hidden">
      <div className="p-5 sm:p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
            <CreditCard size={19} strokeWidth={1.8} />
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-bold text-cm-text">
              Tipo de venda
            </h3>
            <p className="mt-0.5 text-xs text-cm-text-muted">
              Escolha como esta venda será registrada
            </p>
          </div>
        </div>

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
