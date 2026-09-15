import { Pencil } from 'lucide-react'
import { Button } from "../../../../../shared/components/ui/Button.jsx";
import { TextArea } from "../../../../../shared/components/forms/FormField.jsx";
import { useObservacoes } from '../../../hooks/useObservacoes.js'

/** "Observações" tab: free-text notes about the client, inline-editable. */
export function ObservacoesTab({ cliente, onSalvar }) {
  const { texto, setTexto, editando, setEditando, salvando, salvar } = useObservacoes(
    cliente.id,
    cliente.observacoes,
    onSalvar,
  )

  return (
    <div className="rounded-xl border border-cm-border-dark light:border-cm-border-light bg-cm-panel-dark light:bg-cm-panel-light p-5 animate-fade-in">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-white light:text-slate-900">Observações</p>
        {!editando && (
          <Button variant="ghost" size="sm" icon={Pencil} onClick={() => setEditando(true)}>
            Editar
          </Button>
        )}
      </div>

      {editando ? (
        <div className="space-y-3">
          <TextArea rows={5} value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Adicione uma observação sobre este cliente..." />
          <div className="flex justify-end gap-2">
            <Button variant="secondary" size="sm" onClick={() => setEditando(false)}>
              Cancelar
            </Button>
            <Button size="sm" onClick={salvar} loading={salvando}>
              Salvar
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-sm text-slate-300 light:text-slate-600">
          {texto || 'Nenhuma observação registrada para este cliente.'}
        </p>
      )}
    </div>
  )
}
