import { ShoppingCart } from "lucide-react";

export function ComprasHeader() {
  return (
    <header className="w-full min-w-0 space-y-3">
      {/* Breadcrumb */}
      <nav
        aria-label="Navegação estrutural"
        className="flex items-center gap-2 text-sm"
      >
        <span className="text-slate-400 dark:text-slate-500">
          Home
        </span>

        <span
          aria-hidden="true"
          className="text-base text-slate-900 dark:text-slate-600"
        >
          ›
        </span>

        <span
          aria-current="page"
          className="font-medium text-green-700 dark:text-green-400"
        >
          Compras
        </span>
      </nav>

      {/* Título e ícone */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-green-200 bg-green-50 text-green-700 shadow-sm dark:border-green-500/20 dark:bg-green-500/10 dark:text-green-400">
          <ShoppingCart
            className="h-5 w-5"
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            Gestão de Compras
          </h1>
        </div>
      </div>

      {/* Descrição */}
      <p className="max-w-3xl text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">
        Gerencie pedidos, recebimentos, fornecedores e custos de aquisição.
      </p>
    </header>
  );
}