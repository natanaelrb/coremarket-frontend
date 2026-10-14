
import {
  FileCheck2,
  Paperclip,
  Download,
  FileText,
  CalendarDays,
  Hash,
  CircleCheck,
  CircleDashed,
  ArrowUpRight,
} from "lucide-react";

export function NFAnexosTab({ detalhe, onBaixarNotaFiscal, onVerNotaFiscal }) {
  const notaFiscal = detalhe?.integracoes?.notaFiscal ?? {};
  const emitida = Boolean(notaFiscal.emitida);
  const anexos = detalhe?.anexos ?? [];

  return (
    <div className="animate-fade-in space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
          <FileText size={21} />
        </div>

        <div>
          <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
            Nota fiscal e anexos
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            Consulte os dados fiscais e os documentos relacionados a esta
            compra.
          </p>
        </div>
      </div>

      {/* Nota fiscal */}
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-950/[0.02] dark:border-slate-700/80 dark:bg-[#151b28]">
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 dark:border-slate-700/80">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
              <FileCheck2 size={18} />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Nota fiscal eletrônica
              </h4>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                Documento fiscal da compra
              </p>
            </div>
          </div>

          <span
            className={[
              "inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1",
              "text-xs font-medium",
              emitida
                ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400"
                : "bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-400",
            ].join(" ")}
          >
            {emitida ? (
              <CircleCheck size={13} />
            ) : (
              <CircleDashed size={13} />
            )}
            {emitida ? "Emitida" : "Não emitida"}
          </span>
        </div>

        {emitida ? (
          <>
            <div className="p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                  <FileCheck2 size={27} strokeWidth={1.7} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="break-words text-base font-semibold text-slate-900 dark:text-slate-100">
                    NF-e {notaFiscal.numero || "Sem número informado"}
                  </p>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Documento fiscal emitido para esta compra.
                  </p>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <InfoItem
                      icon={Hash}
                      label="Número"
                      value={notaFiscal.numero || "Não informado"}
                    />

                    <InfoItem
                      icon={FileText}
                      label="Série"
                      value={notaFiscal.serie || "Não informada"}
                    />

                    {notaFiscal.dataEmissao && (
                      <InfoItem
                        icon={CalendarDays}
                        label="Data de emissão"
                        value={formatarData(notaFiscal.dataEmissao)}
                      />
                    )}

                    {notaFiscal.chaveAcesso && (
                      <InfoItem
                        icon={Hash}
                        label="Chave de acesso"
                        value={notaFiscal.chaveAcesso}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50/70 px-5 py-4 sm:flex-row sm:justify-end dark:border-slate-700/80 dark:bg-slate-800/30">
              {onVerNotaFiscal && (
                <button
                  type="button"
                  onClick={onVerNotaFiscal}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  <ArrowUpRight size={16} />
                  Ver nota fiscal
                </button>
              )}

              <button
                type="button"
                onClick={onBaixarNotaFiscal}
                disabled={!onBaixarNotaFiscal}
                title={
                  onBaixarNotaFiscal
                    ? "Baixar nota fiscal"
                    : "Download ainda não configurado"
                }
                className={[
                  "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5",
                  "text-sm font-semibold text-white transition-colors",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
                  "dark:focus-visible:ring-offset-[#151b28]",
                  onBaixarNotaFiscal
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : "cursor-not-allowed bg-emerald-600/50",
                ].join(" ")}
              >
                <Download size={16} />
                Baixar documento
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center px-5 py-10 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400">
              <FileText size={26} />
            </div>

            <h5 className="mt-4 text-sm font-semibold text-slate-900 dark:text-slate-100">
              Nota fiscal ainda não emitida
            </h5>

            <p className="mt-1 max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Quando o documento fiscal estiver disponível, as informações
              serão exibidas nesta seção.
            </p>
          </div>
        )}
      </section>

      {/* Anexos */}
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-950/[0.02] dark:border-slate-700/80 dark:bg-[#151b28]">
        <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-5 py-4 dark:border-slate-700/80">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400">
              <Paperclip size={18} />
            </div>

            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                Anexos da compra
              </h4>
              <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                Comprovantes e documentos adicionais
              </p>
            </div>
          </div>

          <span className="shrink-0 rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-700 dark:bg-sky-400/10 dark:text-sky-400">
            {anexos.length} {anexos.length === 1 ? "arquivo" : "arquivos"}
          </span>
        </div>

        {anexos.length > 0 ? (
          <div className="divide-y divide-slate-100 dark:divide-slate-700/60">
            {anexos.map((anexo, index) => (
              <div
                key={anexo.id ?? `${anexo.nome}-${index}`}
                className="flex items-center gap-3 px-5 py-4 transition-colors hover:bg-slate-50/70 dark:hover:bg-slate-800/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400">
                  <FileText size={19} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="break-words text-sm font-medium text-slate-800 dark:text-slate-100">
                    {anexo.nome || "Documento sem nome"}
                  </p>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {anexo.tipo || "Arquivo anexado"}
                    {anexo.tamanho ? ` · ${anexo.tamanho}` : ""}
                  </p>
                </div>

                {anexo.url && (
                  <a
                    href={anexo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-sky-700 transition-colors hover:bg-sky-50 dark:text-sky-400 dark:hover:bg-sky-400/10"
                  >
                    <Download size={16} />
                    <span className="hidden sm:inline">Abrir</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center px-5 py-10 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-400/10 dark:text-sky-400">
              <Paperclip size={23} />
            </div>

            <h5 className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
              Nenhum anexo adicionado
            </h5>

            <p className="mt-1 max-w-sm text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Os comprovantes e documentos adicionais vinculados à compra
              aparecerão aqui.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

function InfoItem({ icon: Icon, label, value }) {
  return (
    <div className="flex min-w-0 items-start gap-2.5 rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60">
      <Icon
        size={15}
        className="mt-0.5 shrink-0 text-slate-400 dark:text-slate-500"
      />

      <div className="min-w-0 flex-1">
        <p className="text-xs text-slate-500 dark:text-slate-400">{label}</p>
        <p className="mt-1 break-all text-sm font-medium text-slate-800 dark:text-slate-200">
          {value}
        </p>
      </div>
    </div>
  );
}

function formatarData(data) {
  if (!data) return "Não informada";

  const dataObj = new Date(`${data}`.includes("T") ? data : `${data}T12:00:00`);

  if (Number.isNaN(dataObj.getTime())) return data;

  return dataObj.toLocaleDateString("pt-BR");
}
