import Card from "../../../../shared/components/layout/Card";
import { formatCurrency } from "../../../../shared/utils/formatCurrency";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";

export function TopDevedoresCard() {
  const { topDevedores, filters } = useContasReceberContext();
  return (
    <Card className="pb-3 animate-fade-up" style={{ animationDelay: "60ms" }}>
      <div className="px-4 pt-4 pb-2 mb-2">
        <h3 className="text-base font-semibold text-foreground">
          Clientes com maior dívida
        </h3>
      </div>
      <div className="px-3">
        <table className="w-full text-[11px]">
          <thead>
            <tr className="bg-surface-2 text-ink-2">
              <th className="rounded-l-md px-2 py-1.5 text-left font-semibold">
                Cliente
              </th>
              <th className="px-2 py-1.5 text-right font-semibold">
                Dívida total
              </th>
              <th className="rounded-r-md px-2 py-1.5 text-right font-semibold">
                Maior atraso
              </th>
            </tr>
          </thead>
          <tbody>
            {topDevedores.map((d) => (
              <tr
                key={d.clienteId}
                onClick={() =>
                  filters.patch({
                    cliente: String(d.clienteId),
                    status: "TODOS",
                  })
                }
                className="cursor-pointer border-b border-line/60 transition-colors hover:bg-brand-soft last:border-0"
              >
                <td className="px-2 py-2 font-medium text-ink">{d.nome}</td>
                <td className="px-2 py-2 text-right tabular-nums text-ink">
                  {formatCurrency(d.divida)}
                </td>
                <td className="px-2 py-2 text-right tabular-nums text-ink-2">
                  {d.maiorAtraso} dias
                </td>
              </tr>
            ))}
            {!topDevedores.length && (
              <tr>
                <td colSpan={3} className="px-2 py-6 text-center text-ink-3">
                  Nenhuma dívida em aberto
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
