import Link from "next/link";
import PageHeader from "../../../components/PageHeader";
import { getAllEvents, getEventSlugs } from "../../../lib/aktuality";

export const dynamicParams = false;

export function generateStaticParams() {
  return getEventSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const event = getAllEvents().find((e) => e.metadata.slug === params.slug);
  if (!event) return {};
  return {
    title: event.metadata.title,
    description: event.metadata.description,
  };
}

export default async function EventDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const event = getAllEvents().find((e) => e.metadata.slug === slug);
  if (!event) return null;

  const mod = await import(
    `../../../../content/aktuality/${event.filename}`
  );
  const Content = mod.default as React.ComponentType;

  return (
    <div className="min-h-screen bg-cream">
      <PageHeader title={event.metadata.title} />

      <div className="max-w-[68ch] mx-auto px-5 pb-20">
        <div className="font-sans text-text-muted space-y-0">
          <Content />
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10">
          <Link
            href="/aktuality"
            className="font-sans text-primary hover:text-primary-dark transition-colors"
          >
            ← Zpět na aktuality
          </Link>
        </div>
      </div>
    </div>
  );
}
