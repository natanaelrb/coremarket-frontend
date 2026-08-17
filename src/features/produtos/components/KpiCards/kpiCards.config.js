// Mapeamento dos KPIs -> ícone/cor. Mantém KpiCards.jsx livre de detalhes visuais.
import { Package, PackageCheck, PackageX, PackageMinus, DollarSign, Tags, PackageOpen } from 'lucide-react';
import { formatCurrency, formatNumber, formatPercent } from '../../utils/formatters';

export function buildKpiItems(kpis) {
  return [
    {
      key: 'total',
      icon: Package,
      iconBgClass: 'bg-violet-50 dark:bg-violet-500/10',
      iconColorClass: 'text-violet-600 dark:text-violet-400',
      label: 'Total de Produtos',
      value: formatNumber(kpis.totalProdutos),
      helperText: '100% do catálogo',
    },
    {
      key: 'ativos',
      icon: PackageCheck,
      iconBgClass: 'bg-emerald-50 dark:bg-emerald-500/10',
      iconColorClass: 'text-emerald-600 dark:text-emerald-400',
      label: 'Produtos Ativos',
      value: formatNumber(kpis.ativos),
      helperText: `${formatPercent(kpis.percentualAtivos, 2)} do total`,
    },
    {
      key: 'sem_estoque',
      icon: PackageX,
      iconBgClass: 'bg-orange-50 dark:bg-orange-500/10',
      iconColorClass: 'text-orange-600 dark:text-orange-400',
      label: 'Sem Estoque',
      value: formatNumber(kpis.semEstoque),
      helperText: `${formatPercent(kpis.percentualSemEstoque, 2)} do total`,
    },
    {
      key: 'estoque_baixo',
      icon: PackageMinus,
      iconBgClass: 'bg-amber-50 dark:bg-amber-500/10',
      iconColorClass: 'text-amber-600 dark:text-amber-400',
      label: 'Estoque Baixo',
      value: formatNumber(kpis.estoqueBaixo),
      helperText: `${formatPercent(kpis.percentualEstoqueBaixo, 2)} do total`,
    },
    {
      key: 'valor_total',
      icon: DollarSign,
      iconBgClass: 'bg-blue-50 dark:bg-blue-500/10',
      iconColorClass: 'text-blue-600 dark:text-blue-400',
      label: 'Valor Total em Estoque',
      value: formatCurrency(kpis.valorTotalEstoque),
      helperText: 'Custo de aquisição',
    },
    {
      key: 'categorias',
      icon: Tags,
      iconBgClass: 'bg-purple-50 dark:bg-purple-500/10',
      iconColorClass: 'text-purple-600 dark:text-purple-400',
      label: 'Categorias',
      value: formatNumber(kpis.categoriasAtivas),
      helperText: 'Cadastradas',
    },
    {
      key: 'inativos',
      icon: PackageOpen,
      iconBgClass: 'bg-gray-100 dark:bg-white/5',
      iconColorClass: 'text-gray-500 dark:text-gray-400',
      label: 'Produtos Inativos',
      value: formatNumber(kpis.inativos),
      helperText: `${formatPercent(kpis.percentualInativos, 2)} do total`,
    },
  ];
}
