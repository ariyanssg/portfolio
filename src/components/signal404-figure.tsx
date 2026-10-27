import Image from "next/image";
import shot from "../../public/images/signal404-home-desktop.png";

const alt =
  "Signal404's overview screen with three checks to start: find broken pages, check the business profile and check opening hours.";

// framed: a tile of its own (case study). Unframed: the screen rises out of the bottom of the tile it sits in (home).
export function Signal404Figure({ caption = true, framed = true }: { caption?: boolean; framed?: boolean }) {
  const image = (
    <Image
      src={shot}
      alt={alt}
      sizes="(min-width: 1120px) 1000px, 92vw"
      placeholder="blur"
      className="h-auto w-full"
    />
  );

  return (
    <figure>
      {framed ? (
        <div className="tile px-5 pt-5 sm:px-10 sm:pt-10">
          <div className="overflow-hidden rounded-t-[var(--radius-card)] shadow-[var(--shadow-card)]">{image}</div>
        </div>
      ) : (
        <div className="lift overflow-hidden rounded-t-[var(--radius-card)] shadow-[var(--shadow-card)]">{image}</div>
      )}
      {caption && (
        <figcaption className="mt-3 text-sm text-muted">
          The hosted edition at res404.netlify.app, before the first audit.
        </figcaption>
      )}
    </figure>
  );
}
