import { useEffect, useState, useCallback } from "react";
import {
  Plus,
  Search,
  Package,
  AlertTriangle,
  TrendingUp,
  DollarSign,
  RefreshCw,
} from "lucide-react";
import { listarProdutos, excluirProduto } from "../services/produtoService";
import ProdutosTable from "../components/produtos/ProdutosTable";
import NovoProdutoModal from "../components/produtos/NovoProdutoModal";
import EditarProdutoModal from "../components/produtos/EditarProdutoModal";
import StatsCard from "../components/dashboard/StatsCard";
import Toast from "../components/ui/Toast";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export default function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pesquisa, setPesquisa] = useState("");
  const [filtroStatus, setFiltroStatus] = useState("todos");
  const [modalNovo, setModalNovo] = useState(false);
  const [produtoEditando, setProdutoEditando] = useState(null);
  const [toast, setToast] = useState(null);
  const [toastTimer, setToastTimer] = useState(null);

  function showToast(mensagem, tipo = "sucesso") {
    if (toastTimer) clearTimeout(toastTimer);
    setToast({ mensagem, tipo });
    const t = setTimeout(() => setToast(null), 3500);
    setToastTimer(t);
  }

  const buscarProdutos = useCallback(async () => {
    setLoading(true);
    try {
      const dados = await listarProdutos();
      setProdutos(dados);
    } catch {
      showToast("Erro ao carregar produtos.", "erro");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    buscarProdutos();
  }, [buscarProdutos]);

  async function handleExcluir(id) {
    const confirmar = window.confirm("Deseja realmente excluir este produto?");
    if (!confirmar) return;
    try {
      await excluirProduto(id);
      await buscarProdutos();
      showToast("Produto excluído com sucesso!");
    } catch {
      showToast("Erro ao excluir produto.", "erro");
    }
  }

  const totalProdutos = produtos.length;
  const estoqueBaixo = produtos.filter(
    (p) => p.quantidadeEstoque > 0 && p.quantidadeEstoque < 10,
  );
  const semEstoque = produtos.filter((p) => p.quantidadeEstoque === 0);
  const valorTotalEstoque = produtos.reduce(
    (acc, p) => acc + Number(p.preco) * p.quantidadeEstoque,
    0,
  );

  const produtosFiltrados = produtos
    .filter((p) => p.nome.toLowerCase().includes(pesquisa.toLowerCase()))
    .filter((p) => {
      if (filtroStatus === "normal") return p.quantidadeEstoque >= 10;
      if (filtroStatus === "baixo")
        return p.quantidadeEstoque > 0 && p.quantidadeEstoque < 10;
      if (filtroStatus === "zerado") return p.quantidadeEstoque === 0;
      return true;
    });

  const filtros = [
    { key: "todos", label: "Todos" },
    { key: "normal", label: "Em estoque" },
    { key: "baixo", label: "Estoque baixo" },
    { key: "zerado", label: "Sem estoque" },
  ];

  const temAlertas = estoqueBaixo.length > 0 || semEstoque.length > 0;

  return (
    <div className="space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-violet-50 dark:bg-violet-500/15 rounded-xl flex items-center justify-center">
            <Package
              size={18}
              className="text-violet-600 dark:text-violet-400"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-slate-800 dark:text-[var(--sidebar-text)]">
              Produtos
            </h1>
            <p className="text-xs text-slate-400 dark:text-[var(--sidebar-text)]/40">
              {loading
                ? "Carregando..."
                : `${totalProdutos} produto${totalProdutos !== 1 ? "s" : ""} cadastrado${totalProdutos !== 1 ? "s" : ""}`}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Input
            placeholder="Buscar produto..."
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            leftIcon={<Search size={14} />}
            className="w-56"
          />
          <Button variant="outline" onClick={buscarProdutos} disabled={loading}>
            <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
          </Button>
          <Button onClick={() => setModalNovo(true)}>
            <Plus size={15} />
            Novo produto
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <StatsCard
          title="Total de produtos"
          value={totalProdutos}
          change="produtos cadastrados"
          trend="neutral"
          color="violet"
          icon={<Package size={16} />}
        />
        <StatsCard
          title="Estoque baixo"
          value={estoqueBaixo.length}
          change={estoqueBaixo.length > 0 ? "requer atenção" : "tudo ok"}
          trend={estoqueBaixo.length > 0 ? "down" : "up"}
          color="amber"
          icon={<AlertTriangle size={16} />}
        />
        <StatsCard
          title="Sem estoque"
          value={semEstoque.length}
          change={
            semEstoque.length > 0 ? "produto(s) zerado(s)" : "nenhum zerado"
          }
          trend={semEstoque.length > 0 ? "down" : "up"}
          color="red"
          icon={<TrendingUp size={16} />}
        />
        <StatsCard
          title="Valor em estoque"
          value={`R$ ${valorTotalEstoque.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`}
          change="valor total"
          trend="neutral"
          color="green"
          icon={<DollarSign size={16} />}
        />
      </div>

      {temAlertas && !loading && (
        <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-white/8 p-4 space-y-3">
          <p className="text-xs font-semibold text-slate-500 dark:text-[var(--sidebar-text)]/45 uppercase tracking-wide flex items-center gap-1.5">
            <AlertTriangle size={13} className="text-amber-500" />
            Alertas de estoque
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {semEstoque.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between px-3 py-2 bg-red-50 dark:bg-red-500/10 border border-red-100 dark:border-red-500/20 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span className="text-sm text-red-800 dark:text-red-300 font-medium">
                    {p.nome}
                  </span>
                </div>
                <span className="text-xs text-red-600 dark:text-red-400 font-semibold">
                  Sem estoque
                </span>
              </div>
            ))}
            {estoqueBaixo.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between px-3 py-2 bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/20 rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span className="text-sm text-amber-800 dark:text-amber-300 font-medium">
                    {p.nome}
                  </span>
                </div>
                <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                  {p.quantidadeEstoque} un.
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2">
        {filtros.map((f) => (
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
            {f.key === "baixo" && estoqueBaixo.length > 0 && (
              <span className="ml-1.5 bg-amber-500/20 text-amber-700 dark:text-amber-300 px-1 rounded">
                {estoqueBaixo.length}
              </span>
            )}
            {f.key === "zerado" && semEstoque.length > 0 && (
              <span className="ml-1.5 bg-red-500/20 text-red-700 dark:text-red-300 px-1 rounded">
                {semEstoque.length}
              </span>
            )}
          </button>
        ))}
      </div>

      <ProdutosTable
        produtos={produtosFiltrados}
        onEditar={(p) => setProdutoEditando(p)}
        onExcluir={handleExcluir}
        loading={loading}
      />

      <NovoProdutoModal
        aberto={modalNovo}
        fechar={() => setModalNovo(false)}
        atualizarProdutos={buscarProdutos}
        setToast={({ mensagem, tipo }) => showToast(mensagem, tipo)}
      />
      <EditarProdutoModal
        produto={produtoEditando}
        fechar={() => setProdutoEditando(null)}
        atualizarProdutos={buscarProdutos}
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
