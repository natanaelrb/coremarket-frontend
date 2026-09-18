import { Pencil } from "lucide-react";

import { Button } from "../../../../../shared/components/ui/Button.jsx";
import { TextArea } from "../../../../../shared/components/forms/FormField.jsx";
import { useObservacoes } from "../../../hooks/useObservacoes.js";

/** "Observações" tab: free-text notes about the client, inline-editable. */
export function ObservacoesTab({ cliente, onSalvar }) {
  const {
    texto,
    setTexto,
    editando,
    setEditando,
    salvando,
    salvar,
  } = useObservacoes(
    cliente.id,
    cliente.observacoes,
    onSalvar,
  );

  return (
    <div
      className="
        animate-fade-in
        rounded-xl
        border border-slate-200
        bg-white
        p-5
        shadow-[0_1px_2px_rgba(15,23,42,0.02)]
        dark:border-white/10
        dark:bg-zinc-900
      "
    >
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-semibold text-[#0f172a] dark:text-white">
          Observações
        </p>

        {!editando && (
          <Button
            variant="ghost"
            size="sm"
            icon={Pencil}
            onClick={() => setEditando(true)}
          >
            Editar
          </Button>
        )}
      </div>

      {editando ? (
        <div className="space-y-3">
          <TextArea
            rows={5}
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Adicione uma observação sobre este cliente..."
          />

          <div className="flex justify-end gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setEditando(false)}
            >
              Cancelar
            </Button>

            <Button
              size="sm"
              onClick={salvar}
              loading={salvando}
            >
              Salvar
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-sm text-[#64748b] dark:text-slate-300">
          {texto || "Nenhuma observação registrada para este cliente."}
        </p>
      )}
    </div>
  );
}