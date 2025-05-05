import Image from "next/image";
import { Button } from "@/app/ui/common/button";

export function Hero() {
  return (
    <div className="relative h-[520px] bg-[#001A2C]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-brain.jpg"
          alt="Clinician with brain visualization"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative h-full">
        <div className="container mx-auto max-w-content px-6 lg:px-12 h-full">
          <div className="h-full flex flex-col justify-center max-w-2xl">
            {/* Main Heading */}
            <h1 className="text-5xl font-bold text-white mb-4">
              For Clinicians
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Leave us a little info, and we&apos;ll be in touch.
            </p>
            <Button href="/contact" className="w-fit">
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
