import Image from "next/image";

export default function EventStezkaSovyRozarky2026() {
  return (
    <div className="-mx-5 sm:-mx-8">
      <div className="bg-parchment rounded-lg overflow-hidden px-6 sm:px-10 py-8">
        <div
          className="font-serif text-text-muted max-w-lg mx-auto"
          style={{ lineHeight: 1.8 }}
        >
          <p>
            <strong className="text-text-dark">
              Pojďte s námi stezkou sovy Rozárky!
            </strong>{" "}
            Procházka okolím Žlutic v délce přibližně 6&nbsp;km, na trase
            občerstvení a soutěže pro děti.
          </p>
          <p className="mt-4">
            <strong className="text-text-dark">Kdy:</strong> sobota 16. května
            2026
            <br />
            <strong className="text-text-dark">Start:</strong> mezi 13.00 a
            14.00
            <br />
            <strong className="text-text-dark">Odkud:</strong> Žlutice-Lomnice
          </p>
          <p className="mt-4 text-sm italic">
            Akci pořádají přátelé a kamarádi ze SOVy.
          </p>
        </div>

        <div className="flex items-center gap-4 w-full max-w-xs mx-auto my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="w-2 h-2 bg-accent rotate-45 shrink-0" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="flex justify-center">
          <a
            href="/stezka-sovy-rozarky-2026.pdf"
            target="_blank"
            rel="noopener"
            aria-label="Stáhnout plakát Stezkou sovy Rozárky (PDF)"
          >
            <Image
              src="/images/stezka-sovy-rozarky-2026-plakat.webp"
              alt="Plakát — Stezkou sovy Rozárky 2026"
              width={460}
              height={651}
              className="rounded-lg shadow-lg max-w-full h-auto hover:shadow-xl transition-shadow"
              style={{ maxHeight: "70vh", width: "auto" }}
            />
          </a>
        </div>

        <p className="text-center font-serif text-text-muted text-sm mt-4">
          <a
            href="/stezka-sovy-rozarky-2026.pdf"
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
