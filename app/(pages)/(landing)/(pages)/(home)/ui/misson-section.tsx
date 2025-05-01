import {
  ImageSection,
  ImageSectionContent,
  ImageSectionImage,
} from "@/app/ui/templates/image-section";
import { List } from "@/app/ui/common/list";

export function MissionSection() {
  const items = [
    "Mission - To improve brain health outcomes through innovative diagnostics and data-driven insights.",
    "Vision - To be the gold standard platform for brain health assessment, enabling personalized care and accelerating therapy development.",
  ];

  return (
    <div className="max-w-page mx-auto">
      <ImageSection align="left">
        <ImageSectionContent>
          <div className="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Curious about another?
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight md:leading-snug lg:leading-snug"
            style={{ lineHeight: 1.18 }}
          >
            Mission & Vision
          </h2>
          <List items={items} />
        </ImageSectionContent>
        <ImageSectionImage
          src="/home/doctor-with-patient-blurred.png"
          alt="Doctor consulting with elderly patient"
        />
      </ImageSection>
    </div>
  );
}
