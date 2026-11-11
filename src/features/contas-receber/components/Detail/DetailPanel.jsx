import Card from "../../../../shared/components/layout/Card";
import { useMediaQuery } from "../../../../shared/hooks/useMediaQuery";
import { useEscapeKey } from "../../../../shared/hooks/useEscapeKey";
import { useContasReceberContext } from "../../hooks/useContasReceberContext";
import { DetailHeader } from "./DetailHeader";
import { DetailEmpty } from "./DetailEmpty";
import { DetailContent, DetailSkeleton } from "./DetailContent";

/** Painel lateral: coluna fixa em telas largas, gaveta (drawer) nas menores. */
export function DetailPanel() {
  const { detail, loading } = useContasReceberContext();
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  useEscapeKey(detail.close, detail.isOpen && !isDesktop);
  if (!detail.isOpen) return null;

  const body = (
    <Card
      as="aside"
      aria-label="Detalhes da conta"
      className={
        isDesktop
          ? "animate-slide-in-right"
          : "h-full overflow-y-auto rounded-none border-0 animate-slide-in-right"
      }
    >
      <DetailHeader onClose={detail.close} />
      {loading ? (
        <DetailSkeleton />
      ) : detail.conta ? (
        <DetailContent conta={detail.conta} />
      ) : (
        <DetailEmpty />
      )}
    </Card>
  );

  if (isDesktop)
    return (
      <div className="self-start xl:sticky xl:top-4 xl:max-h-[calc(100vh-2rem)] xl:overflow-y-auto xl:rounded-xl">
        {body}
      </div>
    );
  return (
    <div className="fixed inset-0 z-[80]">
      <div
        className="absolute inset-0 animate-fade-in bg-slate-950/50"
        onClick={detail.close}
      />
      <div className="absolute inset-y-0 right-0 w-[min(380px,100vw)] shadow-2xl">
        {body}
      </div>
    </div>
  );
}
