import { useState, useEffect } from "react";
import Modal from "../ui/Modal";
import Button from "../ui/Button";
import Input from "../ui/Input";
import { registrarPagamento } from "../../services/pagamentoService";

function formatMoeda(valor) {
  return Number(valor || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

const FORMAS = [
  { value: "DINHEIRO", label: "Dinheiro" },
  { value: "PIX", label: "Pix" },
  { value: "CARTAO", label: "Cartão" },
  { value: "TRANSFERENCIA", label: "Transferência" },
];

const selectClass = `
  w-full rounded-lg border border-slate-200 dark:border-slate-200 dark:border-white/10 bg-white dark:bg-white/5
  text-sm text-slate-800 dark:text-[var(--sidebar-text)]/90
  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500/30
  focus:border-violet-400 hover:border-slate-300 dark:hover:border-white/20 transition duration-150
`;

export default function PagamentoModal({
  compra,
  fechar,
  atualizarLista,
  setToast,
}) {
  const [valor, setValor] = useState("");
  const [forma, setForma] = useState("DINHEIRO");
  const [observacao, setObservacao] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (compra) {
      setValor(String(compra.saldoDevedor || ""));
      setForma("DINHEIRO");
      setObservacao("");
      setError("");
    }
  }, [compra]);

  async function salvar() {
    if (!valor || Number(valor) <= 0) {
      setError("Informe um valor válido");
      return;
    }
    if (Number(valor) > Number(compra.saldoDevedor)) {
      setError("Valor não pode ser maior que o saldo devedor");
      return;
    }

    setLoading(true);
    try {
      await registrarPagamento({
        compraId: compra.id,
        clienteId: compra.cliente?.id || compra.clienteId,
        empresaId: compra.empresa?.id || compra.empresaId,
        valorPago: Number(valor),
        formaPagamento: forma,
        observacao: observacao || "Pagamento registrado pelo sistema",
      });
      await atualizarLista();
      setToast({
        mensagem: "Pagamento registrado com sucesso!",
        tipo: "sucesso",
      });
      fechar();
    } catch {
      setToast({ mensagem: "Erro ao registrar pagamento.", tipo: "erro" });
    } finally {
      setLoading(false);
    }
  }

  if (!compra) return null;

  const saldo = Number(compra.saldoDevedor || 0);
  const valorDigitado = Number(valor || 0);
  const restante = saldo - valorDigitado;

  return (
    <Modal
      aberto={!!compra}
      fechar={fechar}
      titulo="Registrar pagamento"
      subtitulo={compra.nomeCliente || compra.cliente?.nome}
    >
      <div className="grid grid-cols-3 gap-3 mb-5">
        <div className="bg-slate-50 dark:bg-white/5 rounded-lg px-3 py-2.5 text-center">
          <p className="text-[10px] text-slate-400 dark:text-[var(--sidebar-text)]/35 mb-0.5">
            Total
          </p>
          <p className="text-sm font-semibold text-slate-700 dark:text-[var(--sidebar-text)]/85">
            {formatMoeda(compra.valorTotal)}
          </p>
        </div>
        <div className="bg-slate-50 dark:bg-white/5 rounded-lg px-3 py-2.5 text-center">
          <p className="text-[10px] text-slate-400 dark:text-[var(--sidebar-text)]/35 mb-0.5">
            Já pago
          </p>
          <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            {formatMoeda(compra.valorPago)}
          </p>
        </div>
        <div className="bg-red-50 dark:bg-red-500/10 rounded-lg px-3 py-2.5 text-center border border-red-100 dark:border-red-500/20">
          <p className="text-[10px] text-red-400 dark:text-red-400/70 mb-0.5">
            Saldo devedor
          </p>
          <p className="text-sm font-semibold text-red-600 dark:text-red-400">
            {formatMoeda(saldo)}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <Input
            label="Valor do pagamento (R$) *"
            type="number"
            placeholder="0,00"
            min="0.01"
            step="0.01"
            max={saldo}
            value={valor}
            onChange={(e) => {
              setValor(e.target.value);
              setError("");
            }}
            error={error}
          />
          {valorDigitado > 0 && valorDigitado <= saldo && (
            <p
              className={`text-xs mt-1 ${restante === 0 ? "text-emerald-600 dark:text-emerald-400" : "text-amber-600 dark:text-amber-400"}`}
            >
              {restante === 0
                ? "✓ Quita o saldo completamente"
                : `Restará ${formatMoeda(restante)} após este pagamento`}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-slate-600 dark:text-[var(--sidebar-text)]/60">
            Forma de pagamento
          </label>
          <select
            value={forma}
            onChange={(e) => setForma(e.target.value)}
            className={selectClass}
          >
            {FORMAS.map((f) => (
              <option key={f.value} value={f.value}>
                {f.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs font-medium text-slate-600 dark:text-[var(--sidebar-text)]/60">
            Observação
          </label>
          <textarea
            value={observacao}
            onChange={(e) => setObservacao(e.target.value)}
            placeholder="Opcional..."
            rows={2}
            className="w-full rounded-lg border border-slate-200 dark:border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 text-sm text-slate-800 dark:text-[var(--sidebar-text)]/90 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500/30 focus:border-violet-400 hover:border-slate-300 dark:hover:border-white/20 transition resize-none placeholder:text-slate-400 dark:placeholder:text-[var(--sidebar-text)]/30"
          />
        </div>
      </div>

      <div className="flex justify-end gap-2 mt-6 pt-4 border-t border-slate-100 dark:border-slate-200 dark:border-white/10">
        <Button variant="outline" onClick={fechar} disabled={loading}>
          Cancelar
        </Button>
        <Button onClick={salvar} loading={loading}>
          Confirmar pagamento
        </Button>
      </div>
    </Modal>
  );
}
