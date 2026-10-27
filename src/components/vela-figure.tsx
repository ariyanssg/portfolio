// Vela's architecture as described in the hospitality-os README: one Next.js staff app,
// one NestJS modular monolith, one transactional Postgres core with Redis and OpenSearch beside it.

const modules = ["Reservations", "Availability", "Rates", "Folio", "Ledger", "Point of sale"];

function Node({ title, detail, emphasis = false }: { title: string; detail?: string; emphasis?: boolean }) {
  return (
    <div
      className={`min-w-0 rounded-[var(--radius-control)] bg-paper px-4 py-3 shadow-[var(--shadow-node)] ${
        emphasis ? "ring-1 ring-accent-line" : ""
      }`}
    >
      <p className="text-sm font-semibold text-ink">{title}</p>
      {detail && <p className="text-xs text-muted">{detail}</p>}
    </div>
  );
}

// A drawn connector: a hairline with an arrowhead, pointing from the tier above to the one below.
function Arrow() {
  return (
    <svg aria-hidden viewBox="0 0 12 28" className="mx-auto h-7 w-3 text-muted" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M6 0v26M1.5 21.5 6 26l4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function VelaFigure({
  caption = true,
  compact = false,
  framed = true,
}: {
  caption?: boolean;
  compact?: boolean;
  framed?: boolean;
}) {
  const diagram = (
    <div className="grid gap-1.5" role="img" aria-label="Vela architecture: a Next.js staff app and a booking engine call one NestJS modular monolith with reservations, availability, rates, folio, ledger and point-of-sale modules, which writes to PostgreSQL with row-level security, beside Redis and OpenSearch.">
      <div className="grid grid-cols-2 gap-2.5">
        <Node title="The Desk" detail={compact ? "Next.js" : "Next.js staff app"} />
        <Node title="Booking engine" detail={compact ? "Live availability" : "Reads live availability"} />
      </div>
      <Arrow />
      <div className="overflow-hidden rounded-[var(--radius-control)] bg-paper shadow-[var(--shadow-node)]">
        <div className="px-4 py-3">
          <p className="text-sm font-semibold text-ink">NestJS modular monolith</p>
          {!compact && <p className="text-xs text-muted">One deployable, strict module boundaries</p>}
        </div>
        <ul className="grid grid-cols-2 gap-px border-t border-rule bg-rule sm:grid-cols-3">
          {modules.map((m) => (
            <li key={m} className="bg-paper px-4 py-2.5 text-xs text-ink-2">
              {m}
            </li>
          ))}
        </ul>
      </div>
      <Arrow />
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
        <div className="col-span-2 grid sm:col-span-1">
          <Node title="PostgreSQL" detail="Drizzle, row-level security" emphasis />
        </div>
        <Node title="Redis" detail={compact ? "Queues" : "Cache, queues and streams"} />
        <Node title="OpenSearch" detail={compact ? "Search" : "Search index"} />
      </div>
    </div>
  );

  return (
    <figure>
      {framed ? <div className="tile p-5 sm:p-8">{diagram}</div> : diagram}
      {caption && (
        <figcaption className="mt-3 text-sm text-muted">
          Every module writes to the same Postgres core, so a restaurant charge and the guest&apos;s bill change in one
          transaction.
        </figcaption>
      )}
    </figure>
  );
}
