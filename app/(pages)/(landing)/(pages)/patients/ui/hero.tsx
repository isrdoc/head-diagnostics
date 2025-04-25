import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[520px] bg-[#001A2C]">
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
          <div className="container mx-auto max-w-content px-6 lg:px-12 h-full">
            <div className="h-full flex flex-col justify-center max-w-2xl">
              {/* Main Heading */}
              <h1 className="text-5xl font-bold text-white mb-4">
                For Patients
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Leave us a little info, and we'll be in touch.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-[#5B6CFF] hover:bg-[#4B5AE5] rounded-md transition duration-150 ease-in-out w-fit"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
