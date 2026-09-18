import { STATUS_CLIENTE } from "../../../shared/constants/enums.js";

/** UI presentation config (label, badge tone) for each StatusCliente value. */

export const STATUS_CLIENTE_CONFIG = {
  [STATUS_CLIENTE.ATIVO]: {
    label: "Ativo",
    tone: "green",
  },

  [STATUS_CLIENTE.INATIVO]: {
    label: "Inativo",
    tone: "neutral",
  },

  [STATUS_CLIENTE.EM_ATRASO]: {
    label: "Em atraso",
    tone: "red",
  },

  [STATUS_CLIENTE.COM_PENDENCIA]: {
    label: "Com pendência",
    tone: "amber",
  },
};