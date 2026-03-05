"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

const photos = [
  {
    src: "/images/historie/sekce_historie1.webp",
    alt: "Kokořovský dvůr — dobová malba z 18. století",
    caption:
      "Kokořovský dvůr ve své původní čtvercové dispozici na dobové malbě z 18. století.",
  },
  {
    src: "/images/historie/sekce_historie2.webp",
    alt: "Kokořovský dvůr pohledem z ulice — foto 1",
    caption: "Kokořovský dvůr pohledem z ulice v první polovině 20. století",
  },
  {
    src: "/images/historie/sekce_historie3.webp",
    alt: "Kokořovský dvůr pohledem z ulice — foto 2",
    caption: "Kokořovský dvůr pohledem z ulice v první polovině 20. století",
  },
  {
    src: "/images/historie/sekce_historie4.webp",
    alt: "Kokořovský dvůr ve druhé polovině 80. let — pohled z nádvoří",
    caption:
      "Kokořovský dvůr ve druhé polovině 80. let 20. století — pohled z nádvoří",
  },
  {
    src: "/images/historie/sekce_historie5.webp",
    alt: "Stav Kokořovského dvora v roce 2012",
    caption: "Stav Kokořovského dvora v roce 2012",
  },
];

const slides = photos.map((p) => ({
  src: p.src,
  alt: p.alt,
  description: p.caption,
}));

function PhotoButton({
  index,
  onOpen,
}: {
  index: number;
  onOpen: (i: number) => void;
}) {
  const photo = photos[index];
  return (
    <figure className="my-10">
      <button
        className="relative w-full overflow-hidden rounded-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-zoom-in"
        style={{ aspectRatio: "4/3" }}
        onClick={() => onOpen(index)}
        aria-label={`Zobrazit: ${photo.alt}`}
      >
        <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
        <div className="absolute inset-0 bg-text-dark/0 group-hover:bg-text-dark/20 transition-all duration-300" />
      </button>
      <figcaption className="font-sans text-sm text-text-muted mt-2 text-center italic">
        {photo.caption}
      </figcaption>
    </figure>
  );
}

function PhotoRowButton({
  indices,
  onOpen,
}: {
  indices: [number, number];
  onOpen: (i: number) => void;
}) {
  const caption = photos[indices[0]].caption;
  return (
    <figure className="my-10">
      <div className="grid grid-cols-2 gap-3">
        {indices.map((i) => (
          <button
            key={i}
            className="relative overflow-hidden rounded-sm group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-zoom-in"
            style={{ aspectRatio: "4/3" }}
            onClick={() => onOpen(i)}
            aria-label={`Zobrazit: ${photos[i].alt}`}
          >
            <Image
              src={photos[i].src}
              alt={photos[i].alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-text-dark/0 group-hover:bg-text-dark/20 transition-all duration-300" />
          </button>
        ))}
      </div>
      <figcaption className="font-sans text-sm text-text-muted mt-2 text-center italic">
        {caption}
      </figcaption>
    </figure>
  );
}

export default function HistorieContent() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <article
        className="max-w-[68ch] mx-auto px-5 pb-16 font-serif space-y-6 text-text-dark"
        style={{ fontSize: "1.05rem", lineHeight: 1.85 }}
      >
        <p>
          Objekt hospodářského dvora se nachází v severním okraji města Žlutice
          (Karlovarský kraj) po levé straně příjezdové komunikace směrem od
          Karlových Varů. Nechal ho v roce <strong>1680</strong> vystavět
          Ferdinand Hroznata z Kokořova jako administrativně–hospodářské zázemí
          nedalekého žlutického zámku (ze zámku se téměř nic nedochovalo).
          Původně míval čtvercový půdorys, jeho součástí byly reprezentativní
          administrativní prostory, konírna a hospodářské objekty.
        </p>

        <PhotoButton index={0} onOpen={setIndex} />

        <p>
          Roku <strong>1742</strong> byl dvůr vypálen francouzským vojskem,
          které Žluticemi táhlo od Prahy na Cheb. Zcela shořela jízdárna a
          stodoly, zbytek dvora se zachoval, leč musel být opravován. Další
          požár dvůr poškodil v roce <strong>1779</strong>, po němž
          pravděpodobně zaniklo severní a východní křídlo — půdorys hlavních
          budov tak zůstal pouze ve stávajícím tvaru písmene „L".
        </p>

        <p>
          V průběhu 19. století byl areál porůznu upravován. Nejvýznamnější
          funkční změnou je přestavba jižního křídla ze správní budovy na sýpku,
          v jejímž rámci bylo honosné přízemí výškově rozděleno dodatečně
          vestavěnými klenbami na 2 podlaží, v horní části budovy pak byla ze
          tří čtvrtin zazděna okna (ponechány pouze větrací průduchy). Roku{" "}
          <strong>1878</strong> umírá poslední mužský člen rodu Kokořovců Ludvík
          Prokop a jeho dcera Zdena dvůr v roce <strong>1886</strong> prodává
          Karlu Prokschovi z Prahy.
        </p>

        <PhotoRowButton indices={[1, 2]} onOpen={setIndex} />

        <p>
          Roku <strong>1914</strong> dvůr kupuje Josef Menčík z Vrchlabí, ten mu
          je však v rámci první pozemkové reformy v roce <strong>1919</strong>{" "}
          zabaven a v roce <strong>1925</strong> prodán Františku a Marii
          Divišovým z Chocomyšle. V roce <strong>1929</strong> je zbořena
          severní část západního křídla z důvodu rozšiřování severního vjezdu do
          města. Za 2. světové války je dvůr používán Německou osidlovací
          společností.
        </p>

        <p>
          V roce <strong>1948</strong> je dvůr znárodněn a používán Státním
          statkem Žlutice. V roce <strong>1958</strong> byly budovy dvora
          prohlášeny za kulturní památku. Během socialistické éry došlo k
          postupnému odstranění řady drobných hospodářských staveb v areálu
          dvora a jejich nahrazení necitlivými přístavbami (dílny a garáže). V
          roce <strong>1983</strong> došlo z důvodu rozšiřování komunikace do
          čtvrti Žižkov k odstranění kamenné zdi ohraničující zahradu pod jižním
          křídlem dvora. Ve druhé polovině 80. let dochází vlivem absence údržby
          k postupnému zhoršování stavu objektů.
        </p>

        <PhotoButton index={3} onOpen={setIndex} />

        <p>
          Po revoluci v roce <strong>1989</strong> je dvůr v rámci restituce
          roku <strong>1994</strong> navrácen potomkům rodiny Divišových, ale
          jeho stav je v té době již natolik neutěšený, že veškeré pokusy o jeho
          opravy nebo prodej ztroskotávají. Dvůr je tak roku{" "}
          <strong>2010</strong> převeden na nemajetného občana SR a ponechán
          svému osudu. V roce <strong>2024</strong> areál kupuje nově založený
          spolek Žlutický zámek a pokouší se nastartovat proces záchrany již
          značně zdevastovaného objektu.
        </p>

        <PhotoButton index={4} onOpen={setIndex} />
      </article>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={slides}
        plugins={[Captions]}
        on={{ view: ({ index: i }) => setIndex(i) }}
      />
    </>
  );
}
