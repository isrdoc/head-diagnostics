import { Button } from "@/app/ui/button";

interface SolutionCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  href: string;
}

const solutions: SolutionCardProps[] = [
  {
    title: "For Patients",
    subtitle: "Empowering you with accessible at-home brain health assessments",
    description:
      "Our handheld device and connected platform enable patients to perform rapid, non-invasive tests for concussion, Parkinson's Disease, stroke, and other brain conditions. Patients gain visibility into their neurological health with easy-to-understand results and continuous monitoring options — all designed with privacy and convenience in mind.",
    features: [
      "Rapid assessment of brain impairment",
      "User-friendly, portable device",
      "Real-time feedback and progress tracking",
      "Secure, private data management",
    ],
    href: "/for-patients",
  },
  {
    title: "For Clinicians",
    subtitle: "Supporting objective, data-driven clinical decisions",
    description:
      "Our interoperable neuro platform delivers real-time, quantitative neurophysiological data directly to clinicians. This enables more accurate and timely diagnosis of brain diseases, improved patient monitoring, and personalized treatment planning. Seamlessly integrate with existing clinical workflows and electronic health records.",
    features: [
      "Objective diagnostic biomarkers",
      "Continuous patient monitoring",
      "Customizable clinician dashboards",
      "HIPAA-compliant data security",
    ],
    href: "/for-clinicians",
  },
  {
    title: "For Researchers",
    subtitle: "Accelerating neuroscience research and clinical trials",
    description:
      "Head Diagnostics provides researchers with access to rich, longitudinal neuro data via our platform. Our tools facilitate patient recruitment, remote monitoring, and digital clinical endpoints, enabling faster and more efficient trials in neurodegenerative and brain injury conditions.",
    features: [
      "Large-scale, de-identified datasets",
      "Remote patient engagement tools",
      "AI-powered analytics for biomarker discovery",
      "Support for multi-site clinical studies",
    ],
    href: "/for-researchers",
  },
];

export function SolutionsSection() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/4">
            <div className="border-t border-gray-400 pt-4">
              <div className="mb-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Comprehensive Solutions for Every Stakeholder
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight md:leading-snug lg:leading-snug"
                style={{ lineHeight: 1.18 }}
              >
                Solutions
              </h2>
            </div>
          </div>

          <div className="flex-1">
            <div className="grid gap-8 lg:grid-cols-3">
              {solutions.map((solution, index) => (
                <SolutionCard key={index} {...solution} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionCard({
  title,
  subtitle,
  description,
  features,
  href,
}: SolutionCardProps) {
  return (
    <div className="flex flex-col space-y-6">
      <div className="border-t-none lg:border-t border-gray-400 pt-4">
        <div className="mb-4 text-sm font-semibold text-gray-500 uppercase tracking-wider">
          {subtitle}
        </div>
        <h3
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight md:leading-snug lg:leading-snug"
          style={{ lineHeight: 1.18 }}
        >
          {title}
        </h3>
        <p className="text-md text-gray-700">{description}</p>
      </div>
      <ul className="flex-1 space-y-1 pb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-sm">•</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Button href={href} className="w-full justify-center">
        Learn more
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Button>
    </div>
  );
}
