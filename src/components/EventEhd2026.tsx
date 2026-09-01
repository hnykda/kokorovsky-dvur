import Image from "next/image";

export default function EventEhd2026() {
  return (
    <div className="-mx-5 sm:-mx-8">
      <div className="bg-parchment rounded-lg overflow-hidden px-6 sm:px-10 py-8">
        <div
          className="font-serif text-text-muted max-w-lg mx-auto"
          style={{ lineHeight: 1.8 }}
        >
          <p>
            <strong className="text-text-dark">
              Dny evropského dědictví
            </strong>{" "}
            — Kokořovský dvůr se otevírá veřejnosti v rámci celoevropské akce
            European Heritage Days.
          </p>

          <p className="mt-4">
            <strong className="text-text-dark">Kdy:</strong> neděle 6. září
            2026, 14.00 — 18.00
            <br />
            <strong className="text-text-dark">Kde:</strong> Kokořovský dvůr,
            Karlovarská 160, Žlutice
          </p>

          <p className="mt-4 text-sm italic">
            Více o akci na{" "}
            <a
              href="https://www.ehd.cz"
              target="_blank"
              rel="noopener"
              className="underline hover:text-primary transition-colors"
            >
              www.ehd.cz
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
            href="/ehd-2026.pdf"
            target="_blank"
            rel="noopener"
            aria-label="Stáhnout plakát Dny evropského dědictví (PDF)"
          >
            <Image
              src="/images/ehd-2026-plakat.webp"
              alt="Plakát — Dny evropského dědictví 2026"
              width={460}
              height={651}
              className="rounded-lg shadow-lg max-w-full h-auto hover:shadow-xl transition-shadow"
              style={{ maxHeight: "70vh", width: "auto" }}
            />
          </a>
        </div>

        <p className="text-center font-serif text-text-muted text-sm mt-4">
          <a
            href="/ehd-2026.pdf"
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
