export function WhatExpectSection() {
  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-content mx-auto px-6">
        <hr className="mb-8 border-gray-300" />
        <p className="mb-2 text-sm font-semibold text-gray-700 uppercase">
          Curious about another?
        </p>
        <h2 className="text-5xl font-bold mb-12">What You Can Expect</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Fast and Easy Testing */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#6C7BC4] rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <polyline points="7 7 12 12 7 17" />
                <polyline points="13 7 18 12 13 17" />
              </svg>
            </div>
            <div className="font-bold text-lg mb-2">Fast and Easy Testing</div>
            <div className="text-gray-700">
              Perform quick assessments using our portable device that measures
              subtle physiological signals, such as ocular microtremor and motor
              function.
            </div>
          </div>
          {/* Clear, Understandable Results */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#6C7BC4] rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="9 12 12 15 16 10" />
              </svg>
            </div>
            <div className="font-bold text-lg mb-2">
              Clear, Understandable Results
            </div>
            <div className="text-gray-700">
              Receive immediate feedback about your neurological status with
              easy-to-interpret reports.
            </div>
          </div>
          {/* Continuous Monitoring */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#6C7BC4] rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M4 12h4l2 5 4-10 2 5h4" />
              </svg>
            </div>
            <div className="font-bold text-lg mb-2">Continuous Monitoring</div>
            <div className="text-gray-700">
              Track your brain health over time to identify changes early and
              share data securely with your healthcare provider.
            </div>
          </div>
          {/* Privacy and Security */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-[#6C7BC4] rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <div className="font-bold text-lg mb-2">Privacy and Security</div>
            <div className="text-gray-700">
              Your data is protected with industry-standard encryption and
              handled with strict confidentiality.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
