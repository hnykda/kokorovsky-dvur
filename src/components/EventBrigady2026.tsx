import Image from "next/image";

export default function EventBrigady2026() {
  return (
    <div className="-mx-5 sm:-mx-8">
      <div className="bg-parchment rounded-lg overflow-hidden px-6 sm:px-10 py-8">
        {/* Text summary */}
        <div
          className="font-serif text-text-muted max-w-lg mx-auto"
          style={{ lineHeight: 1.8 }}
        >
          <p>
            <strong className="text-text-dark">Nepřítel:</strong> dříví
            hrůzostrašné, jež okupuje dvůr Kokořovský a odmítá se samo uklidit.
          </p>
          <p className="mt-3">
            <strong className="text-text-dark">Dny bitvy:</strong>
            <br />
            11. dubna 2026 — od 14:00
            <br />
            23. května 2026 — od 14:00
          </p>
          <p className="mt-3">
            <strong className="text-text-dark">Výzbroj:</strong> rukavice
            vlastní (povinné), odhodlání (doporučené), dobrá nálada (vítána).
          </p>
          <p className="mt-3">
            <strong className="text-text-dark">Odměna:</strong> občerstvení pro
            každého odvážlivce, jenž se do boje zapojí. Hlaste se u dvora
            Kokořovského.
          </p>
          <p className="mt-3">
            Přijďte, dokud je dřevo slabé a rozházené — kdo ví, co provede,
            nechá-li se příliš dlouho bez dozoru.
          </p>
        </div>

        {/* Gold divider */}
        <div className="flex items-center gap-4 w-full max-w-xs mx-auto my-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
          <div className="w-2 h-2 bg-accent rotate-45 shrink-0" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>

        {/* Poster image */}
        <div className="flex justify-center">
          <Image
            src="/images/brigady-2026-plakat.webp"
            alt="Plakát — Hledá se dřevorubec dobrovolný"
            width={460}
            height={824}
            className="rounded-lg shadow-lg max-w-full h-auto"
            style={{ maxHeight: "70vh", width: "auto" }}
          />
        </div>

        <p className="text-center font-serif text-text-muted text-sm mt-4 italic">
          Vyhlášeno správou dvora Kokořovského, léta Páně 2026
        </p>
      </div>
    </div>
  );
}
