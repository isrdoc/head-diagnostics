import {
  BriefcaseIcon,
  FaceFrownIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import {
  IconCard,
  IconCardHeader,
  IconCardContent,
} from "@/app/ui/common/icon-card";

export function WhoUseItSection() {
  return (
    <section className="w-full py-24 bg-gray-100">
      <div className="max-w-content mx-auto px-6">
        <div className="inline-block w-full mb-6">
          <hr className="mb-8 border-gray-300 w-full max-w-xl" />
          <p className="mb-2 text-sm font-semibold text-gray-700 uppercase">
            Curious about another?
          </p>
          <h2 className="text-5xl font-bold mb-12">Who Should Use It</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <IconCard>
            <IconCardHeader
              icon={<FaceFrownIcon className="w-8 h-8 text-white" />}
              title="Concussion"
            />
            <IconCardContent>
              Individuals recovering from concussion or mild traumatic brain
              injury (mTBI)
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardHeader
              icon={<BriefcaseIcon className="w-8 h-8 text-white" />}
              title="Parkinson's Disease or Multiple Sclerosis"
            />
            <IconCardContent>
              People diagnosed with or at risk for Parkinson's Disease or
              Multiple Sclerosis
            </IconCardContent>
          </IconCard>
          <IconCard>
            <IconCardHeader
              icon={
                <PresentationChartLineIcon className="w-8 h-8 text-white" />
              }
              title="Brain health monitoring"
            />
            <IconCardContent>
              Anyone seeking proactive brain health monitoring
            </IconCardContent>
          </IconCard>
        </div>
      </div>
    </section>
  );
}
