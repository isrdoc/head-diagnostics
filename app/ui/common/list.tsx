import React from "react";
import clsx from "clsx";

interface ListProps {
  items: string[];
  className?: string;
}

export function List({ items, className }: ListProps) {
  return (
    <ul className={clsx("flex-1 space-y-1 pb-4", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="mr-2 text-sm">•</span>
          <span className="text-gray-600">{item}</span>
        </li>
      ))}
    </ul>
  );
}
