import {
  CalendarClock,
  Monitor,
  UserRound,
  UsersRound,
} from 'lucide-react';
import { formatDateTime } from '../../../../shared/utils/formatters.js';

/**
 * Grade de metadados da venda selecionada.
 */
export function VendaDetalheInfo({
  dataHora,
  caixaNumero,
  operadorNome,
  clienteNome,
}) {
  const informacoes = [
    {
      label: 'Data e hora',
      value: formatDateTime(dataHora),
      icon: CalendarClock,
      iconStyle: 'bg-sky-50 text-sky-700 ring-sky-100',
      accent: 'bg-sky-400',
    },
    ...(caixaNumero
      ? [
          {
            label: 'Caixa',
            value: `#${caixaNumero}`,
            icon: Monitor,
            iconStyle: 'bg-violet-50 text-violet-700 ring-violet-100',
            accent: 'bg-violet-400',
          },
        ]
      : []),
    {
      label: 'Operador',
      value: operadorNome || 'Não informado',
      icon: UserRound,
      iconStyle: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
      accent: 'bg-emerald-400',
    },
    {
      label: 'Cliente',
      value: clienteNome || 'Consumidor',
      icon: UsersRound,
      iconStyle: 'bg-amber-50 text-amber-700 ring-amber-100',
      accent: 'bg-amber-400',
    },
  ];

  return (
    <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {informacoes.map(
        ({ label, value, icon: Icon, iconStyle, accent }) => (
          <div
            key={label}
            className="group relative flex min-w-0 items-start gap-3 overflow-hidden rounded-xl border border-slate-200/80 bg-white p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
          >
            <span
              className={`absolute inset-y-3 left-0 w-1 rounded-r-full ${accent}`}
            />

            <div
              className={`ml-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ring-1 ring-inset ${iconStyle} transition-transform duration-200 group-hover:scale-105`}
            >
              <Icon className="h-4 w-4" />
            </div>

            <div className="min-w-0 flex-1 py-0.5">
              <dt className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                {label}
              </dt>

              <dd className="mt-1.5 break-words text-sm font-semibold leading-relaxed text-slate-800">
                {value}
              </dd>
            </div>
          </div>
        ),
      )}
    </dl>
  );
}
