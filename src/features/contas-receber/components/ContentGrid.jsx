import { useMediaQuery } from "../../../shared/hooks/useMediaQuery";
import { cn } from "../../../shared/utils/classNames";
import { useContasReceberContext } from "../hooks/useContasReceberContext";

/** Coluna principal + coluna do painel de detalhes (some quando o painel é fechado). */
export function ContentGrid({ main, aside }) {
  const { detail } = useContasReceberContext();
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const withAside = detail.isOpen && isDesktop;
  return (
    <div
      className={cn(
        "grid items-start gap-3",
        withAside && "grid-cols-[minmax(0,1fr)_340px]",
      )}
    >
      <div className="min-w-0 space-y-3">{main}</div>
      {aside}
    </div>
  );
}
