import Header from "./ui/header";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Head Diagnostics",
  description:
    "Precision brain health diagnostics & monitoring solutions for patients, clinicians, and researchers.",
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <div className="relative h-screen bg-[#001A2C]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/hero-brain.jpg"
              alt="Interactive brain visualization"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Hero Content */}
          <div className="relative h-full">
            <div className="h-full w-full min-[1150px]:w-1/2 min-[1150px]:ml-auto px-6 lg:px-12">
              <div className="h-full max-w-xl flex flex-col relative ml-auto min-[1150px]:ml-0">
                {/* Main Heading */}
                <div className="pt-[20vh]">
                  <div className="border-t-2 border-white/30 pt-8">
                    <p className="text-sm uppercase tracking-widest text-white/80 mb-4">
                      Precision brain health diagnostics & monitoring
                    </p>
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
                      Empowering Brain Health with Precision Diagnostics
                    </h1>
                  </div>
                </div>

                {/* Feature Boxes */}
                <div className="mt-auto mb-16 min-[400px]:mb-8">
                  <div className="flex gap-6">
                    <div className="flex-1 border-t-2 border-white/30 pt-2">
                      <p className="text-white/60 text-lg mb-2">02.</p>
                      <p className="text-white text-lg font-medium leading-snug">
                        Patient-centered design emphasizing privacy, dignity,
                        and comfort
                      </p>
                    </div>

                    <div className="flex-1 border-t-2 border-white/30 pt-2 hidden min-[400px]:block">
                      <p className="text-white/60 text-lg mb-2">03.</p>
                      <p className="text-white text-lg font-medium leading-snug">
                        Cutting-edge medical-grade technology for cognitive,
                        motor, and functional assessment
                      </p>
                    </div>

                    <div className="flex-1 border-t-2 border-white/30 pt-2 hidden min-[400px]:block">
                      <p className="text-white/60 text-lg mb-2">04.</p>
                      <p className="text-white text-lg font-medium leading-snug">
                        Integration of AI and machine learning for precise data
                        analysis and actionable insights
                      </p>
                    </div>
                  </div>
                </div>

                {/* Navigation Arrows */}
                <div className="absolute bottom-0 right-0 flex">
                  <button className="w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                  <button className="w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 transition-colors flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* About Box */}
          <div className="absolute bottom-0 left-24 hidden min-[1150px]:block">
            <div className="max-w-[500px] bg-[#6276B7] bg-opacity-90 backdrop-blur-sm px-8 pr-16 pt-10 pb-24">
              <p className="text-white text-md font-medium tracking-widest mb-2">
                ABOUT
              </p>
              <p className="text-white/90 text-md leading-relaxed">
                Founded in 20XX in Ireland. Head Diagnostics is a pioneer in
                Ocular Micro Tremor (OMT).
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
