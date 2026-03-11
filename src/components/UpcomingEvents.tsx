"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { EventMetadata } from "../lib/aktuality";

function formatEventDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function UpcomingEvents({
  events,
}: {
  events: EventMetadata[];
}) {
  const [upcoming, setUpcoming] = useState<EventMetadata[]>([]);
  const [past, setPast] = useState<EventMetadata[]>([]);

  useEffect(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    const up: EventMetadata[] = [];
    const pa: EventMetadata[] = [];
    for (const e of events) {
      const eventDay = new Date(e.eventDate! + "T00:00:00");
      if (eventDay >= now) {
        up.push(e);
      } else {
        pa.push(e);
      }
    }
    // Upcoming: soonest first
    up.sort(
      (a, b) =>
        new Date(a.eventDate!).getTime() - new Date(b.eventDate!).getTime(),
    );
    // Past: most recent first
    pa.sort(
      (a, b) =>
        new Date(b.eventDate!).getTime() - new Date(a.eventDate!).getTime(),
    );
    setUpcoming(up);
    setPast(pa);
  }, [events]);

  if (upcoming.length === 0 && past.length === 0) return null;

  const href = (e: EventMetadata) =>
    e.slug ? `/aktuality/${e.slug}` : "/aktuality";

  return (
    <div className="mt-10 animate-fade-in-up animation-delay-800">
      {upcoming.length > 0 && (
        <div>
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-accent/90 mb-3">
            Nadcházející akce
          </p>
          <div className="space-y-2">
            {upcoming.map((e) => (
              <Link
                key={e.eventDate}
                href={href(e)}
                className="block font-sans text-sm text-white/80 hover:text-white transition-colors"
              >
                <span className="text-accent">
                  {formatEventDate(e.eventDate!)}
                </span>
                <span className="inline-block w-1.5 h-1.5 bg-accent/60 rotate-45 mx-2.5 align-middle" />
                {e.title}
              </Link>
            ))}
          </div>
        </div>
      )}
      {past.length > 0 && (
        <div className={upcoming.length > 0 ? "mt-4" : ""}>
          <div className="space-y-2 opacity-40">
            {past.map((e) => (
              <Link
                key={e.eventDate}
                href={href(e)}
                className="block font-sans text-sm text-white/80 hover:text-white transition-colors"
              >
                <span className="text-accent">
                  {formatEventDate(e.eventDate!)}
                </span>
                <span className="inline-block w-1.5 h-1.5 bg-accent/60 rotate-45 mx-2.5 align-middle" />
                {e.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
