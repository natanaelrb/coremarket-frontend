import { CheckCircle2, ArrowRight, LoaderCircle } from 'lucide-react';
import { Button } from '../../../../shared/components/ui/Button.jsx';

export function FinalizarVendaButton({
  onFinalizar,
  loading = false,
  disabled = false,
}) {
  return (
    <Button
      variant="success"
      size="md"
      fullWidth
      loading={loading}
      disabled={disabled || loading}
      icon={loading ? LoaderCircle : CheckCircle2}
      onClick={onFinalizar}
      className="
        group min-h-10 !rounded-lg !bg-[#22c55e]
        text-sm font-semibold !text-white
        !shadow-sm !shadow-green-600/15
        transition-all duration-200
        hover:!-translate-y-0.5 hover:!bg-[#16a34a]
        hover:!shadow-md hover:!shadow-green-600/20
        active:!translate-y-0
        disabled:!translate-y-0 disabled:!shadow-none
        motion-reduce:transform-none
      "
    >
      <span className="mr-1.5 inline-flex items-center gap-2">
        <kbd className="rounded border border-white/25 bg-white/15 px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-white">
          F8
        </kbd>

        <span>
          {loading ? 'Finalizando venda...' : 'Finalizar venda'}
        </span>
      </span>

      {!loading && (
        <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      )}
    </Button>
  );
}
