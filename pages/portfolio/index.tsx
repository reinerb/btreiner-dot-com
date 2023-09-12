import React from "react";
import RootLayout from "@/utils/layouts/RootLayout";
import { GetStaticProps } from "next";
import {
  allMediaQuery,
  projectsQuery,
  toolQuery,
} from "@/utils/queries/wpQueryHandler";
import type { Media, Project } from "@/utils/types/WordPressQueries";
import ProjectCard from "@/utils/components/portfolio/ProjectCard";
import ProjectGrid from "@/utils/components/portfolio/ProjectGrid";

type PortfolioPageProps = {
  projects: Project[];
};

export const getStaticProps: GetStaticProps<PortfolioPageProps> = async () => {
  const projectsData = await projectsQuery({
    fields: ["tools", "excerpt", "featured_media"],
  });
  const allTools = await toolQuery();
  const allMedia = await allMediaQuery();

  const projects = projectsData.map(({ featured_media, tools, ...project }) => {
    const projectTools = allTools.filter((tool) => tools.includes(tool.id));
    const projectMedia = allMedia.filter(
      (media) => media.id === featured_media,
    )[0];

    return {
      ...project,
      tools: projectTools,
      featuredMedia: projectMedia,
    };
  });

  return { props: { projects } };
};

function PortfolioPage({ projects }: PortfolioPageProps) {
  return (
    <RootLayout title="Portfolio | Ben Reiner">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectGrid>
    </RootLayout>
  );
}

export default PortfolioPage;
