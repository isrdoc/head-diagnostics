import {
  ImageSection,
  ImageSectionImage,
  ImageSectionContent,
} from "@/app/ui/templates/image-section";

export function ObjectiveSection() {
  return (
    <div className="max-w-page mx-auto">
      <ImageSection align="left">
        <ImageSectionContent>
          <div className="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Curious about another?
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Objective, Real-Time Neurological Data to Enhance Clinical Care
          </h2>
          <p className="text-md text-gray-700">
            Head Diagnostics equips clinicians with a powerful, interoperable
            neuro platform that integrates seamlessly into your workflow. Our
            handheld device and connected software deliver quantifiable
            biomarkers that improve the accuracy, speed, and confidence of
            neurological diagnosis and monitoring.
          </p>
        </ImageSectionContent>
        <ImageSectionImage
          src="/clinicians/doctor-consulting-patient.png"
          alt="Doctor consulting with patient"
        />
      </ImageSection>
    </div>
  );
}
