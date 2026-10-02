import {
  CalendarDays,
  CircleDollarSign,
  PackageCheck,
  Receipt,
} from "lucide-react";

import {
  formatCurrency,
  formatDate,
  formatNumber,
} from "../../../../utils/formatters";

import {
  calcularTicketMedio,
  getUltimaVenda,
} from "./vendas.utils";

import { VendaKpi } from "./VendasShared";

export function VendasKpis({
  smartInfo,
  vendas,
}) {
  const quantidadeVendida =
    Number(smartInfo?.quantidadeVendidaMes ?? 0);

  const receita =
    Number(smartInfo?.receitaGeradaMes ?? 0);

  const ticketMedio =
    calcularTicketMedio(
      vendas,
      receita
    );

  const ultimaVenda =
    getUltimaVenda(vendas);

  return (
    <div
      className="
        grid
        grid-cols-1
        gap-3
        px-5
        pb-4
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      <VendaKpi
        icon={PackageCheck}
        label="Vendido no mês"
        value={`${formatNumber(quantidadeVendida)} un`}
        helper="Quantidade acumulada"
        iconClassName="
          border-blue-200
          bg-blue-50
          text-blue-600

          dark:border-blue-500/20
          dark:bg-blue-500/10
          dark:text-blue-400
        "
      />

      <VendaKpi
        icon={CircleDollarSign}
        label="Receita no mês"
        value={formatCurrency(receita)}
        helper="Receita gerada"
        iconClassName="
          border-emerald-200
          bg-emerald-50
          text-emerald-600

          dark:border-emerald-500/20
          dark:bg-emerald-500/10
          dark:text-emerald-400
        "
        valueClassName="
          text-emerald-600
          dark:text-emerald-400
        "
      />

      <VendaKpi
        icon={Receipt}
        label="Ticket médio"
        value={formatCurrency(ticketMedio)}
        helper="Valor médio por unidade"
        iconClassName="
          border-emerald-200
          bg-emerald-50
          text-emerald-600

          dark:border-emerald-500/20
          dark:bg-emerald-500/10
          dark:text-emerald-400
        "
      />

      <VendaKpi
        icon={CalendarDays}
        label="Última venda"
        value={
          ultimaVenda
            ? formatDate(ultimaVenda.data)
            : "—"
        }
        helper={
          ultimaVenda
            ? `${formatNumber(ultimaVenda.quantidade)} un vendidas`
            : "Nenhuma venda"
        }
        iconClassName="
          border-cyan-200
          bg-cyan-50
          text-cyan-600

          dark:border-cyan-500/20
          dark:bg-cyan-500/10
          dark:text-cyan-400
        "
      />
    </div>
  );
}