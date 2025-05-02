import { Hero } from "./ui/hero";
import { EmpoweringSection } from "./ui/empowering-section";
import { WhatExpectSection } from "./ui/what-expect-section";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <div className="w-full mb-12" />
      <EmpoweringSection />
      <WhatExpectSection />
    </main>
  );
}
