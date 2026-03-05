import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";

export const metadata: Metadata = {
  title: "Žlutický zámek",
  description:
    "Spolek Žlutický zámek — kdo jsme, co děláme a jak nás kontaktovat.",
};

const members = [
  { name: "Ing. Ondřej Fábera", town: "Žlutice", role: "předseda spolku" },
  {
    name: "MUDr. Hana Hnyková",
    town: "Žlutice",
    role: "místopředsedkyně spolku",
  },
  { name: "Ing. Michal Hnyk", town: "Žlutice", role: "" },
  { name: "Mgr. Jakub Mráz", town: "Žlutice", role: "" },
  { name: "Tomáš Ries", town: "Žlutice", role: "" },
  { name: "Filip Strejček", town: "Žlutice", role: "" },
  { name: "MUDr. Daniela Fránová", town: "Plzeň", role: "" },
];

export default function ZlutickyZamekPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageHeader title="Žlutický zámek" eyebrow="O nás" />

      <div className="max-w-5xl mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16">
          {/* About text */}
          <div>
            <div
              className="font-sans space-y-5 text-text-muted"
              style={{ lineHeight: 1.85 }}
            >
              <p>
                Spolek Žlutický zámek vznikl dne <strong>19. října 2024</strong>
                , kdy se jeho prostřednictvím 4 zakládající členové — Ondřej
                Fábera, Hana Hnyková, Michal Hnyk a Jakub Mráz — začali pokoušet
                o záchranu zchátralé kulturní památky, Kokořovského dvora ve
                Žluticích.
              </p>
              <p>
                Hlavním cílem spolku je spolupráce při zabezpečení, konzervaci,
                postupné rekonstrukci a revitalizaci zámeckého areálu ve
                Žluticích, Kokořovského dvora a jeho okolí, a dalších kulturních
                a přírodních památek a veřejných míst na území historického
                města Žlutice.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="font-serif font-bold text-xl text-primary mb-5">
                Aktuální členové spolku
              </h2>
              <ul className="divide-y divide-primary/10">
                {members.map(({ name, town, role }) => (
                  <li
                    key={name}
                    className="py-3 flex items-baseline justify-between gap-4"
                  >
                    <span className="font-sans text-text-dark text-sm font-medium">
                      {name}
                    </span>
                    <span className="font-sans text-text-muted text-xs shrink-0">
                      {role ? `${town} — ${role}` : town}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Info card */}
          <div className="lg:pt-2">
            <div className="bg-white rounded-2xl border border-primary/10 p-7 shadow-sm">
              <h2 className="font-serif font-bold text-lg text-primary mb-4">
                Kontaktní údaje
              </h2>
              <div className="divide-y divide-primary/8 text-sm font-sans">
                <div className="pb-4">
                  <p className="text-xs text-accent uppercase tracking-widest mb-1">
                    Název
                  </p>
                  <p className="text-text-dark font-medium">
                    Žlutický zámek, spolek
                  </p>
                </div>
                <div className="py-4">
                  <p className="text-xs text-accent uppercase tracking-widest mb-1">
                    IČO
                  </p>
                  <p className="text-text-dark">22098372</p>
                </div>
                <div className="py-4">
                  <p className="text-xs text-accent uppercase tracking-widest mb-1">
                    Adresa
                  </p>
                  <p className="text-text-dark">
                    Karlovarská 160
                    <br />
                    364 52 Žlutice
                  </p>
                </div>
                <div className="py-4">
                  <p className="text-xs text-accent uppercase tracking-widest mb-1">
                    Datová schránka
                  </p>
                  <p className="text-text-dark font-mono">ki2nc49</p>
                </div>
                <div className="py-4">
                  <p className="text-xs text-accent uppercase tracking-widest mb-1">
                    E-mail
                  </p>
                  {/* TODO: replace with real domain email address once domain is set up */}
                  <span className="inline-flex items-center gap-2">
                    <span className="text-text-muted italic text-xs">
                      bude doplněn
                    </span>
                    <span className="bg-accent/15 text-accent text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded font-semibold">
                      TODO
                    </span>
                  </span>
                </div>
                <div className="pt-4">
                  <a
                    href="https://www.facebook.com/kokodvur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-primary-dark transition-colors duration-200"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
