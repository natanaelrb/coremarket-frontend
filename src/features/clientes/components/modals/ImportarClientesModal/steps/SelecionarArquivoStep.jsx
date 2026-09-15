import { useRef } from 'react'
import { UploadCloud, FileSpreadsheet } from 'lucide-react'
import { Button } from "../../../../../../shared/components/ui/Button.jsx";

/** Step 1: drag-and-drop / click-to-browse file picker (CSV/Excel). */
export function SelecionarArquivoStep({ arquivo, onSelecionar }) {
  const inputRef = useRef(null)

  return (
    <div className="space-y-4">
      <div
        onClick={() => inputRef.current?.click()}
        className="flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-cm-border-dark light:border-cm-border-light py-12 cursor-pointer hover:border-cm-violet/50 transition-colors"
      >
        <UploadCloud size={32} className="text-slate-500" />
        <p className="text-sm text-slate-300 light:text-slate-600">
          Arraste um arquivo aqui ou clique para selecionar
        </p>
        <p className="text-xs text-slate-500">Formatos aceitos: CSV, Excel (.xlsx)</p>
        <Button variant="secondary" size="sm">
          Selecionar arquivo
        </Button>
        <input
          ref={inputRef}
          type="file"
          accept=".csv,.xlsx"
          className="hidden"
          onChange={(e) => onSelecionar(e.target.files?.[0] ?? null)}
        />
      </div>

      {arquivo && (
        <div className="flex items-center gap-3 rounded-lg border border-cm-border-dark light:border-cm-border-light px-4 py-3 animate-slide-up">
          <FileSpreadsheet size={20} className="text-cm-green" />
          <div className="min-w-0">
            <p className="text-sm text-white light:text-slate-900 truncate">{arquivo.name}</p>
            <p className="text-xs text-slate-500">{(arquivo.size / 1024).toFixed(0)} KB</p>
          </div>
        </div>
      )}
    </div>
  )
}
