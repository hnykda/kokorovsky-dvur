import fs from "fs";
import path from "path";

export interface EventMetadata {
  title: string;
  date: string;
  sortDate: string;
  description: string;
  slug?: string;
  eventDate?: string;
}

interface EventEntry {
  filename: string;
  metadata: EventMetadata;
}

const CONTENT_DIR = path.join(process.cwd(), "content/aktuality");

function extractMetadata(source: string): EventMetadata {
  const match = source.match(
    /export\s+const\s+metadata\s*=\s*(\{[\s\S]*?\n\});/,
  );
  if (!match) throw new Error("No metadata export found");
  // Use Function constructor to evaluate the object literal
  const fn = new Function(`return ${match[1]}`);
  return fn() as EventMetadata;
}

export function getAllEvents(): EventEntry[] {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .sort();

  const events = files.map((filename) => {
    const source = fs.readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
    return { filename, metadata: extractMetadata(source) };
  });

  // Sort by sortDate descending (newest first)
  events.sort(
    (a, b) =>
      new Date(b.metadata.sortDate).getTime() -
      new Date(a.metadata.sortDate).getTime(),
  );

  return events;
}

export function getEventSlugs(): string[] {
  return getAllEvents()
    .filter((e) => e.metadata.slug)
    .map((e) => e.metadata.slug!);
}

export function getEventsWithDates(): EventMetadata[] {
  return getAllEvents()
    .filter((e) => e.metadata.eventDate)
    .map((e) => e.metadata);
}
