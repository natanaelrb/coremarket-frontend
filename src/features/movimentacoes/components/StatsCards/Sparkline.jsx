import MiniAreaChart from '../shared/MiniAreaChart';

// Mini gráfico de área usado dentro dos cards de Entradas / Saídas / Saldo.
export default function Sparkline({ data, color }) {
  return <MiniAreaChart data={data} color={color} height={48} />;
}
