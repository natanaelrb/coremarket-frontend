import { MoreHorizontal, Pencil, Trash2, Package } from "lucide-react";
import { useState } from "react";

function getStatus(qtd) {
  if (qtd === 0)
    return {
      label: "Sem estoque",
      className:
        "bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-400 border-red-100 dark:border-red-500/20",
    };
  if (qtd < 10)
    return {
      label: "Estoque baixo",
      className:
        "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-500/20",
    };
  return {
    label: "Em estoque",
    className:
      "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20",
  };
}

function ActionsMenu({ onEditar, onExcluir }) {
  const [aberto, setAberto] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setAberto(!aberto)}
        className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 dark:text-[var(--sidebar-text)]/35 hover:text-slate-600 dark:hover:text-slate-900 dark:text-slate-600 dark:text-white/70 hover:bg-slate-100 dark:hover:bg-white/8 transition"
      >
        <MoreHorizontal size={15} />
      </button>
      {aberto && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setAberto(false)}
          />
          <div className="absolute right-0 top-8 z-20 bg-white dark:bg-surface-dark border border-slate-100 dark:border-slate-200 dark:border-white/10 rounded-xl shadow-lg py-1 w-36 animate-scale-in">
            <button
              onClick={() => {
                setAberto(false);
                onEditar();
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-900 dark:text-slate-600 dark:text-white/70 hover:bg-slate-50 dark:hover:bg-white/8 transition"
            >
              <Pencil size={13} /> Editar
            </button>
            <button
              onClick={() => {
                setAberto(false);
                onExcluir();
              }}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-500/10 transition"
            >
              <Trash2 size={13} /> Excluir
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function SkeletonRow() {
  return (
    <tr>
      {[1, 2, 3, 4, 5].map((i) => (
        <td key={i} className="px-4 py-3">
          <div className="h-4 bg-slate-100 dark:bg-white/8 rounded animate-pulse" />
        </td>
      ))}
    </tr>
  );
}

export default function ProdutosTable({
  produtos,
  onEditar,
  onExcluir,
  loading = false,
}) {
  if (loading) {
    return (
      <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-white/8 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 dark:border-white/8 bg-slate-50/60 dark:bg-white/3">
              {["Produto", "Descrição", "Preço", "Estoque", "Status", ""].map(
                (h) => (
                  <th
                    key={h}
                    className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide"
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((i) => (
              <SkeletonRow key={i} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (produtos.length === 0) {
    return (
      <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-white/8 flex flex-col items-center justify-center py-16 text-center animate-fade-in">
        <div className="w-12 h-12 bg-slate-100 dark:bg-white/8 rounded-full flex items-center justify-center mb-3">
          <Package
            size={20}
            className="text-slate-400 dark:text-[var(--sidebar-text)]/35"
          />
        </div>
        <p className="text-sm font-medium text-slate-600 dark:text-[var(--sidebar-text)]/75">
          Nenhum produto encontrado
        </p>
        <p className="text-xs text-slate-400 dark:text-[var(--sidebar-text)]/35 mt-1">
          Tente outro nome ou cadastre um novo produto.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-100 dark:border-white/8 overflow-hidden animate-fade-in">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-100 dark:border-white/8 bg-slate-50/60 dark:bg-white/3">
            <th className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide">
              Produto
            </th>
            <th className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide">
              Descrição
            </th>
            <th className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide">
              Preço
            </th>
            <th className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide">
              Estoque
            </th>
            <th className="text-left text-xs font-medium text-slate-400 dark:text-[var(--sidebar-text)]/35 px-4 py-3 uppercase tracking-wide">
              Status
            </th>
            <th className="px-4 py-3 w-10" />
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-50 dark:divide-white/5">
          {produtos.map((produto) => {
            const status = getStatus(produto.quantidadeEstoque);
            return (
              <tr
                key={produto.id}
                className="hover:bg-slate-50/60 dark:hover:bg-white/3 transition group"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-50 dark:bg-violet-500/15 flex items-center justify-center flex-shrink-0">
                      <Package
                        size={14}
                        className="text-violet-500 dark:text-violet-400"
                      />
                    </div>
                    <span className="text-sm font-medium text-slate-800 dark:text-[var(--sidebar-text)]/90">
                      {produto.nome}
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 max-w-[200px]">
                  <span className="text-sm text-slate-500 dark:text-[var(--sidebar-text)]/45 truncate block">
                    {produto.descricao || (
                      <span className="text-slate-300 dark:text-[var(--sidebar-text)]/25">
                        —
                      </span>
                    )}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    R${" "}
                    {Number(produto.preco).toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-sm font-semibold ${produto.quantidadeEstoque === 0 ? "text-red-600 dark:text-red-400" : produto.quantidadeEstoque < 10 ? "text-amber-600 dark:text-amber-400" : "text-slate-700 dark:text-[var(--sidebar-text)]/75"}`}
                  >
                    {produto.quantidadeEstoque} un.
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${status.className}`}
                  >
                    {status.label}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <ActionsMenu
                    onEditar={() => onEditar(produto)}
                    onExcluir={() => onExcluir(produto.id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="px-4 py-3 border-t border-slate-100 dark:border-white/8 bg-slate-50/40 dark:bg-white/3">
        <p className="text-xs text-slate-400 dark:text-[var(--sidebar-text)]/35">
          {produtos.length} produto{produtos.length !== 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}
