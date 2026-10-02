import {
  LotesHeader,
  LotesKpis,
  LotesToolbar,
  LotesTable,
} from "./lotes";

export function LotesTab({ produto }) {
  return (
    <div
      className="
        space-y-3
        bg-slate-50
        px-3
        pb-5
        pt-3
        sm:px-5

        dark:bg-[#03152c]
      "
    >
      <section
        className="-ml-4 -mt-2
          overflow-hidden
          rounded-xl
          border
          border-slate-200
          bg-white
          shadow-[0_2px_10px_rgba(15,23,42,0.025)]

          dark:border-[#17375d]
          dark:bg-[#061c38]
        "
      >
        <LotesHeader produto={produto} />

        <LotesKpis produto={produto} />

        <LotesToolbar produto={produto} />

        <LotesTable produto={produto} />
      </section>
    </div>
  );
}

