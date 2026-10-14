
import { useState } from "react";
import {
  ShoppingCart,
  X,
  Plus,
  Trash2,
  CalendarDays,
  ClipboardList,
  LoaderCircle,
  CheckCircle2,
  Package,
  Truck,
} from "lucide-react";

const moeda = (valor) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor || 0);

const campo =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/15 dark:border-white/10 dark:bg-[#101824] dark:text-white";

const rotulo =
  "text-sm font-semibold text-slate-700 dark:text-slate-200";

export function ModalNovoPedido({ isOpen, form, onClose, onSalvar }) {
  const [salvando, setSalvando] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState("");

  if (!isOpen) return null;

  function fechar() {
    if (!salvando) onClose();
  }

  function adicionar() {
    if (!produtoSelecionado) {
      form.setErro("Selecione um produto para adicionar.");
      return;
    }

    form.adicionarProduto(produtoSelecionado);
    setProdutoSelecionado("");
  }

  function salvar(event) {
    event.preventDefault();

    const pedido = form.montarPedido();
    if (!pedido) return;

    setSalvando(true);

    try {
      const chave = "coremarket-pedidos-temporarios";
      const anteriores = JSON.parse(localStorage.getItem(chave) || "[]");

      if (!Array.isArray(anteriores)) {
        throw new Error("Os pedidos armazenados são inválidos.");
      }

      localStorage.setItem(
        chave,
        JSON.stringify([pedido, ...anteriores])
      );

      onSalvar?.(pedido);
      form.limparFormulario();
      onClose();
    } catch {
      form.setErro(
        "Não foi possível salvar o pedido neste navegador."
      );
    } finally {
      setSalvando(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-5"
      onKeyDown={(event) => {
        if (event.key === "Escape") fechar();
      }}
    >
      <button
        type="button"
        aria-label="Fechar modal"
        onClick={fechar}
        disabled={salvando}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-[4px] animate-fade-in"
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="novo-pedido-title"
        className="relative z-10 flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-2xl animate-fade-in-scale dark:border-slate-700 dark:bg-[#0f1724]"
      >
        <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-[#151b28] sm:px-7">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400">
              <ShoppingCart size={22} />
            </div>

            <div>
              <h2
                id="novo-pedido-title"
                className="text-lg font-bold text-slate-900 dark:text-white"
              >
                Novo pedido de compra
              </h2>
              <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                Solicite produtos ao fornecedor e acompanhe a entrega.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={fechar}
            disabled={salvando}
            aria-label="Fechar"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 dark:hover:bg-white/10"
          >
            <X size={19} />
          </button>
        </header>

        <form onSubmit={salvar} className="min-h-0 flex-1 overflow-y-auto">
          <div className="space-y-5 p-4 sm:p-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#151b28] sm:p-5">
              <div className="mb-4 flex items-center gap-2">
                <Truck size={18} className="text-green-600" />
                <h3 className="font-bold text-slate-900 dark:text-white">
                  Dados do fornecedor
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className={rotulo}>
                  Fornecedor *
                  <select
                    required
                    value={form.fornecedorId}
                    onChange={(event) => {
                      form.setFornecedorId(event.target.value);
                      form.setErro("");
                    }}
                    className={campo}
                  >
                    <option value="">Selecione um fornecedor</option>
                    {form.fornecedores.map((fornecedor) => (
                      <option
                        key={fornecedor.id}
                        value={fornecedor.id}
                      >
                        {fornecedor.nome}
                      </option>
                    ))}
                  </select>
                </label>

                <label className={rotulo}>
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={15} />
                    Previsão de entrega
                  </span>
                  <input
                    type="date"
                    min={new Date().toLocaleDateString("en-CA")}
                    value={form.previsaoEntrega}
                    onChange={(event) =>
                      form.setPrevisaoEntrega(event.target.value)
                    }
                    className={campo}
                  />
                </label>
              </div>

              <label className={`${rotulo} mt-4 block`}>
                Observações
                <textarea
                  rows={2}
                  value={form.observacoes}
                  onChange={(event) =>
                    form.setObservacoes(event.target.value)
                  }
                  placeholder="Ex.: reposição semanal, prazo negociado..."
                  className={`${campo} resize-y`}
                />
              </label>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#151b28] sm:p-5">
              <div className="mb-4 flex items-center gap-2">
                <Package size={18} className="text-green-600" />
                <h3 className="font-bold text-slate-900 dark:text-white">
                  Produtos do pedido
                </h3>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <select
                  value={produtoSelecionado}
                  onChange={(event) =>
                    setProdutoSelecionado(event.target.value)
                  }
                  className={`${campo} mt-0 min-w-0 flex-1`}
                >
                  <option value="">Buscar produto para adicionar</option>
                  {form.produtosDisponiveis.map((produto) => (
                    <option key={produto.id} value={produto.id}>
                      {produto.nome} — {moeda(produto.preco)}
                    </option>
                  ))}
                </select>

                <button
                  type="button"
                  onClick={adicionar}
                  className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-green-600 px-4 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  <Plus size={17} />
                  Adicionar produto
                </button>
              </div>

              <div className="mt-4 space-y-3">
                {form.itens.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-slate-300 px-4 py-8 text-center dark:border-white/15">
                    <Package
                      size={26}
                      className="mx-auto text-slate-400"
                    />
                    <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                      Nenhum produto adicionado
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Selecione os produtos que deseja solicitar.
                    </p>
                  </div>
                ) : (
                  form.itens.map((item) => (
                    <div
                      key={item.produtoId}
                      className="grid grid-cols-1 items-center gap-3 rounded-xl border border-slate-200 p-3 dark:border-white/10 sm:grid-cols-[minmax(0,1fr)_100px_135px_110px_36px]"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-800 dark:text-white">
                          {item.nome}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-500">
                          {item.codigoBarras || "Sem código de barras"}
                        </p>
                      </div>

                      <label className="text-xs font-semibold text-slate-500">
                        Quantidade
                        <input
                          type="number"
                          min="1"
                          step="1"
                          value={item.quantidade}
                          onChange={(event) =>
                            form.alterarQuantidade(
                              item.produtoId,
                              event.target.value
                            )
                          }
                          className={campo}
                        />
                      </label>

                      <label className="text-xs font-semibold text-slate-500">
                        Valor unitário
                        <input
                          type="number"
                          min="0"
                          step="0.01"
                          value={item.precoUnitario}
                          onChange={(event) =>
                            form.alterarPreco(
                              item.produtoId,
                              event.target.value
                            )
                          }
                          className={campo}
                        />
                      </label>

                      <div>
                        <p className="text-xs text-slate-500">Subtotal</p>
                        <p className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                          {moeda(item.quantidade * item.precoUnitario)}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          form.removerProduto(item.produtoId)
                        }
                        aria-label={`Remover ${item.nome}`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-red-500 transition hover:bg-red-50 dark:hover:bg-red-400/10"
                      >
                        <Trash2 size={17} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </section>

            <section className="rounded-2xl border border-green-200 bg-green-50 p-5 dark:border-green-500/20 dark:bg-green-500/5">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-green-800 dark:text-green-300">
                    Valor estimado do pedido
                  </p>
                  <p className="mt-1 text-xs text-green-700/80 dark:text-green-400/80">
                    {form.itens.length} produto(s) diferente(s) ·{" "}
                    {form.itens.reduce(
                      (soma, item) => soma + item.quantidade,
                      0
                    )}{" "}
                    unidade(s)
                  </p>
                </div>

                <p className="text-2xl font-extrabold tracking-tight text-green-800 dark:text-green-300">
                  {moeda(form.total)}
                </p>
              </div>
            </section>

            {form.erro && (
              <div
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:border-red-400/20 dark:bg-red-400/10 dark:text-red-300"
              >
                {form.erro}
              </div>
            )}

            <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800 dark:border-amber-400/20 dark:bg-amber-400/5 dark:text-amber-200">
              <ClipboardList size={16} className="mt-0.5 shrink-0" />
              O pedido ficará como pendente de envio. Ele não atualiza o estoque
              nem aparece na tabela de compras existente nesta versão.
            </div>
          </div>

          <footer className="sticky bottom-0 flex flex-col-reverse gap-2 border-t border-slate-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-[#151b28] sm:flex-row sm:justify-end sm:px-6">
            <button
              type="button"
              onClick={fechar}
              disabled={salvando}
              className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-200 px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={salvando}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-green-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700 disabled:cursor-wait disabled:opacity-60"
            >
              {salvando ? (
                <LoaderCircle size={17} className="animate-spin" />
              ) : (
                <CheckCircle2 size={17} />
              )}
              {salvando ? "Salvando..." : "Salvar pedido"}
            </button>
          </footer>
        </form>
      </section>
    </div>
  );
}
