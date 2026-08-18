import { useEffect, useState, useCallback } from "react";
import {
  Wallet,
  AlertTriangle,
  Clock,
  Search,
  RefreshCw,
  CheckCircle2,
  TrendingDown,
} from "lucide-react";
import { buscarComprasPendentes } from "../services/compraService";
import ContasTable from "../components/contas/ContasTable";
import PagamentoModal from "../components/contas/PagamentoModal";
import StatsCard from "../components/dashboard/StatsCard";
import Toast from "../components/ui/Toast";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

function formatMoeda(valor) {
  return Number(valor || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function isVencida(dataVencimento) {
  if (!dataVencimento) return false;
  return new Date(dataVencimento) < new Date();
}

const FILTROS = [
  { key: "todos", label: "Todas" },
  { key: "PENDENTE", label: "Pendentes" },
  { key: "PARCIAL", label: "Parciais" },
  { key: "vencidas", label: "Vencidas" },
];

export default function ContasReceber() {
  const [compras, setCompras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pesquisa, setPesquisa] = useState("");
  const [filtro, setFiltro] = useState("todos");
  const [compraSelecionada, setCompraSelecionada] = useState(null);
  const [toast, setToast] = useState(null);
  const [toastTimer, setToastTimer] = useState(null);

  function showToast(mensagem, tipo = "sucesso") {
    if (toastTimer) clearTimeout(toastTimer);
    setToast({ mensagem, tipo });
    const t = setTimeout(() => setToast(null), 3500);
    setToastTimer(t);
  }

  const carregarPendencias = useCallback(async () => {
    setLoading(true);
    try {
      const dados = await buscarComprasPendentes();
      setCompras(Array.isArray(dados) ? dados : []);
    } catch {
      showToast("Erro ao carregar contas a receber.", "erro");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    carregarPendencias();
  }, [carregarPendencias]);

  const totalDevedor = compras.reduce(
    (acc, c) => acc + Number(c.saldoDevedor || 0),
    0,
  );
  const totalPendentes = compras.filter(
    (c) => c.statusPagamento === "PENDENTE",
  ).length;
  const totalParciais = compras.filter(
    (c) => c.statusPagamento === "PARCIAL",
  ).length;
  const vencidas = compras.filter((c) => isVencida(c.dataVencimento));

  const maiorDevedor = compras.reduce(
    (max, c) =>
      Number(c.saldoDevedor || 0) > Number(max?.saldoDevedor || 0) ? c : max,
    null,
  );

  const contasFiltradas = compras
    .filter((c) => {
      const nome = c.nomeCliente || c.cliente?.nome || "";
      return nome.toLowerCase().includes(pesquisa.toLowerCase());
    })
    .filter((c) => {
      if (filtro === "PENDENTE") return c.statusPagamento === "PENDENTE";
      if (filtro === "PARCIAL") return c.statusPagamento === "PARCIAL";
      if (filtro === "vencidas") return isVencida(c.dataVencimento);
      return true;
    });

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-violet-50 dark:bg-violet-500/15 rounded-xl flex items-center justify-center">
            <Wallet
              size={18}
              className="text-violet-600 dark:text-violet-400"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-slate-800 dark:text-[var(--sidebar-text)]">
              Contas a Receber
            </h1>
            <p className="text-xs text-slate-400 dark:text-[var(--sidebar-text)]/40">
              {loading
                ? "Carregando..."
                : `${compras.length} conta${compras.length !== 1 ? "s" : ""} em aberto`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Buscar cliente..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            leftIcon={<Search size={14} />}
            className="w-52"
          />
          <Button
            variant="outline"
            onClick={carregarPendencias}
            disabled={loading}
          >
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <StatsCard
          title="Total a receber"
          value={formatMoeda(totalDevedor)}
          change="saldo devedor total"
          trend={totalDevedor > 0 ? "down" : "up"}
          color="red"
          icon={<TrendingDown size={16} />}
        />
        <StatsCard
          title="Pendentes"
          value={totalPendentes}
          change="aguardando pagamento"
          trend={totalPendentes > 0 ? "down" : "up"}
          color="amber"
          icon={<AlertTriangle size={16} />}
        />
        <StatsCard
          title="Parciais"
          value={totalParciais}
          change="pagamento incompleto"
          trend={totalParciais > 0 ? "neutral" : "up"}
          color="blue"
          icon={<Clock size={16} />}
        />
        <StatsCard
          title="Vencidas"
          value={vencidas.length}
          change={vencidas.length > 0 ? "requer atenção" : "nenhuma vencida"}
          trend={vencidas.length > 0 ? "down" : "up"}
          color={vencidas.length > 0 ? "red" : "green"}
          icon={<CheckCircle2 size={16} />}
        />
      </div>

      {vencidas.length > 0 && !loading && (
        <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-white/8 p-4 space-y-3">
          <p className="text-xs font-semibold text-slate-500 dark:text-[var(--sidebar-text)]/45 uppercase tracking-wide flex items-center gap-1.5">
            <AlertTriangle size={13} className="text-red-500" />
            Contas vencidas — requerem atenção imediata
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {vencidas.map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between px-3 py-2 bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span className="text-sm text-red-800 dark:text-red-300 font-medium">
                    {c.nomeCliente || c.cliente?.nome}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-red-600 dark:text-red-400 font-semibold">
                    {formatMoeda(c.saldoDevedor)}
                  </span>
                  <button
                    onClick={() => setCompraSelecionada(c)}
                    className="text-[11px] px-2 py-0.5 bg-red-600 text-[var(--sidebar-text)] rounded-md hover:bg-red-700 transition"
                  >
                    Pagar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {maiorDevedor && !loading && compras.length > 1 && (
        <div className="flex items-center justify-between bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/20 rounded-xl px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <AlertTriangle
              size={15}
              className="text-amber-600 dark:text-amber-400 flex-shrink-0"
            />
            <p className="text-sm text-amber-800 dark:text-amber-300">
              Maior devedor:{" "}
              <strong>
                {maiorDevedor.nomeCliente || maiorDevedor.cliente?.nome}
              </strong>
              {" — "}
              {formatMoeda(maiorDevedor.saldoDevedor)}
            </p>
          </div>
          <button
            onClick={() => setCompraSelecionada(maiorDevedor)}
            className="text-xs font-medium text-amber-700 dark:text-amber-400 underline hover:text-amber-900 dark:hover:text-amber-200 transition flex-shrink-0"
          >
            Registrar pagamento
          </button>
        </div>
      )}

      <div className="flex items-center gap-2 flex-wrap">
        {FILTROS.map((f) => (
          <button
            key={f.key}
            onClick={() => setFiltro(f.key)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
              filtro === f.key
                ? "bg-violet-600 text-[var(--sidebar-text)] border-violet-600"
                : "bg-white dark:bg-white/5 text-slate-500 dark:text-[var(--sidebar-text)]/45 border-slate-200 dark:border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
            }`}
          >
            {f.label}
            {f.key === "vencidas" && vencidas.length > 0 && (
              <span className="ml-1.5 bg-red-500/20 text-red-700 dark:text-red-300 px-1 rounded">
                {vencidas.length}
              </span>
            )}
            {f.key === "PENDENTE" && totalPendentes > 0 && (
              <span className="ml-1.5 bg-amber-500/20 text-amber-700 dark:text-amber-300 px-1 rounded">
                {totalPendentes}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <ContasTable
          compras={contasFiltradas}
          onPagar={(c) => setCompraSelecionada(c)}
          loading={loading}
        />
      </div>

      <PagamentoModal
        compra={compraSelecionada}
        fechar={() => setCompraSelecionada(null)}
        atualizarLista={carregarPendencias}
        setToast={({ mensagem, tipo }) => showToast(mensagem, tipo)}
      />

      {toast && (
        <Toast
          mensagem={toast.mensagem}
          tipo={toast.tipo}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}
