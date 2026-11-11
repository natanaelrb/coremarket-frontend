import { MessageCircle, Barcode, QrCode, CalendarCheck, Pencil, Printer, Ban } from 'lucide-react';

export const QuickAction = Object.freeze({
  WHATSAPP: 'WHATSAPP', BOLETO: 'BOLETO', PIX: 'PIX', PROMESSA: 'PROMESSA',
  EDITAR: 'EDITAR', IMPRIMIR: 'IMPRIMIR', CANCELAR: 'CANCELAR',
});

/** `row` define a linha em que o botão aparece no painel de detalhes. */
export const QUICK_ACTIONS = [
  { id: QuickAction.WHATSAPP, label: 'Enviar cobrança',  icon: MessageCircle, tone: 'green',  row: 1 },
  { id: QuickAction.BOLETO,   label: 'Gerar boleto',     icon: Barcode,       tone: 'blue',   row: 1 },
  { id: QuickAction.PIX,      label: 'Cobrança PIX',     icon: QrCode,        tone: 'green',  row: 1 },
  { id: QuickAction.PROMESSA, label: 'Promessa de pgto', icon: CalendarCheck, tone: 'orange', row: 1 },
  { id: QuickAction.EDITAR,   label: 'Editar conta',     icon: Pencil,        tone: 'blue',   row: 2 },
  { id: QuickAction.IMPRIMIR, label: 'Imprimir',         icon: Printer,       tone: 'gray',   row: 2 },
  { id: QuickAction.CANCELAR, label: 'Cancelar conta',   icon: Ban,           tone: 'red',    row: 2 },
];
