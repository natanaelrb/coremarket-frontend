import { useRef } from "react";
import { UploadCloud, FileSpreadsheet } from "lucide-react";
import { Button } from "../../../../../../shared/components/ui/Button.jsx";

/** Step 1: drag-and-drop / click-to-browse file picker (CSV/Excel). */
export function SelecionarArquivoStep({ arquivo, onSelecionar }) {
  const inputRef = useRef(null);

  return (
    <div className="space-y-4">
      <div
        onClick={() => inputRef.current?.click()}
        className="
          flex
          cursor-pointer
          flex-col
          items-center
          justify-center
          gap-3
          rounded-xl
          border-2
          border-dashed
          border-slate-300
          bg-slate-50/50
          py-12
          transition-colors
          hover:border-[#2563eb]
          hover:bg-[#eff6ff]
          dark:border-white/10
          dark:bg-white/[0.02]
          dark:hover:border-blue-500
          dark:hover:bg-blue-950/20
        "
      >
        <UploadCloud
          size={32}
          className="text-[#2563eb] dark:text-blue-400"
        />

        <p className="text-sm text-[#475569] dark:text-slate-300">
          Arraste um arquivo aqui ou clique para selecionar
        </p>

        <p className="text-xs text-[#64748b] dark:text-slate-400">
          Formatos aceitos: CSV, Excel (.xlsx)
        </p>

        <Button variant="secondary" size="sm">
          Selecionar arquivo
        </Button>

        <input
          ref={inputRef}
          type="file"
          accept=".csv,.xlsx"
          className="hidden"
          onChange={(e) =>
            onSelecionar(e.target.files?.[0] ?? null)
          }
        />
      </div>

      {arquivo && (
        <div
          className="
            flex
            items-center
            gap-3
            rounded-lg
            border
            border-[#16a34a]/20
            bg-[#f0fdf4]
            px-4
            py-3
            animate-slide-up
            dark:border-emerald-500/20
            dark:bg-emerald-950/20
          "
        >
          <FileSpreadsheet
            size={20}
            className="shrink-0 text-[#16a34a] dark:text-emerald-400"
          />

          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-[#0f172a] dark:text-white">
              {arquivo.name}
            </p>

            <p className="text-xs text-[#64748b] dark:text-slate-400">
              {(arquivo.size / 1024).toFixed(0)} KB
            </p>
          </div>
        </div>
      )}
    </div>
  );
}