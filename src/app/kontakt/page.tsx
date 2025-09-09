export default function Kontakt() {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="section-title">Kontakt a lokace</h1>
          <p className="section-subtitle">
            Přijďte se podívat na Kokořovský dvůr nebo nás kontaktujte
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Spojte se s námi</h2>

          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>info@kokorovsydvur.cz</p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <h3>Telefon</h3>
              <p>+420 XXX XXX XXX</p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <h3>Adresa</h3>
              <p>
                Kokořovský dvůr
                <br />
                364 52 Žlutice
                <br />
                Česká republika
              </p>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🏦</div>
              <h3>Transparentní účet</h3>
              <p>
                <strong>349942519/0300</strong>
                <br />
                Spolek Žlutický zámek
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section" style={{ background: "#F5F0E8" }}>
        <div className="container">
          <h2 className="section-title">Kde nás najdete</h2>
          <p className="section-subtitle">
            Kokořovský dvůr se nachází ve Žluticích v Karlovarském kraji
          </p>

          <div className="info-grid">
            <div className="info-card">
              <h3>O městě Žlutice</h3>
              <p>
                Žlutice jsou historické město s bohatstvím památek. První
                písemná zmínka je z roku 1140. Od 13. století patřily pánům z
                Rýzmburka, největšího rozkvětu dosáhly za husitského hejtmana
                Jakoubka z Vřesovic.
              </p>
            </div>

            <div className="info-card">
              <h3>Jak se k nám dostat</h3>
              <p>
                <strong>Autem:</strong> Ze severu po silnici z Karlových Varů, z
                jihu ze severního Plzeňska.
                <br />
                <strong>Vlakem:</strong> Železniční stanice Žlutice.
                <br />
                <strong>Autobusem:</strong> Pravidelné spoje z Karlových Varů a
                Plzně.
              </p>
            </div>

            <div className="info-card">
              <h3>Co v okolí navštívit</h3>
              <p>
                Městské muzeum, informační centrum, podzemí - Pekelné sklepy,
                značené turistické trasy a cyklotrasy, několik naučných stezek.
                V blízkosti se nachází hrad Rabštejn nad Střelou a zámek Chyše.
              </p>
            </div>
          </div>

          <div className="map-container">
            <p style={{ fontSize: "1.25rem", fontFamily: "var(--font-sans)" }}>
              📍 GPS: 50.0885N, 13.1677E
            </p>
          </div>
        </div>
      </section>

      {/* History of Location */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Historie místa</h2>

          <div className="info-grid">
            <div className="info-card">
              <h3>Kokořovcové z Kokořova</h3>
              <p>
                Český šlechtický rod připomínaný od 15. století. Vlastnili řadu
                statků v západních Čechách, nejdéle se udrželi právě na
                Žluticích (1575–1872). V 17. století byli povýšeni do panského
                stavu, později získali hraběcí titul.
              </p>
            </div>

            <div className="info-card">
              <h3>Ferdinand Hroznata</h3>
              <p>
                Ferdinand Hroznata z Kokořova († 1708) byl c. k. tajným radou a
                komořím. V roce 1680 získal hraběcí titul a nechal vybudovat
                Kokořovský dvůr jako hospodářské centrum žlutického panství.
              </p>
            </div>

            <div className="info-card">
              <h3>Válečné události</h3>
              <p>
                Během války o rakouské dědictví v roce 1742 byl dvůr vypálen
                francouzskými vojsky maršála Belle-Isle. Francouzi byli následně
                pobiti císařskými husary u Lachovického lánu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section className="section" style={{ background: "#F5F0E8" }}>
        <div className="container">
          <h2 className="section-title">Plánujete návštěvu?</h2>
          <p className="section-subtitle">
            Momentálně je areál z bezpečnostních důvodů uzavřen veřejnosti
          </p>

          <div className="bank-account">
            <h3>⚠️ Důležité upozornění</h3>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "1.125rem",
              }}
            >
              Areál Kokořovského dvora je v havarijním stavu a vstup je možný
              pouze po předchozí domluvě během organizovaných akcí.
            </p>
            <p style={{ color: "rgba(255, 255, 255, 0.9)", marginBottom: 0 }}>
              Sledujte naše stránky pro informace o připravovaných brigádách a
              dnech otevřených dveří.
            </p>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h3>Brigády</h3>
              <p>
                Pravidelně organizujeme dobrovolnické brigády na úklid areálu.
                Termíny zveřejňujeme s předstihem.
              </p>
            </div>

            <div className="info-card">
              <h3>Prohlídky</h3>
              <p>
                Speciální komentované prohlídky pro skupiny lze domluvit
                emailem. Maximální počet osob ve skupině je 15.
              </p>
            </div>

            <div className="info-card">
              <h3>Fotografie</h3>
              <p>
                Pro fotografy a filmaře můžeme po domluvě umožnit vstup do
                vybraných částí areálu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
