import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  PackageCheck,
  PackageOpen,
  TrendingUp,
  TriangleAlert,
} from "lucide-react";

import { formatCurrency, formatDate } from "../../../utils/formatters";

export function Recebimento({ detalhe, onVerConferencia }) {
  const recebimento = detalhe?.recebimento ?? {};

  const totalPedido = Number(
    recebimento.totalPedido ?? detalhe?.total ?? 0,
  );

  const totalRecebido = Number(recebimento.totalRecebido ?? 0);

  const divergencias = Number(recebimento.divergencias ?? 0);

  const percentual =
    totalPedido > 0
      ? Math.min(Math.max((totalRecebido / totalPedido) * 100, 0), 100)
      : 0;

  const concluido =
    totalPedido > 0 && totalRecebido >= totalPedido;

  const parcial = totalRecebido > 0 && !concluido;

  const status = concluido
    ? {
        label: "Recebimento concluído",
        description: "Todos os valores previstos foram recebidos.",
        className:
          "bg-emerald-50 text-emerald-700 ring-emerald-600/15 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20",
        icon: CheckCircle2,
      }
    : parcial
      ? {
          label: "Recebimento parcial",
          description: "Ainda existem valores pendentes de recebimento.",
          className:
            "bg-amber-50 text-amber-700 ring-amber-600/15 dark:bg-amber-400/10 dark:text-amber-400 dark:ring-amber-400/20",
          icon: PackageOpen,
        }
      : {
          label: "Aguardando recebimento",
          description: "Nenhum valor recebido foi registrado até o momento.",
          className:
            "bg-slate-100 text-slate-600 ring-slate-500/15 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-600/30",
          icon: PackageOpen,
        };

  const StatusIcon = status.icon;

  const metricas = [
    {
      label: "Valor do pedido",
      value: formatCurrency(totalPedido),
      description: "Valor total previsto",
      icon: ClipboardCheck,
      iconClass:
        "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400",
      valueClass: "text-slate-900 dark:text-slate-100",
    },
    {
      label: "Valor recebido",
      value: formatCurrency(totalRecebido),
      description: "Valor já conferido",
      icon: PackageCheck,
      iconClass:
        "bg-sky-50 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400",
      valueClass: "text-sky-700 dark:text-sky-400",
    },
    {
      label: "Divergências",
      value: divergencias.toLocaleString("pt-BR"),
      description:
        divergencias > 0
          ? "Itens que precisam de atenção"
          : "Nenhuma divergência registrada",
      icon: TriangleAlert,
      iconClass:
        divergencias > 0
          ? "bg-amber-50 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400"
          : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
      valueClass:
        divergencias > 0
          ? "text-amber-700 dark:text-amber-400"
          : "text-slate-900 dark:text-slate-100",
    },
  ];

  return (
    <section className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
            <PackageCheck size={21} />
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              Recebimento da compra
            </h3>

            <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Acompanhe os valores recebidos, o andamento da conferência e
              possíveis divergências.
            </p>
          </div>
        </div>

        <span
          className={[
            "inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full",
            "px-3 py-1.5 text-xs font-semibold ring-1 ring-inset",
            status.className,
          ].join(" ")}
        >
          <StatusIcon size={14} />
          {status.label}
        </span>
      </div>

      {/* Indicadores */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {metricas.map((metrica) => {
          const Icon = metrica.icon;

          return (
            <article
              key={metrica.label}
              className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/[0.02] transition-shadow duration-200 hover:shadow-md dark:border-slate-700/80 dark:bg-[#151b28]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {metrica.label}
                  </p>

                  <p
                    className={[
                      "mt-3 break-words text-2xl font-bold tracking-tight",
                      metrica.valueClass,
                    ].join(" ")}
                  >
                    {metrica.value}
                  </p>
                </div>

                <div
                  className={[
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                    metrica.iconClass,
                  ].join(" ")}
                >
                  <Icon size={19} />
                </div>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                {metrica.description}
              </p>
            </article>
          );
        })}
      </div>

      {/* Progresso do recebimento */}
      <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 dark:border-slate-700/80 dark:bg-[#151b28]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
              <TrendingUp size={20} />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Progresso do recebimento
              </h4>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Percentual do valor do pedido já recebido.
              </p>
            </div>
          </div>

          <div className="sm:text-right">
            <p className="text-2xl font-bold tracking-tight text-emerald-600 dark:text-emerald-400">
              {percentual.toLocaleString("pt-BR", {
                maximumFractionDigits: 1,
              })}
              %
            </p>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              concluído
            </p>
          </div>
        </div>

        <div
          className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"
          role="progressbar"
          aria-label="Progresso do recebimento"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(percentual)}
        >
          <div
            className="h-full rounded-full bg-emerald-500 transition-all duration-500 ease-out"
            style={{ width: `${percentual}%` }}
          />
        </div>

        <div className="mt-3 flex flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
          <span className="text-slate-600 dark:text-slate-300">
            Recebido:{" "}
            <strong className="font-semibold text-emerald-700 dark:text-emerald-400">
              {formatCurrency(totalRecebido)}
            </strong>
          </span>

          <span className="text-slate-500 dark:text-slate-400">
            {totalPedido > totalRecebido
              ? `Restante: ${formatCurrency(totalPedido - totalRecebido)}`
              : concluido
                ? "Valor previsto totalmente recebido"
                : "Aguardando valores do pedido"}
          </span>
        </div>
      </article>

      {/* Informações complementares */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700/80 dark:bg-[#151b28]">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400">
            <CalendarDays size={19} />
          </div>

          <div className="min-w-0">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Data do recebimento
            </p>

            <p className="mt-1.5 text-sm font-semibold text-slate-900 dark:text-slate-100">
              {recebimento.dataRecebimento
                ? formatDate(recebimento.dataRecebimento)
                : "Não informado"}
            </p>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              Data registrada para a entrada da compra.
            </p>
          </div>
        </div>

        <div
          className={[
            "flex items-start gap-3 rounded-2xl border p-4",
            divergencias > 0
              ? "border-amber-200 bg-amber-50/50 dark:border-amber-400/20 dark:bg-amber-400/[0.04]"
              : "border-slate-200 bg-white dark:border-slate-700/80 dark:bg-[#151b28]",
          ].join(" ")}
        >
          <div
            className={[
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
              divergencias > 0
                ? "bg-amber-100 text-amber-700 dark:bg-amber-400/10 dark:text-amber-400"
                : "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400",
            ].join(" ")}
          >
            {divergencias > 0 ? (
              <TriangleAlert size={19} />
            ) : (
              <CheckCircle2 size={19} />
            )}
          </div>

          <div className="min-w-0">
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Conferência de itens
            </p>

            <p className="mt-1.5 text-sm font-semibold text-slate-900 dark:text-slate-100">
              {divergencias > 0
                ? `${divergencias.toLocaleString("pt-BR")} divergência(s) identificada(s)`
                : "Nenhuma divergência registrada"}
            </p>

            <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              {divergencias > 0
                ? "Verifique as diferenças antes de finalizar a conferência."
                : "Consulte a conferência para verificar os detalhes dos itens."}
            </p>
          </div>
        </div>
      </div>

      {/* Ação principal */}
      <div className="flex flex-col gap-3 rounded-2xl border border-emerald-200/80 bg-emerald-50/60 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5 dark:border-emerald-400/15 dark:bg-emerald-400/[0.04]">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Precisa consultar os itens recebidos?
          </p>

          <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Acesse a conferência completa para analisar quantidades e
            divergências.
          </p>
        </div>

        <button
          type="button"
          onClick={onVerConferencia}
          disabled={!onVerConferencia}
          className={[
            "inline-flex shrink-0 items-center justify-center gap-2 rounded-xl",
            "bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white",
            "shadow-sm shadow-emerald-950/10 transition-all duration-200",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
            "dark:focus-visible:ring-offset-[#151b28]",
            onVerConferencia
              ? "cursor-pointer hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md"
              : "cursor-not-allowed opacity-50",
          ].join(" ")}
        >
          Ver conferência completa
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}
