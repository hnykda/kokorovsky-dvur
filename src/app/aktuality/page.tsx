import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "../../components/PageHeader";
import { getAllEvents } from "../../lib/aktuality";
import type { EventMetadata } from "../../lib/aktuality";

export const metadata: Metadata = {
  title: "Aktuality",
  description:
    "Novinky ze Kokořovského dvora a informace o plánovaných brigádách.",
};

function formatEventDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function DateLine({ meta }: { meta: EventMetadata }) {
  return (
    <p className="font-sans text-sm text-text-muted/70 mb-3">
      Vytvořeno: {meta.date}
      {meta.eventDate && (
        <>
          {" · "}
          <span className="font-bold text-accent">
            Koná se: {formatEventDate(meta.eventDate)}
          </span>
        </>
      )}
    </p>
  );
}

export default async function AktualityPage() {
  const events = getAllEvents();

  const contents = await Promise.all(
    events.map(async (event) => {
      const mod = await import(
        `../../../content/aktuality/${event.filename}`
      );
      return { event, Content: mod.default as React.ComponentType };
    }),
  );

  return (
    <div className="min-h-screen bg-cream">
      <PageHeader title="Aktuality" />

      <div className="max-w-[68ch] mx-auto px-5 pb-20">
        {contents.map(({ event, Content }, i) => (
          <div key={event.filename}>
            <article className="py-10">
              <DateLine meta={event.metadata} />
              <h2 className="font-serif font-bold text-2xl text-primary mb-4">
                {event.metadata.slug ? (
                  <Link
                    href={`/aktuality/${event.metadata.slug}`}
                    className="hover:text-primary-dark transition-colors"
                  >
                    {event.metadata.title}
                  </Link>
                ) : (
                  event.metadata.title
                )}
              </h2>
              {event.metadata.slug ? (
                <div
                  className="font-sans text-text-muted"
                  style={{ lineHeight: 1.8, fontSize: "0.975rem" }}
                >
                  <p className="mb-4">{event.metadata.description}</p>
                  <Link
                    href={`/aktuality/${event.metadata.slug}`}
                    className="text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    Více →
                  </Link>
                </div>
              ) : (
                <div className="font-sans text-text-muted space-y-0">
                  <Content />
                </div>
              )}
            </article>
            {i < contents.length - 1 && <hr className="border-primary/10" />}
          </div>
        ))}
      </div>
    </div>
  );
}
