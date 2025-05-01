import {
  ImageSection,
  ImageSectionImage,
  ImageSectionContent,
} from "@/app/ui/templates/image-section";

export function EmpoweringSection() {
  return (
    <div className="max-w-page mx-auto">
      <ImageSection align="left">
        <ImageSectionContent>
          <div className="mb-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            Curious about another?
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight md:leading-snug lg:leading-snug"
            style={{ lineHeight: 1.18, paddingBottom: "1.5rem" }}
          >
            Empowering You
            <br />
            with Rapid,
            <br />
            Accessible Brain
            <br />
            Health Assessment
          </h2>
          <p className="text-md text-gray-700">
            At Head Diagnostics, we believe that early detection and continuous
            monitoring of brain health should be accessible, simple, and
            reliable. Our handheld medical device, iTremor One, offers a rapid,
            non-invasive way to assess brain impairment caused by concussion,
            Parkinson&apos;s Disease, Multiple Sclerosis, stroke, and other
            neurological conditions — all from the comfort of your home or
            clinic.
          </p>
        </ImageSectionContent>
        <ImageSectionImage
          src="/patients/doctor-holding-hands-with-patient.png"
          alt="Doctor holding hands with patient, brain health assessment"
        />
      </ImageSection>
    </div>
  );
}
