import React from "react";
import clsx from "clsx";

interface ImageSectionProps {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "right";
}

interface ImageSectionImageProps {
  src: string;
  alt: string;
  className?: string;
}

interface ImageSectionContentProps {
  children: React.ReactNode;
  className?: string;
}

export function ImageSection({
  children,
  className,
  align = "right",
}: ImageSectionProps) {
  return (
    <div
      className={clsx(
        "py-16 pb-28",
        align === "left" ? "ml-viewport-offset" : "mr-viewport-offset",
        className
      )}
    >
      <div className="w-full flex flex-col md:flex-row items-center gap-12 md:gap-20 lg:gap-36">
        {children}
      </div>
    </div>
  );
}

export function ImageSectionImage({
  src,
  alt,
  className,
}: ImageSectionImageProps) {
  return (
    <div className="flex-1 flex justify-end items-center w-full h-full">
      <img
        src={src}
        alt={alt}
        className={clsx(
          "shadow-lg object-cover w-full max-w-none h-[400px] md:h-[500px] lg:h-[500px] xl:h-[500px]",
          className
        )}
        style={{ maxWidth: "100%", objectPosition: "center" }}
      />
    </div>
  );
}

export function ImageSectionContent({
  children,
  className,
}: ImageSectionContentProps) {
  return (
    <div
      className={clsx(
        "border-t border-gray-400 min-w-0 w-full sm:w-[28rem] pt-4 px-6 sm:px-0",
        className
      )}
    >
      {children}
    </div>
  );
}
