import { Plus, UsersRound } from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button.jsx";

/** Page title, breadcrumb, description, and primary "Novo cliente" action. */
export function ClientesHeader({ onNovoCliente }) {
  return (
    <div
      className="
        flex
        flex-col
        gap-5
        sm:flex-row
        sm:items-end
        sm:justify-between
        animate-slide-up
      "
    >
      {/* Informações da página */}
      <div className="min-w-0">
        {/* Breadcrumb */}
        <div className="mb-2.5 flex items-center gap-1.5 text-xs">
          <span className="text-base font-medium text-slate-400">
            Home
          </span>

          <span className="text-base font-medium text-slate-900">
            ›
          </span>

          <span className="text-base font-medium text-emerald-600">
            Clientes
          </span>
        </div>

        {/* Título */}
        <div className="flex items-center gap-2.5">
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-emerald-50
              text-emerald-600
              ring-1
              ring-emerald-100
            "
          >
            <UsersRound
              size={18}
              strokeWidth={2.2}
            />
          </div>

          <h1
            className="
              truncate
              text-2xl
              font-bold
              tracking-tight
              text-slate-900
              dark:text-white
            "
          >
            Gestão de Clientes
          </h1>
        </div>

        {/* Descrição */}
        <p
          className="
            mt-2
            max-w-2xl
            text-sm
            leading-5
            text-slate-500
            dark:text-slate-400
          "
        >
          Gerencie sua base de clientes, acompanhe compras e recebimentos.
        </p>
      </div>

      {/* Ação principal */}
      <Button
        icon={Plus}
        onClick={onNovoCliente}
        className="
          shrink-0
          !border-[#22c55e]
          !bg-[#22c55e]
          !text-white
          shadow-sm
          hover:-translate-y-0.5
          hover:!border-[#16a34a]
          hover:!bg-[#16a34a]
          hover:shadow-md
        "
      >
        Novo cliente
      </Button>
    </div>
  );
}