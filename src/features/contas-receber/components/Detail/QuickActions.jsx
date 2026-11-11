import { QUICK_ACTIONS, QuickAction } from "../../constants";
import { TONES } from "../../../../shared/constants/tones";
import { cn } from "../../../../shared/utils/classNames";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";

export function QuickActions({ conta }) {
  const { actions } = useContasReceberContext();
  const disabled = (id) =>
    id === QuickAction.CANCELAR ||
    id === QuickAction.PROMESSA ||
    id === QuickAction.WHATSAPP ||
    id === QuickAction.BOLETO ||
    id === QuickAction.PIX
      ? !conta.aberto
      : id === QuickAction.EDITAR
        ? Boolean(conta.cancelada)
        : false;
  const row = (n) => QUICK_ACTIONS.filter((a) => a.row === n);
  return (
    <section>
      <h3 className="mb-2 text-[11px] font-bold text-ink">Ações rápidas</h3>
      {[1, 2].map((n) => (
        <div
          key={n}
          className={cn(
            "grid gap-2",
            n === 1 ? "grid-cols-4" : "mt-2 grid-cols-4",
          )}
        >
          {row(n).map((a) => {
            const Icon = a.icon;
            const t = TONES[a.tone];
            return (
              <button
                key={a.id}
                type="button"
                disabled={disabled(a.id)}
                onClick={() => actions.executarRapida(a.id, conta)}
                className={cn(
                  "flex flex-col items-center gap-1.5 rounded-lg border bg-surface px-1 py-2 text-center transition-all hover:-translate-y-0.5 hover:shadow-md active:scale-95 disabled:pointer-events-none disabled:opacity-40",
                  a.tone === "red" ? "border-red-500/30" : "border-line",
                )}
              >
                <Icon className={cn("size-[18px]", t.text)} />
                <span
                  className={cn(
                    "text-[9.5px] font-medium leading-tight",
                    a.tone === "red" ? t.text : "text-ink-2",
                  )}
                >
                  {a.label}
                </span>
              </button>
            );
          })}
        </div>
      ))}
    </section>
  );
}
