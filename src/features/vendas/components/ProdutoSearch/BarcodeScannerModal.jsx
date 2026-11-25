import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import {
  Camera,
  X,
  LoaderCircle,
  AlertCircle,
  ScanLine,
} from "lucide-react";
import { Button } from "../../../../shared/components/ui/Button.jsx";

export function BarcodeScannerModal({ onDetected, onClose }) {
  const scannerRef = useRef(null);
  const detectedRef = useRef(false);
  const onDetectedRef = useRef(onDetected);

  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    onDetectedRef.current = onDetected;
  }, [onDetected]);

  useEffect(() => {
    let cancelado = false;

    async function iniciarLeitor() {
      let scanner;

      try {
        scanner = new Html5Qrcode("coremarket-barcode-reader");
        scannerRef.current = scanner;

        const cameras = await Html5Qrcode.getCameras();

        if (cancelado) return;

        if (!cameras.length) {
          throw new Error("Nenhuma câmera foi encontrada neste dispositivo.");
        }

        const camera =
          cameras.find((item) =>
            /back|rear|traseira|environment/i.test(item.label)
          ) || cameras[0];

        await scanner.start(
          camera.id,
          {
            fps: 10,
            qrbox: { width: 280, height: 130 },
            aspectRatio: 1.777778,
          },
          (codigoLido) => {
            if (cancelado || detectedRef.current) return;

            detectedRef.current = true;
            onDetectedRef.current(codigoLido);
          },
          () => {}
        );

        if (!cancelado) setCarregando(false);
      } catch (error) {
        console.error("[CoreMarket] Falha ao iniciar leitor:", error);

        if (!cancelado) {
          const mensagem =
            error instanceof Error
              ? error.message
              : String(error || "Erro desconhecido ao iniciar a câmera.");

          setErro(mensagem);
          setCarregando(false);
        }
      }
    }

    iniciarLeitor();

    return () => {
      cancelado = true;

      const scanner = scannerRef.current;

      if (scanner) {
        if (scanner.isScanning) {
          scanner
            .stop()
            .then(() => scanner.clear())
            .catch(() => {});
        } else {
        try {
          scanner.clear();
        } catch {
          // O leitor pode já ter sido desmontado ou limpo.
        }
        }
      }
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="barcode-scanner-title"
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-[#292D50] dark:bg-[#12142E]"
      >
        <header className="flex items-center justify-between border-b border-slate-100 px-5 py-4 dark:border-[#292D50]">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
              <Camera size={20} strokeWidth={2} />
            </div>

            <div className="min-w-0">
              <h2
                id="barcode-scanner-title"
                className="text-sm font-bold text-slate-900 dark:text-white"
              >
                Escanear código de barras
              </h2>

              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                Posicione o código dentro da área de leitura.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar leitor"
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <X size={20} />
          </button>
        </header>

        <div className="p-5">
          <div className="relative min-h-56 overflow-hidden rounded-xl border border-slate-200 bg-slate-950 dark:border-[#292D50]">
            <div id="coremarket-barcode-reader" className="w-full" />

            {carregando && !erro && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950 text-white">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10">
                  <LoaderCircle
                    size={30}
                    className="animate-spin text-blue-400"
                  />
                </div>

                <div className="text-center">
                  <p className="text-sm font-semibold">
                    Iniciando câmera...
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Aguarde enquanto preparamos o leitor.
                  </p>
                </div>
              </div>
            )}
          </div>

          {erro ? (
            <div className="mt-4 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-300">
              <AlertCircle size={20} className="shrink-0" />

              <div>
                <p className="font-semibold">
                  Não foi possível abrir o leitor.
                </p>

                <p className="mt-1 break-words text-xs leading-relaxed">
                  {erro}
                </p>

                <p className="mt-2 text-xs leading-relaxed">
                  Verifique as permissões da câmera no navegador e tente
                  novamente.
                </p>
              </div>
            </div>
          ) : (
            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-blue-100 bg-blue-50/70 p-3 dark:border-blue-500/15 dark:bg-blue-500/5">
              <ScanLine
                size={18}
                className="mt-0.5 shrink-0 text-blue-600 dark:text-blue-400"
              />

              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                A leitura será detectada automaticamente quando o código
                estiver nítido e posicionado corretamente.
              </p>
            </div>
          )}
        </div>

        <footer className="flex justify-end border-t border-slate-100 px-5 py-4 dark:border-[#292D50]">
          <Button variant="secondary" onClick={onClose}>
            Fechar
          </Button>
        </footer>
      </section>
    </div>
  );
}
