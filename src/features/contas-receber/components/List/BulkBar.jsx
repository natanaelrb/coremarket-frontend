import { FileSpreadsheet, MessageCircle, X } from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button";
import { formatCurrency } from "../../../../shared/utils/formatCurrency";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";

/** Barra que surge quando há linhas marcadas. */
export function BulkBar() {
  const { selection, exportacao, actions } = useContasReceberContext();
  if (!selection.count) return null;
  const saldo = selection.selectedContas.reduce((s, c) => s + c.saldo, 0);
  const cobraveis = selection.selectedContas.filter((c) => c.aberto);
  return (
    <div className="flex flex-wrap items-center gap-3 rounded-lg border border-brand/30 bg-brand-soft px-3 py-2 text-xs animate-fade-up">
      <p className="font-semibold text-brand">
        {selection.count} conta{selection.count > 1 ? "s" : ""} selecionada
        {selection.count > 1 ? "s" : ""}
      </p>
      <p className="text-ink-2">
        Saldo: <b className="text-ink tabular-nums">{formatCurrency(saldo)}</b>
      </p>
      <div className="ml-auto flex items-center gap-2">
        <Button
          size="sm"
          icon={FileSpreadsheet}
          onClick={() => exportacao.exportar("csv", true)}
        >
          Exportar seleção
        </Button>
        <Button
          size="sm"
          icon={MessageCircle}
          disabled={!cobraveis.length}
          onClick={() => actions.cobrarEmLote(cobraveis)}
        >
          Enviar cobranças
        </Button>
        <Button size="sm" variant="ghost" icon={X} onClick={selection.clear}>
          Limpar
        </Button>
      </div>
    </div>
  );
}
