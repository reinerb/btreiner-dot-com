import LinkButton from "@/utils/components/LinkButton";
import RootLayout from "@/utils/layouts/RootLayout";
import {
  allMediaQuery,
  projectsQuery,
  toolQuery,
} from "@/utils/queries/wpQueryHandler";
import { Project } from "@/utils/types/WordPressQueries";
import { GetStaticProps } from "next";
import Link from "next/link";

type HomepageProps = {
  projects: Project[];
};

export const getStaticProps: GetStaticProps<HomepageProps> = async () => {
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
export default function Home({ projects }: HomepageProps) {
  return (
    <RootLayout
      title="Ben Reiner | Web Developer"
      metaDescription="Hi! I'm Ben Reiner, a freelance frontend developer. This is a collection of some cool projects I've made."
    >
      <section className="container flex flex-col items-center gap-2 bg-secondary-900 p-8">
        <h1 className="text-center text-4xl font-bold">Hi! I'm Ben Reiner.</h1>
        <p className="text-center text-lg">
          I'm a front-end developer building websites with WordPress and React.
        </p>
        <LinkButton href="/about">Learn About Me</LinkButton>
      </section>
    </RootLayout>
  );
}
