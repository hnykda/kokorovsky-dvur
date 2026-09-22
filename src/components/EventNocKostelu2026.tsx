import Image from "next/image";

export default function EventNocKostelu2026() {
  return (
    <div className="-mx-5 sm:-mx-8">
      <div className="bg-parchment rounded-lg overflow-hidden px-6 sm:px-10 py-8">
        <div
          className="font-serif text-text-muted max-w-lg mx-auto"
          style={{ lineHeight: 1.8 }}
        >
          <p>
            <strong className="text-text-dark">Noc kostelů ve Žluticích</strong>{" "}
            — pátek 29. května 2026. Letošní motto:{" "}
            <strong className="text-text-dark">ODVAHA</strong>.
          </p>

          <p className="mt-4">
            <strong className="text-text-dark">
              Žlutice — Kostel sv. Petra a Pavla
            </strong>
          </p>
          <ul className="mt-2 space-y-1 text-base">
            <li>
              17.00 — Pohádka „O Zlatovlásce", Divadlo Šneček (farní zahrada)
            </li>
            <li>18.00 — Troubení z věže</li>
            <li>18.05 — Koncert žáků ZŠ a ZUŠ Žlutice</li>
            <li>18.00–20.00 — Prohlídka zvonů</li>
            <li>19.00 — Zvoní celá diecéze (zvonění zvonů)</li>
            <li>19.30–20.30 — Komentovaná prohlídka kostela a varhan</li>
            <li>22.00 — Koncert Žihelského smíšeného pěveckého sboru</li>
          </ul>

          <p className="mt-4">
            <strong className="text-text-dark">
              Verušice — Kostel sv. Mikuláše
            </strong>
          </p>
          <ul className="mt-2 space-y-1 text-base">
            <li>19.00–22.00 — Prohlídky kostela a márnice s průvodcem</li>
          </ul>

          <p className="mt-4 text-sm italic">
            Pořádají Římsko-katolická farnost ve Žluticích, Město Žlutice a
            Spolek Žlutický zámek.
          </p>
        </div>

        <div className="flex items-center gap-4 w-full max-w-xs mx-auto my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="w-2 h-2 bg-accent rotate-45 shrink-0" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="flex justify-center">
          <a
            href="/noc-kostelu-2026.pdf"
            target="_blank"
            rel="noopener"
            aria-label="Stáhnout plakát Noc kostelů (PDF)"
          >
            <Image
              src="/images/noc-kostelu-2026-plakat.webp"
              alt="Plakát — Noc kostelů 2026"
              width={460}
              height={651}
              className="rounded-lg shadow-lg max-w-full h-auto hover:shadow-xl transition-shadow"
              style={{ maxHeight: "70vh", width: "auto" }}
            />
          </a>
        </div>

        <p className="text-center font-serif text-text-muted text-sm mt-4">
          <a
            href="/noc-kostelu-2026.pdf"
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
