import { Hero } from "./ui/hero";
import { ObjectiveSection } from "./ui/objective-section";
import { KeyFeaturesSection } from "./ui/key-features-section";
import { ClinicalResearchSection } from "./ui/clinical-research-section";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <div className="w-full mb-12" />
      <ObjectiveSection />
      <KeyFeaturesSection />
      <ClinicalResearchSection />
    </main>
  );
}
