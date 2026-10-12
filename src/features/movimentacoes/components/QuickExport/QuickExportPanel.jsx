import {
  FileSpreadsheet,
  FileText,
  FileDown,
  ListFilter,
  Layers,
  Info,
} from 'lucide-react';

import { motion } from '../shared/motion';
import ExportOptionButton from './ExportOptionButton';

const EXPORT_OPTIONS = [
  {
    key: 'csv',
    label: 'CSV',
    description: 'Dados em formato CSV',
    icon: FileText,
    config: {
      iconBg:
        'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
      border:
        'border-emerald-200 hover:border-emerald-300 dark:border-emerald-500/20 dark:hover:border-emerald-500/30',
      arrow:
        'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
    },
  },
  {
    key: 'xlsx',
    label: 'Excel',
    description: 'Planilha com formatação',
    icon: FileSpreadsheet,
    config: {
      iconBg:
        'bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400',
      border:
        'border-violet-200 hover:border-violet-300 dark:border-violet-500/20 dark:hover:border-violet-500/30',
      arrow:
        'bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400',
    },
  },
  {
    key: 'pdf',
    label: 'PDF',
    description: 'Relatório completo',
    icon: FileDown,
    config: {
      iconBg:
        'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
      border:
        'border-blue-200 hover:border-blue-300 dark:border-blue-500/20 dark:hover:border-blue-500/30',
      arrow:
        'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
    },
  },
];

export default function QuickExportPanel({
  onExport,
  isExporting,
  lastExport,
  filteredCount,
  totalCount,
}) {
  return (
    <section
      className="
        overflow-hidden
        rounded-2xl
        border border-slate-200
        bg-white
        p-5
        shadow-sm shadow-slate-900/[0.03]
        transition-all duration-200
        hover:border-slate-300
        dark:border-white/[0.06]
        dark:bg-[#141833]
        dark:shadow-black/10
        dark:hover:border-white/10
      "
    >
      {/* Cabeçalho */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
              flex h-10 w-10 shrink-0 items-center justify-center
              rounded-xl
              bg-emerald-50 text-emerald-600
              dark:bg-emerald-500/10 dark:text-emerald-400
            "
          >
            <FileDown className="h-5 w-5" strokeWidth={2} />
          </div>

          <div className="min-w-0">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              Exportação rápida
            </h3>

            <p className="mt-0.5 text-[11px] text-slate-400 dark:text-slate-500">
              Gere relatórios em diferentes formatos
            </p>
          </div>
        </div>

        <span
          className="
            inline-flex w-fit shrink-0 items-center
            rounded-full
            border border-emerald-200
            bg-emerald-50
            px-2.5 py-1
            text-[10px] font-semibold
            text-emerald-600
            dark:border-emerald-500/20
            dark:bg-emerald-500/10
            dark:text-emerald-400
          "
        >
          Dados do período atual
        </span>
      </div>

      {/* Resumo */}
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div
          className="
            flex items-center gap-3
            rounded-xl
            border border-slate-200
            bg-slate-50
            px-3.5 py-3
            dark:border-white/[0.06]
            dark:bg-[#10152A]
          "
        >
          <div
            className="
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-lg
              bg-slate-100 text-slate-500
              dark:bg-white/[0.05] dark:text-slate-400
            "
          >
            <Layers className="h-4 w-4" strokeWidth={2} />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
              Todas as movimentações
            </p>

            <p className="mt-0.5 text-sm font-bold text-slate-800 dark:text-slate-100">
              {totalCount ?? 0}
            </p>
          </div>
        </div>

        <div
          className="
            flex items-center gap-3
            rounded-xl
            border border-slate-200
            bg-slate-50
            px-3.5 py-3
            dark:border-white/[0.06]
            dark:bg-[#10152A]
          "
        >
          <div
            className="
              flex h-9 w-9 shrink-0 items-center justify-center
              rounded-lg
              bg-emerald-50 text-emerald-600
              dark:bg-emerald-500/10 dark:text-emerald-400
            "
          >
            <ListFilter className="h-4 w-4" strokeWidth={2} />
          </div>

          <div className="min-w-0">
            <p className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
              Movimentações filtradas
            </p>

            <p className="mt-0.5 text-sm font-bold text-slate-800 dark:text-slate-100">
              {filteredCount ?? 0}
            </p>
          </div>
        </div>
      </div>

      {/* Separador */}
      <div className="my-5 h-px bg-slate-200 dark:bg-white/[0.06]" />

      {/* Formatos */}
      <div className="mb-3 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold text-slate-800 dark:text-slate-100">
            Escolha o formato
          </p>

          <p className="mt-0.5 text-[10px] text-slate-400 dark:text-slate-500">
            Selecione como deseja exportar os dados.
          </p>
        </div>

        <span className="shrink-0 text-[10px] font-medium text-slate-400 dark:text-slate-500">
          3 formatos disponíveis
        </span>
      </div>

      {/* BOTÕES DE EXPORTAÇÃO */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {EXPORT_OPTIONS.map((option) => (
          <ExportOptionButton
            key={option.key}
            label={option.label}
            icon={option.icon}
            isExporting={isExporting}
            onClick={() => onExport(option.key)}
            config={option.config}
          />
        ))}
      </div>

      {/* Última exportação */}
      {lastExport && (
        <motion.div
          initial={{ opacity: 0, y: -3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.16 }}
          className="
            mt-4 flex items-center gap-2.5
            rounded-xl
            border border-emerald-200
            bg-emerald-50
            px-3.5 py-2.5
            dark:border-emerald-500/20
            dark:bg-emerald-500/10
          "
        >
          <span
            className="
              flex h-6 w-6 shrink-0 items-center justify-center
              rounded-full
              bg-emerald-100 text-emerald-600
              dark:bg-emerald-500/15 dark:text-emerald-400
            "
          >
            ✓
          </span>

          <p className="min-w-0 truncate text-[10px] font-medium text-emerald-700 dark:text-emerald-400">
            {lastExport.fileName} gerado com sucesso.
          </p>
        </motion.div>
      )}

      {/* Informação */}
      <div
        className="
          mt-3 flex items-start gap-2.5
          rounded-xl
          border border-slate-200
          bg-slate-50
          px-3.5 py-2.5
          dark:border-white/[0.06]
          dark:bg-[#10152A]
        "
      >
        <Info
          className="mt-0.5 h-4 w-4 shrink-0 text-slate-400 dark:text-slate-500"
          strokeWidth={2}
        />

        <p className="text-[10px] leading-4 text-slate-500 dark:text-slate-400">
          Os relatórios incluem todas as movimentações do período selecionado.
          Quando houver filtros ativos, você também poderá exportar apenas os
          registros filtrados.
        </p>
      </div>
    </section>
  );
}