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
import LinkButton from "@/utils/components/LinkButton";

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
      <div className="grid gap-8 xl:grid-cols-2">
        <div className="relative">
          {featuredMedia && (
            <Image
              loader={() => featuredMedia.src}
              src={featuredMedia.src}
              alt={featuredMedia.alt}
              width={0}
              height={0}
              unoptimized
              className="h-auto w-full"
            />
          )}
        </div>
        <article className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{project.title}</h1>
          {project.content && (
            <section
              className="flex flex-col gap-1"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          )}
          <section>
            <h2 className="text-xl font-semibold">Tools used</h2>
            <ul className="ml-1 list-inside list-disc">
              {tools.map((tool) => (
                <li key={tool.id}>{tool.title}</li>
              ))}
            </ul>
          </section>
          {project.acf && (
            <section className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LinkButton
                href={project.acf.liveUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                View the Live Site
              </LinkButton>
              {project.acf.githubUrl && (
                <LinkButton
                  href={project.acf.githubUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  View Source Code on GitHub
                </LinkButton>
              )}
            </section>
          )}
        </article>
      </div>
    </RootLayout>
  );
}

export default ProjectPage;
