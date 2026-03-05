import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aktuality",
  description:
    "Novinky ze Kokořovského dvora a informace o plánovaných brigádách.",
};

// To add new items: add a new entry object to this array (newest first)
const items = [
  {
    id: 1,
    date: "Únor 2026",
    title: "Jarní brigády 2026",
    content: (
      <>
        <p>
          Veřejné brigády na Kokořovském dvoře jsou naplánovány na{" "}
          <strong>soboty 11. dubna a 23. května 2026</strong>, vždy od 14:00
          hodin.
        </p>
        <p>
          Na programu bude vyklízení přízemí západního křídla a třídění,
          zpracování a úklid odpadního dřeva ze snesených konstrukcí.
        </p>
        <p>
          Budeme rádi za každou pomoc — přijít může kdokoli, kdo má zájem.
          Drobné občerstvení zajištěno.
        </p>
      </>
    ),
  },
];

export default function AktualityPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="pt-32 pb-16 px-5 text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">
          Kokořovský dvůr
        </p>
        <h1
          className="font-serif font-black text-primary"
          style={{ fontSize: "clamp(2.2rem, 6vw, 3.6rem)", lineHeight: 1.1 }}
        >
          Aktuality
        </h1>
        <div className="w-16 h-px bg-accent mx-auto mt-6" />
      </div>

      {/* News feed */}
      <div className="max-w-[68ch] mx-auto px-5 pb-20 space-y-0">
        {items.map((item, i) => (
          <div key={item.id}>
            <article className="py-10">
              <p className="font-sans font-bold text-accent text-sm uppercase tracking-widest mb-3">
                {item.date}
              </p>
              {item.title && (
                <h2 className="font-serif font-bold text-2xl text-primary mb-4">
                  {item.title}
                </h2>
              )}
              <div
                className="font-sans text-text-muted space-y-4"
                style={{ lineHeight: 1.8, fontSize: "0.975rem" }}
              >
                {item.content}
              </div>
            </article>
            {i < items.length - 1 && <hr className="border-primary/10" />}
          </div>
        ))}
      </div>
    </div>
  );
}
