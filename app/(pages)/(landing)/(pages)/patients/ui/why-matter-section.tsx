import {
  ImageSection,
  ImageSectionImage,
  ImageSectionContent,
} from "@/app/ui/templates/image-section";

export function WhyMatterSection() {
  return (
    <div className="max-w-page mx-auto">
      <ImageSection align="right" className="py-0 pb-0">
        <ImageSectionImage
          src="/patients/elderly-woman-doctor.png"
          alt="Elderly woman with doctor in background"
        />
        <ImageSectionContent>
          <div className="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Curious about another?
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Why Does It
            <br />
            Matter?
          </h2>
          <p className="text-md text-gray-700">
            Millions worldwide live with neurological conditions that can
            progress silently. Early and objective assessment helps you take
            control of your health, enabling timely interventions and better
            outcomes.
          </p>
        </ImageSectionContent>
      </ImageSection>
    </div>
  );
}
