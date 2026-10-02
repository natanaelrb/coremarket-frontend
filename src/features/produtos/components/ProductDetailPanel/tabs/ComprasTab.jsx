import {
  ComprasFilters,
  ComprasKpis,
  ComprasTable,
} from "./compras";

export function ComprasTab({ produto }) {
  return (
    <section
      className="-mt-2
        space-y-5 bg-white px-5 pb-5 pt-4
        animate-in fade-in slide-in-from-bottom-2
        duration-300
        motion-reduce:animate-none
      "
      aria-label="Histórico de compras do produto"
    >
      <ComprasKpis produto={produto} />

      <ComprasFilters />

      <ComprasTable produto={produto} />
    </section>
  );
}