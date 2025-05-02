import {
  LogosSection,
  LogosSectionTitle,
  LogosSectionGrid,
  LogosSectionItemWithLabel,
} from "@/app/ui/templates/logos-section";

const awards = [
  {
    name: "Developer Award",
    label: "5x Developer Award",
    logo: "/awards/ai-ireland-award.png",
  },
  {
    name: "Website of the Day",
    label: "3x Website of the Day",
    logo: "/awards/ai-ireland-award.png",
  },
  {
    name: "Mobile of the Day",
    label: "5x Mobile of the Day",
    logo: "/awards/ai-ireland-award.png",
  },
  {
    name: "Mobile of the Day 2",
    label: "5x Mobile of the Day",
    logo: "/awards/ai-ireland-award.png",
  },
  {
    name: "Developer Award 2",
    label: "5x Developer Award",
    logo: "/awards/ai-ireland-award.png",
  },
];

export function AwardsSection() {
  return (
    <LogosSection className="bg-gray-100">
      <LogosSectionTitle>
        <h2 className="text-sm uppercase tracking-wider mb-4">
          AWARDS & HONORS
        </h2>
        <h3 className="text-5xl font-bold leading-tight">
          The awards
          <br />
          won by our
          <br />
          projects.
        </h3>
      </LogosSectionTitle>

      <LogosSectionGrid>
        {awards.map((award) => (
          <LogosSectionItemWithLabel
            key={award.name}
            src={award.logo}
            alt={award.name}
            label={award.label}
          />
        ))}
      </LogosSectionGrid>
    </LogosSection>
  );
}
