import { CheckCircle2 } from 'lucide-react';
import { Button } from '../../../../shared/components/ui/Button.jsx';

/**
 * Botão principal de finalização da venda, com indicador de atalho F8.
 * @param {{
 *   onFinalizar: () => void,
 *   loading?: boolean,
 *   disabled?: boolean
 * }} props
 */
export function FinalizarVendaButton({
  onFinalizar,
  loading = false,
  disabled = false,
}) {
  return (
    <Button
      variant="success"
      size="lg"
      fullWidth
      loading={loading}
      disabled={disabled}
      icon={loading ? undefined : CheckCircle2}
      onClick={onFinalizar}
      className="text-base"
    >
      <span className="mr-2 rounded bg-white/20 px-1.5 py-0.5 text-[11px] font-semibold">
        F8
      </span>

      {loading ? 'Finalizando...' : 'Finalizar venda'}
    </Button>
  );
}