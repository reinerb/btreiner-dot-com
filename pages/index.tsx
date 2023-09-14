import LinkButton from "@/utils/components/LinkButton";
import Logo from "@/utils/components/Logo";
import RootLayout from "@/utils/layouts/RootLayout";
import {
  allMediaQuery,
  projectsQuery,
  toolQuery,
} from "@/utils/queries/wpQueryHandler";
import { Project } from "@/utils/types/WordPressQueries";
import { GetStaticProps } from "next";

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
      className="flex flex-col gap-4"
      noContainer
      metaDescription="Hi! I'm Ben Reiner, a freelance frontend developer. This is a collection of some cool projects I've made."
    >
      <p>Hi! I'm</p>
      <h1 className="text-9xl font-bold text-primary-800 dark:text-primary-300">
        Ben{" "}
        <Logo className="inline w-36 fill-primary-800 dark:fill-primary-300" />
        einer
      </h1>
      <ul className="flex gap-4 divide-x-2 divide-neutral-700 text-lg text-neutral-800 dark:divide-neutral-300 dark:text-neutral-200">
        <li>Frontend</li>
        <li className="pl-4">WordPress</li>
        <li className="pl-4">React</li>
      </ul>
      <p>Let's build something incredible together.</p>
      <LinkButton href="/contact" className="max-w-fit">
        Contact Me
      </LinkButton>
    </RootLayout>
  );
}
