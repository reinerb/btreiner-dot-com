import React from "react";
import { Project } from "@/utils/types/WordPressQueries";
import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

type PortfolioCardProps = {
  project: Project;
  className?: string;
};

function ProjectCard({ project, className }: PortfolioCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className={twMerge("aspect-w-16 aspect-h-9 group relative", className)}
    >
      <Image
        loader={() => project.featuredMedia.src}
        src={project.featuredMedia.src}
        alt={project.featuredMedia.alt}
        width={0}
        height={0}
        unoptimized
        className="object-cover"
      />
      <div
        className={twMerge(
          "absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center",
          "bg-primary-900 bg-opacity-70 text-neutral-50 opacity-0 bg-blend-overlay transition-opacity duration-300 group-hover:opacity-100",
        )}
      >
        <h2 className="text-xl font-semibold">{project.title}</h2>
        {project.excerpt && (
          <div dangerouslySetInnerHTML={{ __html: project.excerpt }} />
        )}
        <p className="text-sm italic">
          {project.tools.map((tool) => tool.title).join(", ")}
        </p>
      </div>
    </Link>
  );
}

export default ProjectCard;
