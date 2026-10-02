import StarRating from "../../../../../shared/components/data-display/StarRating.jsx";

const LABELS = {
  preco: "Preço",
  entrega: "Entrega",
  qualidade: "Qualidade",
  atendimento: "Atendimento",
  prazo: "Prazo",
  confiabilidade: "Confiabilidade",
};

export default function RatingCard({ title, ratings = {}, notaGeral }) {
  const hasRatings = Object.keys(ratings).length > 0;

  return (
    <section
      className="
        rounded-xl
        border border-slate-200/80
        bg-white
        p-4
        shadow-sm shadow-slate-900/[0.02]
        dark:border-[#252a4a]
        dark:bg-[#141833]
        dark:shadow-black/10
      "
    >
      <h4
        className="
          mb-4
          text-sm
          font-semibold
          text-slate-800
          dark:text-slate-100
        "
      >
        {title}
      </h4>

      {hasRatings ? (
        <div className="space-y-3">
          {Object.entries(ratings).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center justify-between gap-4"
            >
              <span
                className="
                  min-w-0
                  text-sm
                  text-slate-500
                  dark:text-slate-400
                "
              >
                {LABELS[key] ?? key}
              </span>

              <StarRating
                value={Number(value) || 0}
                size={13}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Nenhuma avaliação disponível.
        </p>
      )}

      {notaGeral !== undefined && notaGeral !== null && (
        <div
          className="
            mt-4
            flex
            items-center
            justify-between
            gap-3
            border-t border-slate-200/80
            pt-3
            dark:border-[#252a4a]
          "
        >
          <span
            className="
              text-sm
              font-medium
              text-slate-600
              dark:text-slate-300
            "
          >
            Nota Geral
          </span>

          <span
            className="
              text-lg
              font-bold
              tabular-nums
              text-emerald-600
              dark:text-emerald-400
            "
          >
            {Number(notaGeral).toFixed(1)} / 5
          </span>
        </div>
      )}
    </section>
  );
}