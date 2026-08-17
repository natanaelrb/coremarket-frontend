import { CIDADES } from "../mocks/cidadesMock";

export const STATUS_OPTIONS = ["Todos", "Ativo", "Inativo"];
export const TIPO_OPTIONS = ["Todos", "Pessoa Física", "Pessoa Jurídica"];
export const CIDADE_OPTIONS = ["Todas", ...CIDADES];
export const VIP_OPTIONS = ["Todos", "Sim", "Não"];
export const INADIMPLENTE_OPTIONS = ["Todos", "Sim", "Não"];

export const SORT_OPTIONS = ["Mais recentes", "Nome A-Z", "Maior valor gasto"];
export const PER_PAGE_OPTIONS = ["10 por página", "25 por página", "50 por página"];

export const DEFAULT_FILTERS = {
  status: "Todos",
  tipo: "Todos",
  cidade: "Todas",
  vip: "Todos",
  inadimplente: "Todos",
};

export const DEFAULT_ADVANCED_FILTERS = {
  valorMin: "",
  valorMax: "",
};
