import React from "react";
import clsx from "clsx";
import Image from "next/image";

interface LogosSectionProps {
  children: React.ReactNode;
  className?: string;
}

interface LogosSectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface LogosSectionGridProps {
  children: React.ReactNode;
  className?: string;
}

interface LogosSectionItemProps {
  src: string;
  alt: string;
  className?: string;
}

interface LogosSectionItemWithLabelProps extends LogosSectionItemProps {
  label: string;
}

export function LogosSection({ children, className }: LogosSectionProps) {
  return (
    <section className={clsx("py-24", className)}>
      <div className="max-w-content mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
          {children}
        </div>
      </div>
    </section>
  );
}

export function LogosSectionTitle({
  children,
  className,
}: LogosSectionTitleProps) {
  return <div className={className}>{children}</div>;
}

export function LogosSectionGrid({
  children,
  className,
}: LogosSectionGridProps) {
  return (
    <div className={clsx("lg:col-span-2", className)}>
      <div className="flex flex-wrap justify-center md:justify-start">
        {children}
      </div>
    </div>
  );
}

export function LogosSectionItem({
  src,
  alt,
  className,
}: LogosSectionItemProps) {
  return (
    <div
      className={clsx(
        "w-1/2 md:w-1/3 p-6",
        "flex items-center justify-center",
        className
      )}
    >
      <div className="relative w-full h-[80px]">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
    </div>
  );
}

export function LogosSectionItemWithLabel({
  src,
  alt,
  label,
  className,
}: LogosSectionItemWithLabelProps) {
  return (
    <div
      className={clsx(
        "w-1/2 md:w-1/3 p-6",
        "flex flex-col items-center md:items-start",
        className
      )}
    >
      <div className="relative w-full h-[60px] flex justify-center md:justify-start">
        <div className="relative h-full aspect-square">
          <Image src={src} alt={alt} fill className="object-contain" />
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-600 w-[100px] text-center md:text-left">
        {label}
      </div>
    </div>
  );
}
