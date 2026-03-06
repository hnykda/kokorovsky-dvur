import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../../components/PageHeader";

export const metadata: Metadata = {
  title: "Partneři",
  description:
    "Partneři obnovy Kokořovského dvora — instituce, fondy a firmy, které nás podporují.",
};

const institutional = [
  {
    name: "Karlovarský kraj",
    desc: "Dotace 400 000 Kč na projektové práce rekonstrukce střechy západního křídla.",
    logo: "/images/partners/logo1.webp",
    url: "https://www.kr-karlovarsky.cz/",
  },
  {
    name: "Nadační fond rodiny Malých",
    desc: "Příspěvek 150 000 Kč na pořízení stavebně historického průzkumu.",
    logo: "/images/partners/logo2.webp",
    url: "https://nfrmalych.cz/",
  },
];

const corporate = [
  {
    name: "Doupovské uzeniny",
    desc: "Josef Pelant",
    logo: "/images/partners/logo3.webp",
    url: "https://www.maso-pelant.cz/",
  },
  {
    name: "Nevděk — vazníky",
    desc: "Ing. Jan Hutkay",
    logo: "/images/partners/logo4.webp",
    url: "http://www.nevdek.cz/",
  },
  {
    name: "REGENT PLUS ŽLUTICE",
    desc: "spol. s r.o.",
    logo: "/images/partners/logo5.webp",
    url: "https://www.regentplus.cz/",
  },
];

const individuals = ["Ing. Martin Beneš", "Ing. Milan Kadera", "Ing. Robert Košťál"];

function PartnerCard({
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
      <div className="relative w-full h-20">
        <Image
          src={logo}
          alt={`Logo ${name}`}
          fill
          className="object-contain transition-all duration-300"
        />
      </div>
      <div className="text-center">
        <p className="font-serif font-bold text-sm text-primary">{name}</p>
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
      <PageHeader title="Partneři" eyebrow="Poděkování" />

      <div className="max-w-[68ch] mx-auto px-5 pb-10">
        <p
          className="font-sans text-text-muted text-center"
          style={{ lineHeight: 1.8 }}
        >
          Na obnově Kokořovského dvora má zásluhu celá řada osob — fyzických i
          právnických. Níže jsou vypsáni partneři nejvýznamnější. Všem ostatním
          přispěvatelům a brigádníkům patří rovněž velké poděkování.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-5 pb-16">
        <h2 className="font-serif font-bold text-xl text-primary mb-8 text-center">
          Orgány státní správy a územní samosprávy, fondy a nadace
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {institutional.map((p) => (
            <PartnerCard key={p.name} {...p} />
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 pb-20">
        <h2 className="font-serif font-bold text-xl text-primary mb-8 text-center">
          Firmy a podnikatelé
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {corporate.map((p) => (
            <PartnerCard key={p.name} {...p} />
          ))}
          {/* Non-clickable card for individual contributors */}
          <div className="flex flex-col items-center justify-center gap-2 p-8 bg-white rounded-xl border border-primary/8">
            {individuals.map((name) => (
              <p key={name} className="font-serif font-bold text-sm text-primary text-center">
                {name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
