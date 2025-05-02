import Header from "./ui/header";
import { Footer } from "./ui/footer";
import { GoogleMapSection } from "./ui/google-map-section";
import { ContactSection } from "./ui/contact-section";

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <GoogleMapSection />
      <ContactSection />
      <Footer />
    </>
  );
}
