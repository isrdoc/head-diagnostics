import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

export function TeamSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-content px-6 mb-12">
        <h2 className="text-sm uppercase tracking-wider mb-4">OUR TEAM</h2>
        <h3 className="text-5xl font-bold">Meet the Team.</h3>
      </div>

      <div className="w-full bg-black">
        <div className="max-w-page mx-auto bg-black">
          <div className="text-white grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="grid grid-cols-1 gap-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                <TextCell
                  name="David van Zuydam"
                  role="CEO"
                  description="Medical Devices, IOT Industry, CFO, Private Equity, Interim Management, Supply Chain & Logistics."
                  facebook="#"
                  className="order-last sm:order-first"
                />
                <ImageCell
                  image="/team/david-van-zuydam.png"
                  alt="David van Zuydam"
                  className="order-first sm:order-last"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                <ImageCell
                  image="/team/killian-osullivan.png"
                  alt="Killian O'Sullivan"
                />
                <TextCell
                  name="Killian O'Sullivan"
                  role="Director of Engineering"
                  description="An experienced Engineering professional delivering innovation from unmet need to product reality. His career has included positions such as start-up founder, consultant, CTO to systems architect in SMEs to Fortune 500."
                  facebook="#"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                <TextCell
                  name="David van Zuydam"
                  role="CEO"
                  description="Medical Devices, IOT Industry, CFO, Private Equity, Interim Management, Supply Chain & Logistics."
                  facebook="#"
                  className="order-last sm:order-first"
                />
                <ImageCell
                  image="/team/cxo-member-1.png"
                  alt="David van Zuydam"
                  className="order-first sm:order-last"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                <ImageCell
                  image="/team/cxo-member-2.png"
                  alt="Killian O'Sullivan"
                />
                <TextCell
                  name="Killian O'Sullivan"
                  role="Director of Engineering"
                  description="An experienced Engineering professional delivering innovation from unmet need to product reality. His career has included positions such as start-up founder, consultant, CTO to systems architect in SMEs to Fortune 500."
                  facebook="#"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              <ImageCell image="/team/team-member-1.png" alt="Team Member" />
              <ImageCell image="/team/team-member-2.png" alt="Team Member" />
              <ImageCell image="/team/team-member-3.png" alt="Team Member" />
              <ImageCell image="/team/team-member-4.png" alt="Team Member" />
              <ImageCell image="/team/team-member-5.png" alt="Team Member" />
              <ImageCell image="/team/team-member-6.png" alt="Team Member" />
              <ImageCell image="/team/team-member-7.png" alt="Team Member" />
              <ImageCell image="/team/team-member-8.png" alt="Team Member" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface TextCellProps {
  name: string;
  role: string;
  description?: string;
  facebook?: string;
  className?: string;
}

function TextCell({
  name,
  role,
  description,
  facebook,
  className,
}: TextCellProps) {
  return (
    <div className={clsx("aspect-square relative", className)}>
      <div className="h-full w-full py-8 px-6 flex flex-col justify-end gap-6">
        <div className="flex-grow flex flex-col justify-end">
          <h4 className="text-xl font-semibold mb-1">{name}</h4>
          <p className="mb-6">{role}</p>
          {description && <p>{description}</p>}
        </div>
        {facebook && (
          <Link
            href={facebook}
            className={clsx(
              "inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-600",
              "hover:border-white transition-colors"
            )}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}

interface ImageCellProps {
  image: string;
  alt: string;
  className?: string;
}

function ImageCell({ image, alt, className }: ImageCellProps) {
  return (
    <div className={clsx("aspect-square relative", className)}>
      <Image src={image} alt={alt} fill className="object-cover" />
    </div>
  );
}
