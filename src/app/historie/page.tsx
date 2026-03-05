import type { Metadata } from "next";
import PageHeader from "../../components/PageHeader";
import HistorieContent from "../../components/HistorieContent";

export const metadata: Metadata = {
  title: "Historie",
  description:
    "Stručná historie Kokořovského dvora ve Žluticích od roku 1680 do současnosti.",
};

export default function HistoriePage() {
  return (
    <div className="bg-parchment min-h-screen">
      <PageHeader title="Historie" />
      <HistorieContent />
    </div>
  );
}
