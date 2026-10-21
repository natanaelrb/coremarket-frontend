import {
  Keyboard,
  Search,
  UserRound,
  Tag,
  RefreshCw,
  CheckCircle2,
  Trash2,
  X,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import Card from "../../../../shared/components/layout/Card.jsx";


const ATALHOS = [
  {
    tecla: "F2",
    label: "Buscar produto",
    icon: Search,
    color: "text-green-700 dark:text-green-400",
    bg: "bg-green-100 dark:bg-green-950/50",
    hover: "hover:bg-green-500 hover:text-white",
    border: "hover:border-green-300 dark:hover:border-green-800",
  },
  {
    tecla: "F3",
    label: "Buscar cliente",
    icon: UserRound,
    color: "text-sky-700 dark:text-sky-400",
    bg: "bg-sky-100 dark:bg-sky-950/50",
    hover: "hover:bg-sky-500 hover:text-white",
    border: "hover:border-sky-300 dark:hover:border-sky-800",
  },
  {
    tecla: "F4",
    label: "Aplicar desconto",
    icon: Tag,
    color: "text-violet-700 dark:text-violet-400",
    bg: "bg-violet-100 dark:bg-violet-950/50",
    hover: "hover:bg-violet-500 hover:text-white",
    border: "hover:border-violet-300 dark:hover:border-violet-800",
  },
  {
    tecla: "F5",
    label: "Atualizar dados",
    icon: RefreshCw,
    color: "text-amber-700 dark:text-amber-400",
    bg: "bg-amber-100 dark:bg-amber-950/50",
    hover: "hover:bg-amber-500 hover:text-white",
    border: "hover:border-amber-300 dark:hover:border-amber-800",
  },
  {
    tecla: "F8",
    label: "Finalizar venda",
    icon: CheckCircle2,
    color: "text-green-700 dark:text-green-400",
    bg: "bg-green-100 dark:bg-green-950/50",
    hover: "hover:bg-green-600 hover:text-white",
    border: "hover:border-green-300 dark:hover:border-green-800",
  },
  {
    tecla: "DEL",
    label: "Remover item",
    icon: Trash2,
    color: "text-rose-700 dark:text-rose-400",
    bg: "bg-rose-100 dark:bg-rose-950/50",
    hover: "hover:bg-rose-500 hover:text-white",
    border: "hover:border-rose-300 dark:hover:border-rose-800",
  },
  {
    tecla: "ESC",
    label: "Cancelar seleção",
    icon: X,
    color: "text-slate-600 dark:text-slate-300",
    bg: "bg-slate-100 dark:bg-slate-800/70",
    hover: "hover:bg-slate-600 hover:text-white",
    border: "hover:border-slate-300 dark:hover:border-slate-700",
  },
];


export function AtalhosPDV() {
  return (
    <Card className="group relative overflow-hidden border border-green-200/70 bg-white shadow-[0_8px_30px_-20px_rgba(22,163,74,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:border-green-300 hover:shadow-[0_16px_36px_-20px_rgba(22,163,74,0.4)] dark:border-green-900/40 dark:bg-cm-surface">
      {/* Brilho decorativo */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-green-400/10 blur-3xl transition-colors duration-300 group-hover:bg-green-400/20" />

      <div className="relative p-4 sm:p-5">
        {/* Cabeçalho */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-green-600 text-white shadow-lg shadow-green-600/20">
            <Keyboard size={21} strokeWidth={2} />
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-lime-300 dark:border-cm-surface" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-sm font-bold tracking-tight text-cm-text">
                Atalhos do PDV
              </h2>

              <span className="rounded-full border border-green-200/80 bg-green-50 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-green-700 dark:border-green-900/50 dark:bg-green-950/40 dark:text-green-400">
                Produtividade
              </span>
            </div>

            <p className="mt-1 text-xs text-cm-text-muted">
              Tudo mais rápido, direto pelo teclado.
            </p>
          </div>

          <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600 transition-transform duration-300 group-hover:rotate-6 dark:bg-green-950/40 dark:text-green-400 sm:flex">
            <Sparkles size={17} />
          </div>
        </div>

        
{/* Atalhos */}
<div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
  {ATALHOS.map(
    ({ tecla, label, icon: Icon, color, bg, hover, border }) => (
      <div
        key={tecla}
        className={`group/item flex min-w-0 items-center gap-3 rounded-xl border border-cm-border/70 bg-cm-bg/40 p-2.5 transition-all duration-200 hover:bg-white hover:shadow-sm dark:hover:bg-white/[0.03] ${border}`}
      >
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${bg} ${color} ${hover}`}
        >
          <Icon size={16} strokeWidth={1.9} />
        </span>

        <span className="min-w-0 flex-1 truncate text-xs font-medium text-cm-text">
          {label}
        </span>

        <kbd
          className={`shrink-0 rounded-lg border border-cm-border/80 bg-white px-2 py-1.5 font-mono text-[10px] font-bold text-cm-text-muted shadow-sm transition-colors duration-200 dark:bg-cm-surface ${border}`}
        >
          {tecla}
        </kbd>
      </div>
    )
  )}
</div>


        {/* Dica moderna */}
        <div className="relative mt-4 overflow-hidden rounded-xl border border-green-200/70 bg-gradient-to-r from-green-50 via-green-50/70 to-lime-50/80 p-3 dark:border-green-900/40 dark:from-green-950/40 dark:via-green-950/25 dark:to-lime-950/20">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-500 text-white shadow-sm shadow-green-600/20">
              <Sparkles size={15} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-green-800 dark:text-green-300">
                Dica para vender mais rápido
              </p>

              <p className="mt-1 text-[11px] leading-relaxed text-cm-text-muted">
                Use <kbd className="rounded border border-green-200 bg-white px-1 py-0.5 font-bold text-green-700 dark:border-green-900 dark:bg-cm-surface dark:text-green-400">F2</kbd>{" "}
                para localizar produtos e{" "}
                <kbd className="rounded border border-green-200 bg-white px-1 py-0.5 font-bold text-green-700 dark:border-green-900 dark:bg-cm-surface dark:text-green-400">F8</kbd>{" "}
                para iniciar a finalização.
              </p>
            </div>

            <ArrowUpRight
              size={16}
              className="mt-0.5 shrink-0 text-green-600 dark:text-green-400"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
