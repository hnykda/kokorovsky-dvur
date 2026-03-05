import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <div
        className="hero-parallax absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/tituln%C3%AD_str%C3%A1nka.webp')",
        }}
        aria-hidden="true"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(44,24,16,0.5) 0%, rgba(44,24,16,0.72) 60%, rgba(44,24,16,0.88) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-5 max-w-2xl mx-auto">
        <h1
          className="font-serif font-black text-white mb-3 animate-fade-in-up"
          style={{ fontSize: "clamp(2.6rem, 7vw, 5rem)", lineHeight: 1.05 }}
        >
          Kokořovský dvůr
        </h1>

        <p className="font-sans text-white/65 tracking-[0.25em] uppercase text-xs mb-8 animate-fade-in-up animation-delay-200">
          Žlutice · 1680
        </p>

        <p
          className="font-serif text-white/85 mb-8 animate-fade-in-up animation-delay-400"
          style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", lineHeight: 1.75 }}
        >
          Raně barokní hospodářský dvůr ve Žluticích chátral dekády. V&nbsp;roce
          2024 ho koupil spolek Žlutický zámek a začal ho zachraňovat. Pomůžete
          nám?
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-600">
          <Link
            href="/chci-prispet"
            className="font-sans font-medium text-sm px-7 py-3 bg-accent text-text-dark rounded-lg hover:bg-accent/90 transition-colors duration-200"
          >
            Chci přispět
          </Link>
          <Link
            href="/historie"
            className="font-sans font-medium text-sm px-7 py-3 border border-white/40 text-white rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            Přečíst příběh
          </Link>
        </div>
      </div>
    </section>
  );
}
