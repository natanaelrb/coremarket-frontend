// Cabeçalho do painel: imagem grande, nome, status ativo/inativo e identificadores.
import { SlideOverCloseButton } from '../../../../shared/components/ui/SlideOver';
import { ProductImage } from '../ProductsTable/ProductImage';

export function DetailHeader({ produto, onClose }) {
  return (
    <div className="flex items-start gap-3 border-b border-gray-100 p-5 dark:border-gray-800">
      <ProductImage emoji={produto.imagemEmoji} color={produto.imagemCor} size={64} />

      <div className="min-w-0 flex-1">
        <h2 className="truncate text-base font-semibold text-gray-900 dark:text-white">{produto.nome}</h2>
        <span
          className={[
            'mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium',
            produto.ativo
              ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400'
              : 'bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-400',
          ].join(' ')}
        >
          {produto.ativo ? 'Ativo' : 'Inativo'}
        </span>

        <div className="mt-3 space-y-1 text-sm">
          <p className="flex justify-between gap-2 text-gray-500 dark:text-gray-400">
            Código <span className="font-medium text-gray-700 dark:text-gray-200">{produto.codigo}</span>
          </p>
          <p className="flex justify-between gap-2 text-gray-500 dark:text-gray-400">
            SKU <span className="font-medium text-gray-700 dark:text-gray-200">{produto.sku}</span>
          </p>
          <p className="flex justify-between gap-2 text-gray-500 dark:text-gray-400">
            Código de barras <span className="font-medium text-gray-700 dark:text-gray-200">{produto.codigoBarras}</span>
          </p>
        </div>
      </div>

      <SlideOverCloseButton onClose={onClose} />
    </div>
  );
}
