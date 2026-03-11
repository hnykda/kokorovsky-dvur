import Image from "next/image";

function GoldDivider() {
  return (
    <div className="flex items-center gap-4 w-full max-w-xs mx-auto my-6">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="w-2 h-2 bg-accent rotate-45 shrink-0" />
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
    </div>
  );
}

export default function EventBpd2026() {
  return (
    <div className="-mx-5 sm:-mx-8">
      {/* Hero banner */}
      <div className="relative h-48 sm:h-56 overflow-hidden rounded-t-lg">
        <Image
          src="/images/tituln%C3%AD_str%C3%A1nka.webp"
          alt="Kokořovský dvůr"
          fill
          className="object-cover object-[center_30%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(44,24,16,0.1) 0%, rgba(44,24,16,0.3) 60%, rgba(44,24,16,0.7) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 p-6 sm:p-8 z-10">
          <p
            className="font-serif font-bold text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", lineHeight: 1.1 }}
          >
            Prohlídka
          </p>
          <p
            className="font-serif text-accent"
            style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)" }}
          >
            kulturní památky
          </p>
        </div>
      </div>

      {/* Content card */}
      <div className="bg-parchment rounded-b-lg px-6 sm:px-10 py-8 text-center">
        {/* Coat of arms */}
        <div className="flex justify-center mb-5">
          <Image
            src="/images/erb.png"
            alt="Erb Kokořovského dvora"
            width={160}
            height={200}
            className="drop-shadow-lg w-[120px] sm:w-[160px] h-auto"
          />
        </div>

        {/* Venue */}
        <h2
          className="font-serif font-bold text-primary"
          style={{ fontSize: "clamp(1.8rem, 5vw, 2.6rem)", lineHeight: 1.1 }}
        >
          Kokořovský dvůr
        </h2>
        <p className="font-serif text-text-muted mt-1">
          Žlutice, od roku 1680
        </p>

        {/* Info */}
        <p
          className="font-serif text-text-muted mt-5 max-w-sm mx-auto"
          style={{ lineHeight: 1.7 }}
        >
          Přijďte se podívat na postupně obnovovaný barokní dvůr.
          <br />
          Po celou dobu budou probíhat komentované prohlídky.
          <br />
          <strong className="text-text-dark">Vstup volný.</strong>
        </p>

        <GoldDivider />

        {/* Date */}
        <p
          className="font-serif font-bold text-text-dark"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2rem)" }}
        >
          12. dubna 2026
        </p>
        <p className="font-serif text-text-muted text-lg">
          neděle, 14:00 — 18:00
        </p>

        {/* Address */}
        <p className="font-serif text-text-dark mt-4">
          Karlovarská 160, Žlutice
        </p>

        <GoldDivider />

        {/* Footer bar */}
        <div className="bg-primary rounded-lg px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2 text-cream">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-simple.svg"
              alt="Logo"
              width={28}
              height={28}
              className="opacity-90"
            />
            <span className="font-serif text-sm">Spolek Žlutický zámek</span>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/bpd-logo.jpg"
              alt="Brány památek dokořán"
              width={40}
              height={40}
              className="rounded"
            />
            <div className="text-left">
              <p className="font-serif font-bold text-sm">
                Brány památek dokořán
              </p>
              <p className="font-serif text-xs opacity-80">
                Mezinárodní den památek a sídel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
