import { Plus } from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button.jsx";

/** Page title, subtitle, and primary "Novo cliente" action. */
export function ClientesHeader({ onNovoCliente }) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between animate-slide-up">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Clientes
        </h1>

        {/* Breadcrumb */}
        <div className="flex mt-1 items-center gap-2 text-sm">
          <span className="text-slate-400">Home</span>
          <span className="font-medium text-slate-300">›</span>
          <span className="font-medium text-emerald-600">Clientes</span>
        </div>
        <p className="mt-2 text-sm font-semibold text-slate-500 dark:text-slate-400">
          Gerencie seus clientes, acompanhe compras, pagamentos e contas em aberto.
        </p>
      </div>

      <Button
        icon={Plus}
        onClick={onNovoCliente}
        className="
          shrink-0
          !border-[#22c55e]
          !bg-[#22c55e]
          !text-white
          hover:!border-[#16a34a]
          hover:!bg-[#16a34a]
        "
      >
        Novo cliente
      </Button>
    </div>
  );
}