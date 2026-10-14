import { useState } from "react";
import { CheckCircle2, ClipboardList, LoaderCircle, X } from "lucide-react";

import { FornecedorSection } from "./FornecedorSection";
import { ProdutosSection } from "./ProdutosSection";
import { ItensCompraTable } from "./ItensCompraTable";
import { ResumoCompra } from "./ResumoCompra";

export function ModalNovaCompra({ isOpen, form, onClose, onSalvar }) {
  const [salvando, setSalvando] = useState(false);

  if (!isOpen) return null;

  function fechar() {
    if (!salvando) onClose();
  }

  function salvar(event) {
    event.preventDefault();

    const compra = form.montarCompra();
    if (!compra) return;

    setSalvando(true);

    try {
      const chave = "coremarket-compras-temporarias";
      const anteriores = JSON.parse(localStorage.getItem(chave) || "[]");

      if (!Array.isArray(anteriores)) {
        throw new Error("Formato de compras temporárias inválido.");
      }

      localStorage.setItem(chave, JSON.stringify([compra, ...anteriores]));

      onSalvar?.(compra);
      form.limparFormulario();
      onClose();
    } catch {
      form.setErro(
        "Não foi possível salvar a compra temporária neste navegador.",
      );
    } finally {
      setSalvando(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-5"
      role="presentation"
      onKeyDown={(event) => {
        if (event.key === "Escape") fechar();
      }}
    >
      <button
        type="button"
        aria-label="Fechar modal"
        onClick={fechar}
        disabled={salvando}
        className="absolute inset-0 bg-slate-950/55 backdrop-blur-[4px] animate-fade-in"
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="nova-compra-title"
        className="relative z-10 flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-2xl animate-fade-in-scale dark:border-slate-700 dark:bg-[#0f1724]"
      >
        <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-[#151b28] sm:px-7">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400">
              <ClipboardList size={22} />
            </div>

            <div className="min-w-0">
              <h2
                id="nova-compra-title"
                className="text-lg font-bold text-slate-900 dark:text-white"
              >
                Nova compra
              </h2>
              <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">
                Registre os dados e os produtos recebidos do fornecedor.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={fechar}
            disabled={salvando}
            aria-label="Fechar"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <X size={19} />
          </button>
        </header>

        <form onSubmit={salvar} className="min-h-0 flex-1 overflow-y-auto">
          <div className="space-y-5 p-4 sm:p-6">
            <FornecedorSection form={form} />
            <ProdutosSection form={form} />
            <ItensCompraTable form={form} />
            <ResumoCompra form={form} />

            {form.erro && (
              <div
                role="alert"
                className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:border-red-400/20 dark:bg-red-400/10 dark:text-red-300"
              >
                {form.erro}
              </div>
            )}

            <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800 dark:border-amber-400/20 dark:bg-amber-400/5 dark:text-amber-200">
              Esta versão registra a compra somente no armazenamento local deste
              navegador. Ela ainda não atualiza o banco de dados nem o estoque
              do sistema.
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
              {salvando ? "Salvando..." : "Registrar compra"}
            </button>
          </footer>
        </form>
      </section>
    </div>
  );
}
