"use client";

import Image from "next/image";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export function WebinarsSection() {
  return (
    <section className="relative w-full min-h-[520px] flex items-center justify-center overflow-hidden">
      <Image
        src="/webinars/brain-scans.jpg"
        alt="Brain scans background"
        fill
        className="object-cover object-center z-0"
        priority
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full h-full py-24 max-w-content mx-auto px-6">
        <div className="flex-1 flex flex-col items-center md:items-start justify-center mb-12 md:mb-0">
          <p className="text-white text-sm font-medium mb-4 text-center md:text-left tracking-widest uppercase">
            Upcoming and past events for clinicians and researchers
          </p>
          <h2 className="text-white text-5xl md:text-6xl font-bold text-center md:text-left">
            Webinars & Events
          </h2>
        </div>
        <div className="flex-1 flex justify-end w-full">
          <div className="bg-[#6C7BC4] rounded-lg shadow-xl p-16 w-full text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex flex-col items-start">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <Image
                    src="/team/killian-osullivan.png"
                    alt="Killian O'Sullivan"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="inline-block bg-white/10 text-white/90 px-4 py-2 rounded-lg text-base font-medium mt-4">
                  Design Quality
                </div>
              </div>
            </div>
            <p className="mb-6 text-lg leading-normal">
              I would put 10 stars to all points. From theme features, design,
              to Customer support, I only have to say "WOW". Cannot express
              myself better, to explain how great and satisfied we are with this
              theme and their support! Fantastic product and service!
            </p>
            <div className="font-bold mb-1">Killian O'Sullivan</div>
            <div className="text-white/80 mb-8">
              UI Designer · Interactive Media
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span>03</span>
                <span className="w-10 h-1 bg-white/30 rounded-full inline-block" />
                <span>05</span>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                  <ArrowLeftIcon className="h-6 w-6" />
                </button>
                <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                  <ArrowRightIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
