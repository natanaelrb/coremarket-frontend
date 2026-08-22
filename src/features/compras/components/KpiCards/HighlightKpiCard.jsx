// Card de destaque visual (fundo sólido roxo) reservado para o indicador
// mais estratégico da página — custo médio dos produtos comprados.
import { Sparkles } from "lucide-react";

export function HighlightKpiCard({ value, delay = 0 }) {
  return (
    <div
      className="bg-violet-600 rounded-2xl p-4 flex flex-col justify-between min-w-[200px] text-white animate-fade-in-up shadow-lg shadow-violet-600/20 hover:-translate-y-0.5 transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-violet-200" />
        <p className="text-xs text-violet-100">Custo médio dos produtos</p>
      </div>
      <p className="text-lg font-bold mt-2">+{value.toFixed(1)}%</p>
      <p className="text-xs text-violet-200 mt-0.5">Aumento no período</p>
    </div>
  );
}
