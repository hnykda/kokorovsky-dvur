import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Partneři",
  description:
    "Partneři obnovy Kokořovského dvora — instituce, fondy a firmy, které nás podporují.",
};

const institutionalPartners = [
  {
    name: "Karlovarský kraj",
    desc: "Dotace 400 000 Kč na projektové práce rekonstrukce střechy západního křídla.",
    logo: "/images/partners/logo1.png",
    url: "https://www.kr-karlovarsky.cz/",
  },
  {
    name: "Nadační fond rodiny Malých",
    desc: "Příspěvek 150 000 Kč na pořízení stavebně historického průzkumu Kokořovského dvora.",
    logo: "/images/partners/logo2.png",
    url: "https://nfrmalych.cz/",
  },
];

const corporatePartners = [
  {
    name: "Doupovské uzeniny",
    desc: "Josef Pelant",
    logo: "/images/partners/logo3.png",
    url: "https://www.maso-pelant.cz/",
  },
  {
    name: "Nevděk — vazníky",
    desc: "Ing. Jan Hutkay",
    logo: "/images/partners/logo4.jpg",
    url: "http://www.nevdek.cz/",
  },
  {
    name: "REGENT PLUS ŽLUTICE",
    desc: "spol. s r.o.",
    logo: "/images/partners/logo5.png",
    url: "https://www.regentplus.cz/",
  },
];

function PartnerLogo({
  name,
  desc,
  logo,
  url,
}: {
  name: string;
  desc: string;
  logo: string;
  url: string;
}) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-4 p-8 bg-white rounded-xl border border-primary/8 hover:border-accent/40 hover:shadow-md transition-all duration-300"
      title={name}
    >
      <div className="relative w-full h-20 flex items-center justify-center">
        <Image
          src={logo}
          alt={`Logo ${name}`}
          fill
          className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
        />
      </div>
      <div className="text-center">
        <p className="font-serif font-bold text-sm text-primary group-hover:text-primary-dark transition-colors">
          {name}
        </p>
        {desc && (
          <p className="font-sans text-xs text-text-muted mt-0.5">{desc}</p>
        )}
      </div>
    </a>
  );
}

export default function PartneriPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="pt-32 pb-16 px-5 text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">
          Poděkování
        </p>
        <h1
          className="font-serif font-black text-primary"
          style={{ fontSize: "clamp(2.2rem, 6vw, 3.6rem)", lineHeight: 1.1 }}
        >
          Partneři
        </h1>
        <div className="w-16 h-px bg-accent mx-auto mt-6" />
      </div>

      {/* Intro */}
      <div className="max-w-[68ch] mx-auto px-5 pb-16">
        <p
          className="font-sans text-text-muted text-center"
          style={{ lineHeight: 1.8, fontSize: "1rem" }}
        >
          Na obnově Kokořovského dvora má zásluhu celá řada osob — fyzických i
          právnických. Níže jsou vypsáni partneři nejvýznamnější, jejichž podíl
          se významněji vymyká běžným příspěvkům. Všem ostatním přispěvatelům a
          brigádníkům patří rovněž velké poděkování.
        </p>
      </div>

      {/* Institutional */}
      <div className="max-w-5xl mx-auto px-5 pb-16">
        <h2 className="font-serif font-bold text-xl text-primary mb-8 text-center">
          Orgány státní správy, fondy a nadace
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {institutionalPartners.map((p) => (
            <PartnerLogo key={p.name} {...p} />
          ))}
        </div>
      </div>

      {/* Corporate */}
      <div className="max-w-5xl mx-auto px-5 pb-20">
        <h2 className="font-serif font-bold text-xl text-primary mb-8 text-center">
          Firmy
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {corporatePartners.map((p) => (
            <PartnerLogo key={p.name} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
