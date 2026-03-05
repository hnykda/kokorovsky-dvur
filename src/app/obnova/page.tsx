import type { Metadata } from "next";
import PhotoGallery from "../../components/PhotoGallery";

export const metadata: Metadata = {
  title: "Obnova",
  description:
    "Obnova areálu Kokořovského dvora od roku 2024 — brigády, stavební práce a veřejné akce.",
};

const photos2024 = [
  {
    src: "/images/obnova/sekce_obnova1.jpg",
    alt: "Stav dvora po převzetí 2024",
    caption: "Stav budov po převzetí spolkem Žlutický zámek, konec roku 2024",
  },
  {
    src: "/images/obnova/sekce_obnova2.jpg",
    alt: "Interiér budov dvora 2024",
    caption: "Stav budov po převzetí spolkem Žlutický zámek, konec roku 2024",
  },
  {
    src: "/images/obnova/sekce_obnova3.jpg",
    alt: "Areál Kokořovského dvora 2024",
    caption: "Stav budov po převzetí spolkem Žlutický zámek, konec roku 2024",
  },
];

const photos2025 = [
  {
    src: "/images/obnova/sekce_obnova4.jpg",
    alt: "Obnova štítů — léto 2025",
    caption:
      "Obnova štítů a koruny zdiva na západním křídle, léto 2025 — foto: Ján Borecký",
  },
  {
    src: "/images/obnova/sekce_obnova5.jpg",
    alt: "Práce na zdech — léto 2025",
    caption:
      "Obnova štítů a koruny zdiva na západním křídle, léto 2025 — foto: Ján Borecký",
  },
  {
    src: "/images/obnova/sekce_obnova6.jpg",
    alt: "Záchrana zdiva — léto 2025",
    caption:
      "Obnova štítů a koruny zdiva na západním křídle, léto 2025 — foto: Ján Borecký",
  },
];

function YearMarker({ year }: { year: string }) {
  return (
    <div className="flex items-center gap-5 mb-10">
      <span
        className="font-serif font-black shrink-0 leading-none select-none"
        style={{ fontSize: "clamp(4rem, 12vw, 7rem)", color: "#c9a84c22" }}
        aria-hidden="true"
      >
        {year}
      </span>
      <div className="h-px flex-1 bg-primary/10" />
      <span className="font-serif font-bold text-2xl text-primary shrink-0">
        {year}
      </span>
    </div>
  );
}

export default function ObnováPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="pt-32 pb-16 px-5 text-center bg-cream">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-accent mb-4">
          Kokořovský dvůr
        </p>
        <h1
          className="font-serif font-black text-primary"
          style={{ fontSize: "clamp(2.4rem, 6vw, 3.8rem)", lineHeight: 1.1 }}
        >
          Obnova
        </h1>
        <div className="w-16 h-px bg-accent mx-auto mt-6" />
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-5 pb-20 space-y-20">
        {/* 2024 */}
        <div>
          <YearMarker year="2024" />

          <div className="max-w-[68ch] mb-12">
            <div
              className="font-sans space-y-5"
              style={{ fontSize: "1rem", lineHeight: 1.85, color: "#5c4033" }}
            >
              <p>
                Koncem léta 2024 se shodou několika náhod povedlo získat kontakt
                na slovenského vlastníka Kokořovského dvora, čehož využilo
                několik žlutických patriotů — zakládají spolek Žlutický zámek a
                nakonec se jim daří areál dvora získat.
              </p>
              <p>
                Téměř nikdo netušil, co se uvnitř nepřístupného areálu skrývá.
                Kromě chátrajících budov — kdy některé na tom byly lépe, než by
                se z vnějšího pohledu očekávalo, jiné zas o poznání hůře — se na
                dvoře i ve většině staveb nacházelo nepřeberné množství
                všemožného odpadu. Krom děravých či chybějících střech
                ohrožovaly technický stav objektů též všudypřítomné náletové
                dřeviny. Plán na nejbližší nutné kroky byl tedy jasný.
              </p>
            </div>
          </div>

          <PhotoGallery photos={photos2024} columns={3} />
        </div>

        {/* 2025 */}
        <div>
          <YearMarker year="2025" />

          <div className="max-w-[68ch] mb-12">
            <div
              className="font-sans space-y-5"
              style={{ fontSize: "1rem", lineHeight: 1.85, color: "#5c4033" }}
            >
              <p>
                Během kalendářního roku 2025 se podařilo areál kompletně
                vyčistit od náletových dřevin a zbavit většiny nashromážděného
                odpadu. K tomu krom členů spolku značnou měrou přispěli i
                dobrovolníci ze Žlutic i vzdálenějších lokalit, jakožto i místní
                firmy, kteří se účastnili celkem šesti veřejných brigád.
                Zrenovována byla vjezdová vrata. V budově bývalé jídelny se
                podařilo zprovoznit sociální zařízení a vybavit kuchyňku —
                vzniklo tak provizorní zázemí pro brigádníky i dělníky pracující
                na stavbě. Na dvoře se povedlo osadit studnu funkční ruční
                pumpou.
              </p>
              <p>
                Co se týče samotné stavební obnovy, nejprve bylo nutné odstranit
                zbytky střechy a propadlých krovů ze západního křídla, jelikož
                jejich stav ohrožoval provoz na přilehlé Karlovarské ulici. Poté
                byly opraveny koruny zdí, zpevněny novým věncem a v místě nároží
                oplechovány. Z části opraveny, z části nově vyzděny byly štíty a
                komíny na západním křídle. Provizorně byla zakryta klenba nad
                průjezdem do dvora a dřevěné schodiště v jižní části západního
                křídla. Na sklonku roku začala přípravná fáze obnovy krovu, kdy
                byly jeho jednotlivé části montovány na nádvoří, aby mohly být
                posléze jeřábem instalovány nahoru na budovu.
              </p>
              <p>
                Akce pro veřejnost byly vzhledem ke stavu areálu omezeny na
                minimum. V lednu se konal „Den otevřeného dvora" — aby bylo po
                desetiletích uzavřeného dvora možné nahlédnout dovnitř, čehož
                využilo přes <strong>200 návštěvníků</strong>. V červnu se v
                přízemí jižního křídla konala výstava prací studentů
                architektury ČVUT Praha zaměřených na obnovu a využití areálu
                Kokořovského dvora a v září byl dvůr jeden den přístupný v rámci
                akce „Den architektonického dědictví".
              </p>
            </div>
          </div>

          <PhotoGallery photos={photos2025} columns={3} />
        </div>
      </div>
    </div>
  );
}
