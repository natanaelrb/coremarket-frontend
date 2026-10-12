import {
  Boxes,
  CircleDollarSign,
  RotateCcw,
} from "lucide-react";

import Card from "../../../../shared/components/layout/Card.jsx";
import QuantityStats from "../ProductDetailPanel/QuantityStats.jsx";
import EstoqueMinMaxStats from "../ProductDetailPanel/EstoqueMinMaxStats.jsx";
import PriceStats from "../ProductDetailPanel/PriceStats.jsx";

const SECTIONS = [
  {
    title: "Quantidade em estoque",
    description: "Situação atual das unidades disponíveis.",
    icon: Boxes,
    iconClass:
      "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
  },
  {
    title: "Níveis de estoque",
    description: "Limites e ponto de reposição configurados.",
    icon: RotateCcw,
    iconClass:
      "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
  },
  {
    title: "Valores",
    description: "Custo, preço de venda e valor armazenado.",
    icon: CircleDollarSign,
    iconClass:
      "bg-sky-50 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400",
  },
];

export default function EstoqueResumo({ produto }) {
  return (
    <section className="grid grid-cols-1 gap-5 xl:grid-cols-3 animate-slide-up">
      {/* Quantidade */}
      <Card
        className="
          group
          overflow-hidden
          border-gray-100
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:shadow-md
          dark:border-white/10
        "
      >
        <SectionHeader section={SECTIONS[0]} />
        <QuantityStats produto={produto} />
      </Card>

      {/* Níveis */}
      <Card
        className="
          group
          overflow-hidden
          border-gray-100
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:shadow-md
          dark:border-white/10
        "
      >
        <SectionHeader section={SECTIONS[1]} />
        <EstoqueMinMaxStats produto={produto} />
      </Card>

      {/* Valores */}
      <Card
        className="
          group
          overflow-hidden
          border-gray-100
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:shadow-md
          dark:border-white/10
        "
      >
        <SectionHeader section={SECTIONS[2]} />
        <PriceStats produto={produto} />
      </Card>
    </section>
  );
}

function SectionHeader({ section }) {
  const Icon = section.icon;

  return (
    <div
      className="
        border-b
        border-gray-100
        px-5
        py-4
        dark:border-white/10
      "
    >
      <div className="flex items-center gap-3">
        <div
          className={`
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-xl
            transition-transform
            duration-200
            group-hover:scale-105
            ${section.iconClass}
          `}
        >
          <Icon size={17} strokeWidth={2} />
        </div>

        <div className="min-w-0">
          <h2 className="text-sm font-semibold text-gray-800 dark:text-white">
            {section.title}
          </h2>

          <p className="mt-0.5 text-[11px] leading-4 text-gray-400 dark:text-gray-500">
            {section.description}
          </p>
        </div>
      </div>
    </div>
  );
}