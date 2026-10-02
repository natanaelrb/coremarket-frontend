import {
  ListFilter,
  Search,
  SlidersHorizontal,
} from "lucide-react";

export function LotesToolbar() {
  return (
    <div
      className="
        flex
        flex-col
        gap-2
        px-5
        pb-3
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <div
        className="
          flex
          h-9
          min-w-0
          flex-1
          items-center
          gap-2
          rounded-lg
          border
          border-slate-200
          bg-slate-50
          px-3
          sm:max-w-[360px]

          dark:border-[#17375d]
          dark:bg-[#09213f]
        "
      >
        <Search
          size={15}
          className="
            shrink-0
            text-slate-400
            dark:text-[#7290b4]
          "
        />

        <input
          type="text"
          placeholder="Buscar lote, validade ou observação..."
          className="
            min-w-0
            flex-1
            bg-transparent
            text-[11px]
            text-slate-700
            outline-none
            placeholder:text-slate-400

            dark:text-[#d7e5f7]
            dark:placeholder:text-[#587795]
          "
        />
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="
            inline-flex
            h-9
            items-center
            gap-1.5
            rounded-lg
            border
            border-slate-200
            bg-white
            px-3
            text-[10px]
            font-semibold
            text-slate-600
            transition-all
            hover:border-slate-300
            hover:bg-slate-50

            dark:border-[#17375d]
            dark:bg-[#09213f]
            dark:text-[#a9c0db]
            dark:hover:bg-[#0c2a4d]
          "
        >
          <ListFilter size={14} />

          Filtros

          <span className="text-emerald-500">→</span>
        </button>

        <button
          type="button"
          title="Visualização"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-lg
            border
            border-slate-200
            bg-white
            text-slate-500
            transition-all
            hover:border-slate-300
            hover:bg-slate-50

            dark:border-[#17375d]
            dark:bg-[#09213f]
            dark:text-[#8da8c6]
            dark:hover:bg-[#0c2a4d]
          "
        >
          <SlidersHorizontal size={15} />
        </button>
      </div>
    </div>
  );
}