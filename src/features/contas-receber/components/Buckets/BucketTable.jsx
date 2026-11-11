import { formatCurrency } from "../../../../shared/utils/formatCurrency";
import { TONES } from "../../../../shared/constants/tones";
import { cn } from "../../../../shared/utils/classNames";

/** Tabela compacta de faixas. Clicar numa linha aplica o filtro correspondente na lista. */
export function BucketTable({
  labelHead,
  rows,
  total,
  totalLabel,
  activeId,
  onSelect,
  valueTone = () => "blue",
  countTone,
}) {
  return (
    <table className="w-full text-[11px]">
      <thead>
        <tr className="bg-surface-2 text-ink-2">
          <th className="rounded-l-md px-2.5 py-1.5 text-left font-semibold">
            {labelHead}
          </th>
          <th className="px-2.5 py-1.5 text-right font-semibold">Quantidade</th>
          <th className="rounded-r-md px-2.5 py-1.5 text-right font-semibold">
            Valor
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr
            key={r.id}
            onClick={() => onSelect(r.id)}
            className={cn(
              "cursor-pointer border-b border-line/70 transition-colors hover:bg-brand-soft animate-fade-up",
              activeId === r.id && "bg-brand-soft",
            )}
            style={{ animationDelay: `${160 + i * 40}ms` }}
          >
            <td className="px-2.5 py-2 text-ink">{r.label}</td>
            <td
              className={cn(
                "px-2.5 py-2 text-right font-semibold tabular-nums",
                countTone ? TONES[countTone].text : "text-ink",
              )}
            >
              {r.quantidade}
            </td>
            <td
              className={cn(
                "px-2.5 py-2 text-right font-semibold tabular-nums",
                TONES[valueTone(r)].text,
              )}
            >
              {formatCurrency(r.valor)}
            </td>
          </tr>
        ))}
        <tr className="font-bold text-ink">
          <td className="px-2.5 py-2">{totalLabel}</td>
          <td className="px-2.5 py-2 text-right tabular-nums">
            {total.quantidade}
          </td>
          <td className="px-2.5 py-2 text-right tabular-nums">
            {formatCurrency(total.valor)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
