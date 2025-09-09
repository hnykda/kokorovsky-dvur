import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <Image
            src="/images/flyover.png"
            alt="Kokořovský dvůr z ptačí perspektivy"
            fill
            priority
            quality={90}
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Kokořovský dvůr</h1>
          <p className="hero-subtitle">Žlutice • od roku 1680</p>
          <p className="hero-description">
            Stojím ve Žluticích od roku 1680. Býval jsem součástí zámku,
            vypálilo mě francouzské vojsko. Byl jsem centrem hospodářství a dnes
            jsem na spadnutí. Pomůžete mě zachránit?
          </p>
          <div className="hero-cta">
            <Link href="/o-nas" className="btn btn-primary">
              Poznejte náš příběh
            </Link>
            <a href="#podporte" className="btn btn-secondary">
              Podpořte záchranu
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Historie, která nesmí zmizet</h2>
          <p className="section-subtitle">
            Kokořovský dvůr je raně barokní hospodářský dvůr, který vybudoval
            roku 1680 Ferdinand Hroznata z Kokořova.
          </p>

          <div className="info-grid">
            <div className="info-card">
              <h3>Naše minulost</h3>
              <p>
                Hospodářský dvůr sloužil jako ekonomické centrum žlutického
                panství. V roce 1742 byl vypálen francouzskými vojsky během
                války o rakouské dědictví. Po požáru byl obnoven a později
                pronajat obci Verušice.
              </p>
            </div>

            <div className="info-card">
              <h3>Současný stav</h3>
              <p>
                Po desetiletích zanedbání je dvůr v kritickém stavu. Objekty
                chátrají, střechy se propadají a vzácná architektura mizí před
                očima. Bez okamžité pomoci přijdeme o tuto jedinečnou památku
                navždy.
              </p>
            </div>

            <div className="info-card">
              <h3>Naše vize</h3>
              <p>
                Chceme dvůr zachránit a vrátit mu život. Plánujeme citlivou
                rekonstrukci s respektem k historii. Dvůr se stane kulturním
                centrem regionu a místem setkávání pro místní komunitu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section
        className="section"
        id="podporte"
        style={{ background: "#F5F0E8" }}
      >
        <div className="container">
          <h2 className="section-title">Jak můžete pomoci</h2>
          <p className="section-subtitle">
            Každá pomoc se počítá. Společně můžeme zachránit tuto vzácnou
            památku pro budoucí generace.
          </p>

          <div className="bank-account">
            <h3>Transparentní účet pro záchranu</h3>
            <div className="account-number">349942519/0300</div>
            <p style={{ color: "rgba(255, 255, 255, 0.9)", marginBottom: 0 }}>
              Spolek Žlutický zámek, z.s.
            </p>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h3>Finanční podpora</h3>
              <p>
                Každá koruna pomáhá. Příspěvky používáme na zabezpečení objektu,
                statické posudky a přípravu projektové dokumentace.
              </p>
            </div>

            <div className="info-card">
              <h3>Dobrovolnictví</h3>
              <p>
                Organizujeme brigády na čištění areálu a drobné zabezpečovací
                práce. Přidejte se k našemu týmu nadšenců.
              </p>
            </div>

            <div className="info-card">
              <h3>Šíření povědomí</h3>
              <p>
                Sdílejte náš příběh. Čím více lidí o nás bude vědět, tím větší
                šanci máme dvůr zachránit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Naše cesta časem</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Založení dvora</h3>
                <p>
                  Ferdinand Hroznata z Kokořova buduje hospodářský dvůr jako
                  součást žlutického panství.
                </p>
              </div>
              <div className="timeline-year">1680</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Požár</h3>
                <p>
                  Francouzská vojska maršála Belle-Isle dvůr vypálila během
                  války o rakouské dědictví.
                </p>
              </div>
              <div className="timeline-year">1742</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Obnova</h3>
                <p>
                  Dvůr byl obnoven a pronajat obci Verušice. Správní budova
                  přestavěna na sýpku.
                </p>
              </div>
              <div className="timeline-year">1815</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Památková ochrana</h3>
                <p>Dvůr byl zapsán na státní seznam kulturních památek.</p>
              </div>
              <div className="timeline-year">1963</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Začátek záchrany</h3>
                <p>
                  Spolek Žlutický zámek zahajuje projekt záchrany Kokořovského
                  dvora.
                </p>
              </div>
              <div className="timeline-year">2024</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
