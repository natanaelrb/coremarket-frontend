import Card from "../../../../shared/components/layout/Card";
import { STATUS_LEGEND } from "../../constants";
import { TONES } from "../../../../shared/constants/tones";

export function StatusLegendCard() {
  return (
    <Card className="pb-3 animate-fade-up" style={{ animationDelay: "110ms" }}>
      <div className="px-4 pt-4 pb-2 mb-2">
        <h3 className="text-base font-semibold text-foreground">
          Status das contas
        </h3>
      </div>
      <ul className="space-y-2 px-4 pt-1">
        {STATUS_LEGEND.map((s) => (
          <li key={s.label} className="flex items-center gap-2 text-[11px]">
            <span
              className={`size-2 shrink-0 rounded-full ${TONES[s.tone].dot}`}
            />
            <b className="font-semibold text-ink">{s.label}</b>
            <span className="ml-auto text-ink-3">{s.description}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
