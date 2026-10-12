import { AlertTriangle, TrendingUp } from 'lucide-react';
import { PieChart, Pie, Cell } from 'recharts';
import { formatNumber } from '../../utils/formatQuantity';

export default function LossReasonsDonut({ motivos = [] }) {
  const total = motivos.reduce(
    (acc, motivo) => acc + (Number(motivo.quantidade) || 0),
    0
  );

  const principalMotivo = [...motivos].sort(
    (a, b) => b.quantidade - a.quantidade
  )[0];

  return (
    <article
      className="
        group
        flex
        min-h-[270px]
        flex-col
        rounded-xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-sm
        shadow-slate-900/[0.03]
        transition-all
        duration-150
        hover:-translate-y-[1px]
        hover:border-slate-300
        hover:shadow-md

        dark:border-white/[0.06]
        dark:bg-[#111A31]
        dark:shadow-black/10
        dark:hover:border-white/10
      "
    >
      {/* Cabeçalho */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-orange-50
              text-orange-500

              dark:bg-orange-500/10
              dark:text-orange-400
            "
          >
            <AlertTriangle
              className="h-4 w-4"
              strokeWidth={2}
            />
          </div>

          <div className="min-w-0">
            <h3
              className="
                truncate
                text-sm
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              Motivos de perda
            </h3>

            <p
              className="
                mt-0.5
                text-[11px]
                text-slate-400
                dark:text-slate-500
              "
            >
              Distribuição das perdas
            </p>
          </div>
        </div>

        {principalMotivo && (
          <span
            className="
              flex
              shrink-0
              items-center
              gap-1
              rounded-full
              border
              border-orange-200
              bg-orange-50
              px-2
              py-1
              text-[10px]
              font-bold
              text-orange-600

              dark:border-orange-500/15
              dark:bg-orange-500/10
              dark:text-orange-400
            "
          >
            <TrendingUp className="h-3 w-3" />
            Maior causa
          </span>
        )}
      </div>

      {/* Conteúdo */}
      <div className="mt-4 flex flex-1 items-center gap-4">
        {/* Donut */}
        <div className="relative h-[118px] w-[118px] shrink-0">
          <PieChart
            width={118}
            height={118}
          >
            <Pie
              data={motivos}
              dataKey="quantidade"
              nameKey="nome"
              innerRadius={37}
              outerRadius={53}
              paddingAngle={3}
              stroke="none"
              isAnimationActive
              animationDuration={220}
            >
              {motivos.map((motivo) => (
                <Cell
                  key={motivo.nome}
                  fill={motivo.cor}
                />
              ))}
            </Pie>
          </PieChart>

          {/* Centro */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
            "
          >
            <span
              className="
                text-lg
                font-bold
                tracking-tight
                text-slate-900
                dark:text-white
              "
            >
              {formatNumber(total)}
            </span>

            <span
              className="
                mt-0.5
                text-[9px]
                font-medium
                text-slate-400
                dark:text-slate-500
              "
            >
              Unidades
            </span>
          </div>
        </div>

        {/* Legenda */}
        <div className="min-w-0 flex-1">
          <ul className="space-y-2.5">
            {motivos.map((motivo) => {
              const quantidade = Number(motivo.quantidade) || 0;

              const percentual =
                motivo.percentual ??
                (total > 0
                  ? ((quantidade / total) * 100).toFixed(1)
                  : 0);

              const isPrincipal =
                principalMotivo?.nome === motivo.nome;

              return (
                <li
                  key={motivo.nome}
                  className="min-w-0"
                >
                  <div className="flex items-center gap-2">
                    {/* Indicador */}
                    <span
                      className="
                        h-2
                        w-2
                        shrink-0
                        rounded-full
                      "
                      style={{
                        backgroundColor: motivo.cor,
                      }}
                    />

                    {/* Nome */}
                    <span
                      className={`
                        min-w-0
                        flex-1
                        truncate
                        text-[11px]
                        ${
                          isPrincipal
                            ? 'font-semibold text-slate-700 dark:text-slate-200'
                            : 'font-medium text-slate-500 dark:text-slate-400'
                        }
                      `}
                    >
                      {motivo.nome}
                    </span>

                    {/* Percentual */}
                    <span
                      className={`
                        shrink-0
                        text-[10px]
                        font-bold
                        ${
                          isPrincipal
                            ? 'text-slate-800 dark:text-white'
                            : 'text-slate-500 dark:text-slate-400'
                        }
                      `}
                    >
                      {percentual}%
                    </span>
                  </div>

                  {/* Barra */}
                  <div
                    className="
                      ml-4
                      mt-1
                      h-1
                      overflow-hidden
                      rounded-full
                      bg-slate-100

                      dark:bg-white/[0.05]
                    "
                  >
                    <div
                      className="
                        h-full
                        rounded-full
                        transition-[width]
                        duration-200
                        ease-out
                      "
                      style={{
                        width: `${Math.min(
                          Number(percentual) || 0,
                          100
                        )}%`,
                        backgroundColor: motivo.cor,
                      }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Rodapé */}
      {principalMotivo && (
        <div
          className="
            mt-3
            flex
            items-center
            justify-between
            border-t
            border-slate-100
            pt-3

            dark:border-white/[0.05]
          "
        >
          <span
            className="
              text-[10px]
              font-medium
              text-slate-400
              dark:text-slate-500
            "
          >
            Principal motivo
          </span>

          <span
            className="
              max-w-[150px]
              truncate
              text-[10px]
              font-bold
              text-orange-600
              dark:text-orange-400
            "
          >
            {principalMotivo.nome}
          </span>
        </div>
      )}
    </article>
  );
}