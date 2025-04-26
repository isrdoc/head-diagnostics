import { Hero } from "./ui/hero";
import { ObjectiveSection } from "./ui/objective-section";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <ObjectiveSection />
    </main>
  );
}
