import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  CircleDashed,
  FileCheck2,
  FileStack,
  Link2,
} from "lucide-react";

const INTEGRACAO_TEMA = {
  Estoque: {
    icon: "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400",
    border:
      "hover:border-emerald-300 dark:hover:border-emerald-400/30",
    button:
      "text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300",
    glow: "hover:shadow-emerald-950/[0.05]",
  },

  "Contas a pagar": {
    icon: "bg-sky-50 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400",
    border: "hover:border-sky-300 dark:hover:border-sky-400/30",
    button:
      "text-sky-700 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300",
    glow: "hover:shadow-sky-950/[0.05]",
  },

  "Nota fiscal": {
    icon: "bg-amber-50 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400",
    border: "hover:border-amber-300 dark:hover:border-amber-400/30",
    button:
      "text-amber-700 hover:text-amber-800 dark:text-amber-400 dark:hover:text-amber-300",
    glow: "hover:shadow-amber-950/[0.05]",
  },
};

export function Integracoes({
  detalhe,
  onVerEstoque,
  onVerContasAPagar,
  onVerNotaFiscal,
}) {
  const integracoes = detalhe?.integracoes ?? {};

  const estoque = integracoes.estoque ?? {};
  const contasAPagar = integracoes.contasAPagar ?? {};
  const notaFiscal = integracoes.notaFiscal ?? {};

  return (
    <section className="space-y-5">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
          <Link2 size={20} />
        </div>

        <div className="min-w-0">
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            Integrações da compra
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Consulte os módulos relacionados a esta compra e acesse os
            registros vinculados.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
        <IntegracaoCard
          title="Estoque"
          description="Produtos e quantidades relacionados à entrada no estoque."
          icon={Boxes}
          data={estoque}
          actionLabel="Ver detalhes"
          onAction={onVerEstoque}
        />

        <IntegracaoCard
          title="Contas a pagar"
          description="Consulte os títulos e compromissos financeiros desta compra."
          icon={FileStack}
          data={contasAPagar}
          actionLabel="Ver títulos"
          onAction={onVerContasAPagar}
        />

        <IntegracaoCard
          title="Nota fiscal"
          description="Consulte as informações fiscais vinculadas ao pedido."
          icon={FileCheck2}
          data={notaFiscal}
          actionLabel="Ver detalhes"
          onAction={onVerNotaFiscal}
        />
      </div>
    </section>
  );
}

function IntegracaoCard({
  title,
  description,
  icon: Icon,
  data,
  actionLabel,
  onAction,
}) {
  const tema = INTEGRACAO_TEMA[title] ?? INTEGRACAO_TEMA.Estoque;

  const ativa = Boolean(data?.ativa);
  const identificador =
    data?.numero ??
    data?.codigo ??
    data?.referencia ??
    data?.id ??
    null;

  const quantidade =
    data?.quantidade ??
    data?.total ??
    data?.quantidadeItens ??
    null;

  return (
    <article
      className={[
        "group flex h-full min-w-0 flex-col rounded-2xl border",
        "border-slate-200 bg-white p-5",
        "shadow-sm shadow-slate-950/[0.02]",
        "transition-all duration-200",
        "hover:-translate-y-0.5 hover:shadow-md",
        tema.border,
        tema.glow,
        "dark:border-slate-700/80 dark:bg-[#151b28]",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className={[
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl",
            tema.icon,
          ].join(" ")}
        >
          <Icon size={21} strokeWidth={1.9} />
        </div>

        <span
          className={[
            "inline-flex shrink-0 items-center gap-1.5 rounded-full",
            "px-2.5 py-1 text-xs font-medium",
            ativa
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400"
              : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
          ].join(" ")}
        >
          {ativa ? (
            <CheckCircle2 size={13} />
          ) : (
            <CircleDashed size={13} />
          )}

          {ativa ? "Integrado" : "Não integrado"}
        </span>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          {title}
        </h4>

        <p className="mt-1.5 min-h-[42px] text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>

      {(identificador !== null || quantidade !== null) && (
        <div className="mt-4 grid grid-cols-2 gap-3">
          {identificador !== null && (
            <div className="min-w-0 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/70">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Referência
              </p>

              <p className="mt-1 truncate text-sm font-semibold text-slate-800 dark:text-slate-200">
                {identificador}
              </p>
            </div>
          )}

          {quantidade !== null && (
            <div className="min-w-0 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/70">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Quantidade
              </p>

              <p className="mt-1 truncate text-sm font-semibold text-slate-800 dark:text-slate-200">
                {quantidade}
              </p>
            </div>
          )}
        </div>
      )}

      <div className="mt-auto pt-5">
        <button
          type="button"
          onClick={onAction}
          disabled={!onAction}
          className={[
            "inline-flex w-full items-center justify-between gap-2 rounded-xl",
            "border border-transparent px-3.5 py-2.5",
            "text-sm font-semibold transition-colors duration-200",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
            tema.button,
            onAction
              ? "cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/70"
              : "cursor-not-allowed opacity-50",
          ].join(" ")}
        >
          <span>{actionLabel}</span>

          <ArrowRight
            size={16}
            className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </button>
      </div>
    </article>
  );
}
