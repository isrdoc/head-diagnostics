import { ImageSectionContent } from "@/app/ui/templates/image-section";
import { List } from "@/app/ui/common/list";

export function ClinicalResearchSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <ImageSectionContent className="sm:w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Clinical Impact
            </h2>
            <List
              items={[
                "Reduce diagnostic uncertainty and reliance on subjective assessments",
                "Improve patient outcomes through timely intervention",
                "Support remote care and telemedicine with real-time data",
                "Facilitate multi-disciplinary collaboration with shared data access",
              ]}
            />
          </ImageSectionContent>
          <ImageSectionContent className="sm:w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Research-Backed Technology
            </h2>
            <p className="text-gray-700">
              Our device measures ocular microtremor (OMT), a novel biomarker
              linked to brainstem function, combined with motor and gait
              analysis. This multimodal approach is supported by ongoing
              clinical studies, including collaborations with RCSI and Beaumont
              Hospital for Multiple Sclerosis monitoring.
            </p>
          </ImageSectionContent>
        </div>
      </div>
    </section>
  );
}
