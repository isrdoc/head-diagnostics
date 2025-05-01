import { List } from "@/app/ui/common/list";
import {
  ImageSection,
  ImageSectionImage,
  ImageSectionContent,
} from "@/app/ui/templates/image-section";

export function WhyChooseSection() {
  const features = [
    "Innovative Handheld Device - Unique physiological biomarker technology for rapid brain assessment",
    "Interoperable Platform - Connects patients, clinicians, and researchers in real-time",
    "AI-Driven Insights - Advanced algorithms for early detection and disease management",
    "Patient-Centered Design - Privacy-first, easy to use, and accessible",
  ];

  return (
    <div className="max-w-page mx-auto">
      <ImageSection align="right">
        <ImageSectionImage
          src="/home/doctor-consulting-with-patient.png"
          alt="Doctor consulting with patient"
        />
        <ImageSectionContent>
          <div className="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Curious about another?
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 md:pr-10 lg:pr-10 leading-tight md:leading-snug lg:leading-snug"
            style={{ lineHeight: 1.18, paddingBottom: "1.5rem" }}
          >
            Why Choose Head Diagnostics?
          </h2>
          <List items={features} />
        </ImageSectionContent>
      </ImageSection>
    </div>
  );
}
