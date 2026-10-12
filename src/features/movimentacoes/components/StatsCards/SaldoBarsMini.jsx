import MiniBarChart from '../shared/MiniBarChart';

// Mini gráfico de barras usado no card de Saldo movimentado.
export default function SaldoBarsMini({ data }) {
  return (
    <MiniBarChart
      data={data}
      positiveColor="#22C55E"
      negativeColor="#EF4444"
      width={190}
      height={42}
    />
  );
}