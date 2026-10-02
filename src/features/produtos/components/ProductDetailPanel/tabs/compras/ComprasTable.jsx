import {
  Building2,
  FileText,
  MoreVertical,
  Package,
} from "lucide-react";

import {
  formatCurrency,
  formatDate,
  formatNumber,
} from "../../../../utils/formatters";
import { CompraStatusBadge } from "./CompraStatusBadge";

function gerarComprasMock(produto) {
  const codigo = produto?.codigo || produto?.id || "PRODUTO";

  const seed = String(codigo)
    .split("")
    .reduce((acc, c) => acc + c.charCodeAt(0), 0);

  const precoCompra = Number(produto?.precoCompra) || 0;

  return Array.from({ length: 5 }).map((_, i) => {
    const quantidade = 20 + ((seed + i * 7) % 80);

    const custoUnitario = Math.max(
      0,
      precoCompra + ((i % 3) - 1) * 0.2
    );

    return {
      id: `${codigo}-C${i + 1}`,

      data: new Date(
        Date.now() - (i + 1) * (20 + (seed % 10)) * 86400000
      )
        .toISOString()
        .slice(0, 10),

      fornecedor:
        produto?.fornecedor || "Fornecedor não informado",

      cnpj: "12.345.678/0001-90",

      nota: `NF ${String(458 - i).padStart(6, "0")}`,

      quantidade,

      custoUnitario,

      status: i === 3 ? "Pendente" : "Concluída",
    };
  });
}

export function ComprasTable({ produto }) {
  const compras = gerarComprasMock(produto);

  return (
    <div className="overflow-hidden rounded-xl border border-[#dfe8f2] bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[950px] text-sm">
          <thead>
            <tr className="border-b border-[#e8eef5] bg-[#f8fafc] text-left">
              <th className="px-5 py-3 text-xs font-semibold text-[#64748b]">
                Data
              </th>

              <th className="px-5 py-3 text-xs font-semibold text-[#64748b]">
                Fornecedor
              </th>

              <th className="px-5 py-3 text-xs font-semibold text-[#64748b]">
                Nota / Referência
              </th>

              <th className="px-5 py-3 text-xs font-semibold text-[#64748b]">
                Quantidade
              </th>

              <th className="px-5 py-3 text-xs font-semibold text-[#64748b]">
                Custo unitário
              </th>

              <th className="px-5 py-3 text-xs font-semibold text-[#64748b]">
                Total
              </th>

              <th className="px-5 py-3 text-xs font-semibold text-[#64748b]">
                Status
              </th>

              <th className="w-12 px-3 py-3" />
            </tr>
          </thead>

          <tbody>
            {compras.map((compra) => {
              const total =
                compra.quantidade * compra.custoUnitario;

              return (
                <tr
                  key={compra.id}
                  className="border-b border-[#edf2f7] transition-colors last:border-0 hover:bg-[#f8fafc]"
                >
                  <td className="whitespace-nowrap px-5 py-4 text-sm text-[#475569]">
                    {formatDate(compra.data)}
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#eef6f1] text-[#25804a]">
                        <Building2 size={17} />
                      </div>

                      <div>
                        <p className="whitespace-nowrap font-medium text-[#263445]">
                          {compra.fornecedor}
                        </p>

                        <p className="mt-0.5 text-xs text-[#94a3b8]">
                          {compra.cnpj}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 text-[#64748b]">
                      <FileText size={15} />

                      <span className="whitespace-nowrap text-sm">
                        {compra.nota}
                      </span>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2 text-[#475569]">
                      <Package
                        size={15}
                        className="text-[#94a3b8]"
                      />

                      {formatNumber(compra.quantidade)}
                    </div>
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-[#475569]">
                    {formatCurrency(compra.custoUnitario)}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 font-semibold text-[#263445]">
                    {formatCurrency(total)}
                  </td>

                  <td className="px-5 py-4">
                    <CompraStatusBadge status={compra.status} />
                  </td>

                  <td className="px-3 py-4">
                    <button
                      type="button"
                      className="rounded-lg p-2 text-[#94a3b8] transition-colors hover:bg-[#eef2f7] hover:text-[#334155]"
                      aria-label={`Ações da compra ${compra.nota}`}
                    >
                      <MoreVertical size={17} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-[#e8eef5] px-5 py-3">
        <span className="text-xs text-[#94a3b8]">
          Mostrando {compras.length} compras
        </span>

        <span className="text-xs text-[#94a3b8]">
          Histórico do produto
        </span>
      </div>
    </div>
  );
}