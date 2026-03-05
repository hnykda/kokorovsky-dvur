import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background — CSS fixed attachment, falls back to scroll on mobile */}
      <div
        className="hero-parallax absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/tituln%C3%AD_str%C3%A1nka.jpg')",
        }}
        aria-hidden="true"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(44,24,16,0.55) 0%, rgba(44,24,16,0.72) 60%, rgba(44,24,16,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-20 text-center text-white px-5 max-w-2xl mx-auto">
        {/* Coat-of-arms logo */}
        <div className="flex justify-center mb-7 animate-fade-in-up">
          <Image
            src="/images/logo-simple-rounded.png"
            alt="Kokořovský dvůr"
            width={88}
            height={88}
            priority
            className="rounded-full opacity-90 ring-2 ring-white/20"
          />
        </div>

        <h1
          className="font-serif font-black text-white mb-4 animate-fade-in-up animation-delay-200"
          style={{ fontSize: "clamp(2.8rem, 8vw, 5.5rem)", lineHeight: 1.05 }}
        >
          Kokořovský dvůr
        </h1>

        <p className="font-sans text-white/75 tracking-[0.25em] uppercase text-sm md:text-base animate-fade-in-up animation-delay-400">
          Žlutice · 1680
        </p>
      </div>

      {/* Scroll chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
