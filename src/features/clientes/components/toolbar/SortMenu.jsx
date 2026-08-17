import Dropdown from "../../../../shared/components/Dropdown";
import { SORT_OPTIONS } from "../../constants/filterOptions";

function sortToLabel(sort) {
  if (sort.key === "ultimaCompra" && sort.dir === "desc")
    return "Mais recentes";
  if (sort.key === "nome" && sort.dir === "asc") return "Nome A-Z";
  if (sort.key === "valorGasto" && sort.dir === "desc")
    return "Maior valor gasto";
  return "Personalizado";
}

function labelToSort(label) {
  if (label === "Mais recentes") return { key: "ultimaCompra", dir: "desc" };
  if (label === "Nome A-Z") return { key: "nome", dir: "asc" };
  if (label === "Maior valor gasto") return { key: "valorGasto", dir: "desc" };
  return null;
}

export default function SortMenu({ sort, onSortChange }) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-500 font-bold">
      <span className="text-slate-400 ">Ordenar por</span>
      <div className="w-44">
      <Dropdown
        value={sortToLabel(sort)}
        options={SORT_OPTIONS}
        onChange={(label) => {
          const next = labelToSort(label);
          if (next) onSortChange(next);
        }}
      />
    </div>
    </div>
  );
}
