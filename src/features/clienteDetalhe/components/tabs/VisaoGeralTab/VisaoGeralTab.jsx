import {
  ResumoFinanceiroCard,
  ComportamentoCard,
  LimiteCreditoCard,
  UltimasComprasCard,
  AlertaVencidoBanner,
} from "../../ResumoCards/index.js";

/** "Visão geral" tab: 2x2 summary card grid + overdue-balance banner. */
export function VisaoGeralTab({
  cliente,
  ultimasCompras,
  onVerTodasCompras,
}) {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ResumoFinanceiroCard cliente={cliente} />

        <ComportamentoCard cliente={cliente} />

        <LimiteCreditoCard cliente={cliente} />

        <UltimasComprasCard
          compras={ultimasCompras}
          onVerTodas={onVerTodasCompras}
        />
      </div>

      {cliente.emAtraso > 0 && (
        <AlertaVencidoBanner valorVencido={cliente.emAtraso} />
      )}
    </div>
  );
}