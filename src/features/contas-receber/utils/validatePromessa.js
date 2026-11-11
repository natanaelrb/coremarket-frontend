export function validatePromessa(f, hoje) {
  const e = {};
  if (!f.data) e.data = 'Informe a data prometida';
  else if (f.data < hoje) e.data = 'Não pode ser no passado';
  return e;
}
