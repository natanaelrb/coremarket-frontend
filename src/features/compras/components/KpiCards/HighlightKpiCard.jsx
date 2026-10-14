
import {
  Sparkles,
  TrendingDown,
  TrendingUp,
  Minus,
} from "lucide-react";

export function HighlightKpiCard({ value, delay = 0 }) {
  const variacao = Number(value);
  const valorValido =
    value !== null &&
    value !== undefined &&
    value !== "" &&
    Number.isFinite(variacao);

  const aumentou = valorValido && variacao > 0;
  const diminuiu = valorValido && variacao < 0;

  const corVariacao = aumentou
    ? "text-amber-600 dark:text-amber-400"
    : diminuiu
      ? "text-emerald-600 dark:text-emerald-400"
      : "text-slate-500 dark:text-slate-400";

  return (
    <article
      className="group min-w-0 rounded-2xl border border-green-200/80 bg-white p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-green-300 hover:shadow-lg hover:shadow-green-900/5 motion-reduce:transform-none motion-reduce:transition-none dark:border-green-500/20 dark:bg-[#151b28] dark:hover:border-green-500/40"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none dark:bg-green-500/10 dark:text-green-400">
          <Sparkles className="h-5 w-5" aria-hidden="true" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-slate-900 dark:text-slate-400">
            Variação do custo médio
          </p>

          <p
            className="mt-1 break-words text-lg font-bold leading-tight tracking-tight text-slate-900 dark:text-white"
            title={valorValido ? `${variacao.toFixed(1)}%` : undefined}
          >
            {valorValido
              ? `${variacao > 0 ? "+" : ""}${variacao.toFixed(1)}%`
              : "—"}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span
              className={`inline-flex items-center gap-1 text-xs font-medium ${corVariacao}`}
            >
              {aumentou ? (
                <TrendingUp className="h-3.5 w-3.5" />
              ) : diminuiu ? (
                <TrendingDown className="h-3.5 w-3.5" />
              ) : (
                <Minus className="h-3.5 w-3.5" />
              )}

              {aumentou
                ? "Aumento no período"
                : diminuiu
                  ? "Redução no período"
                  : valorValido
                    ? "Sem variação"
                    : "Indicador indisponível"}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
