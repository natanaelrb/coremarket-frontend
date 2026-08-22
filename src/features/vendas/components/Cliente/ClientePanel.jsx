import { UserPlus } from 'lucide-react';
import Card, { CardStepHeader } from "../../../../shared/components/layout/Card.jsx";
import { Button } from "../../../../shared/components/ui/Button.jsx";
import { ClienteSearch } from './ClienteSearch.jsx';
import { ClienteCard } from './ClienteCard.jsx';
import { useToast } from "../../../../shared/contexts/ToastContext.jsx";

/**
 * Painel "3. Cliente": busca, seleção e cadastro rápido de cliente.
 * @param {{ clienteState: ReturnType<typeof import('../../hooks/useClienteSelecionado.js').useClienteSelecionado> }} props
 */
export function ClientePanel({ clienteState }) {
  const { notify } = useToast();
  const { termoBusca, setTermoBusca, sugestoes, cliente, selecionarCliente, removerCliente, inputRef } =
    clienteState;

  return (
    <Card>
      <CardStepHeader
        step={3}
        title="Cliente"
        action={
          <Button
            variant="ghost"
            size="sm"
            icon={UserPlus}
            onClick={() => notify('Cadastro rápido de cliente em desenvolvimento.', 'info')}
          >
            Novo cliente
          </Button>
        }
      />

      {cliente ? (
        <ClienteCard cliente={cliente} onRemover={removerCliente} />
      ) : (
        <ClienteSearch
          termo={termoBusca}
          onChangeTermo={setTermoBusca}
          sugestoes={sugestoes}
          onSelecionar={selecionarCliente}
          inputRef={inputRef}
        />
      )}
    </Card>
  );
}

