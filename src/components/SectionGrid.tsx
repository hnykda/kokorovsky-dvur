import Link from "next/link";

const sections = [
  {
    href: "/historie",
    title: "Historie",
    desc: "Příběh dvora od roku 1680 do současnosti",
  },
  {
    href: "/obnova",
    title: "Obnova",
    desc: "Práce na záchraně objektu od roku 2024",
  },
  {
    href: "/zluticky-zamek",
    title: "Žlutický zámek",
    desc: "O spolku, který Kokořovský dvůr zachraňuje",
  },
  {
    href: "/chci-prispet",
    title: "Chci přispět",
    desc: "Finanční dar, brigáda nebo členství ve spolku",
  },
  {
    href: "/aktuality",
    title: "Aktuality",
    desc: "Novinky ze dvora a plánované brigády",
  },
  {
    href: "/partneri",
    title: "Partneři",
    desc: "Instituce a firmy, které nás podporují",
  },
];

export default function SectionGrid() {
  return (
    <section className="bg-cream py-20 px-5">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map(({ href, title, desc }) => (
            <Link
              key={href}
              href={href}
              className="group relative p-8 border border-primary/12 hover:bg-white transition-all duration-300 overflow-hidden"
            >
              {/* Gold left-border accent on hover */}
              <span
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
                aria-hidden="true"
              />

              <h2 className="font-serif font-bold text-xl text-primary uppercase tracking-wide mb-2 group-hover:text-primary-dark transition-colors duration-200">
                {title}
              </h2>
              <p className="font-sans text-sm text-text-muted leading-relaxed mb-5">
                {desc}
              </p>
              <span className="font-sans text-xs text-accent tracking-widest flex items-center gap-1.5 transition-gap">
                Více
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
