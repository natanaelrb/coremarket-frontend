import { ArrowRight, History } from "lucide-react";

import MovimentacaoItem from "./MovimentacaoItem.jsx";
import { Button } from "../../../../shared/components/ui/Button.jsx";

export default function MovimentacoesRecentes({
  movimentacoes = [],
  onViewAll,
}) {
  return (
    <section className="px-5 pb-5 pt-4 animate-fade-in">
      {movimentacoes.length > 0 ? (
        <>
          <div className="overflow-hidden rounded-xl border border-gray-100 bg-white dark:border-white/10 dark:bg-[#151936]">
            <ul className="divide-y divide-gray-100 dark:divide-white/10">
              {movimentacoes.map((mv, index) => (
                <MovimentacaoItem
                  key={mv.id}
                  movimentacao={mv}
                  index={index}
                />
              ))}
            </ul>
          </div>

          <Button
            variant="outline"
            size="sm"
            className="
              group mt-3 w-full justify-center gap-2
              transition-all duration-200
              hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600
              dark:hover:border-emerald-500/20 dark:hover:bg-emerald-500/5
              dark:hover:text-emerald-400
            "
            onClick={onViewAll}
          >
            Ver todas as movimentações
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Button>
        </>
      ) : (
        <div
          className="
            rounded-xl border border-dashed border-gray-200
            bg-gray-50/70 px-4 py-10 text-center
            dark:border-white/10 dark:bg-white/[0.02]
          "
        >
          <div
            className="
              mx-auto flex h-10 w-10 items-center justify-center rounded-full
              bg-gray-100 text-gray-400
              dark:bg-white/5 dark:text-gray-500
            "
          >
            <History size={17} />
          </div>

          <p className="mt-3 text-xs font-semibold text-gray-600 dark:text-gray-300">
            Nenhuma movimentação recente
          </p>

          <p className="mt-1 text-[10px] text-gray-400 dark:text-gray-500">
            As movimentações deste produto aparecerão aqui.
          </p>
        </div>
      )}
    </section>
  );
}