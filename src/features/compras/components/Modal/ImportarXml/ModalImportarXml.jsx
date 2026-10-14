
import { useRef, useState } from "react";
import {
  FileUp,
  FileText,
  Upload,
  X,
  CheckCircle2,
  AlertCircle,
  Package,
  Trash2,
} from "lucide-react";

const moeda = (valor) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Number(valor) || 0);

const campo =
  "w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/15 dark:border-white/10 dark:bg-[#101824] dark:text-white";

function textoNo(elemento, seletor) {
  return elemento?.getElementsByTagNameNS("*", seletor)[0]?.textContent?.trim() ?? "";
}

function lerNfe(xmlText) {
  const documento = new DOMParser().parseFromString(
    xmlText,
    "application/xml"
  );

  if (documento.getElementsByTagName("parsererror").length) {
    throw new Error("O arquivo XML está malformado ou não pôde ser lido.");
  }

  const infNFe = documento.getElementsByTagNameNS("*", "infNFe")[0];

  if (!infNFe) {
    throw new Error("Este XML não contém uma NF-e reconhecida.");
  }

  const emit = infNFe.getElementsByTagNameNS("*", "emit")[0];
  const ide = infNFe.getElementsByTagNameNS("*", "ide")[0];
  const total = infNFe.getElementsByTagNameNS("*", "ICMSTot")[0];

  const produtos = Array.from(
    infNFe.getElementsByTagNameNS("*", "det")
  ).map((det, indice) => {
    const prod = det.getElementsByTagNameNS("*", "prod")[0];

    if (!prod) return null;

    return {
      id: `${indice}-${textoNo(prod, "cProd")}`,
      codigo: textoNo(prod, "cProd"),
      codigoBarras: textoNo(prod, "cEAN"),
      nome: textoNo(prod, "xProd") || "Produto sem descrição",
      ncm: textoNo(prod, "NCM"),
      unidade: textoNo(prod, "uCom"),
      quantidade: Number(textoNo(prod, "qCom")) || 0,
      valorUnitario: Number(textoNo(prod, "vUnCom")) || 0,
      total: Number(textoNo(prod, "vProd")) || 0,
    };
  }).filter(Boolean);

  if (!produtos.length) {
    throw new Error("Não foram encontrados produtos nesta NF-e.");
  }

  return {
    fornecedor: textoNo(emit, "xNome"),
    documentoFornecedor: textoNo(emit, "CNPJ") || textoNo(emit, "CPF"),
    numero: textoNo(ide, "nNF"),
    serie: textoNo(ide, "serie"),
    dataEmissao: textoNo(ide, "dhEmi") || textoNo(ide, "dEmi"),
    chave: infNFe.getAttribute("Id")?.replace(/^NFe/, "") || "",
    totalProdutos: Number(textoNo(total, "vProd")) || 0,
    totalNota: Number(textoNo(total, "vNF")) || 0,
    produtos,
  };
}

