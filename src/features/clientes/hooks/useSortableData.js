import { useState, useMemo } from "react";

/**
 * Ordena `data` por `sort.key`/`sort.dir`. Trata datas e strings especialmente.
 */
export default function useSortableData(data, initialSort) {
  const [sort, setSort] = useState(initialSort);

  const sorted = useMemo(() => {
    const arr = [...data];
    const { key, dir } = sort;

    arr.sort((a, b) => {
      let av = a[key];
      let bv = b[key];

      if (key === "ultimaCompra") {
        av = av ? new Date(av).getTime() : 0;
        bv = bv ? new Date(bv).getTime() : 0;
      } else if (typeof av === "string") {
        av = av.toLowerCase();
        bv = bv.toLowerCase();
      }

      if (av < bv) return dir === "asc" ? -1 : 1;
      if (av > bv) return dir === "asc" ? 1 : -1;
      return 0;
    });

    return arr;
  }, [data, sort]);

  function toggleSort(key) {
    setSort((s) => ({
      key,
      dir: s.key === key && s.dir === "asc" ? "desc" : "asc",
    }));
  }

  return { sorted, sort, setSort, toggleSort };
}
