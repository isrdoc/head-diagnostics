"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface NewsItem {
  title: string;
  slug: string;
  image: string;
  categories: string[];
  imageSize?: "wide";
}

export function NewsSection() {
  return (
    <section className="w-full py-24 bg-gray-100">
      <div className="mx-auto max-w-content px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-sm font-medium mb-2">
              KEEP UPDATED ON THE LATEST
            </p>
            <h2 className="text-5xl font-semibold">News</h2>
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 font-bold hover:opacity-80"
          >
            Show More <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {newsItems.map((item, index) => (
            <Link
              key={index}
              href={`/news/${item.slug}`}
              className={`group block ${
                item.imageSize === "wide" ? "lg:col-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  item.imageSize === "wide"
                    ? "aspect-[4/5] lg:aspect-[8.2/5]"
                    : "aspect-[4/5]"
                } overflow-hidden rounded-lg mb-4`}
              >
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm font-bold text-muted-foreground">
                {item.categories.join(", ")}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const newsItems: NewsItem[] = [
  {
    title: "Norwegian Fram Museum",
    slug: "norwegian-fram-museum",
    image: "/news/norwegian-fram-museum.png",
    categories: ["Case Study", "Perspectives"],
  },
  {
    title: "Rådhuset Hotel",
    slug: "radhuset-hotel",
    image: "/news/radhuset-hotel.png",
    categories: ["Case Study", "Perspectives"],
  },
  {
    title: "Frankfurt Office Building",
    slug: "frankfurt-office",
    image: "/news/frankfurt-office.png",
    categories: ["Case Study", "Perspectives"],
  },
  {
    title: "Chicago Office Center",
    slug: "chicago-office-center",
    image: "/news/chicago-office-center.png",
    categories: ["Case Study", "Perspectives"],
    imageSize: "wide",
  },
  {
    title: "Barcelona Museum",
    slug: "barcelona-museum",
    image: "/news/barcelona-museum.png",
    categories: ["Case Study", "Perspectives"],
  },
];
