import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import PhotoGallery from "../../components/PhotoGallery";

export const metadata: Metadata = {
  title: "Obnova",
  description:
    "Obnova areálu Kokořovského dvora od roku 2024 — brigády, stavební práce a veřejné akce.",
};

const photos2024 = [
  {
    src: "/images/obnova/sekce_obnova1.webp",
    alt: "Stav dvora po převzetí 2024",
    caption: "Stav budov po převzetí spolkem Žlutický zámek, konec roku 2024",
  },
  {
    src: "/images/obnova/sekce_obnova2.webp",
    alt: "Interiér budov dvora 2024",
    caption: "Stav budov po převzetí spolkem Žlutický zámek, konec roku 2024",
  },
  {
    src: "/images/obnova/sekce_obnova3.webp",
    alt: "Areál Kokořovského dvora 2024",
    caption: "Stav budov po převzetí spolkem Žlutický zámek, konec roku 2024",
  },
];

const photos2025 = [
  {
    src: "/images/obnova/sekce_obnova4.webp",
    alt: "Obnova štítů — léto 2025",
    caption:
      "Obnova štítů a koruny zdiva na západním křídle, léto 2025 — foto: Ján Borecký",
  },
  {
    src: "/images/obnova/sekce_obnova5.webp",
    alt: "Práce na zdech — léto 2025",
    caption:
      "Obnova štítů a koruny zdiva na západním křídle, léto 2025 — foto: Ján Borecký",
  },
  {
    src: "/images/obnova/sekce_obnova6.webp",
    alt: "Záchrana zdiva — léto 2025",
    caption:
      "Obnova štítů a koruny zdiva na západním křídle, léto 2025 — foto: Ján Borecký",
  },
];

function YearMarker({ year }: { year: string }) {
  return (
    <div className="flex items-center gap-5 mb-10">
      <span
        className="font-serif font-black shrink-0 leading-none select-none text-accent/20"
        style={{ fontSize: "clamp(4rem, 12vw, 7rem)" }}
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

export default function ObnovaPage() {
  return (
    <div className="min-h-screen bg-cream">
      <PageHeader title="Obnova" />

      <div className="max-w-5xl mx-auto px-5 pb-20 space-y-20">
        <div>
          <YearMarker year="2024" />
          <div
            className="max-w-[68ch] mb-12 font-sans space-y-5 text-text-muted"
            style={{ lineHeight: 1.85 }}
          >
            <p>
              Koncem léta 2024 se shodou několika náhod povedlo získat kontakt
              na slovenského vlastníka Kokořovského dvora, čehož využilo několik
              žlutických patriotů — zakládají spolek Žlutický zámek a nakonec se
              jim daří areál dvora získat.
            </p>
            <p>
              Téměř nikdo netušil, co se uvnitř nepřístupného areálu skrývá.
              Kromě chátrajících budov — kdy některé na tom byly lépe, než by se
              z vnějšího pohledu očekávalo, jiné zas o poznání hůře — se na
              dvoře i ve většině staveb nacházelo nepřeberné množství všemožného
              odpadu. Krom děravých či chybějících střech ohrožovaly technický
              stav objektů též všudypřítomné náletové dřeviny. Plán na nejbližší
              nutné kroky byl tedy jasný.
            </p>
          </div>
          <PhotoGallery photos={photos2024} />
        </div>

        <div>
          <YearMarker year="2025" />
          <div
            className="max-w-[68ch] mb-12 font-sans space-y-5 text-text-muted"
            style={{ lineHeight: 1.85 }}
          >
            <p>
              Během kalendářního roku 2025 se podařilo areál kompletně vyčistit
              od náletových dřevin a zbavit většiny nashromážděného odpadu. K
              tomu krom členů spolku značnou měrou přispěli i dobrovolníci ze
              Žlutic i vzdálenějších lokalit, jakožto i místní firmy, kteří se
              účastnili celkem šesti veřejných brigád. Zrenovována byla vjezdová
              vrata. V budově bývalé jídelny se podařilo zprovoznit sociální
              zařízení a vybavit kuchyňku — vzniklo tak provizorní zázemí pro
              brigádníky i dělníky pracující na stavbě. Na dvoře se povedlo
              osadit studnu funkční ruční pumpou.
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
              přízemí jižního křídla konala výstava prací studentů architektury
              ČVUT Praha zaměřených na obnovu a využití areálu Kokořovského
              dvora a v září byl dvůr jeden den přístupný v rámci akce „Den
              architektonického dědictví".
            </p>
          </div>
          <PhotoGallery photos={photos2025} />
        </div>
      </div>
    </div>
  );
}
