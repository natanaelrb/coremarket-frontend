import {
  FileText,
  MessageSquareText,
} from 'lucide-react';

import DetailSectionCard from './DetailSectionCard';

export default function ReasonSection({ motivo, observacao }) {
  if (!motivo && !observacao) return null;

  return (
    <DetailSectionCard title="Motivo / Observação">
      <div className="space-y-3">
        {/* Motivo */}
        {motivo && (
          <div
            className="
              group/motivo
              rounded-xl
              border
              border-amber-100
              bg-amber-50/50
              p-3.5
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-amber-200
              hover:bg-amber-50
              hover:shadow-[0_5px_16px_rgba(245,158,11,0.07)]
            "
          >
            <div className="flex items-start gap-3">
              <span
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-amber-200
                  bg-white
                  text-amber-600
                  shadow-sm
                  transition-all
                  duration-200
                  group-hover/motivo:scale-105
                  group-hover/motivo:bg-amber-100
                "
              >
                <MessageSquareText
                  className="h-3.5 w-3.5"
                  strokeWidth={1.9}
                />
              </span>

              <div className="min-w-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-amber-600/70">
                  Motivo
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-800">
                  {motivo}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Observação */}
        {observacao && (
          <div
            className="
              group/observacao
              rounded-xl
              border
              border-violet-100
              bg-violet-50/40
              p-3.5
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-violet-200
              hover:bg-violet-50/70
              hover:shadow-[0_5px_16px_rgba(139,92,246,0.07)]
            "
          >
            <div className="flex items-start gap-3">
              <span
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-violet-200
                  bg-white
                  text-violet-600
                  shadow-sm
                  transition-all
                  duration-200
                  group-hover/observacao:scale-105
                  group-hover/observacao:bg-violet-100
                "
              >
                <FileText
                  className="h-3.5 w-3.5"
                  strokeWidth={1.9}
                />
              </span>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-violet-600/70">
                  Observação
                </p>

                <p className="mt-1.5 whitespace-pre-wrap text-sm leading-6 text-slate-600">
                  {observacao}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </DetailSectionCard>
  );
}