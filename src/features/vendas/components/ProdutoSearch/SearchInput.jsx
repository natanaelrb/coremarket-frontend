import { Search, Barcode, Camera } from 'lucide-react';
import { Button } from "../../../../shared/components/ui/Button.jsx";

/**
 * Campo de busca de produto (código de barras, código ou nome) com botão
 * de leitura por código de barras e botão de escanear via câmera.
 * @param {{
 *  value: string,
 *  onChange: (value: string) => void,
 *  inputRef: React.RefObject<HTMLInputElement>,
 *  onEscanear: () => void,
 * }} props
 */
export function SearchInput({ value, onChange, inputRef, onEscanear }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="flex h-12 flex-1 items-center gap-2.5 rounded-lg border border-cm-border bg-cm-bg/60 px-4 transition-colors duration-150 focus-within:border-cm-accent">
        <Search className="h-4.5 w-4.5 shrink-0 text-cm-text-faint" />
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Digite o código de barras, código ou nome do produto..."
          className="h-full w-full bg-transparent text-sm text-cm-text placeholder:text-cm-text-faint outline-none"
        />
        <Barcode className="h-4.5 w-4.5 shrink-0 text-cm-text-faint" />
      </div>
      <Button
        variant="primary"
        size="lg"
        icon={Camera}
        onClick={onEscanear}
        className="h-12"
      >
        Escanear
      </Button>
    </div>
  );
}

