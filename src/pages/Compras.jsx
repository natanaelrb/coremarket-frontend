import { useEffect, useState, useCallback } from "react";
import {
  Plus,
  Search,
  ShoppingCart,
  RefreshCw,
  AlertTriangle,
  DollarSign,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { listarCompras, excluirCompra } from "../services/compraService";
import ComprasTable from "../components/compras/ComprasTable";
import NovaCompraModal from "../components/compras/NovaCompraModal";
import EditarCompraModal from "../components/compras/EditarCompraModal";
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

const FILTROS_STATUS = [
  { key: "todos", label: "Todas" },
  { key: "PENDENTE", label: "Pendentes" },
  { key: "ENTREGUE", label: "Entregues" },
  { key: "EM_TRANSITO", label: "Em trânsito" },
  { key: "CANCELADA", label: "Canceladas" },
];

const FILTROS_PAGAMENTO = [
  { key: "todos", label: "Todos" },
  { key: "PENDENTE", label: "A pagar" },
  { key: "PAGO", label: "Pagas" },
  { key: "VENCIDO", label: "Vencidas" },
  { key: "PARCIAL", label: "Parciais" },
];

export default function Compras() {
  const [compras, setCompras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pesquisa, setPesquisa] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("todos");
  const [filtroPagamento, setFiltroPagamento] = useState("todos");
  const [modalNovo, setModalNovo] = useState(false);
  const [compraEditando, setCompraEditando] = useState(null);
  const [toast, setToast] = useState(null);
  const [toastTimer, setToastTimer] = useState(null);

  function showToast(mensagem, tipo = "sucesso") {
    if (toastTimer) clearTimeout(toastTimer);
    setToast({ mensagem, tipo });
    const t = setTimeout(() => setToast(null), 3500);
    setToastTimer(t);
  }

  const buscarCompras = useCallback(async () => {
    setLoading(true);
    try {
      const dados = await listarCompras();
      setCompras(Array.isArray(dados) ? dados : []);
    } catch {
      showToast("Erro ao carregar compras.", "erro");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    buscarCompras();
  }, [buscarCompras]);

  async function handleExcluir(id) {
    if (!window.confirm("Deseja realmente excluir esta compra?")) return;
    try {
      await excluirCompra(id);
      await buscarCompras();
      showToast("Compra excluída com sucesso!");
    } catch {
      showToast("Erro ao excluir compra.", "erro");
    }
  }

  const totalCompras = compras.length;
  const valorTotal = compras.reduce(
    (acc, c) => acc + Number(c.valorTotal || 0),
    0,
  );
  const totalReceber = compras.reduce(
    (acc, c) => acc + Number(c.saldoDevedor || 0),
    0,
  );
  const pendentes = compras.filter((c) => c.status === "PENDENTE");
  const vencidas = compras.filter((c) => c.statusPagamento === "VENCIDO");
  const pagas = compras.filter((c) => c.statusPagamento === "PAGO");

  const comprasFiltradas = compras
    .filter((c) => {
      const nome = c.nomeCliente || c.cliente?.nome || "";
      return nome.toLowerCase().includes(pesquisa.toLowerCase());
    })
    .filter((c) => filtroStatus === "todos" || c.status === filtroStatus)
    .filter(
      (c) =>
        filtroPagamento === "todos" || c.statusPagamento === filtroPagamento,
    );

  const temAlertas = vencidas.length > 0 || pendentes.length > 0;

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-violet-50 dark:bg-violet-500/15 rounded-xl flex items-center justify-center">
            <ShoppingCart
              size={18}
              className="text-violet-600 dark:text-violet-400"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-slate-800 dark:text-[var(--sidebar-text)]">
              Compras
            </h1>
            <p className="text-xs text-slate-400 dark:text-[var(--sidebar-text)]/40">
              {loading
                ? "Carregando..."
                : `${totalCompras} compra${totalCompras !== 1 ? "s" : ""} registrada${totalCompras !== 1 ? "s" : ""}`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Buscar por cliente..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            leftIcon={<Search size={14} />}
            className="w-52"
          />
          <Button variant="outline" onClick={buscarCompras} disabled={loading}>
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          </Button>
          <Button onClick={() => setModalNovo(true)}>
            <Plus size={15} />
            Nova compra
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <StatsCard
          title="Total de compras"
          value={totalCompras}
          change="registradas"
          trend="neutral"
          color="violet"
          icon={<ShoppingCart size={16} />}
        />
        <StatsCard
          title="Valor total"
          value={formatMoeda(valorTotal)}
          change="soma de todas as compras"
          trend="neutral"
          color="blue"
          icon={<DollarSign size={16} />}
        />
        <StatsCard
          title="A receber"
          value={formatMoeda(totalReceber)}
          change={totalReceber > 0 ? "saldo em aberto" : "tudo recebido"}
          trend={totalReceber > 0 ? "down" : "up"}
          color="amber"
          icon={<Clock size={16} />}
        />
        <StatsCard
          title="Pagas"
          value={pagas.length}
          change={`de ${totalCompras} compras`}
          trend={
            pagas.length === totalCompras && totalCompras > 0 ? "up" : "neutral"
          }
          color="green"
          icon={<CheckCircle2 size={16} />}
        />
      </div>

      {temAlertas && !loading && (
        <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-white/8 p-4 space-y-3">
          <p className="text-xs font-semibold text-slate-500 dark:text-[var(--sidebar-text)]/45 uppercase tracking-wide flex items-center gap-1.5">
            <AlertTriangle size={13} className="text-amber-500" />
            Alertas
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
                    {c.nomeCliente || c.cliente?.nome || `Compra #${c.id}`}
                  </span>
                </div>
                <span className="text-xs text-red-600 dark:text-red-400 font-semibold">
                  Vencida
                </span>
              </div>
            ))}
            {pendentes.slice(0, 4).map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between px-3 py-2 bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/20 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span className="text-sm text-amber-800 dark:text-amber-300 font-medium">
                    {c.nomeCliente || c.cliente?.nome || `Compra #${c.id}`}
                  </span>
                </div>
                <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                  {formatMoeda(c.saldoDevedor)} pendente
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-slate-400 dark:text-[var(--sidebar-text)]/35 mr-1">
            Status:
          </span>
          {FILTROS_STATUS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFiltroStatus(f.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                filtroStatus === f.key
                  ? "bg-violet-600 text-[var(--sidebar-text)] border-violet-600"
                  : "bg-white dark:bg-white/5 text-slate-500 dark:text-[var(--sidebar-text)]/45 border-slate-200 dark:border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
              }`}
            >
              {f.label}
              {f.key === "PENDENTE" && pendentes.length > 0 && (
                <span className="ml-1.5 bg-amber-500/20 text-amber-700 dark:text-amber-300 px-1 rounded">
                  {pendentes.length}
                </span>
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-slate-400 dark:text-[var(--sidebar-text)]/35 mr-1">
            Pgto:
          </span>
          {FILTROS_PAGAMENTO.map((f) => (
            <button
              key={f.key}
              onClick={() => setFiltroPagamento(f.key)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition ${
                filtroPagamento === f.key
                  ? "bg-violet-600 text-[var(--sidebar-text)] border-violet-600"
                  : "bg-white dark:bg-white/5 text-slate-500 dark:text-[var(--sidebar-text)]/45 border-slate-200 dark:border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
              }`}
            >
              {f.label}
              {f.key === "VENCIDO" && vencidas.length > 0 && (
                <span className="ml-1.5 bg-red-500/20 text-red-700 dark:text-red-300 px-1 rounded">
                  {vencidas.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <ComprasTable
          compras={comprasFiltradas}
          onEditar={(c) => setCompraEditando(c)}
          onExcluir={handleExcluir}
          loading={loading}
        />
      </div>

      <NovaCompraModal
        aberto={modalNovo}
        fechar={() => setModalNovo(false)}
        atualizarCompras={buscarCompras}
        setToast={({ mensagem, tipo }) => showToast(mensagem, tipo)}
      />
      <EditarCompraModal
        compra={compraEditando}
        fechar={() => setCompraEditando(null)}
        atualizarCompras={buscarCompras}
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
