import { List } from "@/app/ui/common/list";
import {
  ImageSection,
  ImageSectionImage,
  ImageSectionContent,
} from "@/app/ui/templates/image-section";

export function WhyChooseSection() {
  const features = [
    "Non-invasive, objective digital biomarkers for neuroscience research",
    "Remote and multi-site data collection for large-scale studies",
    "AI-powered analytics for pattern discovery and disease progression",
    "Seamless integration with existing research workflows",
    "Secure, privacy-first platform for sensitive health data",
  ];

  return (
    <div className="max-w-page mx-auto">
      <ImageSection align="right">
        <ImageSectionImage
          src="/research/doctors-research-brain.png"
          alt="Why choose Head Diagnostics for research"
        />
        <ImageSectionContent>
          <div className="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Curious about another?
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 md:pr-10 lg:pr-10 leading-tight md:leading-snug lg:leading-snug"
            style={{ lineHeight: 1.18, paddingBottom: "1.5rem" }}
          >
            Why Choose Head Diagnostics for Research?
          </h2>
          <List items={features} />
        </ImageSectionContent>
      </ImageSection>
    </div>
  );
}
