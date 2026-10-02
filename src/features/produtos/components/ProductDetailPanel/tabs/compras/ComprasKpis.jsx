import {
  CalendarDays,
  Package,
  ShoppingCart,
  Wallet,
} from "lucide-react";

import {
  formatCurrency,
  formatDate,
  formatNumber,
} from "../../../../utils/formatters";

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

      quantidade,
      custoUnitario,
    };
  });
}

function KpiCard({
  icon: Icon,
  iconClassName,
  label,
  value,
  helper,
}) {
  return (
    <div
      className="
        group flex min-w-0 items-center gap-3
        rounded-xl border border-[#dfe8f2]
        bg-white p-3.5
        shadow-[0_2px_8px_rgba(31,61,92,0.025)]
        transition-all duration-300
        hover:-translate-y-0.5
        hover:border-[#cbdbea]
        hover:shadow-[0_8px_20px_rgba(31,61,92,0.07)]
        animate-in fade-in slide-in-from-bottom-2
        motion-reduce:animate-none
      "
    >
      <div
        className={`
          flex h-10 w-10 shrink-0 items-center justify-center
          rounded-full transition-transform duration-300
          group-hover:scale-105
          ${iconClassName}
        `}
      >
        <Icon size={19} strokeWidth={2} />
      </div>

      <div className="min-w-0">
        <p className="truncate text-[11px] font-medium text-[#8ca0ba]">
          {label}
        </p>

        <p className="mt-1 truncate text-lg font-bold tracking-tight text-[#17243b]">
          {value}
        </p>

        <p className="mt-0.5 truncate text-[11px] text-[#91a3ba]">
          {helper}
        </p>
      </div>
    </div>
  );
}

export function ComprasKpis({ produto }) {
  const compras = gerarComprasMock(produto);

  const totalUnidades = compras.reduce(
    (total, compra) => total + compra.quantidade,
    0
  );

  const totalCompras = compras.reduce(
    (total, compra) =>
      total + compra.quantidade * compra.custoUnitario,
    0
  );

  const custoMedio =
    totalUnidades > 0
      ? totalCompras / totalUnidades
      : 0;

  const ultimaCompra = [...compras].sort(
    (a, b) => new Date(b.data) - new Date(a.data)
  )[0];

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
      <KpiCard
        icon={ShoppingCart}
        iconClassName="bg-[#e0faee] text-[#13a36b]"
        label="Total de compras"
        value={formatCurrency(totalCompras)}
        helper={`em ${compras.length} compras`}
      />

      <KpiCard
        icon={Package}
        iconClassName="bg-[#edf3f9] text-[#526b87]"
        label="Total de unidades compradas"
        value={formatNumber(totalUnidades)}
        helper="unidades"
      />

      <KpiCard
        icon={Wallet}
        iconClassName="bg-[#e0faee] text-[#13a36b]"
        label="Custo médio por unidade"
        value={formatCurrency(custoMedio)}
        helper="por unidade"
      />

      <KpiCard
        icon={CalendarDays}
        iconClassName="bg-[#e0faee] text-[#13a36b]"
        label="Última compra"
        value={
          ultimaCompra
            ? formatDate(ultimaCompra.data)
            : "Sem registros"
        }
        helper="Compra mais recente"
      />
    </div>
  );
}