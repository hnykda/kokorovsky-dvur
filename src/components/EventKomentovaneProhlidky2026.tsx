import Image from "next/image";

export default function EventKomentovaneProhlidky2026() {
  return (
    <div className="-mx-5 sm:-mx-8">
      <div className="bg-parchment rounded-lg overflow-hidden px-6 sm:px-10 py-8">
        <div
          className="font-serif text-text-muted max-w-lg mx-auto"
          style={{ lineHeight: 1.8 }}
        >
          <p>
            <strong className="text-text-dark">
              Vydejte se do Kokořovského dvora ve Žluticích
            </strong>
            , monumentálního panského hospodářského areálu, jehož kořeny sahají
            až do středověku. V kulisách rozpadajících se stájí, jízdárny, černé
            kuchyně i bytů správců během prohlídky ožije svět každodenního
            provozu velkého dvora: kde se vařilo pro čeledíny, kde stáli koně
            vrchnosti, kdo řídil sklizeň a proč vlastně páni z Kokořova takový
            podnik založili.
          </p>
          <p className="mt-3">
            Prohlídka propojuje poutavé příběhy lidí, stavební proměny od
            středověku přes renesanci po baroko i současný záchranný boj spolku,
            který vrací „Kokořák" zpět k životu. Panským dvorem vás provede
            historik a kastelán Miloš Bělohlávek.
          </p>
          <p className="mt-4">
            <strong className="text-text-dark">Termíny 2026:</strong>
            <br />
            7. června &nbsp;·&nbsp; 5. července &nbsp;·&nbsp; 9. srpna
            &nbsp;·&nbsp; 6. září
            <br />
            <span className="text-text-dark">vždy ve 14.00</span>
          </p>
        </div>

        <div className="flex items-center gap-4 w-full max-w-xs mx-auto my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="w-2 h-2 bg-accent rotate-45 shrink-0" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        <div className="flex justify-center">
          <a
            href="/komentovane-prohlidky-2026.pdf"
            target="_blank"
            rel="noopener"
            aria-label="Stáhnout plakát ke komentovaným prohlídkám (PDF)"
          >
            <Image
              src="/images/komentovane-prohlidky-2026-plakat.webp"
              alt="Plakát — Skrz naskrz Kokořákem"
              width={460}
              height={651}
              className="rounded-lg shadow-lg max-w-full h-auto hover:shadow-xl transition-shadow"
              style={{ maxHeight: "70vh", width: "auto" }}
            />
          </a>
        </div>

        <p className="text-center font-serif text-text-muted text-sm mt-4">
          <a
            href="/komentovane-prohlidky-2026.pdf"
            target="_blank"
            rel="noopener"
            className="underline hover:text-primary transition-colors"
          >
            Stáhnout plakát (PDF)
          </a>
        </p>

        <p className="text-center font-serif text-text-muted text-xs mt-2 italic">
          Akvarely: Mirka Mutinski, 2026
        </p>
      </div>
    </div>
  );
}
