import Image from "next/image";
import shot from "../../public/images/signal404-home-desktop.png";

export function Signal404Figure({ caption = true }: { caption?: boolean }) {
  return (
    <figure className="m-0">
      <div className="overflow-hidden rounded-card border border-rule bg-paper-2">
        <Image
          src={shot}
          alt="Signal404's overview screen with three checks to start: find broken pages, check the business profile and check opening hours."
          sizes="(min-width: 1024px) 680px, 100vw"
          placeholder="blur"
          className="h-auto w-full"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-muted">
          The hosted edition at res404.netlify.app, before the first audit.
        </figcaption>
      )}
    </figure>
  );
}
