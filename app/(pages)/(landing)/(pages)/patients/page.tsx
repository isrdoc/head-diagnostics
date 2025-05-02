import { Hero } from "./ui/hero";
import { EmpoweringSection } from "./ui/empowering-section";
import { GoogleMapSection } from "../../ui/google-map-section";
import { ContactSection } from "../../ui/contact-section";
import { Footer } from "../../ui/footer";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <div className="w-full mb-12" />
      <EmpoweringSection />
    </main>
  );
}
