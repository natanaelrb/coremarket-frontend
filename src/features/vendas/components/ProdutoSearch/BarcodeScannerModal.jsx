import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { Camera, X, LoaderCircle, AlertCircle } from "lucide-react";
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

        // Em notebooks, utiliza a câmera disponível.
        // Em celulares, prioriza a câmera traseira quando identificável.
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
          } catch {}
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
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
      >
        <header className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Camera size={21} />
            </div>

            <div>
              <h2
                id="barcode-scanner-title"
                className="font-semibold text-slate-900"
              >
                Escanear código de barras
              </h2>
              <p className="mt-0.5 text-sm text-slate-500">
                Posicione o código dentro da área de leitura.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar leitor"
            className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
          >
            <X size={20} />
          </button>
        </header>

        <div className="p-5">
          <div className="relative min-h-56 overflow-hidden rounded-xl bg-slate-950">
            <div id="coremarket-barcode-reader" className="w-full" />

            {carregando && !erro && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-slate-950 text-white">
                <LoaderCircle
                  size={30}
                  className="animate-spin text-emerald-400"
                />
                <p className="text-sm">Iniciando câmera...</p>
              </div>
            )}
          </div>

          {erro ? (
            <div className="mt-4 flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
              <AlertCircle size={20} className="shrink-0" />
              <div>
                <p className="font-medium">Não foi possível abrir o leitor.</p>
                <p className="mt-1 break-words">{erro}</p>
                <p className="mt-2">
                  Verifique as permissões da câmera no navegador e tente
                  novamente.
                </p>
              </div>
            </div>
          ) : (
            <p className="mt-4 text-center text-sm text-slate-500">
              A leitura será detectada automaticamente quando o código estiver
              nítido.
            </p>
          )}
        </div>

        <footer className="flex justify-end border-t border-slate-100 px-5 py-4">
          <Button variant="secondary" onClick={onClose}>
            Fechar
          </Button>
        </footer>
      </section>
    </div>
  );
}
