import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import PlausibleProvider from "next-plausible";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import PasswordProtection from "../components/PasswordProtection";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kokorovsky-dvur.cz"),
  title: {
    default: "Kokořovský dvůr | Žlutice 1680",
    template: "%s | Kokořovský dvůr",
  },
  description:
    "Zachraňme společně Kokořovský dvůr ve Žluticích. Historická kulturní památka z roku 1680 potřebuje vaši pomoc.",
  keywords:
    "Kokořovský dvůr, Žlutice, kulturní památka, rekonstrukce, spolek Žlutický zámek, Karlovarský kraj",
  openGraph: {
    title: "Kokořovský dvůr | Žlutice 1680",
    description: "Zachraňme společně Kokořovský dvůr ve Žluticích.",
    images: ["/images/tituln%C3%AD_str%C3%A1nka.jpg"],
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-cream text-text-dark font-serif">
        <PlausibleProvider
          domain="kokorovskydvur.cz"
          customDomain="https://plan.danielhnyk.cz"
          selfHosted
          trackOutboundLinks
        >
          <PasswordProtection>
            <Nav />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </PasswordProtection>
        </PlausibleProvider>
      </body>
    </html>
  );
}
