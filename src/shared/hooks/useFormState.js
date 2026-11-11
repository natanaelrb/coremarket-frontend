import { useCallback, useState } from 'react';

/** Estado de formulário simples: valores, erros e helpers. */
export function useFormState(initial) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const setField = useCallback((key, value) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  }, []);
  const reset = useCallback((next) => { setValues(next ?? initial); setErrors({}); }, [initial]);
  return { values, errors, setField, setValues, setErrors, reset };
}