export function ModalImportarXml({ isOpen, onClose, onImportar }) {
  const inputRef = useRef(null);
  const [nota, setNota] = useState(null);
  const [arquivo, setArquivo] = useState("");
  const [erro, setErro] = useState("");
  const [lendo, setLendo] = useState(false);
  const [confirmacao, setConfirmacao] = useState(false);

  if (!isOpen) return null;

  async function selecionarArquivo(event) {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) return;

    setErro("");
    setNota(null);
    setConfirmacao(false);

    if (!file.name.toLowerCase().endsWith(".xml")) {
      setErro("Selecione um arquivo com extensão .xml.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setErro("O arquivo ultrapassa o limite de 10 MB.");
      return;
    }

    setLendo(true);

    try {
      const conteudo = await file.text();
      const dados = lerNfe(conteudo);

      setNota(dados);
      setArquivo(file.name);
    } catch (error) {
      setErro(error.message || "Não foi possível interpretar o XML.");
    } finally {
      setLendo(false);
    }
  }

  function fechar() {
    if (lendo) return;
    setNota(null);
    setArquivo("");
    setErro("");
    setConfirmacao(false);
    onClose();
  }

  function confirmarImportacao() {
    if (!nota) return;

    if (!confirmacao) {
      setErro("Marque a confirmação de revisão antes de continuar.");
      return;
    }

    onImportar?.({
      ...nota,
      arquivo,
      importadoEm: new Date().toISOString(),
      status: "Aguardando conferência",
    });

    fechar();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-5">
      <button
        type="button"
        aria-label="Fechar importação"
        onClick={fechar}
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-[4px]"
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="importar-xml-title"
        className="relative z-10 flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-2xl dark:border-slate-700 dark:bg-[#0f1724]"
      >
        <header className="flex items-center justify-between gap-4 border-b border-slate-200 bg-white px-5 py-4 dark:border-white/10 dark:bg-[#151b28] sm:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400">
              <FileUp size={22} />
            </div>
            <div>
              <h2 id="importar-xml-title" className="font-bold text-slate-900 dark:text-white">
                Importar XML de NF-e
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Leia e confira os dados da nota fiscal.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={fechar}
            aria-label="Fechar"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-white/10"
          >
            <X size={19} />
          </button>
        </header>

        <div className="min-h-0 flex-1 space-y-5 overflow-y-auto p-4 sm:p-6">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={lendo}
            className="flex w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-white px-5 py-8 text-center transition hover:border-green-500 hover:bg-green-50/50 disabled:opacity-60 dark:border-white/15 dark:bg-[#151b28] dark:hover:border-green-500"
          >
            {lendo ? (
              <Upload size={28} className="animate-pulse text-green-600" />
            ) : (
              <FileText size={28} className="text-green-600" />
            )}
            <span className="mt-3 font-semibold text-slate-800 dark:text-white">
              {lendo ? "Lendo arquivo..." : "Selecionar arquivo XML"}
            </span>
            <span className="mt-1 text-sm text-slate-500">
              Clique para escolher uma NF-e no seu computador · Máximo 10 MB
            </span>
          </button>

          <input
            ref={inputRef}
            type="file"
            accept=".xml,application/xml,text/xml"
            onChange={selecionarArquivo}
            className="hidden"
          />

          {erro && (
            <div role="alert" className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-400/20 dark:bg-red-400/10 dark:text-red-300">
              <AlertCircle size={18} className="mt-0.5 shrink-0" />
              {erro}
            </div>
          )}

          {nota && (
            <>
              <div className="flex flex-wrap items-start justify-between gap-3 rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-500/20 dark:bg-green-500/5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 text-green-600" size={20} />
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">
                      XML interpretado
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{arquivo}</p>
                    <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                      {nota.fornecedor || "Emitente não identificado"}
                    </p>
                    <p className="text-xs text-slate-500">
                      NF-e nº {nota.numero || "—"} · Série {nota.serie || "—"}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setNota(null);
                    setArquivo("");
                    setConfirmacao(false);
                  }}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-red-600"
                >
                  <Trash2 size={14} />
                  Remover arquivo
                </button>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#151b28]">
                  <p className="text-xs text-slate-500">Itens na nota</p>
                  <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                    {nota.produtos.length}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-[#151b28]">
                  <p className="text-xs text-slate-500">Total dos produtos</p>
                  <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
                    {moeda(nota.totalProdutos)}
                  </p>
                </div>
                <div className="rounded-xl border border-green-200 bg-green-50 p-4 dark:border-green-500/20 dark:bg-green-500/5">
                  <p className="text-xs text-green-700 dark:text-green-300">Total da nota</p>
                  <p className="mt-1 text-xl font-bold text-green-800 dark:text-green-300">
                    {moeda(nota.totalNota)}
                  </p>
                </div>
              </div>

              <section className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-white/10 dark:bg-[#151b28]">
                <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3 dark:border-white/10">
                  <Package size={18} className="text-green-600" />
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    Produtos identificados
                  </h3>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[650px] text-left text-sm">
                    <thead className="bg-slate-50 text-xs uppercase text-slate-500 dark:bg-white/5">
                      <tr>
                        <th className="px-4 py-3">Produto</th>
                        <th className="px-4 py-3">Código</th>
                        <th className="px-4 py-3">Qtd.</th>
                        <th className="px-4 py-3">Unitário</th>
                        <th className="px-4 py-3 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {nota.produtos.map((produto) => (
                        <tr key={produto.id} className="border-t border-slate-100 dark:border-white/5">
                          <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">
                            {produto.nome}
                          </td>
                          <td className="px-4 py-3 text-slate-500">{produto.codigo || "—"}</td>
                          <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                            {produto.quantidade} {produto.unidade}
                          </td>
                          <td className="px-4 py-3 text-slate-700 dark:text-slate-300">
                            {moeda(produto.valorUnitario)}
                          </td>
                          <td className="px-4 py-3 text-right font-semibold text-slate-900 dark:text-white">
                            {moeda(produto.total)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <label className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 text-sm text-slate-700 dark:border-white/10 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={confirmacao}
                  onChange={(event) => setConfirmacao(event.target.checked)}
                  className="mt-1 accent-green-600"
                />
                <span>
                  Revisei os dados e quero encaminhar esta nota para a próxima
                  etapa de conferência. Entendo que isso não registra a compra
                  nem movimenta o estoque.
                </span>
              </label>
            </>
          )}
        </div>

        <footer className="flex flex-col-reverse gap-2 border-t border-slate-200 bg-white px-4 py-4 dark:border-white/10 dark:bg-[#151b28] sm:flex-row sm:justify-end sm:px-6">
          <button
            type="button"
            onClick={fechar}
            className="min-h-11 rounded-xl border border-slate-200 px-5 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={confirmarImportacao}
            disabled={!nota || lendo}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-green-600 px-5 text-sm font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <CheckCircle2 size={17} />
            Encaminhar para conferência
          </button>
        </footer>
      </section>
    </div>
  );
}
