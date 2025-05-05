import {
  ImageSection,
  ImageSectionImage,
  ImageSectionContent,
} from "@/app/ui/templates/image-section";

export function AcceleratingSection() {
  return (
    <div className="max-w-page mx-auto">
      <ImageSection align="left">
        <ImageSectionContent>
          <div className="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Curious about another?
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Accelerating Neuroscience Research and Clinical Trials with Digital
            Biomarkers
          </h2>
          <p className="text-md text-gray-700">
            Head Diagnostics offers researchers an advanced digital neuro
            platform designed to capture objective, high-frequency physiological
            data that can transform the study of brain diseases and injuries.
          </p>
        </ImageSectionContent>
        <ImageSectionImage
          src="/research/researchers-discussing.png"
          alt="Researchers discussing brain data"
        />
      </ImageSection>
    </div>
  );
}
