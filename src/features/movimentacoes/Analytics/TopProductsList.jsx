import { motion } from 'framer-motion';

export default function TopProductsList({ produtos }) {
  const max = Math.max(...produtos.map((p) => p.quantidade));

  return (
    <div className="rounded-2xl border border-white/5 bg-[#141833] p-5">
      <h3 className="mb-4 text-sm font-semibold text-white">Produtos mais movimentados</h3>
      <ul className="space-y-3">
        {produtos.map((p, i) => (
          <li key={p.nome} className="flex items-center gap-3">
            <span className="w-4 text-xs font-medium text-slate-500">{i + 1}.</span>
            <span className="text-base">{p.imagem}</span>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between text-sm">
                <span className="truncate text-slate-300">{p.nome}</span>
                <span className="ml-2 shrink-0 font-medium text-slate-200">{p.quantidade} un.</span>
              </div>
              <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(p.quantidade / max) * 100}%` }}
                  transition={{ duration: 0.7, delay: i * 0.06 }}
                  className="h-full rounded-full bg-violet-500"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
