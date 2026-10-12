import { History } from "lucide-react";

import Card from "../../../../shared/components/layout/Card.jsx";
import MovimentacoesRecentes from "../ProductDetailPanel/MovimentacoesRecentes.jsx";

export default function EstoqueMovimentacoes({
  produto,
  movimentacoes = [],
}) {
  return (
    <Card
      className="
        group overflow-hidden border-gray-100
        transition-all duration-200
        hover:-translate-y-0.5 hover:shadow-md
        dark:border-white/10
        animate-slide-up
      "
    >
      {/* Cabeçalho */}
      <div
        className="
          border-b border-gray-100 px-5 py-4
          dark:border-white/10
        "
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div
              className="
                flex h-9 w-9 shrink-0 items-center justify-center rounded-xl
                bg-emerald-50 text-emerald-600
                transition-transform duration-200
                group-hover:scale-105
                dark:bg-emerald-500/10 dark:text-emerald-400
              "
            >
              <History size={17} strokeWidth={2} />
            </div>

            <div className="min-w-0">
              <h2 className="text-sm font-semibold text-gray-800 dark:text-white">
                Movimentações recentes
              </h2>

              <p className="mt-0.5 text-[11px] leading-4 text-gray-400 dark:text-gray-500">
                Histórico recente de entradas, saídas e ajustes.
              </p>
            </div>
          </div>

          {movimentacoes.length > 0 && (
            <span
              className="
                shrink-0 rounded-full
                bg-gray-100 px-2.5 py-1
                text-[10px] font-semibold text-gray-500
                dark:bg-white/5 dark:text-gray-400
              "
            >
              {movimentacoes.length}{" "}
              {movimentacoes.length === 1
                ? "movimentação"
                : "movimentações"}
            </span>
          )}
        </div>
      </div>

      {/* Conteúdo */}
      <MovimentacoesRecentes
        movimentacoes={movimentacoes}
        onViewAll={() =>
          console.info(
            "[Estoque] Ver todas as movimentações de",
            produto?.id,
          )
        }
      />
    </Card>
  );
}