import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import {
  projectsQuery,
  singleMediaQuery,
  toolQuery,
} from "@/utils/queries/wpQueryHandler";
import RootLayout from "@/utils/layouts/RootLayout";
import Image from "next/image";
import LinkButton from "@/utils/components/LinkButton";
import type { Project, Tool } from "@/utils/types/WordPressQueries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

type ProjectPageProps = Project;

export const getStaticProps: GetStaticProps<ProjectPageProps> = async (
  context,
) => {
  const slug = context.params?.slug as string;

  const projectData = await projectsQuery({
    slug,
    fields: ["acf", "content", "tools", "featured_media"],
  }).then((res) => res[0]);

  const featuredMedia = await singleMediaQuery({
    id: projectData.featured_media,
  });

  const allTools: Tool[] = await toolQuery();

  const tools = allTools.filter((tool) => projectData.tools.includes(tool.id));

  const project: Project = {
    ...projectData,
    tools,
    featuredMedia,
  };

  return { props: { ...project } };
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

function ProjectPage({
  title,
  featuredMedia,
  content,
  tools,
  acf,
}: ProjectPageProps) {
  return (
    <RootLayout title={`${title} | Ben Reiner`}>
      <div className="grid gap-8 xl:grid-cols-2">
        <div className="order-2 xl:order-1">
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
          <LinkButton href="/portfolio" className="mt-4 w-fit">
            <FontAwesomeIcon icon={faLeftLong} /> Return to Portfolio
          </LinkButton>
        </div>
        <article className="order-1 flex flex-col gap-4 xl:order-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          {content && (
            <section
              className="flex flex-col gap-1"
              dangerouslySetInnerHTML={{ __html: content }}
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
          {acf && (
            <section className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LinkButton
                href={acf.liveUrl}
                rel="noopener noreferrer"
                target="_blank"
                primary
              >
                View the Live Site
              </LinkButton>
              {acf.githubUrl && (
                <LinkButton
                  href={acf.githubUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  primary
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
