import DonutChart from '../shared/DonutChart';

// Mini donut usado no card de Perdas.
export default function AjustesDonut({
  vencimento,
  avaria,
  outros,
  total,
}) {
  const segments = [
    {
      name: 'Vencimento',
      value: vencimento,
      color: '#EF4444',
    },
    {
      name: 'Avaria',
      value: avaria,
      color: '#F59E0B',
    },
    {
      name: 'Outros',
      value: outros,
      color: '#8B5CF6',
    },
  ];

  return (
    <DonutChart
      segments={segments}
      size={76}
      strokeWidth={11}
      centerLabel={
        <span className="text-[13px] font-bold tracking-tight text-slate-800 dark:text-white">
          {total}
        </span>
      }
    />
  );
}