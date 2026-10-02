import {
  AlertTriangle,
  Boxes,
  CalendarDays,
  Package,
} from "lucide-react";

import {
  getLotes,
  getQuantidadeTotal,
  formatDate,
  getDiasRestantes,
} from "./lotes.utils";

import { LoteCard } from "./LotesShared";

export function LotesKpis({ produto }) {
  const lotes = getLotes(produto);

  const quantidadeTotal =
    getQuantidadeTotal(lotes);

  const loteMaisAntigo = lotes.length
    ? [...lotes].sort(
        (a, b) =>
          new Date(a.validade) -
          new Date(b.validade)
      )[0]
    : null;

  const proximosVencimento = lotes.filter(
    (lote) => {
      const dias = getDiasRestantes(
        lote?.validade
      );

      return dias !== null && dias >= 0 && dias <= 30;
    }
  ).length;

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-3
        px-5
        pb-3
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      <LoteCard
        icon={Boxes}
        label="Total de lotes"
        value={lotes.length}
        helper="↑ 0 este mês"
        iconClassName="
          border-blue-200
          bg-blue-50
          text-blue-600

          dark:border-blue-500/20
          dark:bg-blue-500/10
          dark:text-blue-400
        "
      />

      <LoteCard
        icon={Package}
        label="Quantidade total"
        value={`${quantidadeTotal} un`}
        helper="Em estoque"
        iconClassName="
          border-blue-200
          bg-blue-50
          text-blue-600

          dark:border-blue-500/20
          dark:bg-blue-500/10
          dark:text-blue-400
        "
      />

      <LoteCard
        icon={CalendarDays}
        label="Lote mais antigo"
        value={loteMaisAntigo?.codigo || "—"}
        helper={
          loteMaisAntigo
            ? formatDate(
                loteMaisAntigo.validade
              )
            : "Sem registro"
        }
        iconClassName="
          border-blue-200
          bg-blue-50
          text-blue-600

          dark:border-blue-500/20
          dark:bg-blue-500/10
          dark:text-blue-400
        "
      />

      <LoteCard
        icon={AlertTriangle}
        label="Lotes próximos do vencimento"
        value={proximosVencimento}
        helper={
          proximosVencimento > 0
            ? "Atenção necessária"
            : "Nenhum lote em risco"
        }
        iconClassName={
          proximosVencimento > 0
            ? `
              border-amber-200
              bg-amber-50
              text-amber-600
              dark:border-amber-500/20
              dark:bg-amber-500/10
              dark:text-amber-400
            `
            : `
              border-emerald-200
              bg-emerald-50
              text-emerald-600
              dark:border-emerald-500/20
              dark:bg-emerald-500/10
              dark:text-emerald-400
            `
        }
      />
    </div>
  );
}