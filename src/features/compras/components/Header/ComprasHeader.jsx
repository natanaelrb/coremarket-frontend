// Cabeçalho da página: título + subtítulo. Composição pura, sem estado.
export function ComprasHeader() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Compras</h1>
      <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
        Gerencie pedidos, recebimentos, fornecedores e custos de aquisição
      </p>
    </div>
  );
}
