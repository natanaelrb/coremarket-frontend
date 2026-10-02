import { HistoricoEvent } from "./HistoricoEvent";

export function HistoricoTimeline({ historico }) {
  return (
    <section
      className="-ml-4
        rounded-xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-[0_2px_10px_rgba(15,23,42,0.025)]

        dark:border-[#17375d]
        dark:bg-[#061c38]
      "
    >
      <div className="mb-5">
        <h3
          className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.04em]
            text-slate-700
            dark:text-[#d7e5f7]
          "
        >
          Linha do tempo
        </h3>

        <p
          className="
            mt-1
            text-[10px]
            text-slate-400
            dark:text-[#7290b4]
          "
        >
          Registro cronológico das atividades deste produto.
        </p>
      </div>

      <div>
        {historico.map((item, index) => (
          <HistoricoEvent
            key={item.id}
            item={item}
            isLast={index === historico.length - 1}
          />
        ))}
      </div>
    </section>
  );
}