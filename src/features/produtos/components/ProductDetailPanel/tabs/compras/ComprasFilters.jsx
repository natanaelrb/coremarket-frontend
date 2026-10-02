import { useState } from "react";

import {
  CalendarDays,
  ChevronDown,
  Download,
  Filter,
  Search,
} from "lucide-react";

export function ComprasFilters() {
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
        <button
          type="button"
          className="
            flex h-10 items-center justify-between gap-4
            rounded-lg border border-[#dce6f0]
            bg-white px-3
            text-xs font-medium text-[#536b87]
            transition-all duration-200
            hover:border-[#b8cbdc]
            hover:bg-[#f8fbfe]
          "
        >
          <span className="flex items-center gap-2">
            <CalendarDays size={15} className="text-[#7e96b0]" />
            01/01/2026
            <span className="text-[#a6b5c7]">—</span>
            31/08/2026
          </span>

          <ChevronDown size={14} />
        </button>

        <div className="relative min-w-0 flex-1">
          <Search
            size={16}
            className="
              pointer-events-none absolute left-3 top-1/2
              -translate-y-1/2 text-[#9bb0c5]
            "
          />

          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar por fornecedor, nota ou referência..."
            className="
              h-10 w-full rounded-lg
              border border-[#dce6f0]
              bg-white pl-9 pr-3
              text-xs text-[#334963]
              outline-none transition-all duration-200
              placeholder:text-[#a0b2c6]
              focus:border-[#19a875]
              focus:ring-4 focus:ring-[#19a875]/10
            "
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowFilters((current) => !current)}
            className={`
              inline-flex h-10 items-center gap-2
              rounded-lg border px-4
              text-xs font-semibold
              transition-all duration-200
              ${
                showFilters
                  ? "border-[#b9e8d2] bg-[#effbf5] text-[#159765]"
                  : "border-[#dce6f0] bg-white text-[#627b97] hover:border-[#b8cbdc] hover:bg-[#f8fbfe]"
              }
            `}
          >
            <Filter size={15} />
            Filtros
          </button>

          <button
            type="button"
            className="
              inline-flex h-10 items-center gap-2
              rounded-lg border border-[#07965d]
              bg-[#079b61] px-4
              text-xs font-semibold text-white
              shadow-[0_3px_8px_rgba(7,155,97,0.14)]
              transition-all duration-200
              hover:-translate-y-px
              hover:bg-[#078a56]
              active:translate-y-0
            "
          >
            <Download size={15} />
            Exportar
          </button>
        </div>
      </div>

      {showFilters && (
        <div
          className="
            rounded-lg border border-[#dce6f0]
            bg-[#f8fbfe] p-3
            animate-in fade-in slide-in-from-top-1
            duration-200
          "
        >
          <span className="text-xs text-[#7088a2]">
            Filtros adicionais poderão ser configurados aqui.
          </span>
        </div>
      )}
    </div>
  );
}