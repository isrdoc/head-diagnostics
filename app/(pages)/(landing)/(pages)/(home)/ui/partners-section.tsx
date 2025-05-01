import Image from "next/image";
import clsx from "clsx";

const partners = [
  {
    name: "Enterprise Ireland",
    logo: "/partners/enterprise-ireland.png",
  },
  {
    name: "Beaumont Hospital",
    logo: "/partners/beaumont-hospital.png",
  },
  {
    name: "Tallaght University Hospital",
    logo: "/partners/tallaght-university-hospital.png",
  },
  {
    name: "Royal College of Surgeons Ireland",
    logo: "/partners/rcsi.png",
  },
  {
    name: "University College Dublin",
    logo: "/partners/ucd.png",
  },
];

export function PartnersSection() {
  return (
    <section className="py-24">
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          <div>
            <h2 className="text-sm uppercase tracking-wider mb-4">OUR</h2>
            <h3 className="text-5xl font-bold leading-tight">
              Partners
              <br />
              for the long run.
            </h3>
          </div>

          <div className="lg:col-span-2">
            <div className="flex flex-wrap justify-center md:justify-start">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className={clsx(
                    "w-1/2 md:w-1/3 p-6",
                    "flex items-center justify-center"
                  )}
                >
                  <div className="relative w-full h-[80px]">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
