// Vela's architecture as described in the hospitality-os README: one Next.js staff app,
// one NestJS modular monolith, one transactional Postgres core with Redis and OpenSearch beside it.

const modules = ["Reservations", "Availability", "Rates", "Folio", "Ledger", "Point of sale"];

function Node({ title, detail, emphasis = false }: { title: string; detail?: string; emphasis?: boolean }) {
  return (
    <div
      className={`min-w-0 rounded-[var(--radius-control)] border bg-paper px-3 py-2.5 ${
        emphasis ? "border-accent-line" : "border-rule"
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

export function VelaFigure({ caption = true, compact = false }: { caption?: boolean; compact?: boolean }) {
  return (
    <figure className="m-0">
      <div className="grid gap-1">
        <div className="grid grid-cols-2 gap-2">
          <Node title="The Desk" detail={compact ? "Next.js" : "Next.js staff app"} />
          <Node title="Booking engine" detail={compact ? "Live availability" : "Reads live availability"} />
        </div>
        <Arrow />
        <div className="overflow-hidden rounded-[var(--radius-control)] border border-ink-2/50 bg-paper">
          <div className="border-b border-rule px-3 py-2.5">
            <p className="text-sm font-semibold text-ink">NestJS modular monolith</p>
            {!compact && <p className="text-xs text-muted">One deployable, strict module boundaries</p>}
          </div>
          <ul className="grid grid-cols-2 gap-px bg-rule sm:grid-cols-3" aria-label="Modules">
            {modules.map((m) => (
              <li key={m} className="bg-paper px-3 py-2 text-xs text-ink-2">
                {m}
              </li>
            ))}
          </ul>
        </div>
        <Arrow />
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <div className="col-span-2 grid sm:col-span-1">
            <Node title="PostgreSQL" detail="Drizzle, row-level security" emphasis />
          </div>
          <Node title="Redis" detail={compact ? "Queues" : "Cache, queues and streams"} />
          <Node title="OpenSearch" detail={compact ? "Search" : "Search index"} />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-muted">
          Every module writes to the same Postgres core, so a restaurant charge and the guest&apos;s bill change in one
          transaction.
        </figcaption>
      )}
    </figure>
  );
}
