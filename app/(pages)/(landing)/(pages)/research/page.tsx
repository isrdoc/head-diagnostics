import { Hero } from "./ui/hero";
import { AcceleratingSection } from "./ui/accelerating-section";
import { ResearchToolsSection } from "./ui/research-tools-section";
import { CollaborationsStudiesSection } from "./ui/collaborations-studies-section";
import { WhyChooseSection } from "./ui/why-choose-section";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <div className="w-full mb-12" />
      <AcceleratingSection />
      <ResearchToolsSection />
      <CollaborationsStudiesSection />
      <WhyChooseSection />
    </main>
  );
}
