import type { Metadata } from "next";
import Hero from "../components/Hero";
import { getEventsWithDates } from "../lib/aktuality";

export const metadata: Metadata = {
  title: "Kokořovský dvůr | Žlutice 1680",
  description:
    "Zachraňme společně Kokořovský dvůr ve Žluticích. Historická kulturní památka z roku 1680 hledá cestu k obnově.",
};

export default function Home() {
  const events = getEventsWithDates();
  return <Hero events={events} />;
}
