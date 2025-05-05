import { ReactNode } from "react";
import clsx from "clsx";

interface IconCardProps {
  children: ReactNode;
  className?: string;
}

interface IconCardHeaderProps {
  icon: ReactNode;
  title: string;
  className?: string;
}

interface IconCardContentProps {
  children: ReactNode;
  className?: string;
}

export function IconCard({ children, className }: IconCardProps) {
  return <div className={clsx("flex flex-col", className)}>{children}</div>;
}

export function IconCardHeader({
  icon,
  title,
  className,
}: IconCardHeaderProps) {
  return (
    <div className={clsx("flex items-center gap-4 mb-4", className)}>
      <div className="bg-[#6C7BC4] rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="font-bold text-lg">{title}</div>
    </div>
  );
}

export function IconCardContent({ children, className }: IconCardContentProps) {
  return <div className={clsx("text-gray-700", className)}>{children}</div>;
}
