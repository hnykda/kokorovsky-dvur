import Image from "next/image";

export default function EventStrasidelnyKokorak2026() {
  return (
    <div className="-mx-5 sm:-mx-8">
      <div className="bg-parchment rounded-lg overflow-hidden px-6 sm:px-10 py-8">
        <div
          className="font-serif text-text-muted max-w-lg mx-auto"
          style={{ lineHeight: 1.8 }}
        >
          <p>
            <strong className="text-text-dark">
              Kouzelně strašidelný Kokořák
            </strong>{" "}
            — sobota 3. října 2026 na Kokořovském dvoře. Strašidelné tvoření pro
            děti, hororový dům, lidová muzika, ohnivá show a promítání ke 100
            letům od prvního promítání ve Žluticích.
          </p>

          <p className="mt-4">
            <strong className="text-text-dark">Program</strong>
          </p>
          <ul className="mt-2 space-y-1 text-base">
            <li>
              15.00 — Strašidla pro Kokořovský dvůr: kouzelné a (ne)strašidelné
              tvoření, čarodějnická sluj, chemické pokusy. Dětský okruh{" "}
              <strong className="text-text-dark">bez lekání</strong>.
            </li>
            <li>18.00 — Lidová muzika z Chrástu</li>
            <li>
              19.00–22.00 — Hororový dům (omezená kapacita, vstupy v časových
              slotech)
            </li>
          </ul>

          <p className="mt-4">
            <strong className="text-text-dark">
              Promítání — 100 let od 1. promítání ve Žluticích
            </strong>
          </p>
          <ul className="mt-2 space-y-1 text-base">
            <li>17.00 — Promítání pro děti: pohádka</li>
            <li>19.00 — Sto let starý film</li>
            <li>20.00 — Večerní promítání pro dospělé</li>
          </ul>

          <p className="mt-4">
            <strong className="text-text-dark">Zábava na celý den</strong>
          </p>
          <ul className="mt-2 space-y-1 text-base">
            <li>Opékání buřtů a stánky s občerstvením</li>
            <li>Dlabání dýní</li>
            <li>Heraldická dílna</li>
            <li>Ohnivá show</li>
          </ul>

          <p className="mt-4">
            <strong className="text-text-dark">Kostýmy vítány!</strong>
          </p>

          <p className="mt-4">
            <strong className="text-text-dark">Vstupné:</strong> děti 100 Kč,
            dospělí 150 Kč. Výtěžek podpoří záchranu Kokořovského dvora.
            <br />
            <strong className="text-text-dark">Kde:</strong> Kokořovský dvůr,
            Karlovarská 160, Žlutice
          </p>

          <p className="mt-4 text-sm">
            Dotazy a rezervace:{" "}
            <a
              href="mailto:strasidelny@kokorovskydvur.cz"
              className="underline hover:text-primary transition-colors"
            >
              strasidelny@kokorovskydvur.cz
            </a>{" "}
            nebo{" "}
            <a
              href="tel:+420733691113"
              className="underline hover:text-primary transition-colors"
            >
              +420 733 691 113
            </a>
            .
          </p>
        </div>

        <div className="flex items-center gap-4 w-full max-w-xs mx-auto my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="w-2 h-2 bg-accent rotate-45 shrink-0" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="flex justify-center">
          <a
            href="/strasidelny-kokorak-2026.pdf"
            target="_blank"
            rel="noopener"
            aria-label="Stáhnout plakát Kouzelně strašidelný Kokořák (PDF)"
          >
            <Image
              src="/images/strasidelny-kokorak-2026-plakat.webp"
              alt="Plakát — Kouzelně strašidelný Kokořák, 3. října 2026"
              width={460}
              height={690}
              className="rounded-lg shadow-lg max-w-full h-auto hover:shadow-xl transition-shadow"
              style={{ maxHeight: "70vh", width: "auto" }}
            />
          </a>
        </div>

        <p className="text-center font-serif text-text-muted text-sm mt-4">
          <a
            href="/strasidelny-kokorak-2026.pdf"
            target="_blank"
            rel="noopener"
            className="underline hover:text-primary transition-colors"
          >
            Stáhnout plakát (PDF)
          </a>
        </p>
      </div>
    </div>
  );
}
