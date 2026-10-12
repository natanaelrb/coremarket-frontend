import { useMovimentoForm } from "../../hooks/useMovimentoForm.js";
import { MOVIMENTO_CONFIG } from "../../utils/movimentoConfig.js";

import MovimentoHeader from "./EstoqueMovimentoModal/MovimentoHeader.jsx";
import MovimentoProduto from "./EstoqueMovimentoModal/MovimentoProduto.jsx";
import MovimentoQuantidade from "./EstoqueMovimentoModal/MovimentoQuantidade.jsx";
import MovimentoCusto from "./EstoqueMovimentoModal/MovimentoCusto.jsx";
import MovimentoMotivo from "./EstoqueMovimentoModal/MovimentoMotivo.jsx";
import MovimentoObservacao from "./EstoqueMovimentoModal/MovimentoObservacao.jsx";
import MovimentoResumo from "./EstoqueMovimentoModal/MovimentoResumo.jsx";
import MovimentoFooter from "./EstoqueMovimentoModal/MovimentoFooter.jsx";
import MovimentoProdutoSelect from "./EstoqueMovimentoModal/MovimentoProdutoSelect.jsx";

export default function EstoqueMovimentoModal({
  open,
  tipo,
  produto,
  produtos = [],
  onClose,
  onConfirm,
}) {
  const config =
    MOVIMENTO_CONFIG[tipo] ?? MOVIMENTO_CONFIG.entrada;

  const form = useMovimentoForm({
    tipo,
    produto,
    onConfirm,
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
      <div
        className="
          flex max-h-[calc(100vh-2rem)]
          w-full max-w-[560px]
          flex-col overflow-hidden
          rounded-2xl border border-gray-100
          bg-white shadow-2xl
          dark:border-white/10
          dark:bg-[#151936]
        "
      >
        <MovimentoHeader
          config={config}
          onClose={onClose}
        />

        <form
          onSubmit={form.handleSubmit}
          className="min-h-0 overflow-y-auto"
        >
          <div className="space-y-5 p-5 sm:p-6">
            {form.produtoSelecionado ? (
              <MovimentoProduto
                produto={form.produtoSelecionado}
                estoqueAtual={form.estoqueAtual}
              />
            ) : (
              <MovimentoProdutoSelect
                produtos={produtos}
                value={form.produtoSelecionado}
                onChange={form.setProdutoSelecionado}
              />
            )}

            <MovimentoQuantidade
              value={form.quantidade}
              erro={form.erro}
              onChange={form.handleQuantidadeChange}
            />

            {form.isEntrada ? (
              <MovimentoCusto
                value={form.custoUnitario}
                onChange={form.setCustoUnitario}
              />
            ) : (
              <MovimentoMotivo
                value={form.motivo}
                onChange={form.setMotivo}
              />
            )}

            <MovimentoObservacao
              value={form.observacao}
              onChange={form.setObservacao}
              isEntrada={form.isEntrada}
            />

            <MovimentoResumo
              tipo={tipo}
              estoqueAtual={form.estoqueAtual}
              quantidade={form.quantidadeNumerica}
              novaQuantidade={form.novaQuantidade}
            />
          </div>

          <MovimentoFooter
            tipo={tipo}
            disabled={!form.quantidadeValida}
            onClose={onClose}
            actionLabel={config.actionLabel}
          />
        </form>
      </div>
    </div>
  );
}