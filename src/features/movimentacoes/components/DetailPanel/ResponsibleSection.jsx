import { BadgeCheck, UserRound } from 'lucide-react';

import DetailSectionCard from './DetailSectionCard';

export default function ResponsibleSection({ usuario }) {
  if (!usuario) return null;

  return (
    <DetailSectionCard title="Responsável">
      <div
        className="
          group
          flex
          items-center
          gap-3.5
          rounded-xl
          border
          border-blue-100
          bg-blue-50/40
          p-3.5
          transition-all
          duration-200
          hover:-translate-y-0.5
          hover:border-blue-200
          hover:bg-blue-50/70
          hover:shadow-[0_6px_18px_rgba(59,130,246,0.08)]
        "
      >
        {/* Avatar */}
        <div className="relative shrink-0">
          <span
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              overflow-hidden
              rounded-full
              border-2
              border-white
              bg-blue-100
              text-blue-600
              shadow-[0_2px_8px_rgba(59,130,246,0.12)]
              transition-all
              duration-200
              group-hover:scale-105
              group-hover:bg-blue-200
            "
          >
            {usuario.avatar ? (
              <img
                src={usuario.avatar}
                alt={usuario.nome || 'Usuário'}
                className="h-full w-full object-cover"
              />
            ) : (
              <UserRound
                className="h-5 w-5"
                strokeWidth={1.8}
              />
            )}
          </span>

          {/* Indicador */}
          <span
            className="
              absolute
              bottom-0
              right-0
              flex
              h-3.5
              w-3.5
              items-center
              justify-center
              rounded-full
              border-2
              border-white
              bg-emerald-500
            "
            title="Responsável pela movimentação"
          />
        </div>

        {/* Dados */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <p className="truncate text-sm font-semibold text-slate-800">
              {usuario.nome || 'Usuário não informado'}
            </p>

            <BadgeCheck
              className="h-3.5 w-3.5 shrink-0 text-blue-500"
              strokeWidth={2}
            />
          </div>

          <p className="mt-0.5 truncate text-xs font-medium text-blue-600">
            {usuario.cargo || 'Cargo não informado'}
          </p>

          <p className="mt-1 text-[10px] text-slate-400">
            Responsável pelo registro da operação
          </p>
        </div>
      </div>
    </DetailSectionCard>
  );
}