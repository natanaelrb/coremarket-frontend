import { UserPlus } from 'lucide-react';
import Card, { CardStepHeader } from '../../../../shared/components/layout/Card.jsx';
import { Button } from '../../../../shared/components/ui/Button.jsx';
import { ClienteSearch } from './ClienteSearch.jsx';
import { ClienteCard } from './ClienteCard.jsx';
import { useToast } from '../../../../shared/contexts/ToastContext.jsx';

export function ClientePanel({ clienteState }) {
  const { notify } = useToast();

  const {
    termoBusca,
    setTermoBusca,
    sugestoes,
    cliente,
    selecionarCliente,
    removerCliente,
    inputRef,
  } = clienteState;


return (
  <Card className="overflow-visible">
    <div className="p-5 sm:p-4">
      <CardStepHeader
        step={3}
        title="Cliente"
        description="Identifique o cliente desta venda"
        action={
          <Button
            variant="ghost"
            size="sm"
            icon={UserPlus}
            onClick={() =>
              notify(
                'Cadastro rápido de cliente em desenvolvimento.',
                'info',
              )
            }
            className="shrink-0"
          >
            Novo cliente
          </Button>
        }
      />

      <div className="mt-6 w-full min-w-0">
        {cliente ? (
          <ClienteCard
            cliente={cliente}
            onRemover={removerCliente}
          />
        ) : (
          <ClienteSearch
            termo={termoBusca}
            onChangeTermo={setTermoBusca}
            sugestoes={sugestoes}
            onSelecionar={selecionarCliente}
            inputRef={inputRef}
          />
        )}
      </div>
    </div>
  </Card>
);
}