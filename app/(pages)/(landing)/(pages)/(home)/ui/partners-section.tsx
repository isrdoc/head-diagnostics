import {
  LogosSection,
  LogosSectionTitle,
  LogosSectionGrid,
  LogosSectionItem,
} from "@/app/ui/templates/logos-section";

const partners = [
  {
    name: "Enterprise Ireland",
    logo: "/partners/enterprise-ireland.png",
  },
  {
    name: "Beaumont Hospital",
    logo: "/partners/beaumont-hospital.png",
  },
  {
    name: "Tallaght University Hospital",
    logo: "/partners/tallaght-university-hospital.png",
  },
  {
    name: "Royal College of Surgeons Ireland",
    logo: "/partners/rcsi.png",
  },
  {
    name: "University College Dublin",
    logo: "/partners/ucd.png",
  },
];

export function PartnersSection() {
  return (
    <LogosSection>
      <LogosSectionTitle>
        <h2 className="text-sm uppercase tracking-wider mb-4">OUR</h2>
        <h3 className="text-5xl font-bold leading-tight">
          Partners
          <br />
          for the long run.
        </h3>
      </LogosSectionTitle>

      <LogosSectionGrid>
        {partners.map((partner) => (
          <LogosSectionItem
            key={partner.name}
            src={partner.logo}
            alt={partner.name}
          />
        ))}
      </LogosSectionGrid>
    </LogosSection>
  );
}
