import {
  addDays,
  addMonthsISO,
  endOfMonthISO,
  startOfMonthISO,
} from "../../../shared/utils/dateMath";

export const DATE_PRESETS = [
  { id: "HOJE", label: "Hoje", resolve: (h) => ({ start: h, end: h }) },
  {
    id: "7D",
    label: "Últimos 7 dias",
    resolve: (h) => ({ start: addDays(h, -6), end: h }),
  },
  {
    id: "30D",
    label: "Últimos 30 dias",
    resolve: (h) => ({ start: addDays(h, -29), end: h }),
  },
  {
    id: "MES_ATUAL",
    label: "Este mês",
    resolve: (h) => ({ start: startOfMonthISO(h), end: endOfMonthISO(h) }),
  },
  {
    id: "MES_PASSADO",
    label: "Mês passado",
    resolve: (h) => {
      const s = addMonthsISO(h, -1);
      return { start: s, end: endOfMonthISO(s) };
    },
  },
  {
    id: "PROX_30",
    label: "Próximos 30 dias",
    resolve: (h) => ({ start: h, end: addDays(h, 30) }),
  },
  {
    id: "ANO",
    label: "Este ano",
    resolve: (h) => ({
      start: `${h.slice(0, 4)}-01-01`,
      end: `${h.slice(0, 4)}-12-31`,
    }),
  },
  {
    id: "TUDO",
    label: "Todo o período",
    resolve: () => ({ start: "2000-01-01", end: "2100-12-31" }),
  },
];
export const DEFAULT_PRESET = "MES_ATUAL";
