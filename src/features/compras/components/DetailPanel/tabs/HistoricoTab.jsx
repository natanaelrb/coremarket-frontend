
import {
  History,
  CheckCircle2,
  PackageCheck,
  CreditCard,
  FileText,
  ShoppingCart,
  CircleDot,
  UserRound,
  CalendarClock,
} from "lucide-react";

import { formatDateTime } from "../../../utils/formatters";

const EVENTO_TEMA = {
  compra: {
    icon: ShoppingCart,
    cor: "bg-sky-50 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400",
    ponto: "bg-sky-500 ring-sky-100 dark:bg-sky-400 dark:ring-sky-400/10",
  },
  recebimento: {
    icon: PackageCheck,
    cor: "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400",
    ponto:
      "bg-emerald-500 ring-emerald-100 dark:bg-emerald-400 dark:ring-emerald-400/10",
  },
  pagamento: {
    icon: CreditCard,
    cor: "bg-amber-50 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400",
    ponto:
      "bg-amber-500 ring-amber-100 dark:bg-amber-400 dark:ring-amber-400/10",
  },
  nota: {
    icon: FileText,
    cor: "bg-sky-50 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400",
    ponto: "bg-sky-500 ring-sky-100 dark:bg-sky-400 dark:ring-sky-400/10",
  },
  conclusao: {
    icon: CheckCircle2,
    cor: "bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400",
    ponto:
      "bg-emerald-500 ring-emerald-100 dark:bg-emerald-400 dark:ring-emerald-400/10",
  },
  padrao: {
    icon: CircleDot,
    cor: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
    ponto:
      "bg-slate-400 ring-slate-100 dark:bg-slate-500 dark:ring-slate-700",
  },
};

function identificarTema(evento) {
  const texto = `${evento?.titulo ?? ""} ${evento?.tipo ?? ""}`.toLowerCase();

  if (texto.includes("receb")) return EVENTO_TEMA.recebimento;
  if (texto.includes("pag") || texto.includes("finance")) {
    return EVENTO_TEMA.pagamento;
  }
  if (texto.includes("nota fiscal") || texto.includes("nf-e")) {
    return EVENTO_TEMA.nota;
  }
  if (texto.includes("conclu") || texto.includes("finaliz")) {
    return EVENTO_TEMA.conclusao;
  }
  if (texto.includes("compra") || texto.includes("pedido")) {
    return EVENTO_TEMA.compra;
  }

  return EVENTO_TEMA.padrao;
}

export function HistoricoTab({ detalhe }) {
  const historico = detalhe?.historico ?? [];

  return (
    <div className="animate-fade-in space-y-5">
      {/* Cabeçalho */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
            <History size={21} />
          </div>

          <div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
              Histórico de eventos
            </h3>

            <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Acompanhe as alterações e os acontecimentos registrados nesta
              compra.
            </p>
          </div>
        </div>

        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          <CalendarClock size={14} />
          {historico.length} {historico.length === 1 ? "evento" : "eventos"}
        </span>
      </div>

      {/* Linha do tempo */}
      {historico.length > 0 ? (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-950/[0.02] sm:p-6 dark:border-slate-700/80 dark:bg-[#151b28]">
          <ol className="relative space-y-0">
            {historico.map((evento, index) => {
              const tema = identificarTema(evento);
              const Icon = tema.icon;
              const ultimo = index === historico.length - 1;

              return (
                <li
                  key={evento.id ?? `${evento.titulo}-${evento.data}-${index}`}
                  className="relative flex gap-4 pb-7 last:pb-0"
                >
                  {/* Linha vertical */}
                  {!ultimo && (
                    <span className="absolute bottom-0 left-5 top-11 w-px bg-slate-200 dark:bg-slate-700" />
                  )}

                  {/* Ícone */}
                  <div
                    className={[
                      "relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                      tema.cor,
                    ].join(" ")}
                  >
                    <Icon size={18} strokeWidth={1.9} />
                  </div>

                  {/* Conteúdo */}
                  <div className="min-w-0 flex-1 rounded-xl border border-slate-100 bg-slate-50/70 p-4 transition-colors duration-200 hover:border-slate-200 hover:bg-slate-50 dark:border-slate-700/60 dark:bg-slate-800/30 dark:hover:border-slate-600 dark:hover:bg-slate-800/50">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <p className="break-words text-sm font-semibold leading-relaxed text-slate-900 dark:text-slate-100">
                          {evento.titulo || "Evento registrado"}
                        </p>

                        {evento.descricao && (
                          <p className="mt-1.5 break-words text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                            {evento.descricao}
                          </p>
                        )}
                      </div>

                      <span
                        className={[
                          "inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full",
                          "bg-white px-2.5 py-1 text-xs font-medium text-slate-500",
                          "ring-1 ring-inset ring-slate-200",
                          "dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-700",
                        ].join(" ")}
                      >
                        <CalendarClock size={12} />
                        {evento.data ? formatDateTime(evento.data) : "Data não informada"}
                      </span>
                    </div>

                    {evento.responsavel && (
                      <div className="mt-3 flex items-center gap-2 border-t border-slate-200/80 pt-3 dark:border-slate-700/70">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-slate-500 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:ring-slate-700">
                          <UserRound size={12} />
                        </div>

                        <p className="min-w-0 text-xs text-slate-500 dark:text-slate-400">
                          Responsável:{" "}
                          <span className="font-medium text-slate-700 dark:text-slate-300">
                            {evento.responsavel}
                          </span>
                        </p>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      ) : (
        <div className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white px-5 py-14 text-center dark:border-slate-700/80 dark:bg-[#151b28]">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500">
            <History size={26} />
          </div>

          <h4 className="mt-4 text-sm font-semibold text-slate-900 dark:text-slate-100">
            Nenhum evento registrado
          </h4>

          <p className="mt-1 max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Quando houver alterações ou movimentações nesta compra, elas
            aparecerão nesta linha do tempo.
          </p>
        </div>
      )}
    </div>
  );
}
