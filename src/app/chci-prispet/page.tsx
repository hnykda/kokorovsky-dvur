import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chci přispět",
  description:
    "Podpořte obnovu Kokořovského dvora — finančním darem, účastí na brigádě nebo členstvím ve spolku.",
};

export default function ChciPrispetPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="pt-32 pb-16 px-5 text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">
          Podpořte záchranu
        </p>
        <h1
          className="font-serif font-black text-primary"
          style={{ fontSize: "clamp(2.2rem, 6vw, 3.6rem)", lineHeight: 1.1 }}
        >
          Chci přispět
        </h1>
        <div className="w-16 h-px bg-accent mx-auto mt-6" />
        <p
          className="font-sans text-text-muted max-w-xl mx-auto mt-6"
          style={{ lineHeight: 1.7 }}
        >
          Pokud je vám naše snažení sympatické a rádi byste na obnovu
          Kokořovského dvora přispěli nebo se do ní přímo zapojili, nabízíme
          několik možností.
        </p>
      </div>

      {/* Three option cards */}
      <div className="max-w-5xl mx-auto px-5 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Financial donation */}
          <div className="bg-white rounded-2xl border border-primary/10 p-8 shadow-sm flex flex-col">
            <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c9a84c"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h2 className="font-serif font-bold text-xl text-primary mb-3">
              Finanční dar
            </h2>
            <p
              className="font-sans text-text-muted text-sm flex-1"
              style={{ lineHeight: 1.75 }}
            >
              Finanční dary přijímáme formou převodu na náš spolkový účet.
              Poskytnuté dary budou použity výhradně na obnovu Kokořovského
              dvora. Na požádání vystavíme potvrzení o přijatých darech pro
              finanční úřad.
            </p>

            {/* Bank account box */}
            <div className="mt-6 rounded-xl bg-primary p-5 text-center">
              <p className="font-sans text-white/70 text-xs uppercase tracking-widest mb-2">
                Číslo účtu
              </p>
              <p className="font-mono text-white font-bold text-xl tracking-wider">
                349942519/0300
              </p>
              <p className="font-sans text-white/60 text-xs mt-2">
                Spolek Žlutický zámek, z.s.
              </p>
              {/* TODO: add QR code for bank payment */}
              <div className="mt-4 bg-white/10 rounded-lg h-28 flex items-center justify-center border border-white/20">
                <div className="text-center">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1.5"
                    className="mx-auto mb-2"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                  <p className="font-sans text-white/40 text-xs">
                    QR kód bude doplněn
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Volunteering */}
          <div className="bg-white rounded-2xl border border-primary/10 p-8 shadow-sm flex flex-col">
            <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c9a84c"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h2 className="font-serif font-bold text-xl text-primary mb-3">
              Brigády
            </h2>
            <p
              className="font-sans text-text-muted text-sm flex-1"
              style={{ lineHeight: 1.75 }}
            >
              Několikrát za rok organizujeme na dvoře veřejné brigády, při
              kterých se většinou vykonává uklízecí, vyklízecí nebo jiná
              jednoduchá fyzická činnost. Uvítáme každou ochotnou ruku. Drobné
              občerstvení zajištěno.
            </p>
            <p
              className="font-sans text-text-muted text-sm mt-3"
              style={{ lineHeight: 1.75 }}
            >
              Informace o chystaných brigádách zveřejňujeme na{" "}
              <a
                href="https://www.facebook.com/kokodvur"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:text-accent transition-colors"
              >
                Facebooku
              </a>{" "}
              a v sekci{" "}
              <Link
                href="/aktuality"
                className="text-primary underline underline-offset-2 hover:text-accent transition-colors"
              >
                Aktuality
              </Link>
              .
            </p>
          </div>

          {/* Card 3: Membership */}
          <div className="bg-white rounded-2xl border border-primary/10 p-8 shadow-sm flex flex-col">
            <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center mb-5">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#c9a84c"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="font-serif font-bold text-xl text-primary mb-3">
              Členství
            </h2>
            <p
              className="font-sans text-text-muted text-sm flex-1"
              style={{ lineHeight: 1.75 }}
            >
              Členem spolku se může stát fyzická osoba starší 18 let nebo
              právnická osoba po schválení členskou schůzí. Je-li Kokořovský
              dvůr vaší srdeční záležitostí, máte čas a energii věnovat se
              spolkové činnosti a jste schopni se účastnit členských schůzí
              (zpravidla cca 4× ročně) — napište nám.
            </p>
            <p
              className="font-sans text-text-muted text-sm mt-3"
              style={{ lineHeight: 1.75 }}
            >
              Sejdeme se, sdělíme si vzájemné představy a v případě oboustranné
              spokojenosti můžete řady našich členů rozšířit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
