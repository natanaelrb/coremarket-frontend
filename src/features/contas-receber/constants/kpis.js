import { CircleDollarSign, CalendarClock, CalendarX2, BadgeCheck, AlarmClock, UserX, Percent, Receipt } from 'lucide-react';

/** Definições visuais dos 8 indicadores (os valores vêm de utils/buildKpiCards). */
export const KPI_DEFS = {
  total:         { label: 'Total a receber',        icon: CircleDollarSign, tone: 'green' },
  aVencer:       { label: 'A vencer',               icon: CalendarClock,    tone: 'blue' },
  vencido:       { label: 'Vencido',                icon: CalendarX2,       tone: 'red' },
  recebido:      { label: 'Recebido no período',    icon: BadgeCheck,       tone: 'green' },
  emAtraso:      { label: 'Em atraso',              icon: AlarmClock,       tone: 'orange' },
  inadimplentes: { label: 'Clientes inadimplentes', icon: UserX,            tone: 'purple' },
  taxa:          { label: 'Taxa de recebimento',    icon: Percent,          tone: 'cyan' },
  ticket:        { label: 'Ticket médio',           icon: Receipt,          tone: 'amber' },
};
