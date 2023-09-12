import React from "react";
import { Project } from "@/utils/types/WordPressQueries";
import Link from "next/link";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import LinkButton from "../LinkButton";

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
          "bg-neutral-950 bg-opacity-80 text-neutral-50  bg-blend-overlay outline-1 outline-secondary-50 transition-opacity duration-300",
          "anyhover:group-hover:opacity-100 anyhover:opacity-0 anyhover:group-focus-within:opacity-100",
        )}
      >
        <h2 className="text-xl font-semibold">{project.title}</h2>
        {project.excerpt && (
          <div dangerouslySetInnerHTML={{ __html: project.excerpt }} />
        )}
        <p className="text-sm italic">
          {project.tools.map((tool) => tool.title).join(", ")}
        </p>
        <div
          aria-hidden
          className="border border-primary-300 px-2 py-1 text-sm text-primary-300 transition-colors duration-200 hover:border-primary-200 hover:text-primary-200 active:border-primary-100 active:text-primary-100"
        >
          Read More
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
