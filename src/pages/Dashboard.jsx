import { ChartNoAxesCombined } from "lucide-react";

import { useState, useEffect } from "react";
import { AlertCircle, LayoutGrid, Sparkles } from "lucide-react";
import { buscarResumoDashboard } from "../services/dashboardService";
import PeriodoFiltro from "../components/dashboard/PeriodoFiltro";
import DashboardV1 from "./dashboard/DashboardV1";
import DashboardV2 from "./dashboard/DashboardV2";
import PageHeader from "../shared/components/PageHeader";

const ABAS = [
  { key: "v1", label: "Visão Geral", icon: LayoutGrid },
  { key: "v2", label: "Avançado", icon: Sparkles },
];

export default function Dashboard() {
  const [aba, setAba] = useState("v1");
  const [erro, setErro] = useState(false);

  // Métricas reais da API, com defaults para campos ainda não implementados
  const [metricas, setMetricas] = useState({
    totalClientes: 128,
    totalProdutos: 256,
    totalCompras: 12540,
    totalVendas: 18760,
    lucroLiquido: 6220,
    comprasPendentes: 0,
  });

  useEffect(() => {
    async function carregar() {
      try {
        const resposta = await buscarResumoDashboard();
        setMetricas((prev) => ({ ...prev, ...resposta }));
      } catch {
        setErro(true);
      }
    }
    carregar();
  }, []);

  return (
    <div className="space-y-5">
      
      {/* Header */}
      <PageHeader
        icon={ChartNoAxesCombined}
        title="Visão Geral"
        subtitle="Resumo completo do seu negócio"
      >
        <PeriodoFiltro />
      </PageHeader>

      {/* Erro de conexão */}
      {erro && (
        <div className="flex items-center gap-2 text-sm text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/20 rounded-xl px-4 py-3 animate-fade-in">
          <AlertCircle size={16} className="flex-shrink-0" />
          <span>
            Não foi possível carregar os dados. Verifique sua conexão com a API.
          </span>
        </div>
      )}

      {/* Toggle V1 / V2 */}
      <div className="flex gap-1 bg-slate-100 dark:bg-white/5 p-1 rounded-xl w-fit">
        {ABAS.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setAba(key)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
              aba === key
                ? "bg-white dark:bg-surface-dark text-violet-700 dark:text-violet-400 shadow-sm"
                : "text-slate-500 dark:text-[var(--sidebar-text)]/45 hover:text-slate-700 dark:hover:text-slate-900 dark:text-slate-600 dark:text-white/70"
            }`}
          >
            <Icon size={13} />
            {label}
          </button>
        ))}
      </div>

      {/* Conteúdo da aba ativa */}
      <div key={aba} className="animate-fade-in-up">
        {aba === "v1" ? <DashboardV1 metricas={metricas} /> : <DashboardV2 />}
      </div>
    </div>
  );
}
