// Aba "Histórico": linha do tempo de alterações do cadastro do produto.
// Endpoint real sugerido: GET /api/produtos/{id}/historico
import { Pencil, PackagePlus, PackageMinus, PlusCircle } from 'lucide-react';
import { formatDate } from '../../../utils/formatters';

const ICONS = { criacao: PlusCircle, edicao: Pencil, entrada: PackagePlus, saida: PackageMinus };

function gerarHistoricoMock(produto) {
  const seed = produto.codigo.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return [
    { id: 1, tipo: 'criacao', descricao: 'Produto cadastrado no sistema', data: new Date(Date.now() - (200 + seed) * 86400000).toISOString() },
    { id: 2, tipo: 'entrada', descricao: `Entrada de ${20 + (seed % 50)} unidades`, data: new Date(Date.now() - (60 + seed % 30) * 86400000).toISOString() },
    { id: 3, tipo: 'edicao', descricao: 'Preço de venda atualizado', data: new Date(Date.now() - (30 + seed % 15) * 86400000).toISOString() },
    { id: 4, tipo: 'saida', descricao: `Saída de ${5 + (seed % 20)} unidades (venda)`, data: new Date(Date.now() - (5 + seed % 5) * 86400000).toISOString() },
  ];
}

export function HistoricoTab({ produto }) {
  const historico = gerarHistoricoMock(produto);

  return (
    <div className="px-5">
      <ul className="relative flex flex-col gap-5 border-l border-gray-100 pl-5 dark:border-gray-800">
        {historico.map((item) => {
          const Icon = ICONS[item.tipo] ?? Pencil;
          return (
            <li key={item.id} className="relative">
              <span className="absolute -left-[27px] flex h-6 w-6 items-center justify-center rounded-full bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400">
                <Icon size={12} />
              </span>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{item.descricao}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">{formatDate(item.data)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
