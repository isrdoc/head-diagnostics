import React from "react";

export function ObjectiveSection() {
  return (
    <div className="ml-viewport-offset py-16 pb-28">
      <div className="w-full mb-12" />
      <div className="w-full flex flex-col md:flex-row items-center gap-12 md:gap-8 lg:gap-14">
        {/* Left: Text Content */}
        <div className="border-t border-gray-400 min-w-0 w-[28rem] pt-4 mr-viewport-offset">
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
            Parkinson's Disease, Multiple Sclerosis, stroke, and other
            neurological conditions — all from the comfort of your home or
            clinic.
          </p>
        </div>
        {/* Right: Image */}
        <div className="mt-16 flex-1 flex justify-end items-center w-full h-full">
          <img
            src="/patients/doctor-holding-hands-with-patient.png"
            alt="Doctor holding hands with patient, brain health assessment"
            className="shadow-lg object-cover w-full max-w-none h-[400px] md:h-[500px] lg:h-[500px] xl:h-[500px]"
            style={{ maxWidth: "100%", objectPosition: "center" }}
          />
        </div>
      </div>
    </div>
  );
}
