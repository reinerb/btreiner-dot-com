import React from "react";
import { Project } from "@/utils/types/WordPressQueries";
import Link from "next/link";
import Image from "next/image";

type PortfolioCardProps = {
  project: Project;
  className?: string;
};

function ProjectCard({ project, className }: PortfolioCardProps) {
  return (
    <Link href={`/portfolio/${project.slug}`} className="group relative">
      <Image
        loader={() => project.featuredMedia.src}
        src={project.featuredMedia.src}
        alt={project.featuredMedia.alt}
        width={0}
        height={0}
        unoptimized
        className="h-auto w-full"
      />
      <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h2>{project.title}</h2>
      </div>
    </Link>
  );
}

export default ProjectCard;
