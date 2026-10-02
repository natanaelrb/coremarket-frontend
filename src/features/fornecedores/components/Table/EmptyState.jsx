import { PackageSearch } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="animate-fade-in flex flex-col items-center justify-center gap-3 px-6 py-16 text-center">
      <div
        className="
          flex h-16 w-16 items-center justify-center
          rounded-full
          border border-slate-200
          bg-slate-100
          dark:border-[#3a4168]
          dark:bg-slate-500/10
        "
      >
        <PackageSearch
          size={28}
          strokeWidth={1.8}
          className="text-slate-500 dark:text-slate-400"
        />
      </div>

      <div>
        <p className="font-semibold text-slate-700 dark:text-slate-200">
          Nenhum fornecedor encontrado
        </p>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Ajuste os filtros ou o termo de busca para ver mais resultados.
        </p>
      </div>
    </div>
  );
}