import React from "react";
import RootLayout from "@/utils/layouts/RootLayout";
import { GetStaticProps } from "next";
import {
  allMediaQuery,
  projectsQuery,
  toolQuery,
} from "@/utils/queries/wpQueryHandler";
import type { Media, Project } from "@/utils/types/WordPressQueries";

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
      {projects.map((project) => (
        <div key={project.id}>{project.title}</div>
      ))}
    </RootLayout>
  );
}

export default PortfolioPage;
