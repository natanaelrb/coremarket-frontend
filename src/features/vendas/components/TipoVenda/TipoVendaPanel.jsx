import Card, { CardStepHeader } from "../../../../shared/components/layout/Card.jsx";
import { TipoVendaOption } from './TipoVendaOption.jsx';
import { TIPO_VENDA_OPTIONS } from '../../constants/formaPagamento.js';

/**
 * Painel "4. Tipo de venda": pagamento imediato ou dívida.
 * @param {{ tipoVendaState: ReturnType<typeof import('../../hooks/useTipoVenda.js').useTipoVenda> }} props
 */
export function TipoVendaPanel({ tipoVendaState }) {
  const { tipoVenda, setTipoVenda } = tipoVendaState;

  return (
    <Card>
      <CardStepHeader step={4} title="Tipo de venda" />
      <div className="space-y-2">
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
    </Card>
  );
}

