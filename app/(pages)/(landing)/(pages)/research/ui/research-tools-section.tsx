import {
  IconCard,
  IconCardHeader,
  IconCardContent,
} from "@/app/ui/common/icon-card";
import {
  BeakerIcon,
  DeviceTabletIcon,
  Squares2X2Icon,
  CpuChipIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export function ResearchToolsSection() {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-content mx-auto px-6">
        <div className="inline-block">
          <hr className="mb-4 border-gray-400" />
          <p className="mb-2 text-sm font-semibold text-gray-700 uppercase">
            Curious about another?
          </p>
          <h2 className="text-5xl font-bold mb-12">
            Research Tools & Capabilities
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <IconCard>
            <IconCardHeader
              icon={<BeakerIcon className="w-8 h-8 text-white" />}
              title="Innovative Biomarkers"
            />
            <IconCardContent>
              Utilize ocular microtremor (OMT), gait, and motor function data as
              sensitive digital endpoints.
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardHeader
              icon={<DeviceTabletIcon className="w-8 h-8 text-white" />}
              title="Remote Patient Monitoring"
            />
            <IconCardContent>
              Engage study participants outside the clinic with portable,
              easy-to-use devices.
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardHeader
              icon={<Squares2X2Icon className="w-8 h-8 text-white" />}
              title="Large-Scale Data Collection"
            />
            <IconCardContent>
              Access de-identified, longitudinal datasets for biomarker
              discovery and validation.
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardHeader
              icon={<CpuChipIcon className="w-8 h-8 text-white" />}
              title="AI-Powered Analytics"
            />
            <IconCardContent>
              Leverage machine learning to uncover patterns and predict disease
              progression.
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardHeader
              icon={<GlobeAltIcon className="w-8 h-8 text-white" />}
              title="Multi-Site Trial Support"
            />
            <IconCardContent>
              Facilitate standardized data collection and management across
              locations.
            </IconCardContent>
          </IconCard>
        </div>
      </div>
    </section>
  );
}
