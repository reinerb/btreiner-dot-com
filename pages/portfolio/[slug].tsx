import React from "react";
import type { Media, Project, Tool } from "@/utils/types/WordPressQueries";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  projectsQuery,
  singleMediaQuery,
  toolQuery,
} from "@/utils/queries/wpQueryHandler";
import RootLayout from "@/utils/layouts/RootLayout";
import Image from "next/image";

type ProjectPageProps = {
  project: Project;
  tools: Tool[];
  featuredMedia?: Media;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params?.slug as string;

  const project = await projectsQuery({
    slug,
    fields: ["acf", "content", "tools", "featured_media"],
  }).then((res) => res[0]);

  const featuredMedia = await singleMediaQuery({ id: project.featured_media });

  const allTools: Tool[] = await toolQuery();

  const tools = allTools.filter((tool) => project.tools.includes(tool.id));

  return { props: { project, featuredMedia, tools } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postData = await projectsQuery();

  const paths = postData.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return { paths, fallback: false };
};

function ProjectPage({ project, tools, featuredMedia }: ProjectPageProps) {
  return (
    <RootLayout title={`${project.title} | Ben Reiner`}>
      <div className="grid grid-cols-3 gap-8">
        {featuredMedia && (
          <Image
            loader={() => featuredMedia.src}
            src={featuredMedia.src}
            alt={featuredMedia.alt}
            width={500}
            height={500}
          />
        )}
        <article className="col-span-2">
          <h1 className="text-2xl font-bold">{project.title}</h1>
        </article>
      </div>
    </RootLayout>
  );
}

export default ProjectPage;
