import React from "react";
import { twMerge } from "tailwind-merge";

type ScrollingTextProps = {
  elements: string[];
  reverse?: boolean;
  fast?: boolean;
  className?: string;
};

function ScrollingText({
  elements,
  reverse,
  fast,
  className,
}: ScrollingTextProps) {
  const listItemStyles = "bg-slate-300 px-4 py-2 dark:bg-slate-700";

  return (
    <div
      className="scrolling-text max-w-xs motion-safe:overflow-x-hidden lg:max-w-xl 2xl:max-w-2xl"
      data-direction={reverse ? "right" : "left"}
      data-speed={fast ? "fast" : "slow"}
    >
      <ul
        className={twMerge(
          "mx-8 flex gap-2 motion-safe:w-max motion-reduce:flex-wrap motion-reduce:justify-center",
          className,
        )}
      >
        {elements.map((element) => (
          <li key={element} className={listItemStyles}>
            {element}
          </li>
        ))}
        {elements.map((element) => (
          <li
            key={`${element} second`}
            className={twMerge(listItemStyles, "motion-reduce:hidden")}
            aria-hidden
          >
            {element}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScrollingText;
