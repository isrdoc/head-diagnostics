import { List } from "@/app/ui/common/list";

export function WhyChooseSection() {
  const features = [
    "Innovative Handheld Device - Unique physiological biomarker technology for rapid brain assessment",
    "Interoperable Platform - Connects patients, clinicians, and researchers in real-time",
    "AI-Driven Insights - Advanced algorithms for early detection and disease management",
    "Patient-Centered Design - Privacy-first, easy to use, and accessible",
  ];

  return (
    <div className="mr-viewport-offset py-16 pb-28">
      <div className="w-full flex flex-col md:flex-row items-center gap-12 md:gap-20 lg:gap-36">
        {/* Left: Image */}
        <div className="flex-1 flex justify-end items-center w-full h-full">
          <img
            src="/home/doctor-consulting-with-patient.png"
            alt="Doctor consulting with patient"
            className="shadow-lg object-cover w-full max-w-none h-[400px] md:h-[500px] lg:h-[500px] xl:h-[500px]"
            style={{ maxWidth: "100%", objectPosition: "center" }}
          />
        </div>

        {/* Right: Content */}
        <div className="border-t border-gray-400 min-w-0 w-full sm:w-[28rem] pt-4 px-6 sm:px-0">
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
        </div>
      </div>
    </div>
  );
}
