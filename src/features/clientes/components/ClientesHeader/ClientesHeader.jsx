import { Plus } from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button.jsx";
import { SearchInput } from "../../../../shared/components/forms/SearchInput.jsx";

/** Page title, subtitle, search box, and the primary "Novo cliente" action. */
export function ClientesHeader({ searchTerm, onSearchChange, onNovoCliente }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-slide-up">
      <div>
        <h1 className="text-2xl font-semibold text-white light:text-slate-900">Clientes</h1>
        <p className="text-sm text-slate-400 light:text-slate-500 mt-1">
          Gerencie seus clientes, acompanhe compras, pagamentos e contas em aberto.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <SearchInput
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Buscar por nome, CPF, telefone..."
          className="w-64"
        />
        <Button icon={Plus} onClick={onNovoCliente}>
          Novo cliente
        </Button>
      </div>
    </div>
  )
}
