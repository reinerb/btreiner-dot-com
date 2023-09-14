import React from "react";
import { twMerge } from "tailwind-merge";

interface ProjectGridProps {
  children: React.ReactNode;
  className?: string;
}

function ProjectGrid({ children, className }: ProjectGridProps) {
  return (
    <section
      className={twMerge(
        "grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3",
        className,
      )}
    >
      {children}
    </section>
  );
}

export default ProjectGrid;
