import {
  IconCard,
  IconCardHeader,
  IconCardContent,
} from "@/app/ui/common/icon-card";
import {
  ClockIcon,
  ChartBarIcon,
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export function KeyFeaturesSection() {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-content mx-auto px-6">
        <div className="inline-block">
          <hr className="mb-4 border-gray-400" />
          <p className="mb-2 text-sm font-semibold text-gray-700 uppercase">
            Curious about another?
          </p>
          <h2 className="text-5xl font-bold mb-12">Key Features</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <IconCard>
            <IconCardHeader
              icon={<ClockIcon className="w-8 h-8 text-white" />}
              title="Rapid Diagnostic Support"
            />
            <IconCardContent>
              Obtain objective data on brain impairment in conditions such as
              concussion, Parkinson's Disease, stroke, and MS within minutes.
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardHeader
              icon={<ChartBarIcon className="w-8 h-8 text-white" />}
              title="Continuous Patient Monitoring"
            />
            <IconCardContent>
              Track disease progression and response to treatment with
              longitudinal data collected remotely or in clinic.
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardHeader
              icon={
                <AdjustmentsHorizontalIcon className="w-8 h-8 text-white" />
              }
              title="Customizable Dashboards"
            />
            <IconCardContent>
              Access patient data via intuitive clinician portals with alerts
              for significant changes.
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardHeader
              icon={<ArrowPathIcon className="w-8 h-8 text-white" />}
              title="Seamless Integration"
            />
            <IconCardContent>
              Compatible with electronic health records (EHR) and existing
              clinical systems, ensuring smooth adoption.
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardHeader
              icon={<ShieldCheckIcon className="w-8 h-8 text-white" />}
              title="Regulatory Compliance"
            />
            <IconCardContent>
              Designed with HIPAA and GDPR standards for data privacy and
              security.
            </IconCardContent>
          </IconCard>
        </div>
      </div>
    </section>
  );
}
