import React from "react";
import { twMerge } from "tailwind-merge";

type TextScrollerProps = {
  elements: string[];
  reverse?: boolean;
  fast?: boolean;
  className?: string;
};

function TextScroller({
  elements,
  reverse,
  fast,
  className,
}: TextScrollerProps) {
  return (
    <ul className={twMerge("flex gap-1", className)}>
      {elements.map((element) => (
        <li>{element}</li>
      ))}
    </ul>
  );
}

export default TextScroller;
