import StatusBadge from "../../Table/StatusBadge.jsx";

import {
  formatCurrency,
  formatDate,
} from "../../../../../shared/utils/formatters.js";

// MOCK — substituir por: GET /api/fornecedores/:id/compras
const comprasMock = [
  {
    numero: "#5487",
    data: "2026-07-10",
    valor: 3250.0,
    status: "Ativo",
  },
  {
    numero: "#5462",
    data: "2026-06-28",
    valor: 4820.5,
    status: "Ativo",
  },
  {
    numero: "#5431",
    data: "2026-06-14",
    valor: 2100.0,
    status: "Inativo",
  },
  {
    numero: "#5390",
    data: "2026-05-30",
    valor: 5600.3,
    status: "Ativo",
  },
];

export default function ComprasTab() {
  const hasCompras = comprasMock.length > 0;

  if (!hasCompras) {
    return (
      <div
        className="
          animate-fade-in
          flex
          min-h-40
          items-center
          justify-center
          rounded-xl
          border border-slate-200
          bg-slate-50
          p-6
          text-center
          text-sm
          text-slate-500
          dark:border-[#252a4a]
          dark:bg-[#0f1230]
          dark:text-slate-400
        "
      >
        Nenhuma compra encontrada para este fornecedor.
      </div>
    );
  }

  return (
    <div className="animate-fade-in space-y-3">
      {comprasMock.map((compra) => (
        <article
          key={compra.numero}
          className="
            flex
            flex-col
            gap-3
            rounded-xl
            border border-slate-200/80
            bg-white
            p-4
            transition-colors
            hover:bg-slate-50/80
            sm:flex-row
            sm:items-center
            sm:justify-between
            dark:border-[#252a4a]
            dark:bg-[#141833]
            dark:hover:bg-[#181d3b]
          "
        >
          <div className="min-w-0">
            <p
              className="
                text-sm
                font-semibold
                text-slate-700
                dark:text-slate-200
              "
            >
              Compra {compra.numero}
            </p>

            <p
              className="
                mt-1
                text-xs
                text-slate-500
                dark:text-slate-400
              "
            >
              {formatDate(compra.data)}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span
              className="
                text-sm
                font-semibold
                tabular-nums
                text-slate-800
                dark:text-slate-100
              "
            >
              {formatCurrency(compra.valor)}
            </span>

            <StatusBadge status={compra.status} />
          </div>
        </article>
      ))}
    </div>
  );
}