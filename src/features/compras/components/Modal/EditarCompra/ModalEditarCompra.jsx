
import { useEffect, useState } from "react";
import { ArrowDown, Save, X } from "lucide-react";

import { COMPRA_STATUS } from "../../../constants/statusConfig";
import { FORMAS_PAGAMENTO } from "../../../constants/paymentMethods";

function dataParaInput(data) {
  if (!data) return "";

  const date = new Date(data);
  if (Number.isNaN(date.getTime())) return "";

  const ano = date.getFullYear();
  const mes = String(date.getMonth() + 1).padStart(2, "0");
  const dia = String(date.getDate()).padStart(2, "0");

  return `${ano}-${mes}-${dia}`;
}

function dataParaISO(data) {
  return data ? new Date(`${data}T12:00:00`).toISOString() : null;
}

function numero(valor) {
  const resultado = Number(valor);
  return Number.isFinite(resultado) ? resultado : 0;
}

function formatarMoeda(valor) {
  return numero(valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

const inputClass =
  "mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/15 dark:border-white/10 dark:bg-[#101426] dark:text-white";

const labelClass =
  "block text-sm font-medium text-slate-700 dark:text-slate-300";

function criarFormulario(compra) {
  return {
    fornecedorNome: compra.fornecedorNome ?? "",
    data: dataParaInput(compra.data),
    previsaoEntrega: dataParaInput(compra.previsaoEntrega),
    formaPagamento: compra.formaPagamento ?? "",
    status: compra.status ?? "",
    desconto: String(compra.desconto ?? 0),
    frete: String(compra.frete ?? 0),
    outrasDespesas: String(compra.outrasDespesas ?? 0),
    impostos: String(compra.impostos ?? 0),
    observacoes: compra.observacoes ?? "",
  };
}

export function ModalEditarCompra({ compra, onClose, onSave }) {
  const [form, setForm] = useState(() => criarFormulario(compra));
  const [erro, setErro] = useState("");
  const [salvando, setSalvando] = useState(false);

  useEffect(() => {
    setForm(criarFormulario(compra));
    setErro("");
  }, [compra]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape" && !salvando) onClose();
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, salvando]);

  function alterar(campo, valor) {
    setForm((atual) => ({ ...atual, [campo]: valor }));
  }

  const desconto = numero(form.desconto);
  const frete = numero(form.frete);
  const outrasDespesas = numero(form.outrasDespesas);
  const impostos = numero(form.impostos);

  const total = Math.round(
    (numero(compra.subtotal) - desconto + frete + outrasDespesas + impostos) *
      100
  ) / 100;

  async function handleSubmit(event) {
    event.preventDefault();
    setErro("");

    if (!form.fornecedorNome.trim()) {
      setErro("Informe o nome do fornecedor.");
      return;
    }

    if (!form.data || !form.previsaoEntrega) {
      setErro("Preencha a data da compra e a previsão de entrega.");
      return;
    }

    if (form.previsaoEntrega < form.data) {
      setErro("A previsão de entrega não pode ser anterior à data da compra.");
      return;
    }

    if ([desconto, frete, outrasDespesas, impostos].some((v) => v < 0)) {
      setErro("Os valores financeiros não podem ser negativos.");
      return;
    }

    if (desconto > numero(compra.subtotal)) {
      setErro("O desconto não pode ser maior que o subtotal.");
      return;
    }

    if (total < 0) {
      setErro("O total da compra não pode ser negativo.");
      return;
    }

    setSalvando(true);

    try {
      const sucesso = await onSave({
        fornecedorNome: form.fornecedorNome.trim(),
        data: dataParaISO(form.data),
        previsaoEntrega: dataParaISO(form.previsaoEntrega),
        formaPagamento: form.formaPagamento,
        status: form.status,
        desconto,
        frete,
        outrasDespesas,
        impostos,
        total,
        observacoes: form.observacoes.trim(),
      });

      if (sucesso === false) {
        setErro("Não foi possível atualizar esta compra.");
      }
    } catch {
      setErro("Ocorreu um erro ao salvar a compra. Tente novamente.");
    } finally {
      setSalvando(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !salvando) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="editar-compra-titulo"
        className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#151936]"
      >
        <header className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 dark:border-white/10 sm:px-6">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
              <Save size={20} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
                Compras / Edição
              </p>
              <h2
                id="editar-compra-titulo"
                className="mt-1 text-xl font-bold text-slate-900 dark:text-white"
              >
                Editar compra {compra.numero}
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Atualize os dados e salve as alterações.
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Fechar modal"
            disabled={salvando}
            onClick={onClose}
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 disabled:opacity-50 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <X size={20} />
          </button>
        </header>

        <form onSubmit={handleSubmit} className="flex min-h-0 flex-1 flex-col">
          <div className="flex-1 space-y-6 overflow-y-auto p-5 sm:p-6">
            <section>
              <h3 className="mb-4 text-sm font-semibold text-slate-900 dark:text-white">
                Informações gerais
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className={labelClass}>
                  Fornecedor
                  <input
                    className={inputClass}
                    value={form.fornecedorNome}
                    onChange={(e) => alterar("fornecedorNome", e.target.value)}
                    required
                  />
                </label>

                <label className={labelClass}>
                  Data da compra
                  <input
                    className={inputClass}
                    type="date"
                    value={form.data}
                    onChange={(e) => alterar("data", e.target.value)}
                    required
                  />
                </label>

                <label className={labelClass}>
                  Previsão de entrega
                  <input
                    className={inputClass}
                    type="date"
                    value={form.previsaoEntrega}
                    onChange={(e) =>
                      alterar("previsaoEntrega", e.target.value)
                    }
                    required
                  />
                </label>

                <label className={labelClass}>
                  Forma de pagamento
                  <select
                    className={inputClass}
                    value={form.formaPagamento}
                    onChange={(e) =>
                      alterar("formaPagamento", e.target.value)
                    }
                    required
                  >
                    {Object.values(FORMAS_PAGAMENTO).map((valor) => (
                      <option key={valor} value={valor}>
                        {String(valor).replaceAll("_", " ")}
                      </option>
                    ))}
                  </select>
                </label>

                <label className={labelClass}>
                  Status da compra
                  <select
                    className={inputClass}
                    value={form.status}
                    onChange={(e) => alterar("status", e.target.value)}
                    required
                  >
                    {Object.values(COMPRA_STATUS).map((valor) => (
                      <option key={valor} value={valor}>
                        {String(valor).replaceAll("_", " ")}
                      </option>
                    ))}
                  </select>
                </label>

                <label className={labelClass}>
                  Observações
                  <textarea
                    className={inputClass}
                    rows={3}
                    value={form.observacoes}
                    onChange={(e) => alterar("observacoes", e.target.value)}
                    placeholder="Observações sobre esta compra..."
                  />
                </label>
              </div>
            </section>

            <section className="border-t border-slate-200 pt-5 dark:border-white/10">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Valores financeiros
              </h3>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Subtotal atual: {formatarMoeda(compra.subtotal)}
              </p>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  ["desconto", "Desconto"],
                  ["frete", "Frete"],
                  ["outrasDespesas", "Outras despesas"],
                  ["impostos", "Impostos"],
                ].map(([campo, titulo]) => (
                  <label key={campo} className={labelClass}>
                    {titulo}
                    <input
                      className={inputClass}
                      type="number"
                      min="0"
                      step="0.01"
                      value={form[campo]}
                      onChange={(e) => alterar(campo, e.target.value)}
                      required
                    />
                  </label>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-emerald-50 p-4 dark:bg-emerald-500/10">
                <div>
                  <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">
                    Total calculado
                  </p>
                  <p className="mt-1 text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                    {formatarMoeda(total)}
                  </p>
                </div>

                <ArrowDown className="text-emerald-600 dark:text-emerald-400" />
              </div>
            </section>

            {erro && (
              <p
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300"
              >
                {erro}
              </p>
            )}
          </div>

          <footer className="flex flex-wrap justify-end gap-3 border-t border-slate-200 bg-slate-50/80 px-5 py-4 dark:border-white/10 dark:bg-[#101426] sm:px-6">
            <button
              type="button"
              disabled={salvando}
              onClick={onClose}
              className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-white disabled:opacity-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5"
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={salvando}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Save size={17} />
              {salvando ? "Salvando..." : "Salvar alterações"}
            </button>
          </footer>
        </form>
      </section>
    </div>
  );
}
