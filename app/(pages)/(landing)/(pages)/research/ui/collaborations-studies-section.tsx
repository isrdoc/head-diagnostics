import { ImageSectionContent } from "@/app/ui/templates/image-section";

export function CollaborationsStudiesSection() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <ImageSectionContent className="sm:w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Current Collaborations
            </h2>
            <p className="text-gray-700">
              Partnering with RCSI and Beaumont Hospital on a 12-month
              observational study assessing MS progression using OMT and gait
              analysis.
            </p>
          </ImageSectionContent>
          <ImageSectionContent className="sm:w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Studies</h2>
            <p className="text-gray-700">
              Supporting research in concussion, Parkinson&apos;s Disease,
              stroke, and other neurodegenerative disorders.
            </p>
          </ImageSectionContent>
        </div>
      </div>
    </section>
  );
}
