import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import PasswordProtection from "../components/PasswordProtection";

const playfair = Playfair_Display({
  subsets: ["latin"],
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
  title: "Kokořovský dvůr | Žlutice 1680",
  description:
    "Zachraňme společně Kokořovský dvůr ve Žluticích. Historická památka z roku 1680 potřebuje vaši pomoc.",
  keywords:
    "Kokořovský dvůr, Žlutice, památka, rekonstrukce, spolek Žlutický zámek",
  openGraph: {
    title: "Kokořovský dvůr | Žlutice 1680",
    description: "Zachraňme společně Kokořovský dvůr ve Žluticích.",
    images: ["/images/flyover.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={`${playfair.variable} ${inter.variable}`}>
      <body className={playfair.className}>
        <PasswordProtection>
          <Navigation />
          <main className="main-content">{children}</main>
        </PasswordProtection>
      </body>
    </html>
  );
}
