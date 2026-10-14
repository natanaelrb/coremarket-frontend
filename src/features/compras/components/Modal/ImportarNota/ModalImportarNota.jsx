
import { useEffect, useState } from "react";
import {
  FileText,
  FileImage,
  FileUp,
  X,
  Trash2,
  Eye,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const FORMATOS_ACEITOS = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
];

const LIMITE_BYTES = 10 * 1024 * 1024;

function formatarTamanho(bytes) {
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(0)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

export function ModalImportarNota({ isOpen, onClose, onImportar }) {
  const [arquivo, setArquivo] = useState(null);
  const [visualizacao, setVisualizacao] = useState("");
  const [erro, setErro] = useState("");
  const [confirmado, setConfirmado] = useState(false);

  useEffect(() => {
    if (!arquivo) {
      setVisualizacao("");
      return;
    }

    const url = URL.createObjectURL(arquivo);
    setVisualizacao(url);

    return () => URL.revokeObjectURL(url);
  }, [arquivo]);

  useEffect(() => {
    if (!isOpen) {
      setArquivo(null);
      setErro("");
      setConfirmado(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  function selecionarArquivo(event) {
    const selecionado = event.target.files?.[0];
    event.target.value = "";

    if (!selecionado) return;

    if (!FORMATOS_ACEITOS.includes(selecionado.type)) {
      setErro("Formato inválido. Escolha um PDF, JPG, PNG ou WEBP.");
      return;
    }

    if (selecionado.size > LIMITE_BYTES) {
      setErro("O arquivo ultrapassa o limite de 10 MB.");
      return;
    }

    setArquivo(selecionado);
    setErro("");
    setConfirmado(false);
  }

  function encaminharNota() {
    if (!arquivo || !confirmado) return;

    try {
      onImportar({
        id: crypto.randomUUID(),
        nomeArquivo: arquivo.name,
        tipoArquivo: arquivo.type,
        tamanhoBytes: arquivo.size,
        importadoEm: new Date().toISOString(),
        status: "Aguardando conferência",
      });

      setArquivo(null);
      setErro("");
      setConfirmado(false);
      onClose();
    } catch {
      setErro(
        "Não foi possível registrar a nota. Tente novamente."
      );
    }
  }

  const ehPdf = arquivo?.type === "application/pdf";
  const ehImagem = arquivo?.type.startsWith("image/");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/65 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-importar-nota"
        className="my-auto w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-[#111827]"
      >
        <header className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5 dark:border-slate-700">
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400">
              <FileUp size={22} />
            </div>

            <div>
              <h2
                id="titulo-importar-nota"
                className="text-lg font-bold text-slate-900 dark:text-white"
              >
                Importar Nota
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Anexe o documento para conferência da equipe.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            <X size={20} />
          </button>
        </header>

        <div className="space-y-5 p-6">
          {!arquivo ? (
            <label className="flex min-h-56 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center transition hover:border-green-500 hover:bg-green-50/50 dark:border-slate-600 dark:bg-slate-900/50 dark:hover:bg-green-500/5">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-400">
                <FileUp size={27} />
              </div>

              <span className="font-semibold text-slate-800 dark:text-white">
                Clique para selecionar a nota
              </span>

              <span className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                PDF, JPG, PNG ou WEBP
              </span>

              <span className="mt-1 text-xs text-slate-400">
                Tamanho máximo: 10 MB
              </span>

              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.webp,application/pdf,image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={selecionarArquivo}
              />
            </label>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-green-700 dark:bg-slate-800 dark:text-green-400">
                  {ehPdf ? (
                    <FileText size={23} />
                  ) : (
                    <FileImage size={23} />
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-800 dark:text-white">
                    {arquivo.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {formatarTamanho(arquivo.size)} · Arquivo selecionado
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setArquivo(null);
                    setConfirmado(false);
                    setErro("");
                  }}
                  title="Remover arquivo"
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900">
                <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3 text-sm font-medium text-slate-600 dark:border-slate-700 dark:text-slate-300">
                  <Eye size={16} />
                  Pré-visualização
                </div>

                {ehImagem && visualizacao && (
                  <div className="flex max-h-80 justify-center overflow-auto p-3">
                    <img
                      src={visualizacao}
                      alt="Pré-visualização da nota"
                      className="h-auto max-h-72 max-w-full rounded-lg object-contain"
                    />
                  </div>
                )}

                {ehPdf && visualizacao && (
                  <iframe
                    src={visualizacao}
                    title="Pré-visualização do PDF da nota"
                    className="h-80 w-full bg-white"
                  />
                )}
              </div>
            </div>
          )}

          {erro && (
            <div
              role="alert"
              className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-300"
            >
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
              {erro}
            </div>
          )}

          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-4 dark:border-slate-700">
            <input
              type="checkbox"
              checked={confirmado}
              onChange={(event) => setConfirmado(event.target.checked)}
              disabled={!arquivo}
              className="mt-1 h-4 w-4 accent-green-600"
            />
            <span className="text-sm text-slate-600 dark:text-slate-300">
              Confirmo que o arquivo selecionado corresponde à nota que
              desejo encaminhar para conferência.
            </span>
          </label>

          <div className="flex items-start gap-2 rounded-xl bg-amber-50 p-3 text-xs leading-5 text-amber-800 dark:bg-amber-500/10 dark:text-amber-300">
            <AlertCircle size={17} className="mt-0.5 shrink-0" />
            O documento será registrado como pendente de conferência. A
            importação não registra uma compra nem altera o estoque.
          </div>
        </div>

        <footer className="flex flex-col-reverse gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 sm:flex-row sm:justify-end dark:border-slate-700 dark:bg-slate-900/60">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={encaminharNota}
            disabled={!arquivo || !confirmado}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <CheckCircle2 size={17} />
            Encaminhar para conferência
          </button>
        </footer>
      </section>
    </div>
  );
}
