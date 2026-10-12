import {
  CalendarDays,
  Clock3,
  Hash,
} from 'lucide-react';

import DetailSectionCard from './DetailSectionCard';
import { formatFullDateTime } from '../../utils/formatDate';

export default function AdditionalInfoSection({ movement }) {
  const formattedDate = formatFullDateTime(movement.dataHora);

  const items = [
    {
      label: 'ID da movimentação',
      value: movement.id,
      icon: Hash,
      type: 'id',
      iconColor: 'text-slate-500',
      iconBg: 'bg-slate-100',
      iconBorder: 'border-slate-200',
      hoverBorder: 'group-hover/item:border-slate-300',
      hoverBg: 'group-hover/item:bg-slate-100',
    },
    {
      label: 'Criado em',
      value: formattedDate,
      icon: CalendarDays,
      type: 'date',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
      iconBorder: 'border-blue-100',
      hoverBorder: 'group-hover/item:border-blue-200',
      hoverBg: 'group-hover/item:bg-blue-50',
    },
    {
      label: 'Última atualização',
      value: formattedDate,
      icon: Clock3,
      type: 'date',
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
      iconBorder: 'border-emerald-100',
      hoverBorder: 'group-hover/item:border-emerald-200',
      hoverBg: 'group-hover/item:bg-emerald-50',
    },
  ];

  return (
    <DetailSectionCard title="Informações adicionais">
      <div className="divide-y divide-slate-100">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                group/item
                flex
                items-center
                justify-between
                gap-4
                py-3
                first:pt-0
                last:pb-0
                transition-all
                duration-200
              "
            >
              {/* Label */}
              <div className="flex min-w-0 items-center gap-2.5">
                <span
                  className={`
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    border
                    transition-all
                    duration-200
                    ${item.iconColor}
                    ${item.iconBg}
                    ${item.iconBorder}
                    ${item.hoverBorder}
                    ${item.hoverBg}
                    group-hover/item:scale-105
                  `}
                >
                  <Icon
                    className="h-3.5 w-3.5"
                    strokeWidth={1.8}
                  />
                </span>

                <span
                  className="
                    truncate
                    text-xs
                    font-medium
                    text-slate-500
                    transition-colors
                    duration-200
                    group-hover/item:text-slate-700
                  "
                >
                  {item.label}
                </span>
              </div>

              {/* Valor */}
              {item.type === 'id' ? (
                <span
                  className="
                    shrink-0
                    rounded-lg
                    border
                    border-slate-200
                    bg-slate-50
                    px-2.5
                    py-1.5
                    font-mono
                    text-[11px]
                    font-semibold
                    text-slate-700
                    transition-all
                    duration-200
                    group-hover/item:border-slate-300
                    group-hover/item:bg-white
                    group-hover/item:text-slate-900
                  "
                >
                  #{item.value}
                </span>
              ) : (
                <span
                  className="
                    max-w-[190px]
                    truncate
                    text-right
                    text-[11px]
                    font-semibold
                    text-slate-700
                    transition-colors
                    duration-200
                    group-hover/item:text-slate-900
                    sm:max-w-none
                  "
                >
                  {item.value}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </DetailSectionCard>
  );
}