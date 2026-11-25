import { useState } from "react";
import { Search, PackageSearch } from "lucide-react";

import Card from "../../../../shared/components/layout/Card.jsx";
import { SearchInput } from "./SearchInput.jsx";
import { ProdutoSuggestions } from "./ProdutoSuggestions.jsx";
import { BarcodeScannerModal } from "./BarcodeScannerModal.jsx";

export function ProdutoSearchPanel({
  produtoSearch,
  onAdicionarProduto,
}) {
  const [scannerAberto, setScannerAberto] = useState(false);

  const { termo, setTermo, sugestoes, inputRef } = produtoSearch;

  function handleCodigoDetectado(codigo) {
    setTermo(codigo);
    setScannerAberto(false);

    window.setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }

  return (
    <>
      <Card className="overflow-visible !rounded-2xl !border-slate-200/80 !bg-white !shadow-sm transition-shadow duration-300 hover:shadow-md dark:!border-white/[0.08] dark:!bg-cm-surface">
        <div className="space-y-5 p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-500/20">
              <Search size={19} />
            </div>

            <div className="min-w-0">
              <h2 className="text-sm font-bold text-slate-900 dark:text-white">
                Buscar produtos
              </h2>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                Pesquise por nome, código ou código de barras
              </p>
            </div>

            <span className="ml-auto hidden items-center gap-1.5 rounded-lg border border-blue-100 bg-blue-50 px-2.5 py-1.5 text-[11px] font-semibold text-blue-700 sm:inline-flex dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
              <PackageSearch size={14} />
              Catálogo
            </span>
          </div>

          <SearchInput
            value={termo}
            onChange={setTermo}
            inputRef={inputRef}
            onEscanear={() => setScannerAberto(true)}
          />

          <ProdutoSuggestions
            produtos={sugestoes}
            onAdicionarProduto={onAdicionarProduto}
          />
        </div>
      </Card>

      {scannerAberto && (
        <BarcodeScannerModal
          onDetected={handleCodigoDetectado}
          onClose={() => setScannerAberto(false)}
        />
      )}
    </>
  );
}