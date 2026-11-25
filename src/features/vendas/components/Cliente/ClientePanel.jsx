import { UserPlus, Users } from "lucide-react";

import Card from "../../../../shared/components/layout/Card.jsx";
import { Button } from "../../../../shared/components/ui/Button.jsx";
import { ClienteSearch } from "./ClienteSearch.jsx";
import { ClienteCard } from "./ClienteCard.jsx";
import { useToast } from "../../../../shared/contexts/ToastContext.jsx";

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
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
              <Users size={19} strokeWidth={1.8} />
            </div>

            <div className="min-w-0">
              <h3 className="text-sm font-bold text-slate-800">
                Cliente
              </h3>
              <p className="mt-0.5 text-xs text-slate-500">
                Identifique o cliente desta venda
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            icon={UserPlus}
            onClick={() =>
              notify(
                "Cadastro rápido de cliente em desenvolvimento.",
                "info"
              )
            }
            className="shrink-0 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
          >
            Novo cliente
          </Button>
        </div>

        <div className="mt-5 w-full min-w-0">
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
