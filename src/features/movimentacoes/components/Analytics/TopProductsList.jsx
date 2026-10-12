import { Package, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatNumber } from '../../utils/formatQuantity';

export default function TopProductsList({ produtos = [] }) {
  const max = Math.max(
    ...produtos.map((produto) => Number(produto.quantidade) || 0),
    1
  );

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
              bg-violet-50
              text-violet-600

              dark:bg-violet-500/10
              dark:text-violet-400
            "
          >
            <Package
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
              Produtos mais movimentados
            </h3>

            <p
              className="
                mt-0.5
                text-[11px]
                text-slate-400
                dark:text-slate-500
              "
            >
              Ranking do período
            </p>
          </div>
        </div>

        <span
          className="
            flex
            shrink-0
            items-center
            gap-1
            rounded-full
            border
            border-violet-200
            bg-violet-50
            px-2
            py-1
            text-[10px]
            font-bold
            text-violet-600

            dark:border-violet-500/15
            dark:bg-violet-500/10
            dark:text-violet-400
          "
        >
          <Trophy className="h-3 w-3" />
          Top {produtos.length}
        </span>
      </div>

      {/* Lista */}
      <div className="mt-4 flex-1">
        {produtos.length === 0 ? (
          <div
            className="
              flex
              h-[190px]
              items-center
              justify-center
              text-xs
              text-slate-400
            "
          >
            Nenhum produto encontrado.
          </div>
        ) : (
          <ol className="space-y-2.5">
            {produtos.slice(0, 5).map((produto, index) => {
              const quantidade = Number(produto.quantidade) || 0;
              const percentual = (quantidade / max) * 100;
              const primeiro = index === 0;

              return (
                <motion.li
                  key={produto.nome}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.16,
                    delay: index * 0.025,
                  }}
                  className="
                    group/item
                    flex
                    min-w-0
                    items-center
                    gap-2
                  "
                >
                  {/* Posição */}
                  <span
                    className={`
                      flex
                      h-5
                      w-5
                      shrink-0
                      items-center
                      justify-center
                      rounded-md
                      text-[10px]
                      font-bold

                      ${
                        primeiro
                          ? `
                            bg-violet-100
                            text-violet-700
                            dark:bg-violet-500/15
                            dark:text-violet-300
                          `
                          : `
                            text-slate-400
                            dark:text-slate-500
                          `
                      }
                    `}
                  >
                    {index + 1}
                  </span>

                  {/* Produto */}
                  <div
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-md
                      border
                      border-slate-200
                      bg-slate-50
                      text-sm

                      dark:border-white/[0.06]
                      dark:bg-white/[0.03]
                    "
                  >
                    {produto.imagem || '📦'}
                  </div>

                  {/* Conteúdo */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="
                          min-w-0
                          truncate
                          text-xs
                          font-medium
                          text-slate-700
                          dark:text-slate-300
                        "
                      >
                        {produto.nome}
                      </span>

                      <span
                        className="
                          shrink-0
                          text-[11px]
                          font-bold
                          text-slate-700
                          dark:text-slate-200
                        "
                      >
                        {formatNumber(quantidade)} un.
                      </span>
                    </div>

                    {/* Barra */}
                    <div
                      className="
                        mt-1.5
                        h-1.5
                        w-full
                        overflow-hidden
                        rounded-full
                        bg-slate-100

                        dark:bg-white/[0.06]
                      "
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${percentual}%`,
                        }}
                        transition={{
                          duration: 0.2,
                          delay: index * 0.025,
                          ease: 'easeOut',
                        }}
                        className={`
                          h-full
                          rounded-full
                          transition-opacity
                          duration-100

                          ${
                            primeiro
                              ? 'bg-violet-500'
                              : 'bg-violet-500/75'
                          }
                        `}
                      />
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        )}
      </div>

      {/* Rodapé */}
      {produtos.length > 0 && (
        <div
          className="
            mt-3
            border-t
            border-slate-100
            pt-3
            dark:border-white/[0.05]
          "
        >
          <div className="flex items-center justify-between">
            <span
              className="
                text-[10px]
                font-medium
                text-slate-400
                dark:text-slate-500
              "
            >
              Produto líder
            </span>

            <span
              className="
                max-w-[150px]
                truncate
                text-[10px]
                font-semibold
                text-violet-600
                dark:text-violet-400
              "
            >
              {produtos[0]?.nome}
            </span>
          </div>
        </div>
      )}
    </article>
  );
}