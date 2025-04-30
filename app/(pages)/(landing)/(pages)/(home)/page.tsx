import { Metadata } from "next";
import { Hero } from "./ui/hero";
import { SolutionsSection } from "./ui/solutions-section";

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
    </main>
  );
}
