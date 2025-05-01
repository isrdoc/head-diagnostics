import { Metadata } from "next";
import { Hero } from "./ui/hero";
import { SolutionsSection } from "./ui/solutions-section";
import { WhyChooseSection } from "./ui/why-choose-section";
import { MissionSection } from "./ui/misson-section";
import { TeamSection } from "./ui/team-section";
import { PartnersSection } from "./ui/partners-section";
import { NewsSection } from "./ui/news-section";
import { AwardsSection } from "./ui/awards-section";
import { PublicationsSection } from "./ui/publications-section";

export const metadata: Metadata = {
  title: "Head Diagnostics",
  description:
    "Precision brain health diagnostics & monitoring solutions for patients, clinicians, and researchers.",
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <SolutionsSection />
      <WhyChooseSection />
      <MissionSection />
      <TeamSection />
      <PartnersSection />
      <NewsSection />
      <PublicationsSection />
      <AwardsSection />
    </main>
  );
}
