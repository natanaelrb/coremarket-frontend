import { useState, useMemo } from "react";
import { DEFAULT_FILTERS, DEFAULT_ADVANCED_FILTERS } from "../constants/filterOptions";

/**
 * Controla busca textual, filtros simples (Status/Tipo/Cidade/VIP/Inadimplente)
 * e filtros avançados (faixa de valor gasto), aplicando tudo sobre `clients`.
 */
export default function useClientesFilters(clients) {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [advanced, setAdvanced] = useState(DEFAULT_ADVANCED_FILTERS);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  function setFilter(key, value) {
    setFilters((f) => ({ ...f, [key]: value }));
  }

  function setAdvancedField(key, value) {
    setAdvanced((a) => ({ ...a, [key]: value }));
  }

  function clearAdvanced() {
    setAdvanced(DEFAULT_ADVANCED_FILTERS);
  }

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    const rawTerm = term.replace(/\D/g, "");

    return clients.filter((c) => {
      const matchesSearch =
        !term ||
        c.nome.toLowerCase().includes(term) ||
        c.cpf.replace(/\D/g, "").includes(rawTerm) ||
        c.telefone.replace(/\D/g, "").includes(rawTerm);

      const matchesStatus = filters.status === "Todos" || c.status === filters.status;
      const matchesTipo = filters.tipo === "Todos" || c.tipo === filters.tipo;
      const matchesCidade = filters.cidade === "Todas" || c.cidade === filters.cidade;
      const matchesVip = filters.vip === "Todos" || (filters.vip === "Sim" ? c.vip : !c.vip);
      const matchesInad =
        filters.inadimplente === "Todos" ||
        (filters.inadimplente === "Sim" ? c.inadimplente : !c.inadimplente);

      const matchesMin = !advanced.valorMin || c.valorGasto >= Number(advanced.valorMin);
      const matchesMax = !advanced.valorMax || c.valorGasto <= Number(advanced.valorMax);

      return (
        matchesSearch && matchesStatus && matchesTipo && matchesCidade &&
        matchesVip && matchesInad && matchesMin && matchesMax
      );
    });
  }, [clients, search, filters, advanced]);

  return {
    search, setSearch,
    filters, setFilter,
    advanced, setAdvancedField, clearAdvanced,
    showMoreFilters, setShowMoreFilters,
    filtered,
  };
}
