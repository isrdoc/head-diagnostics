import {
  IconCard,
  IconCardHeader,
  IconCardContent,
} from "@/app/ui/common/icon-card";
import {
  BoltIcon,
  CheckCircleIcon,
  ChartBarIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

export function WhatExpectSection() {
  return (
    <section className="w-full py-24 bg-gray-100">
      <div className="max-w-content mx-auto px-6">
        <div className="inline-block">
          <hr className="mb-4 border-gray-400" />
          <p className="mb-2 text-sm font-semibold text-gray-700 uppercase">
            Curious about another?
          </p>
          <h2 className="text-5xl font-bold mb-12">What You Can Expect</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <IconCard>
            <IconCardHeader
              icon={<BoltIcon className="w-8 h-8 text-white" />}
              title="Fast and Easy Testing"
            />
            <IconCardContent>
              Perform quick assessments using our portable device that measures
              subtle physiological signals, such as ocular microtremor and motor
              function.
            </IconCardContent>
          </IconCard>

          <IconCard>
            <IconCardHeader
              icon={<CheckCircleIcon className="w-8 h-8 text-white" />}
              title="Clear, Understandable Results"
            />
            <IconCardContent>
              Receive immediate feedback about your neurological status with
              easy-to-interpret reports.
            </IconCardContent>
          </IconCard>

          <IconCard>
            <IconCardHeader
              icon={<ChartBarIcon className="w-8 h-8 text-white" />}
              title="Continuous Monitoring"
            />
            <IconCardContent>
              Track your brain health over time to identify changes early and
              share data securely with your healthcare provider.
            </IconCardContent>
          </IconCard>

          <IconCard>
            <IconCardHeader
              icon={<LockClosedIcon className="w-8 h-8 text-white" />}
              title="Privacy and Security"
            />
            <IconCardContent>
              Your data is protected with industry-standard encryption and
              handled with strict confidentiality.
            </IconCardContent>
          </IconCard>
        </div>
      </div>
    </section>
  );
}
