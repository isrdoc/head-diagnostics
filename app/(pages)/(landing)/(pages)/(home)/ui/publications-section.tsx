"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

interface Publication {
  title: string;
  slug: string;
  readTime: string;
  date: string;
  categories: string[];
  author: {
    name: string;
    image: string;
  };
}

export function PublicationsSection() {
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-content px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm font-medium mb-2 text-gray-400 uppercase">
              OUR JOURNAL
            </p>
            <h2 className="text-5xl font-semibold">
              Whitepapers &<br />
              Publications
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 font-bold hover:opacity-80"
            >
              Show More <ArrowRightIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {publications.map((pub, index) => (
            <Link
              key={index}
              href={`/publications/${pub.slug}`}
              className="group flex flex-col justify-between aspect-[1/1] bg-gray-100 rounded-lg p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={pub.author.image}
                    alt={pub.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm">Posted by</div>
                  <div className="text-sm font-medium">{pub.author.name}</div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>{pub.date}</span>
                  <span>•</span>
                  <span>{pub.readTime}</span>
                </div>

                <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                  {pub.title}
                </h3>

                <div className="flex gap-2">
                  {pub.categories.map((category, idx) => (
                    <span
                      key={idx}
                      className="text-sm font-bold bg-gray-300 px-3 py-1 rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const publications: Publication[] = [
  {
    title: "The Start-Up Ultimate Guide to Make Your WordPress Journal.",
    slug: "wordpress-journal-guide",
    readTime: "9 min read",
    date: "June 24, 2024",
    categories: ["Case Study", "Perspectives"],
    author: {
      name: "Killian O'Sullivan",
      image: "/team/killian-osullivan.png",
    },
  },
  {
    title: "Outdoor Work: a Designer's Checklist for Every UX Project.",
    slug: "outdoor-work-ux-checklist",
    readTime: "9 min read",
    date: "June 24, 2024",
    categories: ["Case Study", "Perspectives"],
    author: {
      name: "Killian O'Sullivan",
      image: "/team/killian-osullivan.png",
    },
  },
  {
    title: "The High-Quality Architecture Solutions from a Silicon Valley.",
    slug: "silicon-valley-architecture",
    readTime: "9 min read",
    date: "June 24, 2024",
    categories: ["Case Study", "Perspectives"],
    author: {
      name: "Killian O'Sullivan",
      image: "/team/killian-osullivan.png",
    },
  },
];
