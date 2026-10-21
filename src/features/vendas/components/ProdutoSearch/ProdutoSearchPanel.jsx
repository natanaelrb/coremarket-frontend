import { useState } from "react";
import Card, {
  CardStepHeader,
} from "../../../../shared/components/layout/Card.jsx";
import { SearchInput } from "./SearchInput.jsx";
import { ProdutoSuggestions } from "./ProdutoSuggestions.jsx";
import { BarcodeScannerModal } from "./BarcodeScannerModal.jsx";

/**
 * Painel de busca de produtos do PDV.
 */
export function ProdutoSearchPanel({
  produtoSearch,
  onAdicionarProduto,
}) {
  const [scannerAberto, setScannerAberto] = useState(false);

  const { termo, setTermo, sugestoes, inputRef } = produtoSearch;

  function handleCodigoDetectado(codigo) {
    setTermo(codigo);
    setScannerAberto(false);

    // Devolve o foco à busca após fechar o leitor.
    window.setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }

  return (
    <>
      <Card className="overflow-visible">
        <div className="p-5 sm:p-4">
          <CardStepHeader
            step={1}
            title="Buscar produto"
            description="Encontre produtos pelo nome, código ou código de barras"
          />

          <div className="mt-5 w-full min-w-0">
            <SearchInput
              value={termo}
              onChange={setTermo}
              inputRef={inputRef}
              onEscanear={() => setScannerAberto(true)}
            />
          </div>

          <div className="mt-4 w-full min-w-0">
            <ProdutoSuggestions
              produtos={sugestoes}
              onAdicionarProduto={onAdicionarProduto}
            />
          </div>
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
