import Image from "next/image";

export default function ONas() {
  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="section-title">O nás</h1>
          <p className="section-subtitle">
            Jsme spolek nadšenců, kteří se rozhodli zachránit kus české historie
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Spolek Žlutický zámek</h2>
          <p className="section-subtitle">
            Malý spolek s velkým snem – zachránit Kokořovský dvůr
          </p>

          {/* Decorative image */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem 0 3rem 0",
              opacity: 0.9,
            }}
          >
            <div
              style={{
                position: "relative",
                width: "200px",
                height: "200px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(44, 24, 16, 0.15)",
                transform: "rotate(-2deg)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "rotate(0deg) scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "rotate(-2deg) scale(1)")
              }
            >
              <Image
                src="/images/mamka.png"
                alt="Momentka z rekonstrukce"
                fill
                style={{ objectFit: "cover" }}
                sizes="200px"
              />
            </div>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <h3>Kdo jsme</h3>
              <p>
                Jsme spolek tří nadšenců, kteří se v roce 2024 rozhodli, že
                nenecháme Kokořovský dvůr ve Žluticích zmizet. Spojuje nás láska
                k historii, architektuře a víra, že i malá skupina lidí může
                dokázat velké věci.
              </p>
            </div>

            <div className="info-card">
              <h3>Naše poslání</h3>
              <p>
                Našim cílem je záchrana a citlivá rekonstrukce Kokořovského
                dvora. Chceme zachovat tuto památku pro budoucí generace a
                vrátit jí život jako kulturnímu a komunitnímu centru regionu.
              </p>
            </div>

            <div className="info-card">
              <h3>Naše hodnoty</h3>
              <p>
                Transparentnost, odpovědnost a respekt k historii. Každý krok
                dokumentujeme, každou korunu vyúčtováváme a každé rozhodnutí
                konzultujeme s odborníky na památkovou péči.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section" style={{ background: "#F5F0E8" }}>
        <div className="container">
          <h2 className="section-title">Náš tým</h2>
          <p className="section-subtitle">
            Tři lidé, jedna vize – zachránit Kokořovský dvůr
          </p>

          <div className="info-grid">
            <div className="info-card">
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #D4AF37, #8B4513)",
                  margin: "0 auto 1rem",
                }}
              ></div>
              <h3>Předseda spolku</h3>
              <p>
                Koordinuje činnost spolku, jedná s úřady a partnery. Má bohaté
                zkušenosti s řízením projektů a péčí o památky.
              </p>
            </div>

            <div className="info-card">
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #8B4513, #D4AF37)",
                  margin: "0 auto 1rem",
                }}
              ></div>
              <h3>Projektový manažer</h3>
              <p>
                Zajišťuje přípravu projektové dokumentace, komunikaci s
                odborníky a koordinaci rekonstrukčních prací.
              </p>
            </div>

            <div className="info-card">
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #654321, #D4AF37)",
                  margin: "0 auto 1rem",
                }}
              ></div>
              <h3>PR a fundraising</h3>
              <p>
                Stará se o komunikaci s veřejností, správu sociálních sítí a
                získávání finančních prostředků na záchranu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Naše cíle do roku 2030</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Zabezpečení objektu</h3>
                <p>
                  Provizorní zastřešení a statické zajištění nejohroženějších
                  částí.
                </p>
              </div>
              <div className="timeline-year">2024</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Projektová dokumentace</h3>
                <p>
                  Vypracování kompletní dokumentace pro rekonstrukci včetně
                  všech povolení.
                </p>
              </div>
              <div className="timeline-year">2025</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Zahájení rekonstrukce</h3>
                <p>
                  Start první etapy rekonstrukce – oprava střech a nosných
                  konstrukcí.
                </p>
              </div>
              <div className="timeline-year">2026</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Částečné zpřístupnění</h3>
                <p>
                  Otevření první části dvora pro veřejnost, zahájení kulturních
                  akcí.
                </p>
              </div>
              <div className="timeline-year">2028</div>
            </div>

            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Plný provoz</h3>
                <p>
                  Kokořovský dvůr funguje jako živé kulturní centrum regionu.
                </p>
              </div>
              <div className="timeline-year">2030</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section" style={{ background: "#F5F0E8" }}>
        <div className="container">
          <h2 className="section-title">Spolupracujeme s</h2>
          <p className="section-subtitle">
            Děkujeme všem, kteří nás podporují v našem úsilí
          </p>

          <div className="info-grid">
            <div className="info-card">
              <h3>Město Žlutice</h3>
              <p>
                Město Žlutice nás podporuje při jednáních a pomáhá s propagací
                projektu záchrany.
              </p>
            </div>

            <div className="info-card">
              <h3>Památkáři</h3>
              <p>
                Úzce spolupracujeme s odborníky na památkovou péči, kteří
                dohlížejí na citlivý přístup k rekonstrukci.
              </p>
            </div>

            <div className="info-card">
              <h3>Místní komunita</h3>
              <p>
                Bez podpory místních obyvatel by naše práce nebyla možná.
                Děkujeme za každou pomocnou ruku.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div className="bank-account">
            <h3>Přidejte se k nám</h3>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "1.125rem",
              }}
            >
              Společně dokážeme zachránit Kokořovský dvůr
            </p>
            <div className="account-number">349942519/0300</div>
            <p style={{ color: "rgba(255, 255, 255, 0.9)", marginBottom: 0 }}>
              Spolek Žlutický zámek, z.s.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
