import type { Metadata } from "next";
import PhotoGallery from "../../components/PhotoGallery";

export const metadata: Metadata = {
  title: "Historie",
  description:
    "Stručná historie Kokořovského dvora ve Žluticích od roku 1680 do současnosti.",
};

const photos = [
  {
    src: "/images/historie/sekce_historie1.jpg",
    alt: "Kokořovský dvůr — pohled 1",
  },
  {
    src: "/images/historie/sekce_historie2.jpg",
    alt: "Kokořovský dvůr — pohled 2",
  },
  {
    src: "/images/historie/sekce_historie3.jpg",
    alt: "Kokořovský dvůr — pohled 3",
  },
  {
    src: "/images/historie/sekce_historie4.jpg",
    alt: "Kokořovský dvůr — pohled 4",
  },
  {
    src: "/images/historie/sekce_historie5.jpg",
    alt: "Kokořovský dvůr — pohled 5",
  },
];

export default function HistoriePage() {
  return (
    <div className="bg-parchment min-h-screen">
      {/* Page header */}
      <div
        className="pt-32 pb-16 px-5 text-center"
        style={{ background: "linear-gradient(to bottom, #fdf6e3, #faf7f2)" }}
      >
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">
          Kokořovský dvůr
        </p>
        <h1
          className="font-serif font-black text-primary mb-0"
          style={{ fontSize: "clamp(2.4rem, 6vw, 3.8rem)", lineHeight: 1.1 }}
        >
          Historie
        </h1>
        <div className="w-16 h-px bg-accent mx-auto mt-6" />
      </div>

      {/* Article text */}
      <article className="max-w-[68ch] mx-auto px-5 pb-16">
        <div
          className="font-serif space-y-6"
          style={{ fontSize: "1.05rem", lineHeight: 1.85, color: "#2c1810" }}
        >
          <p>
            Objekt hospodářského dvora se nachází v severním okraji města
            Žlutice (Karlovarský kraj) po levé straně příjezdové komunikace
            směrem od Karlových Varů. Nechal ho v roce <strong>1680</strong>{" "}
            vystavět Ferdinand Hroznata z Kokořova jako
            administrativně–hospodářské zázemí nedalekého žlutického zámku (ze
            zámku se téměř nic nedochovalo). Původně míval čtvercový půdorys,
            jeho součástí byly reprezentativní administrativní prostory, konírna
            a hospodářské objekty.
          </p>

          <p>
            Roku <strong>1742</strong> byl dvůr vypálen francouzským vojskem,
            které Žluticemi táhlo od Prahy na Cheb. Zcela shořela jízdárna a
            stodoly, zbytek dvora se zachoval, leč musel být opravován. Další
            požár dvůr poškodil v roce
            <strong> 1779</strong>, po němž pravděpodobně zaniklo severní a
            východní křídlo — půdorys hlavních budov tak zůstal pouze ve
            stávajícím tvaru písmene „L".
          </p>

          <p>
            V průběhu 19. století byl areál porůznu upravován. Nejvýznamnější
            funkční změnou je přestavba jižního křídla ze správní budovy na
            sýpku, v jejímž rámci bylo honosné přízemí výškově rozděleno
            dodatečně vestavěnými klenbami na 2 podlaží, v horní části budovy
            pak byla ze tří čtvrtin zazděna okna (ponechány pouze větrací
            průduchy). Roku <strong>1878</strong> umírá poslední mužský člen
            rodu Kokořovců Ludvík Prokop a jeho dcera Zdena dvůr v roce
            <strong> 1886</strong> prodává Karlu Prokschovi z Prahy.
          </p>

          <p>
            Roku <strong>1914</strong> dvůr kupuje Josef Menčík z Vrchlabí, ten
            mu je však v rámci první pozemkové reformy v roce{" "}
            <strong>1919</strong> zabaven a v roce <strong>1925</strong> prodán
            Františku a Marii Divišovým z Chocomyšle. V roce{" "}
            <strong>1929</strong> je zbořena severní část západního křídla z
            důvodu rozšiřování severního vjezdu do města. Za 2. světové války je
            dvůr používán Německou osidlovací společností.
          </p>

          <p>
            V roce <strong>1948</strong> je dvůr znárodněn a používán Státním
            statkem Žlutice. V roce <strong>1958</strong> byly budovy dvora
            prohlášeny za kulturní památku. Během socialistické éry došlo k
            postupnému odstranění řady drobných hospodářských staveb v areálu
            dvora a jejich nahrazení necitlivými přístavbami (dílny a garáže). V
            roce <strong>1983</strong> došlo z důvodu rozšiřování komunikace do
            čtvrti Žižkov k odstranění kamenné zdi ohraničující zahradu pod
            jižním křídlem dvora. Ve druhé polovině 80. let dochází vlivem
            absence údržby k postupnému zhoršování stavu objektů.
          </p>

          <p>
            Po revoluci v roce <strong>1989</strong> je dvůr v rámci restituce
            roku
            <strong> 1994</strong> navrácen potomkům rodiny Divišových, ale jeho
            stav je v té době již natolik neutěšený, že veškeré pokusy o jeho
            opravy nebo prodej ztroskotávají. Dvůr je tak roku{" "}
            <strong>2010</strong> převeden na nemajetného občana SR a ponechán
            svému osudu. V roce <strong>2024</strong> areál kupuje nově založený
            spolek Žlutický zámek a pokouší se nastartovat proces záchrany již
            značně zdevastovaného objektu.
          </p>
        </div>
      </article>

      {/* Photo gallery */}
      <div className="bg-white/60 py-16 px-5">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif font-bold text-2xl text-primary text-center mb-10">
            Fotogalerie
          </h2>
          <PhotoGallery photos={photos} columns={3} />
        </div>
      </div>
    </div>
  );
}
