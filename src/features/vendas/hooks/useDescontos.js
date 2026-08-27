import { useRef, useState } from 'react';
import { validarDesconto } from '../utils/validators.js';

/**
 * Gerencia o desconto aplicado à venda como um todo (fora do item) e o acréscimo.
 */
export function useDescontos() {
  const [descontoVenda, setDescontoVendaRaw] = useState(0);
  const [acrescimo, setAcrescimo] = useState(0);
  const [erro, setErro] = useState(null);
  const inputRef = useRef(null);

  function setDescontoVenda(valor, subtotalReferencia) {
    if (subtotalReferencia != null) {
      const resultado = validarDesconto(valor, subtotalReferencia);
      if (!resultado.valido) {
        setErro(resultado.motivo);
        return;
      }
    }
    setErro(null);
    setDescontoVendaRaw(Math.max(0, valor));
  }

  function focar() {
    inputRef.current?.focus();
  }

  return {
    descontoVenda,
    setDescontoVenda,
    acrescimo,
    setAcrescimo,
    erro,
    inputRef,
    focar,
  };
}

