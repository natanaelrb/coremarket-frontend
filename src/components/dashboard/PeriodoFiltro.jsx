import { useState } from "react";
import { Calendar, X } from "lucide-react";

const PRESETS = [
  { label: "Últimos 7 dias", dias: 7 },
  { label: "Últimos 30 dias", dias: 30 },
  { label: "Este mês", dias: "mes" },
  { label: "Últimos 12 meses", dias: 365 },
];

function formatarPeriodo(inicio, fim) {
  const f = (d) => d.toLocaleDateString("pt-BR");
  return `${f(inicio)} - ${f(fim)}`;
}

export default function PeriodoFiltro({ onChange }) {
  const [aberto, setAberto] = useState(false);
  const hoje = new Date();
  const [periodoTexto, setPeriodoTexto] = useState(() => {
    const inicio = new Date();
    inicio.setDate(hoje.getDate() - 30);
    return formatarPeriodo(inicio, hoje);
  });

  function selecionar(preset) {
    const fim = new Date();
    const inicio = new Date();
    if (preset.dias === "mes") {
      inicio.setDate(1);
    } else {
      inicio.setDate(fim.getDate() - preset.dias);
    }
    const texto = formatarPeriodo(inicio, fim);
    setPeriodoTexto(texto);
    setAberto(false);
    onChange?.({ inicio, fim, label: preset.label });
  }

  return (
    <div className="relative">
      <button
        onClick={() => setAberto(!aberto)}
        className="flex items-center gap-2 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-slate-200 dark:border-white/10 rounded-lg px-3 py-2 text-xs text-slate-600 dark:text-slate-900 dark:text-slate-600 dark:text-white/70 hover:border-slate-300 dark:hover:border-white/20 transition"
      >
        <Calendar
          size={13}
          className="text-slate-400 dark:text-[var(--sidebar-text)]/40"
        />
        <span>{periodoTexto}</span>
        <X
          size={13}
          className="text-slate-300 dark:text-[var(--sidebar-text)]/30 hover:text-slate-500 dark:hover:text-[var(--sidebar-text)]/60 transition"
          onClick={(e) => {
            e.stopPropagation();
            setAberto(false);
          }}
        />
      </button>

      {aberto && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setAberto(false)}
          />
          <div className="absolute right-0 top-11 z-20 bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-200 dark:border-white/10 rounded-xl shadow-lg py-1 w-48 animate-scale-in">
            {PRESETS.map((p) => (
              <button
                key={p.label}
                onClick={() => selecionar(p)}
                className="w-full text-left px-3 py-2 text-sm text-slate-600 dark:text-slate-900 dark:text-slate-600 dark:text-white/70 hover:bg-slate-50 dark:hover:bg-white/8 transition"
              >
                {p.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
