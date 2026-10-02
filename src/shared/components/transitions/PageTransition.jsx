import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }) {
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    // Remove a animação atual
    element.classList.remove("page-route-transition");

    // Força o navegador a recalcular o layout
    void element.offsetWidth;

    // Adiciona novamente a animação
    element.classList.add("page-route-transition");
  }, [location.key]);

  return (
    <div ref={containerRef} className="page-route-transition">
      {children}
    </div>
  );
}